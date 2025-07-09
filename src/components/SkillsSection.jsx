import { useState } from "react"; // 🔁 React hook for state
import { cn } from "@/lib/utils"; // 🎯 Utility to conditionally merge classNames

// 🎓 Skills list with name, level (%), and category
const skills = [
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

// 🔘 Category filter buttons
const categories = ["all", "frontend", "backend", "tools", "languages"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all"); // 🧠 Active filter state

  // 🔍 Filter skills based on selected category
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* 🏷️ Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* 🔘 Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)} // 🎯 Set current filter
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground" // ✅ Active button style
                  : "bg-secondary/70 text-forefround hover:bd-secondary" // 💤 Inactive style
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 🧱 Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              {/* 🔤 Skill Title */}
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>

              {/* 📊 Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              {/* 📈 Percentage Text */}
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
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
