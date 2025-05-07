import React, { useState } from "react";

const SkillsSection = () => {
  const skills = [
    // frontend
    { name: "HTML/CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 60, category: "frontend" },
    { name: "TailwindCSS", level: 70, category: "frontend" },
    { name: "React", level: 40, category: "frontend" },

    // backend

    // tools
    { name: "Git/GitHub", level: 10, category: "tools" },
    { name: "Figma", level: 20, category: "tools" },
    { name: "VS Code", level: 20, category: "tools" },
  ];

  const categories = ["all", "frontend", "backend", "tools"];

  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="flex justify-center min-h-screen py-24 px-4 relative "
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold  mb-6 md:mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize 
                ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-foreground/10"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, key) => {
            const getSkillLevel = (level) => {
              if (level < 30) return "Beginner";
              if (level >= 30 && level < 70) return "Intermediate";
              return "Advanced";
            };

            const skillLevel = getSkillLevel(skill.level);
            return (
              <div
                key={key}
                className="bg-card p-4 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg"> {skill.name}</h3>
                </div>
                <div className="w-full bg-foreground/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                <div className="flex justify-between mt-1 text-sm text-foreground/50">
                  <div>
                    <span>{skillLevel}</span>
                  </div>
                  <div>
                    <span>{skill.level}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
