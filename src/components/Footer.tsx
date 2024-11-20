import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Vesperence. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};