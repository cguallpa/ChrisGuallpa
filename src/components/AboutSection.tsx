import { Code } from "lucide-react";
import { User } from "lucide-react";
import { Briefcase } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {" "}
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Developer and Dog Dad
            </h3>
            <p className="text-muted-foreground">
              Hello! I'm Chris Guallpa, a passionate developer with a knack for
              creating software integration applications that service cross
              functional teams across different subject matter domains.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me spending quality time with my
              partner and our two amazing dogs, cooking delicious meals for me
              and my partner, or winding down gaming with friends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#resume"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download My Resume
              </a>
              <a
                href="#contact"
                className="cosmic-button w-full sm:w-auto text-center"
              >
                {" "}
                Contact Me
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"></Code>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Creating Integration Applications and Web APIs
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"></User>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">User Experience</h4>
                  <p className="text-muted-foreground">
                    Designing Intuitive and Engaging Interfaces and Reporting
                    Analytics
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading Teams to Deliver High-Quality Software Solutions for
                    cross functional projects
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
