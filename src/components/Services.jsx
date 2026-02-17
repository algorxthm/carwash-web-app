const services = [
  { title: "Basic Wash", desc: "Exterior wash + dry + tyres" },
  { title: "Premium Wash", desc: "Basic + vacuum + windows + dashboard" },
  { title: "Full Detail", desc: "Deep interior clean + optional polish" },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Services</h2>
      <p className="mt-2 text-slate-300">Choose a package that fits your vehicle and time.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">{s.title}</div>
            <div className="mt-2 text-sm text-slate-300">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
