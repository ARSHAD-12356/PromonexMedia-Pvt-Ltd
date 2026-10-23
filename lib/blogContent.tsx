import React, { useMemo } from "react";

/*
 * Blog article content helpers.
 *
 * Content is stored either as HTML (written with the admin rich-text editor) or
 * as legacy markdown-ish text (default blogs / older posts). Everything is
 * rendered through <BlogContent />, which always emits sanitized HTML.
 */

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Accept http(s), mailto, tel, site-relative paths and bare domains (www.x.com)
export function normalizeUrl(raw: string): string | null {
  const url = raw.trim();
  if (!url) return null;
  if (/^(https?:\/\/|mailto:|tel:)/i.test(url)) return url;
  if (/^[/#]/.test(url)) return url;
  if (/^(www\.)?[a-z0-9-]+(\.[a-z0-9-]+)+([/?#].*)?$/i.test(url)) return `https://${url}`;
  return null;
}

const isExternalUrl = (url: string) => /^https?:\/\//i.test(url);

const anchorHtml = (href: string, labelHtml: string) =>
  isExternalUrl(href)
    ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${labelHtml}</a>`
    : `<a href="${escapeHtml(href)}">${labelHtml}</a>`;

const URL_IN_TEXT = /\b(?:https?:\/\/|www\.)[^\s<>"']+[^\s<>"'.,;:!?)\]]/gi;

// Inline markdown → HTML: **bold**, *italic*, [text](url), bare URLs
function inlineMarkdownToHtml(text: string): string {
  const regex =
    /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[[^\]]+\]\([^)\s]+\)|(?:https?:\/\/|www\.)[^\s<>"']+[^\s<>"'.,;:!?)\]])/g;
  let out = "";
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    out += escapeHtml(text.slice(last, m.index));
    const token = m[0];
    if (token.startsWith("**")) {
      out += `<strong>${inlineMarkdownToHtml(token.slice(2, -2))}</strong>`;
    } else if (token.startsWith("*")) {
      out += `<em>${inlineMarkdownToHtml(token.slice(1, -1))}</em>`;
    } else if (token.startsWith("[")) {
      const [, label, rawHref] = token.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/) || [];
      const href = normalizeUrl(rawHref || "");
      out += href ? anchorHtml(href, escapeHtml(label)) : escapeHtml(token);
    } else {
      const href = normalizeUrl(token);
      out += href ? anchorHtml(href, escapeHtml(token)) : escapeHtml(token);
    }
    last = m.index + token.length;
  }
  return out + escapeHtml(text.slice(last));
}

// Block markdown → HTML (headings, quotes, bullet/numbered lists incl. "•", tables, paragraphs)
export function markdownToHtml(md: string): string {
  const html: string[] = [];
  let para: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;
  let quote: string[] = [];
  let tableRows: string[][] | null = null;

  const flushPara = () => {
    if (para.length) html.push(`<p>${para.map(inlineMarkdownToHtml).join("<br>")}</p>`);
    para = [];
  };
  const flushList = () => {
    if (list) {
      html.push(`<${list.type}>${list.items.map((i) => `<li>${inlineMarkdownToHtml(i)}</li>`).join("")}</${list.type}>`);
    }
    list = null;
  };
  const flushQuote = () => {
    if (quote.length) html.push(`<blockquote>${quote.map(inlineMarkdownToHtml).join("<br>")}</blockquote>`);
    quote = [];
  };
  const flushTable = () => {
    if (tableRows && tableRows.length > 0) {
      const rows = tableRows;
      const isSeparator = (r: string[]) => r.every((c) => /^:?-+:?$/.test(c.trim()));
      let hasHeader = false;
      let headerRow: string[] | null = null;
      let bodyRows: string[][] = [];

      if (rows.length >= 2 && isSeparator(rows[1])) {
        hasHeader = true;
        headerRow = rows[0];
        bodyRows = rows.slice(2);
      } else {
        bodyRows = rows;
      }

      let tbl = '<div class="overflow-x-auto my-4"><table class="w-full">';
      if (hasHeader && headerRow) {
        tbl += "<thead><tr>";
        for (const cell of headerRow) {
          tbl += `<th>${inlineMarkdownToHtml(cell.trim())}</th>`;
        }
        tbl += "</tr></thead>";
      }
      if (bodyRows.length > 0) {
        tbl += "<tbody>";
        for (const r of bodyRows) {
          if (isSeparator(r)) continue;
          tbl += "<tr>";
          for (const cell of r) {
            tbl += `<td>${inlineMarkdownToHtml(cell.trim())}</td>`;
          }
          tbl += "</tr>";
        }
        tbl += "</tbody>";
      }
      tbl += "</table></div>";
      html.push(tbl);
    }
    tableRows = null;
  };
  const flushAll = () => {
    flushPara();
    flushList();
    flushQuote();
    flushTable();
  };

  for (const rawLine of md.replace(/\r\n?/g, "\n").split("\n")) {
    const line = rawLine.trim();
    let m: RegExpMatchArray | null;
    if (!line) {
      flushAll();
    } else if (line.startsWith("|") && line.endsWith("|")) {
      flushPara();
      flushList();
      flushQuote();
      const cells = line
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim());
      if (!tableRows) tableRows = [];
      tableRows.push(cells);
    } else if ((m = line.match(/^(#{1,6})\s+(.*)$/))) {
      flushAll();
      const tag = m[1].length <= 2 ? "h2" : "h3";
      html.push(`<${tag}>${inlineMarkdownToHtml(m[2])}</${tag}>`);
    } else if ((m = line.match(/^>\s?(.*)$/))) {
      flushPara();
      flushList();
      flushTable();
      quote.push(m[1]);
    } else if ((m = line.match(/^(?:[-*+•●◦▪]|•)\s+(.*)$/))) {
      flushPara();
      flushQuote();
      flushTable();
      if (list?.type !== "ul") {
        flushList();
        list = { type: "ul", items: [] };
      }
      list!.items.push(m[1]);
    } else if ((m = line.match(/^\d+[.)]\s+(.*)$/))) {
      flushPara();
      flushQuote();
      flushTable();
      if (list?.type !== "ol") {
        flushList();
        list = { type: "ol", items: [] };
      }
      list!.items.push(m[1]);
    } else {
      flushList();
      flushQuote();
      flushTable();
      para.push(line);
    }
  }
  flushAll();
  return html.join("");
}

// ── HTML sanitizer (allowlist) ─────────────────────────────────────────────
const KEEP_TAGS = new Set([
  "P", "BR", "H2", "H3", "UL", "OL", "LI", "BLOCKQUOTE", "STRONG", "EM", "U", "S", "A", "CODE",
  "TABLE", "THEAD", "TBODY", "TFOOT", "TR", "TH", "TD"
]);
const DROP_TAGS = new Set([
  "SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "NOSCRIPT", "TEMPLATE", "HEAD", "META",
  "LINK", "TITLE", "SVG", "MATH", "IMG", "VIDEO", "AUDIO", "CANVAS", "FORM", "INPUT",
  "BUTTON", "SELECT", "TEXTAREA",
]);
const RENAME: Record<string, string> = { B: "STRONG", I: "EM", STRIKE: "S", DEL: "S", H1: "H2", H4: "H3", H5: "H3", H6: "H3" };
const BLOCK_TAGS = new Set(["P", "H1", "H2", "H3", "H4", "H5", "H6", "UL", "OL", "LI", "BLOCKQUOTE", "DIV", "SECTION", "ARTICLE", "TABLE", "PRE"]);
const DIV_LIKE = new Set(["DIV", "SECTION", "ARTICLE", "HEADER", "FOOTER", "MAIN", "PRE"]);

function cleanNode(src: Node, dest: Node, doc: Document, inLink: boolean) {
  src.childNodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      appendText(child.textContent || "", dest, doc, inLink);
      return;
    }
    if (child.nodeType !== Node.ELEMENT_NODE) return;
    const el = child as HTMLElement;
    let tag = el.tagName.toUpperCase();
    if (DROP_TAGS.has(tag)) return;

    const style = (el.getAttribute("style") || "").toLowerCase();
    const weight = style.match(/font-weight\s*:\s*(\w+)/)?.[1];
    const isBoldStyle = weight === "bold" || weight === "bolder" || (!!weight && Number(weight) >= 600);
    const isNormalWeight = weight === "normal" || (!!weight && Number(weight) > 0 && Number(weight) < 600);

    // Google Docs wraps everything in <b style="font-weight:normal">
    if (tag === "B" && isNormalWeight) {
      cleanNode(el, dest, doc, inLink);
      return;
    }
    if (tag === "SPAN") {
      // Convert inline styles from pasted content into semantic tags
      let target: Node = dest;
      const wrap = (t: string) => {
        const w = doc.createElement(t);
        target.appendChild(w);
        target = w;
      };
      if (isBoldStyle) wrap("strong");
      if (/font-style\s*:\s*italic/.test(style)) wrap("em");
      if (/text-decoration[^;]*underline/.test(style)) wrap("u");
      cleanNode(el, target, doc, inLink);
      return;
    }
    if (DIV_LIKE.has(tag)) {
      const hasBlockChild = Array.from(el.children).some((c) => BLOCK_TAGS.has(c.tagName.toUpperCase()));
      if (hasBlockChild || dest.nodeName === "LI" || dest.nodeName === "BLOCKQUOTE" || dest.nodeName === "P" || dest.nodeName === "TD" || dest.nodeName === "TH") {
        cleanNode(el, dest, doc, inLink);
      } else {
        const p = doc.createElement("p");
        cleanNode(el, p, doc, inLink);
        if (p.childNodes.length) dest.appendChild(p);
      }
      return;
    }

    tag = RENAME[tag] || tag;
    if (!KEEP_TAGS.has(tag)) {
      cleanNode(el, dest, doc, inLink); // unwrap unknown tags, keep their text
      return;
    }

    if (tag === "A") {
      const href = normalizeUrl(el.getAttribute("href") || "");
      if (!href || inLink) {
        cleanNode(el, dest, doc, inLink);
        return;
      }
      const a = doc.createElement("a");
      a.setAttribute("href", href);
      if (isExternalUrl(href)) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer");
      }
      cleanNode(el, a, doc, true);
      dest.appendChild(a);
      return;
    }

    if (tag === "TH" || tag === "TD") {
      const cell = doc.createElement(tag.toLowerCase());
      const cs = el.getAttribute("colspan");
      const rs = el.getAttribute("rowspan");
      if (cs && Number(cs) > 1) cell.setAttribute("colspan", cs);
      if (rs && Number(rs) > 1) cell.setAttribute("rowspan", rs);
      cleanNode(el, cell, doc, inLink);
      dest.appendChild(cell);
      return;
    }

    const out = doc.createElement(tag.toLowerCase());
    cleanNode(el, out, doc, inLink);
    dest.appendChild(out);
  });
}

// Append text, turning bare URLs into clickable links
function appendText(text: string, dest: Node, doc: Document, inLink: boolean) {
  if (inLink) {
    dest.appendChild(doc.createTextNode(text));
    return;
  }
  let last = 0;
  for (const m of text.matchAll(URL_IN_TEXT)) {
    const href = normalizeUrl(m[0]);
    if (!href) continue;
    if (m.index! > last) dest.appendChild(doc.createTextNode(text.slice(last, m.index)));
    const a = doc.createElement("a");
    a.setAttribute("href", href);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
    a.textContent = m[0];
    dest.appendChild(a);
    last = m.index! + m[0].length;
  }
  if (last < text.length) dest.appendChild(doc.createTextNode(text.slice(last)));
}

export function sanitizeBlogHtml(html: string): string {
  if (typeof window === "undefined" || typeof DOMParser === "undefined") {
    // Server fallback: plain text only
    return `<p>${escapeHtml(html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim())}</p>`;
  }
  const doc = new DOMParser().parseFromString(`<body>${html}</body>`, "text/html");
  const root = doc.createElement("div");
  cleanNode(doc.body, root, doc, false);
  return root.innerHTML;
}

export const isHtmlContent = (content: string) =>
  /<(p|h[1-6]|ul|ol|li|blockquote|strong|em|b|i|u|a|br|div|span|table|thead|tbody|tr|th|td)\b[^>]*>/i.test(content);

// Any stored content (HTML or legacy markdown) → safe HTML
export function blogContentToHtml(content: string): string {
  if (!content) return "";
  return isHtmlContent(content) ? sanitizeBlogHtml(content) : markdownToHtml(content);
}

// Plain-text version (for empty checks, read-time, etc.)
export function blogContentToText(content: string): string {
  return blogContentToHtml(content)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function BlogContent({ content, className = "" }: { content: string; className?: string }) {
  const html = useMemo(() => blogContentToHtml(content), [content]);
  return <div className={`blog-content ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
