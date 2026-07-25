const techs = ["REACT.JS", "NODE.JS", "POSTGRES", "DOCKER", "TAILWIND", "TYPESCRIPT", "AWS", "NEXTJS"];
 
export default function TechStrip() {
  return (
    // py-12=48px vertical padding | px-4=16px horizontal padding to prevent edge bleed on mobile
    <div className="py-12 px-4 md:px-0 border-y border-outline-variant bg-surface-container-lowest overflow-hidden">
      <div className="relative">
        {/* Infinite marquee – doubled for seamless loop */}
        <div className="flex gap-16 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] w-max opacity-50 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700">
          {[...techs, ...techs].map((tech, i) => (
            <span
              key={i}
              className="font-inter text-[32px] leading-[1.3] font-[600] tracking-tighter whitespace-nowrap select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
 