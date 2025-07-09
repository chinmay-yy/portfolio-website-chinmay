import { ArrowDown } from "lucide-react"; // ⬇️ Scroll icon import ho raha hai

export const HeroSection = () => {
  return (
    // 🧭 Hero section jo poori screen ki height cover karega
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* 📦 Content container - center aligned and responsive */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* 📝 Headline - with staggered fade-in animation */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary opacity-0 animate-fade-in">
                Hi, I'm
            </span>
            <span className="opacity-0 text-glow animate-fade-in-delay-1">
              {" "}
              Chinmay
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
              {" "}
              Saini
            </span>
          </h1>

          {/* 📃 Sub-heading/Intro para */}
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a full stack developer exploring the intersection of 
            web development and GenAI. I build smart, user-focused 
            tools that solve real-world problems.
          </p>

          {/* 🔘 CTA Button - View My Work */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="my-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* ⬇️ Scroll Down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
