import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-12">
      {/* Aesthetic Top Border Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Soothing Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-white/2 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Brand & Tagline */}
        <div className="mb-16 text-center flex flex-col items-center">
          <Link href="/" className="inline-block group">
            <h2 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500 mb-4 transition-all duration-500 group-hover:to-gray-300">
              HypenBloom.
            </h2>
          </Link>
          <p className="text-gray-500 text-sm max-w-sm mx-auto font-light leading-relaxed">
            Eliminating friction between idea and execution. Architecting systems that scale.
          </p>
        </div>

        {/* Links and Copyright Layout */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          
          {/* Copyright & Location */}
          <div className="text-gray-500 text-sm font-light flex items-center gap-3">
            <span>© 2026 HypenBloom</span>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <span>Crafted in Dehradun</span>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-8 text-sm text-gray-400 font-medium">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Twitter
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              LinkedIn
            </a>
            {/* Make sure to drop your updated GitHub URL in the href below */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}