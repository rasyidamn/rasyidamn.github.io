
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-x-6">
          <h1 className=" text-4xl md:text-7xl font-bold tracking-tight py-4">
            <span className="block md:inline opacity-0 animate-fade-in">
              Hi, I'm
            </span>
            <span className=" bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent opacity-0 animate-fade-in-delay-1">
              {" "}
              Ilham Rasyidan
            </span>
          </h1>

          <p className=" text-lg md:text-xl text-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a passionate student with a strong desire to learn and grow.
            Always striving to push boundaries and unlock new skills in the
            world of web development.
          </p>

          <div className="flex justify-center py-6 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;
