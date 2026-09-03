import { useState, useEffect } from "react";

export default function PageScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-black/20 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#c88242] via-[#e29b5a] to-[#fcd9b8] transition-transform duration-75 origin-left"
        style={{
          transform: `scaleX(${scrollProgress})`,
          boxShadow: "0 0 12px rgba(200, 130, 66, 0.8)",
        }}
      />
    </div>
  );
}
