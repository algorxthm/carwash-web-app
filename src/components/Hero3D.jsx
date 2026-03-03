import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import SportCarModel from "./SportCarModel";
import Bubbles from "./Bubbles";

export default function Hero3D() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-40 left-1/2 h-80 w-2xl -translate-x-1/2 rounded-full bg-sky-500 blur-3xl" />
        <div className="absolute -bottom-40 right-10 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        {/* LEFT: text */}
        <div className="z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            🧽 Interior + Exterior •🗓️ Fast Booking • ⏱ 35–50 min 
          </p>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Premium Car Wash & Detailing<span className="text-sky-400">.</span>
          </h1>

          <p className="mt-4 max-w-xl text-slate-300">
            Book in seconds and drive out shining. Interior, exterior, and
            detailing packages.
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
            Open: Mon–Sun • 08:00–18:00 • Call: 083 687 0330
          </div>
        </div>

        {/* RIGHT: 3D card (only this area!) */}
        <div className="z-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          {/* This height controls the canvas size so it won't cover everything */}
          <div className="h-80 md:h-105">
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.8, 3], fov: 50 }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[6, 6, 6]} intensity={1.5} />
              <pointLight position={[0, 2.5, 2]} intensity={1.2} />

              <Suspense fallback={null}>
                <Environment preset="city" />
                <group position={[0.5, 0, 0]}>
                  <Center>
                    <SportCarModel scale={0.18} />
                  </Center>
                  <Bubbles
                    count={360}
                    radius={7.25}
                    height={1.3}
                    speed={0.6}
                    center={[0, 0.55, 0]}
                    bubbleSize={0.15}
                  />
                </group>
              </Suspense>

              <OrbitControls enableZoom={true} enablePan={false} />
            </Canvas>
          </div>

          <div className="border-t border-white/10 bg-slate-950/30 px-4 py-3 text-xs text-slate-300">
            Drag to rotate • Sport car preview
          </div>
        </div>
      </div>
    </section>
  );
}
