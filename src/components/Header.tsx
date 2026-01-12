import PrintButton from "./PrintButton";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white px-6 py-4 print:hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-zinc-900">
          Leaflet Builder
        </h1>
        <PrintButton />
      </div>
    </header>
  );
}
