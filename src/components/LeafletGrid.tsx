"use client";

import EditablePage from "./EditablePage";

export default function LeafletGrid({
  pages,
  onContentChange,
}: {
  pages: Array<{ id: number; content: string }>;
  onContentChange: (pageId: number, content: string) => void;
}) {
  return (
    <div className="leaflet-grid grid grid-cols-1 md:grid-cols-2 gap-0 w-full max-w-7xl mx-auto bg-white shadow-lg">
      {pages.map((page, index) => {
        const isLeftColumn = index % 2 === 0;
        const isTopRow = index < 2;
        const borderClass = `${isLeftColumn ? "border-r" : ""} ${isTopRow ? "border-b" : ""} border-gray-300`;

        return (
          <div key={page.id} className={borderClass}>
            <EditablePage
              pageNumber={page.id}
              content={page.content}
              onContentChange={(newContent) =>
                onContentChange(page.id, newContent)
              }
            />
          </div>
        );
      })}
    </div>
  );
}
