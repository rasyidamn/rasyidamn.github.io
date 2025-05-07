import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Contact App",
      description: "lorem",
      image: "/projects/contact-app.png",
      tags: ["Reacts", "TailwindCss"],
      demoUrl: "https://rasyidamn.github.io/contact-app-uts/",
      githubUrl: "https://github.com/rasyidamn/contact-app-uts",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold  mb-6 md:mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quidem
          et cupiditate necessitatibus vitae provident, eum laborum beatae
          iusto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover  transition-all hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>

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

        <div className="text-center mt-12">
          <a
            href="https://github.com/rasyidamn"
            target="_blank"
            className="flex cosmic-button w-fit items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
