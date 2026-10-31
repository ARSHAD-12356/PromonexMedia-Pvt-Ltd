import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata, getPublishedBlogBySlug, getAllPublishedBlogs } from "@/lib/seo";
import SingleBlogClient from "@/components/SingleBlogClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    return constructMetadata({
      title: "Article Not Found",
      description: "The requested article could not be found or has been removed.",
      path: `/blog/${slug || ""}`,
      noIndex: true,
    });
  }

  return constructMetadata({
    title: blog.title,
    description: blog.excerpt,
    path: `/blog/${blog.slug}`,
    image: blog.image,
    type: "article",
  });
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = await getAllPublishedBlogs();

  return <SingleBlogClient initialBlog={blog} initialAllBlogs={allBlogs} />;
}
