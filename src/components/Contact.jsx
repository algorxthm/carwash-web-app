export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We’ll contact you shortly.");
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Book / Contact</h2>
      <p className="mt-2 text-slate-300">Send a request or WhatsApp us for instant booking.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="font-semibold">Contact Details</div>
          <div className="mt-3 space-y-2 text-sm text-slate-300">
            <div>📍 Address: 3 Ridge Road, Glen Austin, Midrand</div>
            <div>📞 Phone: 083 687 0330</div>
            <div>🟢 WhatsApp: 27 83 687 0330</div>
            <div>🕒 Hours: Mon–Sun 08:00–18:00</div>
          </div>

          <a
            className="mt-5 inline-flex w-full justify-center rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-sky-300"
            href="https://wa.me/27836870330"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Now
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="font-semibold">Quick Booking Form</div>

          <form onSubmit={onSubmit} className="mt-4 space-y-3">
            <input
              className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm outline-none focus:border-sky-400/60"
              placeholder="Your Name"
              required
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm outline-none focus:border-sky-400/60"
              placeholder="Phone Number"
              required
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm outline-none focus:border-sky-400/60"
              placeholder="Vehicle Type (Hatch/Sedan/SUV/Bakkie)"
            />
            <textarea
              className="min-h-27.5 w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm outline-none focus:border-sky-400/60"
              placeholder="What do you need? (Basic/Premium/Detail + date/time)"
            />
            <button className="w-full rounded-xl bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-sky-300">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
