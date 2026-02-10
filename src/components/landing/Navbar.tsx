import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold text-primary">
          Spielwiese
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#journey" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Module</a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Über mich</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <Link to="/auth">
            <Button size="sm" className="rounded-full px-6">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border p-4 space-y-3">
          <a href="#journey" onClick={() => setOpen(false)} className="block text-sm py-2">Module</a>
          <a href="#about" onClick={() => setOpen(false)} className="block text-sm py-2">Über mich</a>
          <a href="#faq" onClick={() => setOpen(false)} className="block text-sm py-2">FAQ</a>
          <Link to="/auth" onClick={() => setOpen(false)}>
            <Button size="sm" className="rounded-full w-full">Login</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
