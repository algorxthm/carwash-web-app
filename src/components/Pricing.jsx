import { useState } from "react";
import BookingModal from "./BookingModal";

const plans = [
  { name: "Basic", price: "R80", perks: ["Exterior wash", "Dry", "Tyres"] },
  { name: "Premium", price: "R150", perks: ["Vacuum", "Windows", "Dash wipe"] },
  { name: "Full Detail", price: "R350", perks: ["Deep interior", "Deodorize", "Optional polish"] },
];

export default function Pricing() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const onBook = (name) => {
    setSelected(name);
    setOpen(true);
  };

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-2xl font-bold">Pricing</h2>
      <p className="mt-2 text-slate-300">
        Transparent packages — vehicle size can affect final price.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{p.name}</div>
              {p.name === "Premium" && (
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

            <button
              onClick={() => onBook(p.name)}
              className="mt-6 w-full rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-sky-300"
            >
              Book {p.name}
            </button>
          </div>
        ))}
      </div>

      <BookingModal open={open} onClose={() => setOpen(false)} packageName={selected} />
    </section>
  );
}
