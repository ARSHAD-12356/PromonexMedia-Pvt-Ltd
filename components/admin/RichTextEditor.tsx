"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link2,
  Unlink,
  RemoveFormatting,
  Undo2,
  Redo2,
} from "lucide-react";
import { markdownToHtml, normalizeUrl, sanitizeBlogHtml } from "@/lib/blogContent";

interface RichTextEditorProps {
  value: string; // HTML
  onChange: (html: string) => void;
  placeholder?: string;
}

interface ActiveState {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  ul: boolean;
  ol: boolean;
  block: string;
  link: HTMLAnchorElement | null;
}

const INITIAL_ACTIVE: ActiveState = { bold: false, italic: false, underline: false, ul: false, ol: false, block: "", link: null };

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const lastEmitted = useRef<string | null>(null);
  const savedRange = useRef<Range | null>(null);
  const linkInputRef = useRef<HTMLInputElement>(null);

  const [active, setActive] = useState<ActiveState>(INITIAL_ACTIVE);
  const [isEmpty, setIsEmpty] = useState(true);
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkError, setLinkError] = useState("");

  const checkEmpty = () => {
    const el = editorRef.current;
    if (!el) return;
    setIsEmpty(!el.textContent?.trim() && !el.querySelector("li, a"));
  };

  // Sync external value (load blog for edit / reset form) into the editor
  useEffect(() => {
    const el = editorRef.current;
    if (!el || value === lastEmitted.current) return;
    el.innerHTML = value;
    lastEmitted.current = value;
    checkEmpty();
  }, [value]);

  const emitChange = useCallback(() => {
    const el = editorRef.current;
    if (!el) return;
    const clean = el.textContent?.trim() || el.querySelector("li, a") ? sanitizeBlogHtml(el.innerHTML) : "";
    lastEmitted.current = clean;
    onChange(clean);
    checkEmpty();
  }, [onChange]);

  const selectionInEditor = () => {
    const sel = window.getSelection();
    const el = editorRef.current;
    return !!(sel && sel.rangeCount && el && el.contains(sel.getRangeAt(0).commonAncestorContainer));
  };

  const refreshActive = useCallback(() => {
    if (!selectionInEditor()) return;
    const sel = window.getSelection()!;
    let node: Node | null = sel.anchorNode;
    if (node && node.nodeType === Node.TEXT_NODE) node = node.parentNode;
    const link = (node as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null;
    setActive({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      ul: document.queryCommandState("insertUnorderedList"),
      ol: document.queryCommandState("insertOrderedList"),
      block: String(document.queryCommandValue("formatBlock") || "").toLowerCase(),
      link: link && editorRef.current?.contains(link) ? link : null,
    });
  }, []);

  useEffect(() => {
    document.addEventListener("selectionchange", refreshActive);
    try {
      document.execCommand("defaultParagraphSeparator", false, "p");
    } catch {
      /* not supported */
    }
    return () => document.removeEventListener("selectionchange", refreshActive);
  }, [refreshActive]);

  const exec = (command: string, arg?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, arg);
    emitChange();
    refreshActive();
  };

  const toggleBlock = (tag: "h2" | "h3" | "blockquote") => {
    exec("formatBlock", active.block === tag ? "p" : tag);
  };

  // ── Links ────────────────────────────────────────────────────────────
  const openLinkBar = () => {
    const sel = window.getSelection();
    savedRange.current = selectionInEditor() && sel ? sel.getRangeAt(0).cloneRange() : null;
    setLinkUrl(active.link?.getAttribute("href") || "");
    setLinkError("");
    setLinkOpen(true);
    setTimeout(() => linkInputRef.current?.focus(), 0);
  };

  const restoreSelection = () => {
    const el = editorRef.current;
    if (!el) return;
    el.focus();
    const sel = window.getSelection();
    if (!sel) return;
    sel.removeAllRanges();
    if (savedRange.current) {
      sel.addRange(savedRange.current);
    } else {
      // No saved caret: place it at the end of the content
      const r = document.createRange();
      r.selectNodeContents(el);
      r.collapse(false);
      sel.addRange(r);
    }
  };

  const applyLink = () => {
    const href = normalizeUrl(linkUrl);
    if (!href) {
      setLinkError("Enter a valid URL, e.g. https://example.com");
      return;
    }
    restoreSelection();
    const sel = window.getSelection();
    const existing = active.link;
    if (existing) {
      existing.setAttribute("href", href);
    } else if (sel && !sel.isCollapsed) {
      document.execCommand("createLink", false, href);
    } else {
      const safe = href.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
      document.execCommand("insertHTML", false, `<a href="${safe}">${safe}</a>&nbsp;`);
    }
    setLinkOpen(false);
    emitChange();
  };

  const removeLink = () => {
    if (active.link) {
      const range = document.createRange();
      range.selectNodeContents(active.link);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
    exec("unlink");
  };

  // ── Paste: keep formatting (bold, lists, links…) but strip junk styles ──
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const html = e.clipboardData.getData("text/html");
    const text = e.clipboardData.getData("text/plain");
    const clean = html ? sanitizeBlogHtml(html) : markdownToHtml(text);
    document.execCommand("insertHTML", false, clean);
    emitChange();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const mod = e.ctrlKey || e.metaKey;
    if (mod && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openLinkBar();
    }
  };

  const btn = (isActive: boolean) =>
    `p-1.5 rounded transition cursor-pointer ${
      isActive ? "bg-[#020B35] text-[#00D9FF]" : "hover:bg-slate-200 text-slate-700"
    }`;

  // onMouseDown preventDefault keeps the text selection while clicking toolbar buttons
  const Tool = ({
    title,
    isActive = false,
    onClick,
    children,
  }: {
    title: string;
    isActive?: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      title={title}
      aria-label={title}
      aria-pressed={isActive}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={btn(isActive)}
    >
      {children}
    </button>
  );

  const Sep = () => <span className="h-4 w-px bg-slate-300 mx-0.5" />;

  return (
    <div className="space-y-2">
      {/* Formatting Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs">
        <Tool title="Bold (Ctrl+B)" isActive={active.bold} onClick={() => exec("bold")}>
          <Bold size={15} />
        </Tool>
        <Tool title="Italic (Ctrl+I)" isActive={active.italic} onClick={() => exec("italic")}>
          <Italic size={15} />
        </Tool>
        <Tool title="Underline (Ctrl+U)" isActive={active.underline} onClick={() => exec("underline")}>
          <Underline size={15} />
        </Tool>
        <Sep />
        <Tool title="Heading 2" isActive={active.block === "h2"} onClick={() => toggleBlock("h2")}>
          <Heading2 size={15} />
        </Tool>
        <Tool title="Heading 3" isActive={active.block === "h3"} onClick={() => toggleBlock("h3")}>
          <Heading3 size={15} />
        </Tool>
        <Sep />
        <Tool title="Bullet List" isActive={active.ul} onClick={() => exec("insertUnorderedList")}>
          <List size={15} />
        </Tool>
        <Tool title="Numbered List" isActive={active.ol} onClick={() => exec("insertOrderedList")}>
          <ListOrdered size={15} />
        </Tool>
        <Tool title="Quote" isActive={active.block === "blockquote"} onClick={() => toggleBlock("blockquote")}>
          <Quote size={15} />
        </Tool>
        <Sep />
        <Tool title={active.link ? "Edit Link (Ctrl+K)" : "Insert Link (Ctrl+K)"} isActive={!!active.link} onClick={openLinkBar}>
          <Link2 size={15} />
        </Tool>
        {active.link && (
          <Tool title="Remove Link" onClick={removeLink}>
            <Unlink size={15} />
          </Tool>
        )}
        <Tool title="Clear Formatting" onClick={() => exec("removeFormat")}>
          <RemoveFormatting size={15} />
        </Tool>
        <Sep />
        <Tool title="Undo (Ctrl+Z)" onClick={() => exec("undo")}>
          <Undo2 size={15} />
        </Tool>
        <Tool title="Redo (Ctrl+Y)" onClick={() => exec("redo")}>
          <Redo2 size={15} />
        </Tool>
      </div>

      {/* Link input bar */}
      {linkOpen && (
        <div className="flex flex-wrap items-center gap-2 p-2 rounded-xl border border-cyan-200 bg-cyan-50/60">
          <Link2 size={15} className="text-[#0284C7] shrink-0" />
          <input
            ref={linkInputRef}
            type="text"
            value={linkUrl}
            onChange={(e) => {
              setLinkUrl(e.target.value);
              setLinkError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                applyLink();
              } else if (e.key === "Escape") {
                setLinkOpen(false);
              }
            }}
            placeholder="https://example.com"
            className="flex-1 min-w-[180px] rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-[#00D9FF]"
          />
          <button
            type="button"
            onClick={applyLink}
            className="px-3 py-1.5 rounded-lg bg-[#020B35] text-white text-xs font-bold hover:bg-[#061543] cursor-pointer"
          >
            {active.link ? "Update" : "Add Link"}
          </button>
          <button
            type="button"
            onClick={() => setLinkOpen(false)}
            className="px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
          >
            Cancel
          </button>
          {linkError && <span className="w-full text-[11px] text-red-600 pl-6">{linkError}</span>}
          {!linkError && (
            <span className="w-full text-[11px] text-slate-500 pl-6">
              Tip: select text first to turn it into a link, otherwise the URL itself is inserted.
            </span>
          )}
        </div>
      )}

      {/* Editable area */}
      <div className="relative">
        {isEmpty && placeholder && (
          <div className="pointer-events-none absolute left-4 top-4 right-4 text-sm text-slate-400">{placeholder}</div>
        )}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-multiline="true"
          aria-label="Article body"
          onInput={emitChange}
          onBlur={emitChange}
          onPaste={handlePaste}
          onKeyDown={handleKeyDown}
          onKeyUp={refreshActive}
          onMouseUp={refreshActive}
          className="blog-content min-h-[320px] max-h-[640px] overflow-y-auto w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#00D9FF] focus:ring-2 focus:ring-cyan-100"
        />
      </div>
    </div>
  );
}
