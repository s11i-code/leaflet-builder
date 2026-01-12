"use client";

export default function EditablePage({
  pageNumber,
  content,
  onContentChange,
}: {
  pageNumber: number;
  content: string;
  onContentChange: (content: string) => void;
}) {
  return (
    <div
      className="leaflet-page relative w-full bg-white p-8"
      style={{ aspectRatio: "210 / 297" }}
      data-page-number={pageNumber}
    >
      <div className="absolute top-2 right-2 text-xs text-gray-400 print:hidden">
        Page {pageNumber}
      </div>
      <div
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => onContentChange(e.currentTarget.textContent || "")}
        className="w-full h-full outline-none"
      >
        {content}
      </div>
    </div>
  );
}
