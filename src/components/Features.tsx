import { Cpu, Users, Workflow, Lock } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "AI Workflows",
    description: "Create and customize powerful AI workflows with our intuitive drag-and-drop interface.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a thriving community of innovators sharing knowledge and resources.",
  },
  {
    icon: Cpu,
    title: "Neural Integration",
    description: "Bridge human consciousness with AI through advanced neural transduction.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption for your peace of mind.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground">Everything you need to build and scale AI workflows</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card hover-card p-6 rounded-2xl"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};