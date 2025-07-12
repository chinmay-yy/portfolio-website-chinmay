import { ArrowRight, ExternalLink, Github, Code, Zap, Brain } from "lucide-react";

// 📦 Enhanced list of projects with AI focus
const projects = [
  {
    id: 1,
    title: "AI-Powered Resume Builder",
    description: "An intelligent resume builder that uses AI to generate tailored resumes based on job descriptions and user experience. Features include smart formatting, keyword optimization, and professional templates.",
    image: "/projects/project1.png",
    tags: ["React", "Gemini API API", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/chinmay-yy/cv-builder-ai",
    icon: Brain,
    featured: true
  },
  {
    id: 2,
    title: "Smart Expense Tracker",
    description: "A web application that uses AI to categorize expenses automatically and provides intelligent spending insights. Features budget tracking, expense analytics, and financial recommendations.",
    image: "",
    tags: ["Next.js", "Firebase", "AI", "Charts.js"],
    demoUrl: "#",
    githubUrl: "#",
    icon: Zap,
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and TailwindCSS. Features dark/light mode, smooth animations, and optimized performance for showcasing projects and skills.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "Vite", "Responsive"],
    demoUrl: "https://portfolio-website-chinmay-7c2m-6liomeyd4.vercel.app/",
    githubUrl: "https://github.com/chinmay-yy/portfolio-website-chinmay",
    icon: Code,
    featured: true
  },

];

export const ProjectsSection = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* 🏷️ Enhanced Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my expertise in AI, web development, and modern technologies. 
            Each project demonstrates attention to detail, performance optimization, and user experience.
          </p>
        </div>

        {/* 🔲 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 h-full flex flex-col"
              >
                {/* 🎨 Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                {/* 🖼️ Enhanced Image section */}
                <div className="h-56 overflow-hidden relative">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/20 to-primary/5 flex items-center justify-center relative">
                      <div className="text-center z-20">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">Project Preview</p>
                      </div>
                      {/* 🎨 Animated background elements */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <div className="absolute bottom-6 right-6 w-3 h-3 bg-secondary rounded-full animate-pulse delay-300" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full animate-pulse delay-500" />
                      </div>
                    </div>
                  )}
                </div>

                {/* 📦 Enhanced Card content */}
                <div className="p-6 relative z-20 flex-1 flex flex-col">
                  {/* 🔖 Enhanced Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={`${project.id}-${tag}-${index}`}
                        className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary/50 text-secondary-foreground border-border hover:bg-primary/10 hover:border-primary/30 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 🧠 Enhanced Project Title & Description */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* 🔗 Enhanced Demo and GitHub links */}
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-300 group/link"
                      >
                        <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-300 group/link"
                      >
                        <Github size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* ✨ Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* 📋 Upcoming/Ongoing Projects Section */}
        {otherProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-primary">Upcoming</span> & <span className="text-primary">Ongoing</span> Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={project.id}
                    className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border/30 hover:border-primary/20 h-full flex flex-col"
                  >
                    <div className="h-40 overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <p className="text-xs text-muted-foreground">Preview</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={`${project.id}-${tag}-${index}`}
                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary/30 text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                        {project.description}
                      </p>

                      <div className="flex space-x-3 mt-auto">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/60 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={16} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/60 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ➕ Enhanced CTA Button */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-3 px-8 py-4 text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/chinmay-yy"
          >
            <Github size={20} />
            Explore More on GitHub
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
