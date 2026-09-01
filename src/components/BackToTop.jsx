import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2b1810] text-white flex items-center justify-center shadow-xl hover:bg-[#c88242] transition-all duration-300 hover:scale-105 border border-white/20"
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  );
}
