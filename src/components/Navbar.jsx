import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const phone = "27836870330"; // TODO
  const message = encodeURIComponent("Hi! I’d like to book a car wash.");
  const waHref = `https://wa.me/${phone}?text=${message}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#top" className="font-extrabold tracking-tight">
          Stop & Wash <span className="text-sky-400">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a className="hover:text-white" href="#services">Services</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#gallery">Gallery</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <a
          className="hidden rounded-xl bg-sky-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-sky-300 md:inline-flex"
          href={waHref}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Booking
        </a>

        {/* Mobile button */}
        <button
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden animate-fade-in">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="grid gap-3 text-sm text-slate-200">
              <a onClick={() => setOpen(false)} href="#services" className="rounded-xl bg-white/5 px-4 py-3">
                Services
              </a>
              <a onClick={() => setOpen(false)} href="#pricing" className="rounded-xl bg-white/5 px-4 py-3">
                Pricing
              </a>
              <a onClick={() => setOpen(false)} href="#gallery" className="rounded-xl bg-white/5 px-4 py-3">
                Gallery
              </a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-xl bg-white/5 px-4 py-3">
                Contact
              </a>

              <a
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-sky-400 px-4 py-3 font-bold text-slate-950 hover:bg-sky-300"
                href={waHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
