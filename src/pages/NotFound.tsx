import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundColor: "#1B2A5C" }}
    >
      <p className="text-[#CC2200] font-display text-2xl tracking-widest mb-4">404</p>
      <h1 className="text-white font-display text-6xl md:text-8xl mb-6">
        LOST IN THE FIREWORKS?
      </h1>
      <p className="text-white/70 text-lg mb-10 max-w-md">
        This page doesn't exist. But the party does.
      </p>
      <Link
        to="/"
        className="px-8 py-4 bg-[#CC2200] text-white font-black text-lg uppercase tracking-widest brutalist-border brutalist-shadow brutalist-shadow-hover"
      >
        BACK TO THE PARTY 🇺🇸
      </Link>
    </div>
  );
}
