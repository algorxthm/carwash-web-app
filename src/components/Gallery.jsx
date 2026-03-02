
import { useState } from "react";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    {
      src: "/gallery/wash1.jpg",
      title: "Full Exterior Wash",
      description: "Premium foam wash with spotless finish.",
    },
    {
      src: "/gallery/wash2.jpg",
      title: "Interior Deep Clean",
      description: "Seats, dashboard & carpets professionally cleaned.",
    },
    {
      src: "/gallery/wash3.jpg",
      title: "Engine Cleaning",
      description: "Safe engine bay degreasing & detailing.",
    },
    {
      src: "/gallery/wash4.jpg",
      title: "Rim & Tyre Shine",
      description: "Gloss finish for that fresh look.",
    },
    {
      src: "/gallery/wash5.jpg",
      title: "Polish & Wax",
      description: "Protective shine for long-lasting gloss.",
    },
    {
      src: "/gallery/wash6.jpg",
      title: "SUV Detailing",
      description: "Complete premium treatment for larger vehicles.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold">Gallery</h2>
      <p className="mt-2 text-slate-300">
        Quality detailing services at Stop & Wash Carwash.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((item, i) => {
          const isActive = activeIndex === i;

          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className={`w-full h-64 object-cover transition duration-500 
                  ${isActive ? "scale-110" : "group-hover:scale-110"}`}
              />

              {/* Gradient Overlay (subtle, always visible) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text Content */}
              <div
                className={`absolute bottom-0 p-4 text-white transition-all duration-500
                  ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-100 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                  }`}
              >
                <h3 className="text-lg font-bold">{item.title}</h3>

                {/* Description expands on tap */}
                <p
                  className={`text-sm mt-2 transition-all duration-500
                    ${
                      isActive
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0 sm:max-h-40 sm:opacity-100"
                    } overflow-hidden`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
            <p className="text-lg font-semibold">
              ⭐ 4.8 Rated | Trusted in Midrand | Since 2025
            </p>
          </div>
    </section>
  );
}
