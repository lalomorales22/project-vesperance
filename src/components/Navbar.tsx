import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold">
            Vesperance
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/workflows" className="text-muted-foreground hover:text-foreground transition-colors">
              Workflows
            </Link>
            <Link to="/community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </Link>
            <Link to="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;