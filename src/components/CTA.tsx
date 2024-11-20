import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8">
          Join our community of innovators and start building the future of AI workflows today.
        </p>
        <Button size="lg" className="rounded-full">
          Join Vesperence Beta
        </Button>
      </div>
    </section>
  );
};