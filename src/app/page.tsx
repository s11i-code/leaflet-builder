"use client";

import { useState } from "react";
import Header from "@/components/Header";
import LeafletGrid from "@/components/LeafletGrid";

export default function Home() {
  const [pages, setPages] = useState([
    { id: 1, content: "" },
    { id: 2, content: "" },
    { id: 3, content: "" },
    { id: 4, content: "" },
  ]);

  const handlePageContentChange = (pageId: number, newContent: string) => {
    setPages((prev) =>
      prev.map((page) =>
        page.id === pageId ? { ...page, content: newContent } : page,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      <main className="w-full px-4 py-8">
        <LeafletGrid pages={pages} onContentChange={handlePageContentChange} />
      </main>
    </div>
  );
}
