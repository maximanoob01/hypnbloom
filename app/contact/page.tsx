"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative w-full min-h-screen py-32 overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-150600px] bg-white/2 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide text-gray-300">
              System Uplink
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
              Initiate <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-600">
                Protocol.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-md font-light leading-relaxed">
              Ready to eliminate friction? Send us your coordinates and let's architect your next intelligent system.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-1">Direct Channel</div>
                  <a href="mailto:hypnbloom@gmail.com" className="text-lg text-gray-300 hover:text-white transition-colors">
                  hypnbloom@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-1">Headquarters</div>
                  <p className="text-lg text-gray-300">
                    Dehradun, Uttarakhand<br />India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="glass-dark p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:glass-darker transition-all duration-500 shadow-2xl"
          >
            <form className="space-y-6 relative z-10">
              {/* Identity Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider">Identity</label>
                <input 
                  type="text" 
                  className="w-full bg-white/3 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all duration-300" 
                  placeholder="Your Name" 
                />
              </div>
              
              {/* Coordinates Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider">Coordinates</label>
                <input 
                  type="email" 
                  className="w-full bg-white/3 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/5sition-all duration-300" 
                  placeholder="email@company.com" 
                />
              </div>

              {/* Transmission Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider">Transmission</label>
                <textarea 
                  rows={5} 
                  className="w-full bg-white/3 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/5 transition-all duration-300 resize-none" 
                  placeholder="Tell us about your project parameters..." 
                />
              </div>

              {/* Submit Button */}
              <button 
                type="button"
                className="w-full relative group overflow-hidden bg-white text-black font-bold text-lg py-4 rounded-2xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Transmit Signal</span>
                <div className="absolute inset-0 bg-linear-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>

            {/* Subtle inner glow for the form card */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}