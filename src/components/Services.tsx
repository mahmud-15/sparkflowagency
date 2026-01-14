import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  MessageSquare, 
  Palette, 
  Layers,
  ArrowRight 
} from "lucide-react";

const FIVERR_URL = "https://www.fiverr.com/spark_flow";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with modern technologies. From landing pages to complex web applications, we deliver responsive, fast, and SEO-optimized solutions.",
    features: ["React & Next.js", "WordPress", "E-commerce", "Landing Pages"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Optimization"],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Layers,
    title: "Bubble Development",
    description: "No-code solutions using Bubble.io for rapid prototyping and full-featured web applications without traditional coding.",
    features: ["Rapid MVP", "Custom Plugins", "Integrations", "Scalable Apps"],
    gradient: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Intelligent conversational AI solutions that automate customer support, lead generation, and user engagement.",
    features: ["ChatGPT Integration", "Custom Training", "Multi-Platform", "24/7 Support"],
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive conversions. From wireframes to polished prototypes.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    gradient: "from-rose-500/20 to-orange-500/20",
    iconColor: "text-rose-400",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-medium mb-4 block">OUR SERVICES</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital solutions tailored to your business needs. 
            From concept to launch, we've got you covered.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group glass-card rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:scale-[1.02] hover-glow perspective-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${index === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-8 w-8 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                asChild
                variant="ghost"
                className="group/btn p-0 h-auto text-primary hover:text-accent hover:bg-transparent"
              >
                <a href={FIVERR_URL} target="_blank" rel="noopener noreferrer">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
