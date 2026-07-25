import cafeImg from "../../assets/images/project-cafe.png";
import cryptoImg from "../../assets/images/project-crypto.png";
import teamhubImg from "../../assets/images/project-teamhub.png";
 
const projects = [
  {
    title: "Smart Cafe Management System",
    tags: "FULL STACK • NODE • REACT",
    image: cafeImg,
  },
  {
    title: "Crypto Trading Dashboard",
    tags: "BLOCKCHAIN • DATA VIZ",
    image: cryptoImg,
  },
  {
    title: "Team Hub Collaboration Tool",
    tags: "SaaS • NEXTJS • REDUX",
    image: teamhubImg,
  },
];
 
export default function Projects() {
  return (
    <section id="projects" className="py-section-gap bg-surface-container-lowest">
      {/* Container: responsive gutters px-4 mobile, px-6 desktop */}
      <div className="max-w-[1680px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        {/* Section header: mb-16=64px bottom margin for separation from cards */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          {/* space-y-3=12px between label and heading (was space-y-4/16px, tighter label-heading pair) */}
          <div className="space-y-3">
            <span className="font-geist text-[14px] leading-none tracking-[0.05em] font-medium text-primary tracking-widest">
              MY WORK
            </span>
            <h2 className="font-inter text-[clamp(32px,4vw,48px)] leading-[1.2] tracking-[-0.01em] font-bold uppercase">
              RECENT PROJECTS
            </h2>
          </div>
          {/* gap-3=12px between arrow buttons (was gap-4/16px, slightly tighter pair) */}
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center bg-primary text-on-primary cursor-pointer">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
 
        {/* Project Cards */}
        {/* Cards grid: gap-8=32px between project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group">
              {/* Thumbnail */}
              {/* Thumbnail: mb-4=16px below image (was mb-6/24px, tighter image-to-text) */}
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] bg-surface-container mb-4">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.image}
                  alt={project.title}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-primary scale-75 group-hover:scale-100 transition-transform duration-300 cursor-pointer">
                    <span className="material-symbols-outlined text-4xl">
                      add
                    </span>
                  </button>
                </div>
              </div>
 
              {/* Info */}
              {/* Info row with gap-4=16px to prevent text/button collision */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  {/* mb-2=8px between title and tags (was mb-1/4px, too tight) */}
                  <h3 className="font-inter text-[24px] leading-[1.3] font-[600] mb-2">
                    {project.title}
                  </h3>
                  <p className="font-geist text-[14px] leading-none tracking-[0.05em] font-medium text-on-surface-variant">
                    {project.tags}
                  </p>
                </div>
                {/* mt-1=4px pushes arrow icon down to optically align with first line of title */}
                <button className="w-10 h-10 mt-1 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300 shrink-0 cursor-pointer">
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 