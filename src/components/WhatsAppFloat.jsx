import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  const phone = "27836870330";
  const message = encodeURIComponent(
    "Hi Stop & Wash Carwash, I'd like to book a wash."
  );

  // Show after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 animate-[pulse_3s_infinite] hover:animate-none hover:scale-110 transition">
        <FaWhatsapp size={28} color="white" />
      </div>
    </a>
  );
}
