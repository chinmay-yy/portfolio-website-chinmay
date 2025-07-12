import { useState } from "react";
import { cn } from "@/lib/utils";

// 🎓 Skills list with name, level (%), and category
const skills = [
  // AI & AI Tools skills
  { name: "ChatGPT/Claude", level: 85, category: "ai" },
  { name: "Prompt Engineering", level: 75, category: "ai" },
  { name: "AI Integration", level: 70, category: "ai" },

  // Frontend skills
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 55, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend skills
  { name: "Node.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 60, category: "tools" },
  { name: "Figma", level: 60, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // Languages
  { name: "C", level: 85, category: "languages" },
  { name: "C++", level: 80, category: "languages" },
  { name: "Java", level: 75, category: "languages" },
  { name: "Python", level: 70, category: "languages" },
];

// 🔘 Category filter buttons with icons and counts
const categories = [
  { name: "all", label: "All Skills", count: skills.length },
  { name: "ai", label: "AI & AI Tools", count: skills.filter(s => s.category === "ai").length },
  { name: "frontend", label: "Frontend", count: skills.filter(s => s.category === "frontend").length },
  { name: "backend", label: "Backend", count: skills.filter(s => s.category === "backend").length },
  { name: "tools", label: "Tools", count: skills.filter(s => s.category === "tools").length },
  { name: "languages", label: "Languages", count: skills.filter(s => s.category === "languages").length },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // 🔍 Filter skills based on selected category
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 🏷️ Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* 🔘 Enhanced Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "group relative px-6 py-3 rounded-xl transition-all duration-300 capitalize font-medium",
                "hover:scale-105 active:scale-95",
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                  : "bg-card/50 text-foreground/80 hover:text-primary hover:bg-card border border-border/50 hover:border-primary/30"
              )}
            >
              <span className="flex items-center gap-2">
                {category.label}
                <span className={cn(
                  "px-2 py-0.5 text-xs rounded-full transition-all duration-300",
                  activeCategory === category.name
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-primary/10 text-primary"
                )}>
                  {category.count}
                </span>
              </span>
              
              {/* Active indicator */}
              {activeCategory === category.name && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary-foreground rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* 🧱 Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-xs card-hover border border-border/50 hover:border-primary/30 transition-all duration-300",
                skill.category === "ai" && "ring-2 ring-primary/20 hover:ring-primary/40"
              )}
            >
              {/* 🔤 Skill Title */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  {skill.name}
                  {skill.category === "ai" && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      AI
                    </span>
                  )}
                </h3>
              </div>

              {/* 📊 Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] shadow-sm",
                    skill.category === "ai" 
                      ? "bg-gradient-to-r from-purple-500 to-pink-500"
                      : "bg-gradient-to-r from-primary to-primary/80"
                  )}
                  style={{ width: skill.level + "%" }}
                />
              </div>

              {/* 📈 Percentage Text */}
              <div className="text-right mt-2">
                <span className="text-sm text-muted-foreground font-medium">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
