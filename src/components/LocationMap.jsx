import { useMemo } from "react";

function formatTime(h, m) {
  const hh = String(h).padStart(2, "0");
  const mm = String(m).padStart(2, "0");
  return `${hh}:${mm}`;
}

function getJoburgNow() {
  // Ensures Africa/Johannesburg time even if device differs
  const parts = new Intl.DateTimeFormat("en-ZA", {
    timeZone: "Africa/Johannesburg",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  return {
    weekdayShort: map.weekday, // e.g. "Mon"
    hour: Number(map.hour),
    minute: Number(map.minute),
  };
}

export default function LocationMap() {
  const businessName = "Stop & Wash Carwash";
  const address = "3 Ridge Road, Glen Austin, Midrand";
  const phoneDisplay = "083 687 0330"; // TODO: replace
  const phoneE164 = "+27836870330"; // TODO: replace (must start with +27)

  // Hours (Mon–Sun 08:00–18:00)
  const hours = useMemo(
    () => ({
      Mon: { open: { h: 8, m: 0 }, close: { h: 18, m: 0 } },
      Tue: { open: { h: 8, m: 0 }, close: { h: 18, m: 0 } },
      Wed: { open: { h: 8, m: 0 }, close: { h: 18, m: 0 } },
      Thu: { open: { h: 8, m: 0 }, close: { h: 18, m: 0 } },
      Fri: { open: { h: 8, m: 0 }, close: { h: 18, m: 0 } },
      Sat: { open: { h: 8, m: 0 }, close: { h: 18, m: 0 } },
      Sun: { open: { h: 8, m: 0 }, close: { h: 18, m: 0 } },
    }),
    []
  );

  const now = getJoburgNow();
  const today = hours[now.weekdayShort];

  const minsNow = now.hour * 60 + now.minute;
  const minsOpen = today.open.h * 60 + today.open.m;
  const minsClose = today.close.h * 60 + today.close.m;

  const isOpenNow = minsNow >= minsOpen && minsNow < minsClose;

  const query = encodeURIComponent(`${businessName} ${address}`);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;
  const openMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  const embedSrc =
    "https://www.google.com/maps?q=3%20Ridge%20Road%2C%20Glen%20Austin%2C%20Midrand&output=embed";

  const weekOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl font-bold">Find Us</h2>

            <span
              className={[
                "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-extrabold",
                isOpenNow
                  ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                  : "border-rose-400/40 bg-rose-400/10 text-rose-300",
              ].join(" ")}
              title="Based on Africa/Johannesburg time"
            >
              <span
                className={[
                  "inline-block h-2 w-2 rounded-full",
                  isOpenNow ? "bg-emerald-400" : "bg-rose-400",
                ].join(" ")}
              />
              {isOpenNow ? "OPEN NOW" : "CLOSED"}
              <span className="font-semibold text-slate-200">
                {formatTime(today.open.h, today.open.m)}–{formatTime(today.close.h, today.close.m)}
              </span>
            </span>

            <span className="text-xs text-slate-400">
              Local time: {String(now.hour).padStart(2, "0")}:{String(now.minute).padStart(2, "0")}
            </span>
          </div>

          <p className="mt-2 text-slate-300">
            Visit us at <span className="font-semibold text-white">{address}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-emerald-400 px-4 py-3 text-sm font-extrabold text-slate-950 hover:bg-emerald-300"
          >
            Get Directions
          </a>

          <a
            href={openMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Open in Google Maps
          </a>

          <a
            href={`tel:${phoneE164}`}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Call Now ({phoneDisplay})
          </a>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-5">
        {/* Map */}
        <div className="md:col-span-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
          <div className="relative h-80 w-full md:h-105">
            <iframe
              title="Google Maps"
              src={embedSrc}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Premium pulse marker overlay */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="h-4 w-4 rounded-full bg-sky-400 shadow-lg shadow-sky-400/40" />
                <div className="absolute inset-0 rounded-full bg-sky-400/40 animate-ping" />
              </div>
            </div>

            {/* Corner chip */}
            <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-100 backdrop-blur">
              Glen Austin • Midrand
            </div>
          </div>

          <div className="border-t border-white/10 bg-slate-950/30 px-4 py-3 text-xs text-slate-300">
            Tip: If the embed looks limited, use Google Maps → Share → “Embed a map” and replace the iframe URL.
          </div>
        </div>

        {/* Info panel */}
        <div className="md:col-span-2 grid gap-4">
          {/* Hours */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-extrabold">Business Hours</div>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              {weekOrder.map((d) => {
                const h = hours[d];
                const isToday = d === now.weekdayShort;
                return (
                  <div
                    key={d}
                    className={[
                      "flex items-center justify-between rounded-xl px-3 py-2",
                      isToday ? "bg-sky-400/10 border border-sky-400/20" : "bg-slate-950/30",
                    ].join(" ")}
                  >
                    <span className={isToday ? "font-bold text-white" : ""}>{d}</span>
                    <span className={isToday ? "font-bold text-sky-200" : ""}>
                      {formatTime(h.open.h, h.open.m)}–{formatTime(h.close.h, h.close.m)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Parking / safety */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-extrabold">Parking & Access</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>🅿️ On-site parking available</li>
              <li>🚗 Easy access from main road</li>
              <li>🧼 Waiting area while we wash</li>
              <li>🔒 Staff on-site during business hours</li>
            </ul>

            <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/40 p-3 text-xs text-slate-300">
              If you’re running late, WhatsApp us and we’ll try to hold your slot.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
