import { Briefcase, Code, User } from "lucide-react"; // 👨‍💼 Icons for skills/cards

export const AboutSection = () => {
  return (
    // 📌 About section with padding and anchor id
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* 🔠 Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* 🧱 Grid with 2 columns on md+, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 📃 Left Column - Text content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer Exploring the GenAI Frontier
            </h3>

            <p className="text-muted-foreground">
              I specialize in building responsive and modern full stack web applications, 
              while exploring how GenAI can enhance everyday user experiences 
              and solve real-world problems.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about turning creative ideas into practical tools, 
              and I’m on a relentless journey to level up, adapt fast, and 
              contribute meaningfully to the evolving tech landscape.
            </p>

            {/* 🔘 Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="my-button">
                Get In Touch
              </a>

              <a
                href="Chinmay_Saini_Resume.pdf" // 📄 Link to CV
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* 🎯 Right Column - Skill Cards */}
          <div className="grid grid-cols-1 gap-6">

            {/* 🧑‍💻 Card 1 - Web Dev */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* 🎨 Card 2 - UI/UX */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* 🗂️ Card 3 - Project Management */}
            {/*<div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};
