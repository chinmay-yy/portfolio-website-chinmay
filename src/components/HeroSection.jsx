import { ArrowDown, Download, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground opacity-0 animate-fade-in">
                Hello, I'm
              </p>
              
              {/* Animated Name */}
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="text-glow opacity-0 animate-fade-in-delay-1">
                  Chinmay
                </span>
                <br />
                <span className="text-primary opacity-0 animate-fade-in-delay-2">
                  <TypeAnimation
                    sequence={[
                      "Saini",
                      2000,
                      "Developer",
                      2000,
                      "Designer",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-primary"
                  />
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3 leading-relaxed">
              I'm a full stack developer exploring the intersection of 
              web development and GenAI. I build smart, user-focused 
              tools that solve real-world problems.
            </p>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-delay-4">
              <a 
                href="#projects" 
                className="my-button flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column - Profile Photo */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-2">
            <div className="relative">
              {/* Main Photo Container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src="/myAvatar.png" 
                  alt="Chinmay Saini" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-card rounded-full border border-border/50 shadow-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-card rounded-full border border-border/50 shadow-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>

              {/* Tech Stack Badges */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card px-4 py-2 rounded-full border border-border/50 shadow-lg">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-4">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};
