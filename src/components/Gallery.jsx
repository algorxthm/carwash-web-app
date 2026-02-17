export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Gallery</h2>
      <p className="mt-2 text-slate-300">Drop in your before/after photos (we’ll wire it up later).</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-4/3 rounded-2xl border border-dashed border-sky-400/40 bg-sky-400/5 p-4 text-sky-300"
          >
            Photo {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
