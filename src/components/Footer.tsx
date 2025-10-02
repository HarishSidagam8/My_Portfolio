import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Harish Sidagam</h3>
              <p className="text-muted-foreground mb-4">
              AI/ML engineer who transforms complex data into intelligent solutions.               </p>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  onClick={() => {
                    const contactElement = document.querySelector("#contact");
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About" },
                  { href: "#skills", label: "Skills" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
                <li>E-commerce Solutions</li>
                <li>API Development</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Harish Sidagam. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>and lots of coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
