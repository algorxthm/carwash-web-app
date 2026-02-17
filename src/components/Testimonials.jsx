const reviews = [
  { name: "Thando", text: "Quick service and my car looked brand new." },
  { name: "Ayesha", text: "Interior deep clean is 10/10. Worth it." },
  { name: "Kabelo", text: "Great value, friendly staff, super clean finish." },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Reviews</h2>
      <p className="mt-2 text-slate-300">What customers say.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-slate-300">“{r.text}”</div>
            <div className="mt-4 font-semibold">— {r.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
