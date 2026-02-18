export default function FloatingWhatsApp() {
  const phone = "27836870330"; // TODO: replace
  const message = encodeURIComponent(
    "Hi! I’d like to book a car wash. Package: ___ | Vehicle: ___ | Date/Time: ___"
  );

  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/80 px-4 py-3 shadow-lg backdrop-blur hover:bg-slate-950"
      aria-label="Chat on WhatsApp"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-400 text-slate-950 font-extrabold">
        WA
      </span>

      <span className="hidden text-sm font-semibold text-white sm:block">
        WhatsApp
      </span>

      <span className="sr-only">WhatsApp booking</span>
    </a>
  );
}
