import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

export function Hero() {
  const scrollToContact = () => {
    const contactElement = document.querySelector("#contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectsElement = document.querySelector("#projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,hsl(var(--background))_70%)]" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-gradient">Harish Sidagam</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
                AI/ML Engineer & Data Scientist
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                I build intelligent systems that learn, adapt, and solve complex problems. Passionate about machine learning, deep learning, and turning data into actionable insights.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button
                  onClick={scrollToContact}
                  className="btn-hero"
                >
                  <Mail className="h-5 w-5" />
                  Hire Me
                </button>
                <button
                  onClick={scrollToProjects}
                  className="btn-outline-hero"
                >
                  View Projects
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full hover:bg-accent/20"
                  asChild
                >
                  <a href="https://github.com/HarishSidagam8" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full hover:bg-accent/20"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/harish-sidagam/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full hover:bg-accent/20"
                  onClick={scrollToContact}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Portrait */}
            <div className="flex justify-center lg:justify-end fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-hero-gradient rounded-full blur-3xl opacity-30 animate-pulse" />
                  <img
                  src={heroPortrait}
                  alt="Sarah Chen - AI/ML Engineer Professional Portrait"
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
