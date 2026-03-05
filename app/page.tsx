"use client";

import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { 
  ArrowRight, Shield, Zap, Globe, Sparkles, Cpu, Database, 
  Network, Brain, Rocket, Code, Users, TrendingUp, Check,
  Play, ExternalLink, ChevronRight, Target, Lightbulb, Heart
} from "lucide-react";

// ==========================================
// ANIMATED COUNTER COMPONENT
// ==========================================
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isNumber = !isNaN(parseFloat(value.replace(/[^\d.]/g, '')));
  const target = isNumber ? parseFloat(value.replace(/[^\d.]/g, '')) : 0;

  useEffect(() => {
    if (!isNumber) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, isNumber]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold tracking-tight text-white">
      {isNumber ? count.toLocaleString() : value}
      {suffix}
    </div>
  );
}

// ==========================================
// MARQUEE COMPONENT
// ==========================================
function Marquee({ children, speed = 50 }: { children: React.ReactNode; speed?: number }) {
  return (
    <div className="relative flex overflow-hidden py-8">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// ==========================================
// DATA: BENTO BOX FEATURES
// ==========================================
const features = [
  {
    title: "Agentic AI Systems",
    description: "Build autonomous AI agents that think, plan, and execute complex workflows without human intervention.",
    icon: Brain,
    span: "col-span-1 md:col-span-2 row-span-1",
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
  },
  {
    title: "Global Edge CDN",
    description: "Sub-30ms latency worldwide with our distributed edge computing infrastructure.",
    icon: Globe,
    span: "col-span-1 row-span-1",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 compliance, and zero-trust architecture built-in.",
    icon: Shield,
    span: "col-span-1 row-span-1",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Custom ML Models",
    description: "Deploy fine-tuned LLMs on edge infrastructure with enterprise-grade performance.",
    icon: Cpu,
    span: "col-span-1 row-span-1",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Infinite Storage",
    description: "S3-compatible object storage that seamlessly scales with your data needs.",
    icon: Database,
    span: "col-span-1 row-span-1",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Dynamic Auto-Scaling",
    description: "Scale from zero to thousands of GPU instances based on real-time demand.",
    icon: Zap,
    span: "col-span-1 md:col-span-2 row-span-1",
    gradient: "from-orange-500/20 via-red-500/20 to-purple-500/20",
  },
];

// ==========================================
// DATA: PORTFOLIO PROJECTS
// ==========================================
const portfolioProjects = [
  {
    title: "Enterprise AI Platform",
    category: "SaaS Product",
    description: "Real-time analytics powered by custom LLM models serving 10M+ requests daily",
    tags: ["Next.js", "GPT-4", "Real-time"],
    metrics: { users: "2M+", uptime: "99.99%", response: "<50ms" },
  },
  {
    title: "Autonomous Workflow Engine",
    category: "Agentic AI",
    description: "Self-learning agents that automate complex business processes end-to-end",
    tags: ["Claude", "Python", "Automation"],
    metrics: { tasks: "500K+", accuracy: "97%", saved: "10K hrs" },
  },
  {
    title: "Healthcare Data Hub",
    category: "Enterprise",
    description: "HIPAA-compliant patient data platform with AI-powered insights",
    tags: ["Security", "ML", "Cloud"],
    metrics: { records: "5M+", compliance: "100%", speed: "3x" },
  },
];

// ==========================================
// DATA: TESTIMONIALS
// ==========================================
const testimonials = [
  {
    quote: "Hypenbloom transformed our legacy system into a cutting-edge AI platform in 6 weeks. The ROI was immediate and substantial.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Industries",
    rating: 5,
  },
  {
    quote: "The agentic AI they built processes 100K transactions per hour with zero human intervention. Game-changing technology.",
    author: "Marcus Rodriguez",
    role: "CEO, DataStream Corp",
    rating: 5,
  },
  {
    quote: "Exceptional technical depth combined with lightning-fast execution. Hypenbloom sets the new standard for AI development.",
    author: "Dr. Emily Watson",
    role: "Head of Innovation, CloudScale",
    rating: 5,
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-black">
      
      {/* ================= GLOBAL BACKGROUND EFFECTS ================= */}
      <div className="fixed inset-0 -z-30">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 noise-texture opacity-30 mix-blend-overlay" />
        
        {/* Hypenbloom Signature Orange Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] bg-orange-500/30 rounded-full blur-[140px]"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[-15%] right-[-10%] w-[900px] h-[900px] bg-red-600/20 rounded-full blur-[160px]"
        />
      </div>

      {/* ================= HERO SECTION ================= */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32"
      >
        {/* Animated Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-8 group hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,69,0,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
          </span>
          <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
            HypenBloom V2.0 • Production Ready
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.95]"
        >
          <span className="block text-white">Transcend</span>
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-glow-sm animate-pulse-glow">
              Ordinary
            </span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We build high-performance{" "}
          <span className="text-white font-semibold">SaaS solutions</span>{" "}
          that merge minimalist design with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 font-semibold">
            ruthless AI efficiency
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,69,0,0.3)] hover:shadow-[0_0_40px_rgba(255,69,0,0.5)]"
            >
              <Sparkles className="w-5 h-5" />
              <span>Initiate Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full glass-dark border border-white/10 hover:border-orange-500/30 font-bold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore Capabilities</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.6 },
            y: { delay: 1.5, duration: 2, repeat: Infinity },
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-orange-500/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ================= MARQUEE TEXT ================= */}
      <section className="relative py-12 border-y border-white/10 overflow-hidden">
        <Marquee speed={35}>
          {["AI-Powered", "Edge Computing", "Agentic Systems", "Enterprise Ready", "Zero Latency", "Infinite Scale"].map((text, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-4xl md:text-5xl font-bold text-white/10 whitespace-nowrap">
                {text}
              </span>
              <span className="text-orange-500/30">●</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Battle-Tested at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                Scale
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powering mission-critical infrastructure for the world's most demanding applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "120", suffix: "M+", label: "Active Users", icon: Users },
              { value: "99.99", suffix: "%", label: "System Uptime", icon: Zap },
              { value: "50", suffix: "+", label: "Enterprise Clients", icon: Shield },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative glass-dark rounded-3xl p-8 border border-white/10 group-hover:border-orange-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300">
                      <stat.icon className="w-6 h-6 text-gray-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENTO GRID FEATURES ================= */}
      <section className="relative py-32 px-6">
        {/* Mid-page ambient glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 opacity-40 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 text-sm mb-6">
              <span className="text-orange-500">❖</span>
              <span className="text-gray-300">Core Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Unleash Your Application's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                Full Power
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade infrastructure built for the AI-first era
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                whileHover={{ y: -5 }}
                className={`group relative p-8 rounded-3xl overflow-hidden flex flex-col justify-between ${feature.span}`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Glass Layer */}
                <div className="absolute inset-0 glass-dark border border-white/10 group-hover:border-orange-500/30 transition-all duration-300" />

                {/* Internal Hover Glow */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-tr from-orange-500/30 to-red-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px] pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-500"
                  >
                    <feature.icon className="w-7 h-7 text-gray-400 group-hover:text-orange-400 transition-colors duration-500" />
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="inline-flex items-center text-sm font-medium text-gray-400 group-hover:text-orange-400 transition-colors">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 grid-pattern opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PORTFOLIO SHOWCASE ================= */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                Case Studies
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real solutions driving measurable business impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative glass-dark rounded-3xl overflow-hidden border border-white/10 group-hover:border-orange-500/30 transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="w-20 h-20 rounded-full glass-darker border border-orange-500/30 flex items-center justify-center backdrop-blur-xl">
                        <Play className="w-8 h-8 text-orange-400" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-sm text-orange-500 font-semibold mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4 pt-4 border-t border-white/10">
                      {Object.entries(project.metrics).map(([key, value], i) => (
                        <div key={i} className="text-center">
                          <div className="text-sm font-bold text-white">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs glass-darker border border-white/10 text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-dark border border-white/10 hover:border-orange-500/30 font-semibold transition-all duration-300"
              >
                <span>View Full Portfolio</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What Leaders{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                Say
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trusted by industry pioneers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-dark rounded-3xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current text-orange-500" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600" />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 via-red-600/30 to-orange-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative glass-dark rounded-3xl p-12 md:p-16 text-center border border-white/10 group-hover:border-orange-500/30 transition-all duration-300">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                  Tomorrow?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Transform your vision into a production-ready AI platform. Let's build something extraordinary.
              </p>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 group/btn shadow-[0_0_30px_rgba(255,69,0,0.4)] hover:shadow-[0_0_50px_rgba(255,69,0,0.6)]"
                >
                  <Rocket className="w-6 h-6" />
                  <span>Start Your Project</span>
                  <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transition Glow */}
      <div className="h-32 w-full bg-gradient-to-b from-transparent to-orange-500/5 pointer-events-none" />
    </div>
  );
}