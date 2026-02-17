const plans = [
  { name: "Basic", price: "R80", perks: ["Exterior wash", "Dry", "Tyres"], featured: false },
  { name: "Premium", price: "R150", perks: ["Basic package", "Vacuum", "Windows + dash"], featured: true },
  { name: "Full Detail", price: "R350", perks: ["Deep interior", "Deodorize", "Optional polish"], featured: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Pricing</h2>
      <p className="mt-2 text-slate-300">* Prices can vary by vehicle size (Hatch/Sedan/SUV/Bakkie).</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={[
              "rounded-2xl border bg-white/5 p-6",
              p.featured ? "border-sky-400/60" : "border-white/10",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{p.name}</div>
              {p.featured && (
                <span className="rounded-full bg-sky-400 px-2 py-1 text-xs font-bold text-slate-950">
                  Best Value
                </span>
              )}
            </div>

            <div className="mt-4 text-4xl font-extrabold">{p.price}</div>

            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {p.perks.map((x) => (
                <li key={x}>✅ {x}</li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full justify-center rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-sky-300"
            >
              Book {p.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
