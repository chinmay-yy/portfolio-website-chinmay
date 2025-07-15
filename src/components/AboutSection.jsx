import { Briefcase, Code, User, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer Exploring the GenAI Frontier
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I specialize in building responsive and modern full stack web applications, 
              while exploring how GenAI can enhance everyday user experiences 
              and solve real-world problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about turning creative ideas into practical tools, 
              and I'm on a relentless journey to level up, adapt fast, and 
              contribute meaningfully to the evolving tech landscape.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="my-button">
                Get In Touch
              </a>

              <a
                href="Chinmay-Saini-Frontend-developer.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Enhanced Skill Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development Card */}
            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks like React, Next.js, and Node.js.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">React</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">Next.js</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">Node.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* UI/UX Design Card */}
            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences with modern design principles.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">Figma</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">Tailwind</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">Responsive</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI/ML Focus Card */}
            <div className="gradient-border p-6 card-hover group ring-2 ring-primary/20 hover:ring-primary/40">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-6 w-6 text-purple-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    AI Integration & Tools
                    <span className="text-xs bg-purple-500/20 text-purple-500 px-2 py-1 rounded-full">AI</span>
                  </h4>
                  <p className="text-muted-foreground">
                    Mastering AI tools like ChatGPT and building intelligent
                    applications with OpenAI APIs and prompt engineering.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-500 rounded-full">ChatGPT</span>
                    <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-500 rounded-full">Prompt Engineering</span>
                    <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-500 rounded-full">OpenAI API</span>
                    <span className="px-2 py-1 text-xs bg-purple-500/10 text-purple-500 rounded-full">AI Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
