import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{""}Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-1">
              {" "}
              Chris
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-2">
              {" "}
              Guallpa
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-3">
            I am a software engineer with a passion for building complex
            integration solutions with high availability and scalability. I love
            to adapt my problem-solving skills to create efficient and effective
            solutions for real-world challenges while being open to utilize any
            tool or technology that best fits the task at hand. I believe in the
            power of collaboration and continuous learning and I am always eager
            to take on new challenges that push the boundaries of my knowledge
            and skills.
          </p>
          <div>
            <a
              href="#projects"
              className="cosmic-button opacity-0 animate-fade-in-4"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown></ArrowDown>
      </div>
    </section>
  );
};
