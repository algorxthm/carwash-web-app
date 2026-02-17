export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#top" className="font-extrabold tracking-tight">
          ShineWash<span className="text-sky-400">.</span>
        </a>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a className="hover:text-white" href="#services">Services</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
          <a className="hover:text-white" href="#gallery">Gallery</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>

        <a
          className="rounded-xl bg-sky-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-sky-300"
          href="https://wa.me/27XXXXXXXXX"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Booking
        </a>
      </div>
    </header>
  );
}
