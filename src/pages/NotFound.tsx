import { Link } from "react-router";
import { Home, Coffee } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#faf7f2]">
      <div className="text-center max-w-md p-8 glass-card rounded-3xl border border-[#e8ded3]">
        <Coffee className="w-16 h-16 text-[#c88242] mx-auto mb-6 animate-float-slow" />
        <h1 className="font-display text-6xl text-[#2b1810] font-extrabold mb-4">404</h1>
        <p className="text-[#2b1810] font-bold mb-2">This page seems to have gone cold.</p>
        <p className="text-xs text-[#6b5c54] mb-8">Let us take you back to something warm and freshly brewed.</p>
        <Link to="/" className="btn-caramel px-6 py-3 text-xs font-bold gap-2">
          <Home className="w-4 h-4 mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
}

