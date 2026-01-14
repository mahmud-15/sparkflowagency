import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FIVERR_URL = "https://www.fiverr.com/spark_flow";

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`glass-card rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Ready to Get Started?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Have a project in mind? We'd love to hear about it. Get in touch with us 
            and let's turn your ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-all duration-300 px-8 py-6 text-lg animate-pulse-glow"
            >
              <a href={FIVERR_URL} target="_blank" rel="noopener noreferrer">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No commitment required • Free consultation • Fast response
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
