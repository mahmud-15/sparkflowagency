import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that drive your business forward.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Staying ahead with cutting-edge technologies and creative solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We work closely with you every step of the way.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Quality work delivered on time, without compromising on excellence.",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "★", label: "Average Rating" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-medium mb-4 block">ABOUT US</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We Are <span className="gradient-text">Spark Flow</span> Agency
          </h2>
          <p className="text-lg text-muted-foreground">
            A passionate team of developers, designers, and innovators dedicated to building 
            exceptional digital experiences. We combine creativity with technical expertise 
            to bring your vision to life.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-700 delay-200 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center hover-glow transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div ref={valuesRef}>
          <h3
            className={`text-2xl md:text-3xl font-bold text-center mb-12 transition-all duration-700 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 group hover-glow transition-all duration-500 hover:scale-105 ${
                  valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
