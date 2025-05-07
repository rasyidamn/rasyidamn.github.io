import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold  mb-6 md:mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-sm md:text-lg text-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              blanditiis, obcaecati sit tempora pariatur eligendi excepturi
              dolores animi nemo corrupti at deserunt, repellat rem nesciunt.
              Ullam cum aliquid soluta dolores!
            </p>

            <p className="text-sm md:text-lg text-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              nisi ducimus iste, quae quibusdam architecto, at optio, numquam
              eveniet delectus aliquam facere asperiores cum? Sunt repellendus
              laudantium vitae dignissimos!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]
         hover:scale-105 active:scale-95"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-glow text-lg">Web Developement</h4>
                  <p className="text-sm text-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, minima.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-glow text-lg">UI/UX Design</h4>
                  <p className="text-sm text-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, minima.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-glow text-lg">Project Management</h4>
                  <p className="text-sm text-foreground">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, minima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
