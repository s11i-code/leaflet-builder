"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="px-6 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-700 transition-colors print:hidden"
      aria-label="Print leaflet"
    >
      Print
    </button>
  );
}
