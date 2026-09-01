import { Link } from "react-router";
import { Coffee, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 min-h-[75vh] flex items-center justify-center px-4 bg-[#faf7f2]">
      <div className="text-center max-w-md mx-auto">
        <div className="w-20 h-20 rounded-3xl bg-[#2b1810]/10 flex items-center justify-center text-[#c88242] mx-auto mb-6">
          <Coffee className="w-10 h-10" />
        </div>
        <h1 className="font-display text-6xl font-black text-[#2b1810] mb-2">404</h1>
        <h2 className="font-display text-2xl font-bold text-[#2b1810] mb-3">Page Not Found</h2>
        <p className="text-sm text-[#6b5c54] mb-8 leading-relaxed">
          Looks like this table is empty! The page you are looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-caramel px-6 py-3 text-xs font-bold gap-2">
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
      </div>
    </div>
  );
}
