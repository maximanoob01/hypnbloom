"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Shourya Gupta",
    role: "Founder & Lead Developer",
    bio: "Architecting full-stack systems and integrating advanced machine learning models to build intelligent, high-performance software.",
    image: "/shourya.jpeg",
    initials: "SG",
  },
  {
    name: "Pradhumay Gaur",
    role: "Co-Founder",
    bio: "Driving product strategy, streamlining business operations, and ensuring our AI solutions deliver tangible market value.",
    image: "/pradhumay.jpeg",
    initials: "PG",
  },
];

const pillars = [
  {
    title: "AI Integration",
    description: "We embed intelligent automation deep into the core of your software, eliminating manual workflows completely.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Flawless Execution",
    description: "Ideas are cheap. We focus on building applications that actually work out of the box, with zero friction and high reliability.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Scalable Architecture",
    description: "From database design to frontend rendering, our systems are engineered to endure heavy traffic and scale effortlessly.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
];

// Staggered animation variants for the grid items
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section className="relative w-full min-h-screen py-32 overflow-hidden flex flex-col items-center justify-start">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200500px] bg-white/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* ================= MISSION STATEMENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32 text-center flex flex-col items-center mt-12"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide text-gray-300">
            Welcome to HypenBloom
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
            We build software that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-rrom-gray-200 via-white to-gray-500 text-shimmer">
              actually works.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed font-light">
            Our mission is to eliminate friction between idea and execution. We engineer{" "}
            <span className="text-white font-medium">AI-integrated applications</span> designed to automate the mundane, ease complex workflows completely, and deliver software that scales from day one.
          </p>
        </motion.div>

        {/* ================= CORE PILLARS ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mb-32"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-light p-8 rounded-3xl border border-white/5 hover:border-white/15 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= FOUNDERS GRID ================= */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Leadership.</h2>
          <div className="w-12 h-1 bg-linear-to-r from-white/40 to-transparent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="glass-dark p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group hover:glass-darker transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Profile Image Wrapper */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors duration-500 shadow-xl">
                <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-xl font-bold text-white/50 z-0">
                  {founder.initials}
                </div>
                <Image
                  src={founder.image}
                  alt={`${founder.name} - ${founder.role}`}
                  fill
                  className="object-cover relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>

              {/* Founder Info */}
              <div className="relative z-20">
                <h3 className="text-3xl font-bold mb-2 tracking-tight group-hover:text-white transition-colors">{founder.name}</h3>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-5 inline-block">
                  {founder.role}
                </div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {founder.bio}
                </p>
              </div>

              {/* Subtle decorative gradient orb inside the card */}
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors duration-700" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}