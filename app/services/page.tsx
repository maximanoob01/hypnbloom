"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { 
  Check, ArrowRight, Code, Brain, TrendingUp, Sparkles,
  Zap, Shield, Globe, Cpu, Database, Network, Target,
  Clock, DollarSign, Users, ChevronRight, Star, Rocket,
  BarChart, Lock, LineChart
} from "lucide-react";
import Link from "next/link";

// ==========================================
// DATA: SERVICES
// ==========================================
const services = [
  {
    title: "SaaS Architecture",
    description: "End-to-end development of scalable, high-performance software products built for the AI-first era.",
    price: "Custom Scope",
    icon: Code,
    highlight: false,
    gradient: "from-purple-500/20 to-pink-500/20",
    features: [
      "Next.js & React Frameworks", 
      "High-Performance Backends", 
      "Stripe Payment Infrastructure", 
      "Enterprise-Grade Security",
      "Real-time Data Sync",
      "API Design & Integration"
    ],
    deliverables: ["Architecture Docs", "Deployment", "CI/CD", "Monitoring"],
    timeline: "8-12 weeks",
    results: ["3x Faster Load", "99.99% Uptime", "50% Cost Reduction"]
  },
  {
    title: "AI Integration",
    description: "Inject custom machine learning models and autonomous AI agents directly into your workflows.",
    price: "Custom Scope",
    icon: Brain,
    highlight: true,
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    features: [
      "Custom LLM Implementation", 
      "Autonomous AI Agents", 
      "Predictive Data Analytics", 
      "Automated ML Pipelines",
      "Model Fine-tuning",
      "AI Performance Optimization"
    ],
    deliverables: ["AI Deployment", "API Endpoints", "Documentation", "Training Pipeline"],
    timeline: "6-10 weeks",
    results: ["10x Efficiency", "97% Accuracy", "60% Time Saved"]
  },
  {
    title: "Growth Systems",
    description: "Data-driven optimization and infrastructure designed to scale your user base exponentially.",
    price: "Custom Scope",
    icon: TrendingUp,
    highlight: false,
    gradient: "from-cyan-500/20 to-blue-500/20",
    features: [
      "Technical SEO Optimization", 
      "System Performance Audits", 
      "Conversion Rate Optimization", 
      "Advanced Analytics Setup",
      "A/B Testing Framework",
      "Growth Metrics Dashboard"
    ],
    deliverables: ["SEO Strategy", "Performance Report", "Analytics", "Growth Playbook"],
    timeline: "4-8 weeks",
    results: ["200% Traffic", "45% Conversion", "5x ROI"]
  }
];

// ==========================================
// DATA: PROCESS STEPS
// ==========================================
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into requirements, goals, and constraints to build a comprehensive roadmap.",
    icon: Target,
    duration: "1-2 weeks"
  },
  {
    number: "02",
    title: "Architecture",
    description: "Design scalable system architecture with detailed specs and data models.",
    icon: Cpu,
    duration: "2-3 weeks"
  },
  {
    number: "03",
    title: "Development",
    description: "Agile sprints with continuous integration, demos, and your feedback.",
    icon: Code,
    duration: "4-8 weeks"
  },
  {
    number: "04",
    title: "Deployment",
    description: "Production launch with monitoring, documentation, and ongoing support.",
    icon: Zap,
    duration: "1-2 weeks"
  }
];

// ==========================================
// DATA: VALUE PROPS
// ==========================================
const valueProps = [
  {
    icon: Clock,
    title: "Rapid Delivery",
    description: "Production-ready in 6-12 weeks"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliance built-in"
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Senior engineers assigned"
  },
  {
    icon: DollarSign,
    title: "Fixed Pricing",
    description: "Transparent, no surprises"
  }
];

// ==========================================
// DATA: TECH STACK
// ==========================================
const techStack = [
  { category: "Frontend", tools: ["Next.js", "React", "TypeScript", "Tailwind"], icon: Code },
  { category: "Backend", tools: ["Node.js", "Python", "PostgreSQL", "Redis"], icon: Database },
  { category: "AI/ML", tools: ["GPT-4", "Claude", "TensorFlow", "PyTorch"], icon: Brain },
  { category: "Cloud", tools: ["AWS", "Vercel", "Docker", "Kubernetes"], icon: Globe },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-black overflow-hidden">
      
      {/* ================= ANIMATED BACKGROUND ================= */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 -z-20"
      >
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 noise-texture opacity-30 mix-blend-overlay" />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-500/30 rounded-full blur-[120px]"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-red-600/20 rounded-full blur-[140px]"
        />
      </motion.div>

      {/* ================= HERO SECTION ================= */}
      <motion.section 
        style={{ opacity: heroOpacity }}
        className="relative pt-32 pb-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-white/10 mb-8 hover:border-orange-500/30 transition-all group"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-semibold tracking-wider text-gray-300">
                Enterprise Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-[1.1]"
            >
              <span className="block text-white">Transform Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-glow-sm">
                Business Logic
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Engineering excellence for the modern web. We architect systems designed for{" "}
              <span className="text-white font-semibold">scale</span> and{" "}
              <span className="text-white font-semibold">intelligence</span>.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= VALUE PROPS ================= */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4"
                >
                  <prop.icon className="w-6 h-6 text-orange-400" />
                </motion.div>
                <h3 className="text-sm font-bold mb-2">{prop.title}</h3>
                <p className="text-xs text-gray-500">{prop.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Three pillars of modern software engineering, delivered with precision
            </p>
          </motion.div>

          {/* Services Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Hover Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                
                {/* Card */}
                <div className={`relative p-8 rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-500 ${
                  service.highlight 
                    ? "glass-darker border-orange-500/30 shadow-[0_0_40px_rgba(255,69,0,0.2)]" 
                    : "glass-dark border-white/10 group-hover:border-white/20"
                }`}>
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Popular Badge */}
                  {service.highlight && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="absolute top-4 right-4 px-3 py-1 rounded-full bg-orange-500 text-black text-xs font-bold z-10 flex items-center gap-1"
                    >
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </motion.div>
                  )}

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl ${
                        service.highlight ? 'bg-orange-500' : 'bg-white/5'
                      } border border-white/10 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(255,69,0,0.3)]`}
                    >
                      <service.icon className={`w-8 h-8 ${
                        service.highlight ? 'text-black' : 'text-white'
                      }`} />
                    </motion.div>
                  </div>

                  {/* Header */}
                  <div className="relative z-10 mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Timeline & Price */}
                  <div className="relative z-10 mb-6 pb-6 border-b border-white/10 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                        Timeline
                      </div>
                      <div className="text-sm font-medium text-white">{service.timeline}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                        Investment
                      </div>
                      <div className="text-sm font-medium text-white">{service.price}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="relative z-10 mb-6 flex-1">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                      What's Included
                    </div>
                    <ul className="space-y-3">
                      {service.features.map((feature, f) => (
                        <motion.li 
                          key={f}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: f * 0.05 }}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="relative z-10 mb-6">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                      Expected Results
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.results.map((result, r) => (
                        <span key={r} className="px-3 py-1 rounded-full text-xs glass-darker border border-orange-500/20 text-orange-300">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="relative z-10 mb-6">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                      Deliverables
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item, d) => (
                        <span key={d} className="px-3 py-1 rounded-full text-xs glass-darker border border-white/10">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="relative z-10"
                  >
                    <Link 
                      href="/contact"
                      className={`w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 group/btn ${
                        service.highlight
                          ? "bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 shadow-[0_0_30px_rgba(255,69,0,0.3)]"
                          : "bg-white/5 text-white hover:bg-white hover:text-black border border-white/10 hover:border-transparent"
                      }`}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </motion.div>

                  {/* Grid Pattern Overlay */}
                  <div className="absolute inset-0 grid-pattern opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that delivers results on time, every time
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="glass-dark rounded-3xl p-8 border border-white/10 group-hover:border-orange-500/30 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-white/10 mb-4 group-hover:text-orange-500/20 transition-colors">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/10 group-hover:border-orange-500/30"
                  >
                    <step.icon className="w-7 h-7 text-orange-400" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Duration */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Duration</div>
                    <div className="text-sm font-medium">{step.duration}</div>
                  </div>
                </div>

                {/* Connector Line (not on last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500/30 to-transparent z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-400">
              Industry-leading technologies for maximum performance
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative glass-dark rounded-2xl p-6 border border-white/10 group-hover:border-orange-500/30 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4"
                  >
                    <stack.icon className="w-5 h-5 text-orange-400" />
                  </motion.div>

                  <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4">
                    {stack.category}
                  </h3>
                  <div className="space-y-2">
                    {stack.tools.map((tool, t) => (
                      <motion.div 
                        key={t} 
                        className="flex items-center gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: t * 0.05 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        <span className="text-sm">{tool}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= RESULTS METRICS ================= */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Track Record</span>
            </h2>
            <p className="text-xl text-gray-400">
              Numbers that demonstrate real business impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "10M+", label: "API Requests Daily", icon: BarChart },
              { metric: "99.99%", label: "System Uptime", icon: Shield },
              { metric: "3x", label: "Faster Delivery", icon: Zap },
              { metric: "50+", label: "Projects Completed", icon: Rocket }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                
                <div className="relative glass-dark rounded-3xl p-8 border border-white/10 group-hover:border-orange-500/30 transition-all duration-300 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <stat.icon className="w-6 h-6 text-orange-400" />
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-3">
                    {stat.metric}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Ready to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Something Great?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Let's discuss your project and transform your vision into production-ready software.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-[0_0_30px_rgba(255,69,0,0.4)] group/btn"
                    >
                      <Rocket className="w-6 h-6" />
                      <span>Schedule Consultation</span>
                      <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/features"
                      className="px-10 py-5 rounded-full glass-dark border border-white/10 hover:border-orange-500/30 font-bold text-lg transition-all duration-300"
                    >
                      View Portfolio
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}