import { useEffect, useState } from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function FloatingSocial() {
  const [show, setShow] = useState(false);

  // Show after scrolling 200px
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50 items-end">

      {/* WhatsApp (Primary CTA with Pulse) */}
      <a
        href="https://wa.me/27658695656?text=Hi%20I%20would%20like%20to%20book%20a%20car%20wash"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 animate-pulse"
      >
        <FaWhatsapp size={24} />
        <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
          Chat with us
        </span>
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/YOUR_PAGE"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaFacebookF size={18} />
        <span className="absolute right-12 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
          Follow us
        </span>
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/YOUR_PAGE"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group bg-linear-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaInstagram size={18} />
        <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
          Follow us
        </span>
      </a>

    </div>
  );
}