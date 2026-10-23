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
  Table as TableIcon,
  Plus,
  Trash2,
  X,
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
  table: HTMLTableElement | null;
  cell: HTMLTableCellElement | null;
}

const INITIAL_ACTIVE: ActiveState = {
  bold: false,
  italic: false,
  underline: false,
  ul: false,
  ol: false,
  block: "",
  link: null,
  table: null,
  cell: null,
};

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

  // Table creation state
  const [tableModalOpen, setTableModalOpen] = useState(false);
  const [numRows, setNumRows] = useState(3);
  const [numCols, setNumCols] = useState(3);
  const [hasHeader, setHasHeader] = useState(true);

  const checkEmpty = () => {
    const el = editorRef.current;
    if (!el) return;
    setIsEmpty(!el.textContent?.trim() && !el.querySelector("li, a, table"));
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
    const clean =
      el.textContent?.trim() || el.querySelector("li, a, table")
        ? sanitizeBlogHtml(el.innerHTML)
        : "";
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
    const cell = (node as HTMLElement | null)?.closest?.("td, th") as HTMLTableCellElement | null;
    const table = cell?.closest("table") || ((node as HTMLElement | null)?.closest?.("table") as HTMLTableElement | null);

    setActive({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      ul: document.queryCommandState("insertUnorderedList"),
      ol: document.queryCommandState("insertOrderedList"),
      block: String(document.queryCommandValue("formatBlock") || "").toLowerCase(),
      link: link && editorRef.current?.contains(link) ? link : null,
      table: table && editorRef.current?.contains(table) ? table : null,
      cell: cell && editorRef.current?.contains(cell) ? cell : null,
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

  // ── Links ────────────────────────────────────────────────────────────
  const openLinkBar = () => {
    const sel = window.getSelection();
    savedRange.current = selectionInEditor() && sel && sel.rangeCount ? sel.getRangeAt(0).cloneRange() : null;
    setLinkUrl(active.link?.getAttribute("href") || "");
    setLinkError("");
    setTableModalOpen(false);
    setLinkOpen(true);
    setTimeout(() => linkInputRef.current?.focus(), 0);
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

  // ── Table Insertion & Management ─────────────────────────────────────
  const openTableModal = () => {
    const sel = window.getSelection();
    savedRange.current = selectionInEditor() && sel && sel.rangeCount ? sel.getRangeAt(0).cloneRange() : null;
    setLinkOpen(false);
    setTableModalOpen((prev) => !prev);
  };

  const handleInsertTable = (rows = numRows, cols = numCols, withHeader = hasHeader) => {
    restoreSelection();
    const rCount = Math.max(1, Math.min(20, rows));
    const cCount = Math.max(1, Math.min(12, cols));

    let html = '<table>';
    if (withHeader) {
      html += '<thead><tr>';
      for (let c = 1; c <= cCount; c++) {
        html += `<th>Header ${c}</th>`;
      }
      html += '</tr></thead>';
    }
    html += '<tbody>';
    const bodyRowsCount = withHeader ? Math.max(1, rCount - 1) : rCount;
    for (let r = 1; r <= bodyRowsCount; r++) {
      html += '<tr>';
      for (let c = 1; c <= cCount; c++) {
        html += `<td>Row ${r}, Col ${c}</td>`;
      }
      html += '</tr>';
    }
    html += '</tbody></table><p><br></p>';

    document.execCommand("insertHTML", false, html);
    setTableModalOpen(false);
    emitChange();
    refreshActive();
  };

  const getActiveTableContext = () => {
    const sel = window.getSelection();
    if (!sel || !sel.rangeCount) return null;
    let node: Node | null = sel.anchorNode;
    if (node && node.nodeType === Node.TEXT_NODE) node = node.parentNode;
    const cell = (node as HTMLElement | null)?.closest?.("td, th") as HTMLTableCellElement | null;
    const table = cell?.closest("table") || ((node as HTMLElement | null)?.closest?.("table") as HTMLTableElement | null);
    if (!table || !editorRef.current?.contains(table)) return null;
    const row = cell?.closest("tr") as HTMLTableRowElement | null;
    return { cell, table, row };
  };

  const handleAddRow = (position: "above" | "below") => {
    const ctx = getActiveTableContext();
    if (!ctx || !ctx.row) return;
    const { table, row } = ctx;
    const colCount = Math.max(
      ...Array.from(table.rows).map((r) => r.cells.length),
      row.cells.length,
      1
    );
    const newRow = document.createElement("tr");
    for (let i = 0; i < colCount; i++) {
      const td = document.createElement("td");
      td.innerHTML = "&nbsp;";
      newRow.appendChild(td);
    }
    if (position === "above") {
      row.insertAdjacentElement("beforebegin", newRow);
    } else {
      row.insertAdjacentElement("afterend", newRow);
    }
    emitChange();

    // Focus first cell of new row
    const firstCell = newRow.cells[0];
    if (firstCell) {
      const range = document.createRange();
      range.selectNodeContents(firstCell);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
    refreshActive();
  };

  const handleAddColumn = (position: "left" | "right") => {
    const ctx = getActiveTableContext();
    if (!ctx) return;
    const { table, cell } = ctx;
    const colIndex = cell ? cell.cellIndex : 0;
    const targetIndex = position === "left" ? colIndex : colIndex + 1;

    Array.from(table.rows).forEach((r) => {
      const isHeader =
        r.parentElement?.tagName.toUpperCase() === "THEAD" ||
        r.cells[0]?.tagName.toUpperCase() === "TH";
      const newCell = document.createElement(isHeader ? "th" : "td");
      newCell.innerHTML = "&nbsp;";
      if (targetIndex >= r.cells.length) {
        r.appendChild(newCell);
      } else {
        r.insertBefore(newCell, r.cells[targetIndex]);
      }
    });
    emitChange();
    refreshActive();
  };

  const handleDeleteRow = () => {
    const ctx = getActiveTableContext();
    if (!ctx || !ctx.row) return;
    const { table, row } = ctx;
    if (table.rows.length <= 1) {
      table.remove();
    } else {
      row.remove();
    }
    emitChange();
    refreshActive();
  };

  const handleDeleteColumn = () => {
    const ctx = getActiveTableContext();
    if (!ctx || !ctx.cell) return;
    const { table, cell } = ctx;
    const colIndex = cell.cellIndex;
    const totalCols = Math.max(...Array.from(table.rows).map((r) => r.cells.length));
    if (totalCols <= 1) {
      table.remove();
    } else {
      Array.from(table.rows).forEach((r) => {
        if (r.cells[colIndex]) {
          r.cells[colIndex].remove();
        }
      });
    }
    emitChange();
    refreshActive();
  };

  const handleDeleteTable = () => {
    const ctx = getActiveTableContext();
    if (!ctx) return;
    ctx.table.remove();
    emitChange();
    refreshActive();
  };

  // ── Paste: keep formatting (bold, lists, links, tables…) ──────────────
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
      return;
    }

    // Tab key inside table cells navigation
    if (e.key === "Tab") {
      const ctx = getActiveTableContext();
      if (ctx && ctx.cell && ctx.row) {
        e.preventDefault();
        const { table, cell } = ctx;
        const allCells = Array.from(table.querySelectorAll("th, td")) as HTMLElement[];
        const curIdx = allCells.indexOf(cell);
        if (e.shiftKey) {
          // Shift + Tab: Move to previous cell
          if (curIdx > 0) {
            const prev = allCells[curIdx - 1];
            const range = document.createRange();
            range.selectNodeContents(prev);
            range.collapse(false);
            const sel = window.getSelection();
            sel?.removeAllRanges();
            sel?.addRange(range);
          }
        } else {
          // Tab: Move to next cell
          if (curIdx < allCells.length - 1) {
            const next = allCells[curIdx + 1];
            const range = document.createRange();
            range.selectNodeContents(next);
            const sel = window.getSelection();
            sel?.removeAllRanges();
            sel?.addRange(range);
          } else {
            // At the very last cell! Auto add a new row
            handleAddRow("below");
          }
        }
        return;
      }
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
        <Tool
          title="Insert Table"
          isActive={tableModalOpen || !!active.table}
          onClick={openTableModal}
        >
          <TableIcon size={15} />
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

      {/* Table Insertion Modal / Popover */}
      {tableModalOpen && (
        <div className="p-4 rounded-xl border border-cyan-200 bg-cyan-50/60 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <TableIcon size={16} className="text-[#0284C7]" />
              <span>Insert Table at Cursor Position</span>
            </div>
            <button
              type="button"
              onClick={() => setTableModalOpen(false)}
              className="text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">Quick Presets:</span>
            {[
              { r: 2, c: 2, label: "2 × 2" },
              { r: 3, c: 3, label: "3 × 3" },
              { r: 4, c: 3, label: "4 × 3" },
              { r: 5, c: 4, label: "5 × 4" },
            ].map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => {
                  setNumRows(preset.r);
                  setNumCols(preset.c);
                  handleInsertTable(preset.r, preset.c, hasHeader);
                }}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white border border-slate-200 hover:border-[#00D9FF] hover:bg-cyan-50 text-slate-700 transition cursor-pointer"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Custom dimensions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Columns</label>
              <input
                type="number"
                min={1}
                max={12}
                value={numCols}
                onChange={(e) => setNumCols(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-[#00D9FF]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Rows (Total)</label>
              <input
                type="number"
                min={1}
                max={20}
                value={numRows}
                onChange={(e) => setNumRows(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-[#00D9FF]"
              />
            </div>
            <div className="flex items-center h-9">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={hasHeader}
                  onChange={(e) => setHasHeader(e.target.checked)}
                  className="rounded border-slate-300 text-[#00D9FF] focus:ring-cyan-200"
                />
                Include Header Row
              </label>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1 border-t border-cyan-100">
            <button
              type="button"
              onClick={() => handleInsertTable()}
              className="px-4 py-2 rounded-lg bg-[#020B35] text-white text-xs font-bold hover:bg-[#061543] transition cursor-pointer flex items-center gap-1.5"
            >
              <TableIcon size={14} className="text-[#00D9FF]" />
              Insert Table
            </button>
            <button
              type="button"
              onClick={() => setTableModalOpen(false)}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Contextual Table Operations Bar (Active when cursor is inside any table cell) */}
      {active.table && (
        <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-xl border border-blue-200 bg-blue-50/70 text-xs">
          <div className="flex items-center gap-1 text-blue-900 font-bold mr-1">
            <TableIcon size={14} className="text-[#0284C7]" />
            <span>Table Selected:</span>
          </div>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleAddRow("above")}
            className="px-2 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium transition cursor-pointer flex items-center gap-1 shadow-2xs"
            title="Add row above current row"
          >
            <Plus size={12} /> Row Above
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleAddRow("below")}
            className="px-2 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium transition cursor-pointer flex items-center gap-1 shadow-2xs"
            title="Add row below current row"
          >
            <Plus size={12} /> Row Below
          </button>
          <span className="h-4 w-px bg-blue-200 mx-0.5" />
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleAddColumn("left")}
            className="px-2 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium transition cursor-pointer flex items-center gap-1 shadow-2xs"
            title="Add column to the left"
          >
            <Plus size={12} /> Col Left
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleAddColumn("right")}
            className="px-2 py-1 rounded bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium transition cursor-pointer flex items-center gap-1 shadow-2xs"
            title="Add column to the right"
          >
            <Plus size={12} /> Col Right
          </button>
          <span className="h-4 w-px bg-blue-200 mx-0.5" />
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleDeleteRow}
            className="px-2 py-1 rounded bg-white border border-slate-200 hover:bg-red-50 text-red-600 font-medium transition cursor-pointer shadow-2xs"
            title="Delete current row"
          >
            Del Row
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleDeleteColumn}
            className="px-2 py-1 rounded bg-white border border-slate-200 hover:bg-red-50 text-red-600 font-medium transition cursor-pointer shadow-2xs"
            title="Delete current column"
          >
            Del Col
          </button>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleDeleteTable}
            className="px-2 py-1 rounded bg-red-100/80 border border-red-200 hover:bg-red-200/80 text-red-700 font-medium transition cursor-pointer flex items-center gap-1 shadow-2xs ml-auto"
            title="Delete entire table"
          >
            <Trash2 size={12} /> Delete Table
          </button>
        </div>
      )}

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
