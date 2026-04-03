"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Sparkles, Lock, ChefHat, Zap, Shield, Cloud, Database,
  ArrowRight, Check, ExternalLink, ChevronRight, TrendingUp,
  Users, BarChart, CreditCard, Package, Clock, Receipt,
  Brain, Code, Rocket, Star, Target
} from "lucide-react";

// ==========================================
// DATA: PRODUCTS
// ==========================================
const products = [
  {
    name: "GateFlow",
    tagline: "Security System Reimagined",
    description: "An advanced hostel security and management system. Features real-time entry tracking, biometric integration, and automated reporting for university campuses.",
    icon: Lock,
    gradient: "from-cyan-500/20 to-blue-500/20",
    features: [
      "Real-time entry tracking",
      "Biometric integration",
      "Automated reporting",
      "Multi-layered security",
      "24/7 monitoring",
      "Instant alerts",
    ],
    tags: ["Next.js", "Security", "Real-time", "Biometric"],
    stats: {
      uptime: "99.99%",
      entries: "10M+",
      response: "<1sec",
    },
    metrics: [
      { label: "Daily Entries", value: "50K+" },
      { label: "Security Score", value: "A+" },
      { label: "Response Time", value: "<1s" }
    ]
  },
  {
    name: "Rasoi360",
    tagline: "Restaurant Intelligence Platform",
    description: "Complete restaurant management and POS system powered by AI. From orders to inventory, streamline your entire restaurant operation in one intelligent platform.",
    icon: ChefHat,
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    features: [
      "Smart POS system",
      "Real-time inventory tracking",
      "AI-powered analytics",
      "Multi-location support",
      "Kitchen display system",
      "Customer management",
    ],
    tags: ["AI", "POS", "Restaurant", "Analytics"],
    stats: {
      restaurants: "500+",
      orders: "1M+",
      uptime: "99.9%",
    },
    metrics: [
      { label: "Active Restaurants", value: "500+" },
      { label: "Monthly Orders", value: "1M+" },
      { label: "Average Sales Growth", value: "+45%" }
    ]
  },
  {
    name: "PaperFlow.ai",
    tagline: "AI-Powered Exam Paper Generation",
    description: "Revolutionary exam paper creation system powered by advanced AI. Upload your question bank and let our smart assistant generate perfectly formatted PDF examination papers in seconds.",
    icon: Brain,
    gradient: "from-purple-500/20 via-pink-500/20 to-orange-500/20",
    features: [
      "AI-assisted paper generation",
      "Question bank management",
      "Smart question selection",
      "PDF export with formatting",
      "Multiple paper patterns",
      "Difficulty level balancing",
    ],
    tags: ["AI", "Education", "Automation", "PDF Generation"],
    stats: {
      papers: "10K+",
      accuracy: "99.5%",
      time_saved: "95%",
    },
    metrics: [
      { label: "Papers Generated", value: "10K+" },
      { label: "AI Accuracy", value: "99.5%" },
      { label: "Time Saved", value: "95%" }
    ]
  },
];

// ==========================================
// DATA: CAPABILITIES
// ==========================================
const capabilities = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Built on modern infrastructure for sub-second response times and real-time updates.",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, role-based access, and SOC 2 compliance built-in.",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Scalable architecture that grows with your business, from startup to enterprise.",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Database,
    title: "Real-time Sync",
    description: "Instant data synchronization across all devices and locations worldwide.",
    color: "from-purple-500/20 to-pink-500/20"
  },
];

// ==========================================
// DATA: FEATURES
// ==========================================
const platformFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Machine learning algorithms that adapt and optimize your operations automatically.",
    highlights: ["Predictive Analytics", "Smart Recommendations", "Automated Insights"]
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Deep insights into your business with real-time dashboards and custom reports.",
    highlights: ["Live Dashboards", "Custom Reports", "Export Anywhere"]
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description: "Team collaboration with role-based permissions and activity tracking.",
    highlights: ["Unlimited Users", "Role Management", "Activity Logs"]
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "Go live in minutes, not months. No complex setup or technical knowledge required.",
    highlights: ["5-Minute Setup", "Zero Downtime", "Instant Updates"]
  }
];

// ==========================================
// DATA: INDUSTRIES
// ==========================================
const industries = [
  {
    name: "Education",
    icon: "🎓",
    description: "Universities, colleges, and hostels",
    products: ["GateFlow", "PaperFlow.ai"]
  },
  {
    name: "Hospitality",
    icon: "🍽️",
    description: "Restaurants, cafes, and cloud kitchens",
    products: ["Rasoi360"]
  },
  {
    name: "Enterprise",
    icon: "🏢",
    description: "Corporate campuses and facilities",
    products: ["GateFlow", "Custom Solutions"]
  },
  {
    name: "Retail",
    icon: "🛍️",
    description: "Stores and multi-location chains",
    products: ["Rasoi360", "Inventory Systems"]
  }
];

export default function FeaturesPage() {
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
                Featured Products
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter leading-[1.1]"
            >
              <span className="block text-white">Intelligent by</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-glow-sm">
                Design
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Every product we build is crafted with precision, powered by AI, and designed to solve{" "}
              <span className="text-white font-semibold">real problems</span>.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= PRODUCTS SHOWCASE ================= */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Product Info */}
                <motion.div
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,69,0,0.3)]"
                  >
                    <product.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h2 className="text-5xl font-bold mb-3 tracking-tight">{product.name}</h2>
                  <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 font-semibold mb-6">
                    {product.tagline}
                  </p>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        className="flex items-start space-x-2"
                      >
                        <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 glass-dark rounded-full text-xs border border-orange-500/20 hover:border-orange-500/50 transition-colors cursor-default text-orange-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {product.metrics.map((metric, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={
                        product.name === "GateFlow"
                          ? "/gateflow"
                          : product.name === "Rasoi360"
                            ? "/rasoi360"
                            : product.name === "PaperFlow.ai"
                              ? "/paperflow.ai"
                              : "/contact"
                      }
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-[0_0_30px_rgba(255,69,0,0.3)] group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Product Visual - Stats Card */}
                <motion.div
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative group/card">
                    {/* Hover Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} rounded-3xl opacity-0 group-hover/card:opacity-100 blur-xl transition-opacity duration-500`} />

                    {/* Main Card */}
                    <div className="relative glass-dark rounded-3xl p-12 border border-white/10 group-hover/card:border-orange-500/30 transition-all duration-300">
                      {/* Stats Grid */}
                      <div className="space-y-8">
                        {Object.entries(product.stats).map(([key, value], idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            className="group/stat"
                          >
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400 }}
                              className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 group-hover/stat:from-orange-300 group-hover/stat:to-red-500 transition-colors"
                            >
                              {value}
                            </motion.div>
                            <div className="text-sm text-gray-400 capitalize">
                              {key.replace('_', ' ')}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Floating Elements */}
                      <motion.div
                        className="absolute top-8 right-8 w-20 h-20 rounded-full bg-orange-500/10 blur-2xl"
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <motion.div
                        className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-red-500/10 blur-2xl"
                        animate={{
                          y: [0, 10, 0],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PLATFORM FEATURES ================= */}
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Features</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful capabilities built into every product we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <div className="relative glass-dark rounded-3xl p-8 border border-white/10 group-hover:border-orange-500/30 transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/20 flex items-center justify-center mb-6"
                  >
                    <feature.icon className="w-7 h-7 text-orange-400" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES SECTION ================= */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Different</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The technology foundation that powers exceptional products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group/cap"
              >
                <div className={`glass-dark rounded-2xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 h-full relative overflow-hidden`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover/cap:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover/cap:bg-orange-500/10 group-hover/cap:border-orange-500/30 transition-colors"
                    >
                      <capability.icon className="w-6 h-6 text-orange-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES SECTION ================= */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Across Industries</span>
            </h2>
            <p className="text-xl text-gray-400">
              Solutions tailored for your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-dark rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {industry.products.map((product, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full glass-darker border border-orange-500/20 text-orange-300">
                      {product}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group/cta"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/30 via-red-600/30 to-orange-500/30 rounded-3xl opacity-0 group-hover/cta:opacity-100 blur-2xl transition-opacity duration-500" />

            {/* Card */}
            <div className="relative glass-dark rounded-3xl p-12 md:p-16 text-center border border-white/10 group-hover/cta:border-orange-500/30 transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Future</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Ready to transform your operations? Get started with our intelligent products today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-[0_0_30px_rgba(255,69,0,0.4)] space-x-2 group/btn"
                    >
                      <Rocket className="w-5 h-5" />
                      <span>Get Started</span>
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/services"
                      className="px-8 py-4 rounded-full glass-dark hover:bg-white/10 border border-white/10 hover:border-orange-500/30 transition-all duration-300 font-bold inline-flex items-center space-x-2"
                    >
                      <span>View Services</span>
                      <ExternalLink className="w-4 h-4" />
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