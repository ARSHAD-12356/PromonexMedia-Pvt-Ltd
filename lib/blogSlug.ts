/**
 * Slugs reserved for discarded blog previews or setup checks. Keep this list
 * exact so a legitimate published article containing similar words is not
 * hidden from public listings or search engines.
 */
export const NON_INDEXABLE_TEST_BLOG_SLUGS = [
  "test",
  "demo",
  "sample",
  "test-blog",
  "testing-blog",
  "my-test",
] as const;

const nonIndexableTestSlugs = new Set<string>(NON_INDEXABLE_TEST_BLOG_SLUGS);

export function isIndexableBlogSlug(rawSlug: string | null | undefined): boolean {
  const slug = rawSlug?.trim().toLowerCase();
  if (!slug) return false;
  return !nonIndexableTestSlugs.has(slug);
}
