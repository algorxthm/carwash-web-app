export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-32 left-1/2 h-72 w-xl -translate-x-1/2 rounded-full bg-sky-500 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            ⏱ 20–45 min • ⭐ 4.8+ Reviews • 🧽 Interior + Exterior
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Premium Car Wash & Detailing
            <span className="text-sky-400">.</span>
          </h1>

          <p className="mt-4 max-w-xl text-slate-300">
            Fast, affordable, professional finish. Book in seconds and drive out shining.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-sky-300"
            >
              Book Now
            </a>
            <a
              href="#pricing"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View Pricing
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-400">
            Open: Mon–Sun • 08:00–18:00 • Call: 0XX XXX XXXX
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-bold">Today’s Specials</h2>
          <p className="mt-1 text-sm text-slate-300">Add-ons customers love.</p>

          <div className="mt-5 grid gap-3">
            {[
              { title: "Interior Deep Clean", desc: "Seats, mats, dash, deodorize" },
              { title: "Wax & Polish", desc: "Gloss finish + protection" },
              { title: "Engine Bay Wipe", desc: "Quick clean (safe)" },
            ].map((x) => (
              <div key={x.title} className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                <div className="font-semibold">{x.title}</div>
                <div className="mt-1 text-sm text-slate-300">{x.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
