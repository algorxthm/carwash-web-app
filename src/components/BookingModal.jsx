export default function BookingModal({ open, onClose, packageName = "" }) {
  if (!open) return null;

  const phone = "27XXXXXXXXX"; // TODO
  const onSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const vehicle = form.get("vehicle");
    const date = form.get("date");
    const time = form.get("time");
    const notes = form.get("notes");

    const msg = encodeURIComponent(
      `Hi, I’d like to book a car wash.\n\nName: ${name}\nPackage: ${packageName}\nVehicle: ${vehicle}\nDate: ${date}\nTime: ${time}\nNotes: ${notes || "-"}`
    );

    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank", "noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-60">
      <button
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="absolute left-1/2 top-1/2 w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-slate-950 p-5 shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-extrabold">Book {packageName}</h3>
            <p className="mt-1 text-sm text-slate-300">
              Fill this in — we’ll open WhatsApp with everything pre-written.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <form onSubmit={onSubmit} className="mt-5 space-y-3">
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-400/60"
          />
          <select
            name="vehicle"
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-400/60"
            defaultValue=""
          >
            <option value="" disabled>Select Vehicle Type</option>
            <option>Hatchback</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Bakkie</option>
          </select>

          <div className="grid gap-3 sm:grid-cols-2">
            <input
              name="date"
              type="date"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-400/60"
            />
            <input
              name="time"
              type="time"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-400/60"
            />
          </div>

          <textarea
            name="notes"
            placeholder="Any extra notes (optional)"
            className="min-h-22.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-400/60"
          />

          <button className="w-full rounded-xl bg-emerald-400 px-4 py-3 text-sm font-extrabold text-slate-950 hover:bg-emerald-300">
            Continue to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
