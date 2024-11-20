import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Create",
    description: "Design your AI workflow using our intuitive builder",
  },
  {
    number: "02",
    title: "Connect",
    description: "Integrate with your favorite tools and services",
  },
  {
    number: "03",
    title: "Share",
    description: "Publish and monetize your workflows in our marketplace",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">Three simple steps to get started</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="hover-card border-none">
              <CardContent className="pt-6">
                <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};