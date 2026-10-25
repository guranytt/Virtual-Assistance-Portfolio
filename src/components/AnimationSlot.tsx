import React, { useEffect, useRef, useState, useCallback } from 'react';
import { HERO_ANIMATION, AnimationConfig } from '../content';
import { Sparkles, CheckCircle2, Calendar, Mail, FileText, RotateCcw } from 'lucide-react';

interface AnimationSlotProps {
  config?: AnimationConfig;
  className?: string;
}

export const AnimationSlot: React.FC<AnimationSlotProps> = ({
  config = HERO_ANIMATION,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [svgSrc, setSvgSrc] = useState<string | null>(null);
  const [isSvgLoaded, setIsSvgLoaded] = useState(false);

  // Check user motion preferences
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // IntersectionObserver to detect when the hero is on screen
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // For SVG: start only when the hero is on screen on first view
  useEffect(() => {
    if (config.type === 'svg' && isIntersecting && !hasStarted) {
      setHasStarted(true);
      const baseSrc = config.src || '/inbox-intro.svg';
      setSvgSrc(`${baseSrc}?t=${Date.now()}`);
    }
  }, [config.type, config.src, isIntersecting, hasStarted]);

  // Handle replay: reload SVG with fresh timestamp so it begins at frame zero
  const handleReplay = useCallback(() => {
    const baseSrc = config.src || '/inbox-intro.svg';
    setSvgSrc(`${baseSrc}?t=${Date.now()}`);
  }, [config.src]);

  // Handle video play/pause
  useEffect(() => {
    if (!videoRef.current || config.type !== 'video') return;

    if (isIntersecting && !prefersReducedMotion) {
      videoRef.current.play().catch(() => {
        // Autoplay policy prevented playback, silent fallback
      });
    } else {
      videoRef.current.pause();
    }
  }, [isIntersecting, prefersReducedMotion, config.type]);

  const showPlaceholderFallback =
    config.type === 'placeholder' ||
    !config.src ||
    (config.type === 'svg' && !isSvgLoaded);

  return (
    <div className={`w-full max-w-[560px] mx-auto flex flex-col items-center ${className}`}>
      {/* Animation Container with strictly reserved aspect ratio 640:420 */}
      <div
        ref={containerRef}
        style={{ aspectRatio: '640 / 420' }}
        className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#FAF3EB] via-[#F4E9DC] to-[#F1DFC8] shadow-soft border border-[#E6D7C5]/60 flex items-center justify-center p-3 sm:p-5"
        data-testid="hero-animation-slot"
        aria-label={config.alt || 'Virtual assistant workspace showcase animation'}
      >
        {/* Organic background decorative blobs */}
        <div
          className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#E07A5F]/15 blur-2xl pointer-events-none transition-all duration-1000"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-[#81B29A]/20 blur-2xl pointer-events-none transition-all duration-1000"
          aria-hidden="true"
        />

        {/* Mode 1: SVG Animation loaded through an <img> tag with timestamp */}
        {config.type === 'svg' && svgSrc && (
          <img
            src={svgSrc}
            alt={config.alt || 'Virtual assistant inbox and calendar animation'}
            width={640}
            height={420}
            onLoad={() => setIsSvgLoaded(true)}
            onError={() => setIsSvgLoaded(false)}
            className={`w-full h-full object-contain rounded-2xl relative z-10 transition-opacity duration-300 ${
              isSvgLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          />
        )}

        {/* Mode 2: Video */}
        {config.type === 'video' && config.src && (
          <video
            ref={videoRef}
            src={config.src}
            poster={config.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover rounded-2xl relative z-10"
            aria-label={config.alt}
          >
            {config.alt}
          </video>
        )}

        {/* Mode 3: Static / GIF / WebP image */}
        {config.type === 'image' && config.src && (
          <img
            src={config.src}
            alt={config.alt || 'Portfolio visual demonstration'}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl relative z-10"
          />
        )}

        {/* Mode 4: Tasteful Placeholder as initial view or fallback while loading */}
        {showPlaceholderFallback && (
          <div
            className={`w-full h-full flex flex-col items-center justify-center text-center select-none ${
              config.type === 'svg' && !isSvgLoaded ? 'relative z-0' : 'relative z-10'
            }`}
          >
            {/* Main central organic card */}
            <div className="relative z-10 w-full max-w-[320px] bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-[#E6D7C5] shadow-soft text-left transform transition-transform hover:scale-[1.02]">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#F4E9DC]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E07A5F]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#81B29A]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F4E9DC]" />
                  <span className="text-[11px] font-semibold text-[#6B564D] ml-1">Daily VA Dispatch</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#5B8874] bg-[#81B29A]/15 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  Zero Backlog
                </span>
              </div>

              {/* Simulated task workflow items */}
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 p-1.5 rounded-xl bg-[#FFF8F0] border border-[#F4E9DC]">
                  <div className="w-7 h-7 rounded-lg bg-[#E07A5F]/15 text-[#E07A5F] flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-[#3D2C24] truncate">Inbox: 10 emails prioritized</p>
                    <p className="text-[10px] text-[#6B564D]">Drafts ready for review</p>
                  </div>
                  <span className="text-[9px] font-medium text-[#5B8874] bg-[#81B29A]/10 px-1.5 py-0.5 rounded">9:30 AM</span>
                </div>

                <div className="flex items-center gap-2.5 p-1.5 rounded-xl bg-[#FFF8F0] border border-[#F4E9DC]">
                  <div className="w-7 h-7 rounded-lg bg-[#81B29A]/20 text-[#5B8874] flex items-center justify-center shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-[#3D2C24] truncate">Calendar: 4 conflicts resolved</p>
                    <p className="text-[10px] text-[#6B564D]">12h focus time saved</p>
                  </div>
                  <span className="text-[9px] font-medium text-[#5B8874] bg-[#81B29A]/10 px-1.5 py-0.5 rounded">11:00 AM</span>
                </div>

                <div className="flex items-center gap-2.5 p-1.5 rounded-xl bg-[#FFF8F0] border border-[#F4E9DC]">
                  <div className="w-7 h-7 rounded-lg bg-[#F4E9DC] text-[#6B564D] flex items-center justify-center shrink-0">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-[#3D2C24] truncate">Spreadsheet: 50 rows audited</p>
                    <p className="text-[10px] text-[#6B564D]">Duplicates merged & verified</p>
                  </div>
                  <span className="text-[9px] font-medium text-[#5B8874] bg-[#81B29A]/10 px-1.5 py-0.5 rounded">2:15 PM</span>
                </div>
              </div>

              {/* Status note */}
              <div className="mt-3 pt-2.5 border-t border-[#F4E9DC] flex items-center justify-between text-[11px] text-[#6B564D]">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#E07A5F]" />
                  Ready for paid trial task
                </span>
                <span className="text-[10px] font-medium text-[#3D2C24]">Ibadan, NG</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Small "Replay" text button under the animation */}
      {config.type === 'svg' && (
        <button
          type="button"
          onClick={handleReplay}
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#8D746A] hover:text-[#E07A5F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A5F] rounded-md px-2 py-0.5"
          aria-label="Replay animation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay</span>
        </button>
      )}
    </div>
  );
};
