export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>© {year} Stop & Wash. All rights reserved.</div>
        <div className="text-slate-500">Created by Prince Rapoo</div>
      </div>
    </footer>
  );
}
