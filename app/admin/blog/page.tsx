"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ShieldCheck,
  LogOut,
  PlusCircle,
  FileText,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  Trash2,
  Eye,
  Search,
  Tag,
  Calendar,
  Clock,
  User,
  Sparkles,
  ExternalLink,
  Layers,
  Pencil,
  AlertCircle,
  DatabaseZap,
} from "lucide-react";

import { ManagedBlog, MANAGED_BLOGS_KEY } from "@/lib/adminBlogs";
import { BlogContent, blogContentToHtml } from "@/lib/blogContent";
import {
  adminAuth,
  adminBlogsApi,
  BlogApiError,
  BlogInput,
  compressImage,
  dataUrlToBlob,
  isBlogApiEnabled,
} from "@/lib/blogApi";
import RichTextEditor from "@/components/admin/RichTextEditor";

const todayLabel = () => new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });

// Blogs saved in this browser by the old localStorage CMS (offered for one-time import)
function readLegacyBlogs(): ManagedBlog[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(MANAGED_BLOGS_KEY) || "null");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function BlogManagementPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"create" | "list">("create");
  const [blogs, setBlogs] = useState<ManagedBlog[]>([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [successToast, setSuccessToast] = useState("");
  const [errorToast, setErrorToast] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [legacyCount, setLegacyCount] = useState(0);
  const [importing, setImporting] = useState(false);

  // Blog Form State
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("SEO");
  const [author, setAuthor] = useState("Promonex Editorial Team");
  const [authorRole, setAuthorRole] = useState("Content & Growth Specialist");
  const [date, setDate] = useState(todayLabel);
  const [readTime, setReadTime] = useState("5 min read");
  const [imagePreview, setImagePreview] = useState<string>("");
  const [imageAlt, setImageAlt] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [contentViewMode, setContentViewMode] = useState<"write" | "preview">("write");
  const [editingId, setEditingId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const showSuccess = (msg: string) => {
    setErrorToast("");
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(""), 5000);
  };
  const showError = (err: unknown, fallback: string) => {
    if (err instanceof BlogApiError && err.status === 401) {
      router.replace("/admin/login"); // session expired
      return;
    }
    setSuccessToast("");
    setErrorToast(err instanceof Error ? err.message : fallback);
  };

  const refreshBlogs = async () => {
    try {
      setBlogs(await adminBlogsApi.list());
    } catch (err) {
      showError(err, "Failed to load blogs.");
    } finally {
      setBlogsLoading(false);
    }
  };

  // Authentication Guard: valid server session (HttpOnly cookie) required
  useEffect(() => {
    if (!isBlogApiEnabled) {
      router.replace("/admin/login");
      return;
    }
    (async () => {
      try {
        await adminAuth.me();
      } catch {
        router.replace("/admin/login");
        return;
      }
      setIsAuthenticated(true);
      setLegacyCount(readLegacyBlogs().length);

      // Deep links from the admin preview page: ?tab=list or ?edit=<id>
      const params = new URLSearchParams(window.location.search);
      const editId = params.get("edit");
      if (editId) {
        handleEditBlog({ id: editId } as ManagedBlog);
      } else if (params.get("tab") === "list") {
        setActiveTab("list");
      }
      if (params.toString()) {
        window.history.replaceState(null, "", "/admin/blog");
      }
      await refreshBlogs();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  // Auto-generate slug and meta title from blog title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    // Keep the URL of an existing blog stable (changing it would break shared links)
    if (!editingId) {
      const autoSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(autoSlug);
    }
    if (!metaTitle || metaTitle.startsWith(title)) {
      setMetaTitle(val ? `${val} | Promonex Media` : "");
    }
  };

  // Compress in the browser, upload to the server, keep only the returned URL
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const blob = await compressImage(file);
      const ext = blob.type === "image/webp" ? "webp" : blob.type === "image/gif" ? "gif" : blob.type === "image/png" ? "png" : "jpg";
      const url = await adminBlogsApi.uploadImage(blob, `upload.${ext}`);
      setImagePreview(url);
      if (!imageAlt) {
        setImageAlt(file.name.replace(/\.[^/.]+$/, ""));
      }
    } catch (err) {
      showError(err, "Image upload failed.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleLogout = async () => {
    await adminAuth.logout().catch(() => undefined);
    router.replace("/admin/login");
  };

  const buildInput = (statusType: "Published" | "Draft"): BlogInput => ({
    title: title.trim(),
    slug: slug.trim(),
    category,
    author: author.trim(),
    authorRole: authorRole.trim(),
    date,
    readTime,
    image: imagePreview,
    imageAlt: imageAlt.trim(),
    excerpt: excerpt.trim(),
    content,
    metaTitle: metaTitle.trim(),
    metaDescription: metaDescription.trim(),
    keywords: keywords.trim(),
    status: statusType,
  });

  const handlePublish = async (statusType: "Published" | "Draft") => {
    if (!title.trim()) {
      alert("Please provide a Blog Title.");
      return;
    }
    if (!excerpt.trim()) {
      alert("Please provide a short excerpt/description for the blog card.");
      return;
    }
    if (uploading) {
      alert("Please wait for the image upload to finish.");
      return;
    }

    setSaving(true);
    try {
      const input = buildInput(statusType);
      const saved = editingId ? await adminBlogsApi.update(editingId, input) : await adminBlogsApi.create(input);
      showSuccess(
        editingId
          ? `Blog "${saved.title}" successfully updated!`
          : `Blog "${saved.title}" successfully ${statusType.toLowerCase()}!`
      );
      // Switch to list tab to see the new blog
      setActiveTab("list");
      resetForm();
      await refreshBlogs();
    } catch (err) {
      showError(err, "Failed to save the blog.");
    } finally {
      setSaving(false);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setSlug("");
    setCategory("SEO");
    setAuthor("Promonex Editorial Team");
    setAuthorRole("Content & Growth Specialist");
    setDate(todayLabel());
    setReadTime("5 min read");
    setExcerpt("");
    setContent("");
    setMetaTitle("");
    setMetaDescription("");
    setKeywords("");
    setImagePreview("");
    setImageAlt("");
    setContentViewMode("write");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Load an existing blog (full article body) into the form for editing
  const handleEditBlog = async (summary: ManagedBlog) => {
    try {
      const b = await adminBlogsApi.get(summary.id);
      setEditingId(b.id);
      setTitle(b.title);
      setSlug(b.slug);
      setCategory(b.category);
      setAuthor(b.author);
      setAuthorRole(b.authorRole);
      setDate(b.date || todayLabel());
      setReadTime(b.readTime);
      setImagePreview(b.image);
      setImageAlt(b.imageAlt);
      setExcerpt(b.excerpt);
      setContent(blogContentToHtml(b.content));
      setMetaTitle(b.metaTitle);
      setMetaDescription(b.metaDescription);
      setKeywords(b.keywords);
      setContentViewMode("write");
      setActiveTab("create");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      showError(err, "Could not load this blog.");
    }
  };

  const startNewPost = () => {
    resetForm();
    setActiveTab("create");
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post? This cannot be undone.")) return;
    try {
      await adminBlogsApi.remove(id);
      if (editingId === id) resetForm();
      setBlogs((prev) => prev.filter((b) => b.id !== id));
      showSuccess("Blog deleted.");
    } catch (err) {
      showError(err, "Failed to delete the blog.");
    }
  };

  // Quick publish / unpublish from the list
  const handleToggleStatus = async (b: ManagedBlog) => {
    try {
      const updated = await adminBlogsApi.setStatus(b.id, b.status === "Published" ? "draft" : "published");
      setBlogs((prev) => prev.map((x) => (x.id === b.id ? { ...x, status: updated.status, date: updated.date } : x)));
      showSuccess(`"${b.title}" is now ${updated.status === "Published" ? "published" : "a draft"}.`);
    } catch (err) {
      showError(err, "Failed to change the status.");
    }
  };

  // One-time import of blogs created with the old localStorage CMS in this browser
  const handleImportLegacy = async () => {
    setImporting(true);
    let imported = 0;
    const failed: string[] = [];
    for (const legacy of readLegacyBlogs()) {
      try {
        let image = legacy.image || "";
        if (image.startsWith("data:")) {
          image = await adminBlogsApi.uploadImage(await dataUrlToBlob(image), "imported.jpg");
        }
        await adminBlogsApi.create({
          title: legacy.title,
          slug: legacy.slug,
          category: legacy.category,
          author: legacy.author,
          authorRole: legacy.authorRole,
          date: legacy.date,
          readTime: legacy.readTime,
          image,
          imageAlt: legacy.imageAlt,
          excerpt: legacy.excerpt,
          content: blogContentToHtml(legacy.content || ""),
          metaTitle: legacy.metaTitle,
          metaDescription: legacy.metaDescription,
          keywords: legacy.keywords,
          status: legacy.status === "Draft" ? "Draft" : "Published",
        });
        imported++;
      } catch (err) {
        failed.push(`${legacy.title || "Untitled"} (${err instanceof Error ? err.message : "error"})`);
      }
    }
    setImporting(false);
    if (failed.length === 0) {
      localStorage.removeItem(MANAGED_BLOGS_KEY);
      setLegacyCount(0);
      showSuccess(`Imported ${imported} blog(s) into the database.`);
    } else {
      setErrorToast(`Imported ${imported}, could not import: ${failed.join("; ")}`);
    }
    await refreshBlogs();
  };

  const dismissLegacy = () => {
    if (!confirm("Discard the old blogs saved only in this browser? They will not be imported.")) return;
    localStorage.removeItem(MANAGED_BLOGS_KEY);
    setLegacyCount(0);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#020B35] flex items-center justify-center text-white font-medium">
        Verifying Admin Access...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      {/* ── Top Header Navigation ─────────────────────────────────────── */}
      <header className="sticky top-0 z-30 w-full bg-[#020B35] text-white border-b border-cyan-400/20 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 group px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors text-xs sm:text-sm font-semibold text-slate-200"
            title="Return to Home Page"
          >
            <ArrowLeft size={16} className="text-[#00D9FF] group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>

          <span className="h-5 w-px bg-slate-700 hidden sm:block" />

          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#3B82F6] flex items-center justify-center shadow-[0_0_12px_rgba(0,217,255,0.4)]">
              <ShieldCheck size={18} className="text-[#020B35] stroke-[2.5]" />
            </div>
            <div>
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                Promonex Media
              </h1>
              <span className="text-[10px] text-[#00D9FF] font-semibold tracking-wider uppercase block">
                Blog Management CMS
              </span>
            </div>
          </div>
        </div>

        {/* Right Admin Controls */}
        <div className="flex items-center gap-3">
          <Link
            href="/#blog"
            target="_blank"
            className="hidden md:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors"
          >
            <span>View Live Blog</span>
            <ExternalLink size={13} className="text-[#00D9FF]" />
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-500/15 border border-red-500/40 text-red-200 hover:bg-red-500 hover:text-white text-xs font-semibold transition-all duration-200 cursor-pointer"
          >
            <LogOut size={14} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* ── Main CMS Container ────────────────────────────────────────── */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Success Toast */}
        <AnimatePresence>
          {successToast && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mb-6 flex items-center justify-between rounded-xl bg-emerald-50 border border-emerald-300 p-4 text-sm font-semibold text-emerald-800 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <span>{successToast}</span>
              </div>
              <button
                type="button"
                onClick={() => setSuccessToast("")}
                className="text-xs text-emerald-700 underline font-normal"
              >
                Dismiss
              </button>
            </motion.div>
          )}
          {errorToast && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              role="alert"
              className="mb-6 flex items-center justify-between gap-3 rounded-xl bg-red-50 border border-red-300 p-4 text-sm font-semibold text-red-800 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <AlertCircle size={18} className="text-red-600 shrink-0" />
                <span>{errorToast}</span>
              </div>
              <button
                type="button"
                onClick={() => setErrorToast("")}
                className="text-xs text-red-700 underline font-normal"
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blogs saved only in this browser by the old CMS → offer a one-time import */}
        {legacyCount > 0 && (
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-cyan-300 bg-cyan-50 p-4 text-sm text-slate-800">
            <div className="flex items-start gap-2.5">
              <DatabaseZap size={18} className="text-[#0284C7] shrink-0 mt-0.5" />
              <span>
                <strong>{legacyCount} blog(s)</strong> were found saved only in this browser (old CMS). Import them
                into the database so they appear on the live website.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleImportLegacy}
                disabled={importing}
                className="px-3.5 py-2 rounded-lg bg-[#020B35] text-white text-xs font-bold hover:bg-[#061543] disabled:opacity-60 cursor-pointer"
              >
                {importing ? "Importing..." : "Import to Database"}
              </button>
              <button
                type="button"
                onClick={dismissLegacy}
                className="px-2 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Discard
              </button>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab("create")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "create"
                ? "bg-[#020B35] text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-200/60"
            }`}
          >
            {editingId ? (
              <Pencil size={16} className={activeTab === "create" ? "text-[#00D9FF]" : ""} />
            ) : (
              <PlusCircle size={16} className={activeTab === "create" ? "text-[#00D9FF]" : ""} />
            )}
            <span>{editingId ? "Edit Blog Post" : "Create New Blog Post"}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("list")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeTab === "list"
                ? "bg-[#020B35] text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-200/60"
            }`}
          >
            <Layers size={16} className={activeTab === "list" ? "text-[#00D9FF]" : ""} />
            <span>Manage All Blogs ({blogs.length})</span>
          </button>
        </div>

        {/* ── TAB 1: CREATE NEW BLOG FORM ─────────────────────────────── */}
        {activeTab === "create" && editingId && (
          <div className="mb-6 flex items-center justify-between rounded-xl bg-amber-50 border border-amber-300 p-4 text-sm font-semibold text-amber-800">
            <div className="flex items-center gap-2.5">
              <Pencil size={16} className="text-amber-600" />
              <span>Editing: &ldquo;{blogs.find((b) => b.id === editingId)?.title || title}&rdquo;</span>
            </div>
            <button
              type="button"
              onClick={() => {
                resetForm();
                setActiveTab("list");
              }}
              className="text-xs text-amber-700 underline font-normal cursor-pointer"
            >
              Cancel Edit
            </button>
          </div>
        )}

        {activeTab === "create" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Columns: Main Content Fields */}
            <div className="lg:col-span-2 space-y-6">
              {/* Blog Title & Slug */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <FileText size={18} className="text-[#0284C7]" />
                  <span>Blog Details</span>
                </h2>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Blog Post Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. 7 High-Converting Digital Marketing Frameworks in 2026"
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#00D9FF] focus:ring-2 focus:ring-cyan-100 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    URL Slug
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-300 overflow-hidden bg-slate-50 text-xs text-slate-500 px-3 py-2">
                    <span>https://promonexmedia.com/blog/</span>
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="post-slug"
                      className="flex-1 bg-transparent border-none text-slate-800 font-medium outline-none ml-1"
                    />
                  </div>
                </div>

                {/* Excerpt / Short Description */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Excerpt / Card Description *
                    </label>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {excerpt.length} / 180 chars recommended
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Brief 2-3 line summary displayed on homepage cards and search snippets..."
                    className="w-full rounded-xl border border-slate-300 p-3 text-sm text-slate-900 focus:border-[#00D9FF] focus:ring-2 focus:ring-cyan-100 outline-none transition"
                    required
                  />
                </div>
              </div>

              {/* Full Blog Article Editor with Rich Toolbar */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles size={18} className="text-[#0284C7]" />
                    <span>Full Article Body</span>
                  </h2>

                  {/* Write vs Preview Toggle */}
                  <div className="flex items-center rounded-lg bg-slate-100 p-1 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setContentViewMode("write")}
                      className={`px-3 py-1 rounded-md transition ${
                        contentViewMode === "write" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
                      }`}
                    >
                      Write
                    </button>
                    <button
                      type="button"
                      onClick={() => setContentViewMode("preview")}
                      className={`px-3 py-1 rounded-md transition ${
                        contentViewMode === "preview" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
                      }`}
                    >
                      Live Preview
                    </button>
                  </div>
                </div>

                {/* Rich Text Editor */}
                {contentViewMode === "write" && (
                  <RichTextEditor
                    value={content}
                    onChange={setContent}
                    placeholder="Write your in-depth blog post here... Use the toolbar for bold, italic, headings, lists, quotes and links. You can also paste formatted content from Google Docs or Word."
                  />
                )}

                {/* Live Preview Mode */}
                {contentViewMode === "preview" && (
                  <div className="min-h-[280px] p-5 rounded-xl border border-slate-200 bg-slate-50/50 prose prose-slate max-w-none">
                    {content ? (
                      <BlogContent content={content} />
                    ) : (
                      <p className="text-sm text-slate-400 italic">No content written yet. Switch to Write mode to type.</p>
                    )}
                  </div>
                )}
              </div>

              {/* ── SEO & Metadata Settings ────────────────────────────── */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Search size={18} className="text-[#0284C7]" />
                  <span>SEO & Metadata Settings</span>
                </h2>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Meta Title
                    </label>
                    <span className="text-[11px] text-slate-400">
                      {metaTitle.length} / 60 chars
                    </span>
                  </div>
                  <input
                    type="text"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    placeholder="e.g. 7 SEO Strategies to Rank Higher | Promonex Media"
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#00D9FF] focus:ring-2 focus:ring-cyan-100 outline-none"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Meta Description
                    </label>
                    <span className="text-[11px] text-slate-400">
                      {metaDescription.length} / 160 chars
                    </span>
                  </div>
                  <textarea
                    rows={2}
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    placeholder="Search engine summary snippet..."
                    className="w-full rounded-xl border border-slate-300 p-3 text-sm text-slate-900 focus:border-[#00D9FF] focus:ring-2 focus:ring-cyan-100 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Focus Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="digital marketing, seo, performance, roi"
                    className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm text-slate-900 focus:border-[#00D9FF] focus:ring-2 focus:ring-cyan-100 outline-none"
                  />
                </div>

                {/* Google Search Live Preview Box */}
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Google Search Snippet Preview
                  </span>
                  <div className="text-xs text-emerald-800 font-mono">
                    https://promonexmedia.com › blog › {slug || "your-slug"}
                  </div>
                  <div className="text-base text-blue-700 font-semibold hover:underline mt-0.5 line-clamp-1">
                    {metaTitle || title || "Your Blog Post Title"}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {metaDescription || excerpt || "Add a meta description to see how it appears in Google search results."}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Taxonomy, Image Upload & Publishing */}
            <div className="space-y-6">
              {/* Publishing Actions Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                  Publish Actions
                </h3>

                <button
                  type="button"
                  onClick={() => handlePublish("Published")}
                  disabled={saving || uploading}
                  className="w-full py-3 rounded-xl bg-[#020B35] hover:bg-[#061543] text-white text-sm font-bold shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                >
                  <CheckCircle2 size={16} className="text-[#00D9FF]" />
                  <span>{saving ? "Saving..." : editingId ? "Save & Publish Changes" : "Publish Blog Post"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handlePublish("Draft")}
                  disabled={saving || uploading}
                  className="w-full py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-sm font-semibold transition cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                >
                  {editingId ? "Save Changes as Draft" : "Save as Draft"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      setActiveTab("list");
                    }}
                    className="w-full py-2 rounded-xl text-slate-500 hover:text-slate-800 text-xs font-semibold transition cursor-pointer"
                  >
                    Cancel Editing
                  </button>
                )}
              </div>

              {/* Featured Image Upload Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
                  <ImageIcon size={16} className="text-[#0284C7]" />
                  <span>Featured Image</span>
                </h3>

                {/* Image Preview Box */}
                <div className="relative aspect-[16/9.5] w-full rounded-xl overflow-hidden bg-slate-50 border-2 border-dashed border-slate-300 flex items-center justify-center group hover:border-[#00D9FF] transition-colors">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt={imageAlt || "Preview"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="text-center p-5 text-slate-400 flex flex-col items-center justify-center cursor-pointer select-none"
                    >
                      <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center mb-2 text-slate-500 group-hover:bg-cyan-50 group-hover:text-[#00D9FF] transition-colors">
                        <Upload size={18} />
                      </div>
                      <span className="text-xs font-semibold text-slate-600">No image uploaded</span>
                      <span className="text-[11px] text-slate-400 mt-0.5">Click "Upload Image" to add a photo</span>
                    </div>
                  )}
                </div>

                {/* Upload Button */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                  >
                    <Upload size={14} />
                    <span>{uploading ? "Uploading..." : "Upload Image"}</span>
                  </button>
                  {imagePreview && (
                    <button
                      type="button"
                      onClick={() => setImagePreview("")}
                      className="p-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs transition cursor-pointer"
                      title="Remove image"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Image Alt Text (SEO)
                  </label>
                  <input
                    type="text"
                    value={imageAlt}
                    onChange={(e) => setImageAlt(e.target.value)}
                    placeholder="Descriptive text for Google images"
                    className="w-full rounded-xl border border-slate-300 px-3 py-1.5 text-xs text-slate-900 outline-none"
                  />
                </div>
              </div>

              {/* Taxonomy & Metadata Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                  Taxonomy & Metadata
                </h3>

                {/* Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs font-medium text-slate-800 outline-none bg-white"
                  >
                    <option value="SEO">SEO</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="Performance">Performance Marketing</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Branding">Brand Growth</option>
                  </select>
                </div>

                {/* Author Info */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Promonex Author"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs text-slate-900 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Author Role
                  </label>
                  <input
                    type="text"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    placeholder="Senior Strategist"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs text-slate-900 outline-none"
                  />
                </div>

                {/* Publication Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Publication Date
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="e.g. Oct 08, 2026"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs text-slate-900 outline-none"
                  />
                </div>

                {/* Read Time */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="e.g. 5 min read"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs text-slate-900 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: MANAGE ALL EXISTING BLOGS ─────────────────────────── */}
        {activeTab === "list" && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Published & Draft Articles
                </h2>
                <p className="text-xs text-slate-500">
                  Manage live blog posts displayed in the website blog carousel.
                </p>
              </div>

              <button
                type="button"
                onClick={startNewPost}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#020B35] text-white text-xs font-bold shadow hover:bg-[#061543] transition cursor-pointer"
              >
                <PlusCircle size={15} className="text-[#00D9FF]" />
                <span>Create New Post</span>
              </button>
            </div>

            {/* Blogs Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[11px]">
                    <th className="py-3 px-3">Post</th>
                    <th className="py-3 px-3">Category</th>
                    <th className="py-3 px-3">Author</th>
                    <th className="py-3 px-3">Date</th>
                    <th className="py-3 px-3">Status</th>
                    <th className="py-3 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {blogs.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-sm text-slate-400">
                        {blogsLoading
                          ? "Loading blogs from the database..."
                          : "No blogs yet. Click “Create New Post” to write your first article."}
                      </td>
                    </tr>
                  )}
                  {blogs.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={b.image || "/assets/blog/blog_seo_strategy.jpg"}
                            alt={b.title}
                            className="h-10 w-14 rounded-lg object-cover bg-slate-200 shrink-0"
                          />
                          <div>
                            <div className="font-bold text-slate-900 text-sm line-clamp-1">
                              {b.title}
                            </div>
                            <div className="text-[11px] text-slate-400 line-clamp-1">
                              /{b.slug}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          {b.category}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-medium text-slate-600">
                        {b.author}
                      </td>
                      <td className="py-3 px-3 text-slate-500 whitespace-nowrap">
                        {b.date}
                      </td>
                      <td className="py-3 px-3">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(b)}
                          title={b.status === "Published" ? "Click to unpublish (move to drafts)" : "Click to publish"}
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-bold cursor-pointer transition hover:opacity-80 ${
                            b.status === "Published"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {b.status}
                        </button>
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleEditBlog(b)}
                            className="p-1.5 rounded-lg hover:bg-blue-50 text-[#0284C7] transition cursor-pointer"
                            title="Edit article"
                          >
                            <Pencil size={15} />
                          </button>
                          <Link
                            href={`/admin/blog/preview/${encodeURIComponent(b.id)}`}
                            className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition"
                            title="Preview article"
                          >
                            <Eye size={15} />
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDeleteBlog(b.id)}
                            className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition cursor-pointer"
                            title="Delete article"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
