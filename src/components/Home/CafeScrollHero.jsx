import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Sparkles, MapPin, ArrowDown, ChevronDown } from "lucide-react";

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

export default function CafeScrollHero({
  videoSrc = "/myvideo/myvideo.mp4",
  title = "EVERBLOOM CAFÉ",
  tagline = "Where Good Food & Coffee Bloom Together",
  scrubDistance = 2400,
}) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const hintRef = useRef(null);
  const progressBarRef = useRef(null);
  const actionsRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let duration = 0;
    let rafId = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let isSeeking = false;
    let pendingTime = null;
    let isLocked = true;
    let touchStartY = 0;

    const onLoadedData = () => {
      duration = video.duration || 0;
      setReady(true);
    };
    video.addEventListener("loadeddata", onLoadedData);

    const onSeeked = () => {
      isSeeking = false;
      if (pendingTime !== null) {
        const t = pendingTime;
        pendingTime = null;
        isSeeking = true;
        video.currentTime = t;
      }
    };
    video.addEventListener("seeked", onSeeked);

    function seekTo(t) {
      if (isSeeking) {
        pendingTime = t;
        return;
      }
      isSeeking = true;
      video.currentTime = t;
    }

    // Scroll lock management
    function lockPage() {
      if (isLocked) return;
      isLocked = true;
      document.body.style.overflow = "hidden";
    }

    function unlockPage() {
      if (!isLocked) return;
      isLocked = false;
      document.body.style.overflow = "";
    }

    // Initial lock
    document.body.style.overflow = "hidden";

    const onWheel = (e) => {
      if (!isLocked && window.scrollY > 20) {
        // If scrolled past hero, let normal scroll occur
        return;
      }

      if (e.deltaY > 0) {
        // Scrolling forward
        if (targetProgress < 0.99) {
          e.preventDefault();
          targetProgress = clamp(targetProgress + e.deltaY / scrubDistance, 0, 1);
        } else {
          // Reached end, unlock page and allow scrolling down
          unlockPage();
        }
      } else {
        // Scrolling backward
        if (window.scrollY <= 10) {
          lockPage();
          if (targetProgress > 0.01) {
            e.preventDefault();
            targetProgress = clamp(targetProgress + e.deltaY / scrubDistance, 0, 1);
          }
        }
      }
    };

    const onTouchStart = (e) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e) => {
      if (!isLocked && window.scrollY > 20) return;

      const y = e.touches[0]?.clientY ?? touchStartY;
      const deltaY = touchStartY - y;
      touchStartY = y;

      if (deltaY > 0) {
        if (targetProgress < 0.99) {
          if (e.cancelable) e.preventDefault();
          targetProgress = clamp(targetProgress + deltaY / scrubDistance, 0, 1);
        } else {
          unlockPage();
        }
      } else {
        if (window.scrollY <= 10) {
          lockPage();
          if (targetProgress > 0.01) {
            if (e.cancelable) e.preventDefault();
            targetProgress = clamp(targetProgress + deltaY / scrubDistance, 0, 1);
          }
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    function frame() {
      currentProgress += (targetProgress - currentProgress) * 0.16;

      if (duration > 0) {
        seekTo(currentProgress * duration);
      }

      if (videoRef.current) {
        const scale = 1 + currentProgress * 0.05;
        videoRef.current.style.transform = `scale(${scale})`;
      }

      // Title fades out with blur as user scrubs
      if (titleRef.current) {
        const t = 1 - clamp(currentProgress / 0.4, 0, 1);
        titleRef.current.style.opacity = String(t);
        titleRef.current.style.transform = `translateY(${(1 - t) * -30}px) scale(${0.95 + t * 0.05})`;
        titleRef.current.style.filter = `blur(${(1 - t) * 8}px)`;
      }

      // Tagline reveals as progress nears completion
      if (taglineRef.current) {
        const t = clamp((currentProgress - 0.6) / 0.35, 0, 1);
        taglineRef.current.style.opacity = String(t);
        taglineRef.current.style.transform = `translateY(${(1 - t) * 20}px) scale(${0.96 + t * 0.04})`;
        taglineRef.current.style.filter = `blur(${(1 - t) * 6}px)`;
      }

      // Actions reveal when completed
      if (actionsRef.current) {
        const t = clamp((currentProgress - 0.75) / 0.25, 0, 1);
        actionsRef.current.style.opacity = String(t);
        actionsRef.current.style.pointerEvents = t > 0.6 ? "auto" : "none";
      }

      // Hint hides once scrolling begins
      if (hintRef.current) {
        hintRef.current.style.opacity = currentProgress > 0.05 ? "0" : "1";
      }

      // Progress bar fills
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`;
      }

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);

    return () => {
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(rafId);
      document.body.style.overflow = "";
    };
  }, [scrubDistance]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[100dvh] overflow-hidden bg-[#120a07] text-white select-none"
    >
      {/* Background Scrubbed Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.62] contrast-[1.15]"
        style={{
          opacity: ready ? 1 : 0,
          transformOrigin: "center center",
          willChange: "transform",
          transition: "opacity 0.6s ease",
        }}
      />

      {/* Cinematic Dark Gradient Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(18,10,7,0.85)_80%,#120a07_100%)] pointer-events-none" />

      {/* Ambient Pulsing Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c88242]/30 via-amber-600/15 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Title (Initial Screen) */}
      <div
        ref={titleRef}
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center pointer-events-none"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#fcd9b8] mb-4">
          <Sparkles className="w-3.5 h-3.5" /> WELCOME TO BHUBANESWAR'S ARTISANAL HAVEN
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
          {title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-white/80 mt-3 max-w-md">
          Scroll downward to step inside our café
        </p>
      </div>

      {/* Tagline & Revealed Call To Actions (End of Video) */}
      <div
        ref={taglineRef}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none opacity-0"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c88242]/20 border border-[#c88242]/40 text-[#fcd9b8] text-[10px] font-extrabold uppercase tracking-widest mb-3">
          EXPERIENCE EVERBLOOM
        </span>
        <h2 className="font-serif italic text-3xl sm:text-5xl md:text-6xl font-normal text-white max-w-3xl leading-snug drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
          {tagline}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-lg mt-3 leading-relaxed">
          Air-Conditioned Indoor Floral Lounge · Open Nature Garden Patio · Handcrafted Brews &amp; Wood-Fired Crusts
        </p>

        {/* Buttons revealed when scrubbed */}
        <div ref={actionsRef} className="flex items-center gap-4 mt-8 opacity-0">
          <Link
            to="/menu"
            className="btn-caramel px-6 py-3 text-xs sm:text-sm font-bold gap-2 shadow-xl shadow-[#c88242]/30"
          >
            <Sparkles className="w-4 h-4" /> Explore Menu
          </Link>
          <Link
            to="/booking"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-bold text-white transition-all shadow-lg"
          >
            Reserve Table
          </Link>
        </div>
      </div>

      {/* Scroll Hint */}
      <div
        ref={hintRef}
        className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center gap-2 text-white/75 font-semibold text-[10px] sm:text-xs tracking-[0.3em] uppercase pointer-events-none transition-opacity duration-300"
      >
        <span>SCROLL TO ENTER</span>
        <ChevronDown className="w-4 h-4 text-[#c88242] animate-bounce" />
      </div>

      {/* Thin Gold Progress Line at bottom */}
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-white/15">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-gradient-to-r from-[#c88242] via-[#fcd9b8] to-white transform scale-x-0 origin-left"
        />
      </div>
    </div>
  );
}
