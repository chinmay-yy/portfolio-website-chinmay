import { ArrowRight, ExternalLink, Github } from "lucide-react"; // 🎯 Icons for demo, GitHub, CTA

// 📦 List of projects (you can add/edit here)
const projects = [
  {
    id: 1,
    title: "Expense Tracker App",
    description: "A web app for tracking expenses.",
    image: "",
    tags: ["Next.js", "TailwindCSS", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Resume Builder",
    description: "AI-powered resume builder that generates tailored resumes.",
    image: "",
    tags: ["Vite.js", "GeminiAI", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    image: "/projects/project3.png",
    tags: ["Next.js", "TailwindCSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    // 🧱 Entire Projects section
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* 🏷️ Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        {/* 📃 Section Subtext */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* 🔲 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={project.id} // ✅ Unique key per project card
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* 🖼️ Image section with hover zoom */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* 📦 Card content section */}
              <div className="p-6">
                {/* 🔖 Tags (like "Next.js", "TailwindCSS") */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${tag}-${index}`} // ✅ Unique key for each tag
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 🧠 Project Title & Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* 🔗 Demo and GitHub links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ➕ CTA Button for more GitHub projects */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/chinmay-yy"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
