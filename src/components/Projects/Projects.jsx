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
      <div className="max-w-[1280px] mx-auto px-gutter">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <div className="space-y-4">
            <span className="font-geist text-[14px] leading-none tracking-[0.05em] font-medium text-primary tracking-widest">
              MY WORK
            </span>
            <h2 className="font-inter text-[clamp(32px,4vw,48px)] leading-[1.2] tracking-[-0.01em] font-bold uppercase">
              RECENT PROJECTS
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center bg-primary text-on-primary cursor-pointer">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group">
              {/* Thumbnail */}
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] bg-surface-container mb-6">
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
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-inter text-[24px] leading-[1.3] font-[600] mb-1">
                    {project.title}
                  </h3>
                  <p className="font-geist text-[14px] leading-none tracking-[0.05em] font-medium text-on-surface-variant">
                    {project.tags}
                  </p>
                </div>
                <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300 shrink-0 cursor-pointer">
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
