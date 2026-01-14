import { Zap, Mail, MapPin, Phone, Linkedin, Twitter, Instagram, Github } from "lucide-react";

const FIVERR_URL = "https://www.fiverr.com/spark_flow";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Website Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Bubble Development", href: "#services" },
      { name: "AI Chatbots", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
    ],
    social: [
      { name: "LinkedIn", icon: Linkedin, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
      { name: "GitHub", icon: Github, href: "#" },
    ],
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">
                Spark<span className="gradient-text">Flow</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6">
              We build digital products that spark growth. From websites to mobile apps, 
              AI solutions to custom software.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={FIVERR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors duration-200"
                >
                  Hire Us on Fiverr →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@sparkflow.agency</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Remote Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Spark Flow Agency. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
