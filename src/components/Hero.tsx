import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20">
      <div className="space-y-6 text-center max-w-4xl mx-auto animate-fade-up">
        <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
          Introducing Vesperence
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
          Where AI Meets Collective Consciousness
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Build, share, and monetize AI workflows while connecting with a community of innovators.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button size="lg" className="rounded-full">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};