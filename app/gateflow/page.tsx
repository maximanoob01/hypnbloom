"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Shield, Clock, Users, BarChart, FileText, Bell, Lock,
  Database, ChevronRight, Check, Smartphone, Eye, TrendingUp,
  Building, Award, Zap, ArrowRight, Play, Star, CheckCircle2
} from "lucide-react";

// ==========================================
// DATA: FEATURES
// ==========================================
const features = [
  {
    icon: Smartphone,
    title: "Smart Digital Student ID",
    description: "Interactive digital ID cards with real-time status tracking and instant verification.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Eye,
    title: "Live Entry & Exit Monitoring",
    description: "Track student movement instantly at hostel gates with real-time logging.",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Shield,
    title: "Secure Verification System",
    description: "Instant identity verification for hostel security with biometric integration.",
    color: "from-cyan-500/20 to-teal-500/20"
  },
  {
    icon: BarChart,
    title: "Hostel Dashboard",
    description: "Real-time analytics for wardens and supervisors with comprehensive insights.",
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    icon: FileText,
    title: "Digital Gate Pass",
    description: "Students can request and manage gate passes digitally with automated approval.",
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Users,
    title: "Admin Control Panel",
    description: "Centralized management for all hostel activities with role-based access.",
    color: "from-teal-500/20 to-cyan-500/20"
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Instant notifications for suspicious activity and security breaches.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Lock,
    title: "Data & Security",
    description: "Encrypted student records and secure access control with compliance.",
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

// ==========================================
// DATA: HOW IT WORKS
// ==========================================
const steps = [
  {
    number: "01",
    title: "Student Login",
    description: "Students log into GateFlow with their university credentials and create their profile.",
    icon: Users
  },
  {
    number: "02",
    title: "Generate Digital ID",
    description: "System generates a secure digital hostel ID with QR code and verification details.",
    icon: Smartphone
  },
  {
    number: "03",
    title: "Gate Verification",
    description: "Supervisor scans ID at gate for instant verification and access approval.",
    icon: Shield
  },
  {
    number: "04",
    title: "Entry Recorded",
    description: "Entry/exit automatically logged in the system with timestamp and location data.",
    icon: Database
  }
];

// ==========================================
// DATA: PARTNERED INSTITUTIONS
// ==========================================
const institutions = [
  { name: "COER University", location: "Roorkee" },
  { name: "Graphic Era University", location: "Dehradun" },
  { name: "Patanjali University", location: "Haridwar" },
  { name: "Roorkee Institute of Technology", location: "Roorkee" },
  { name: "Quantum University", location: "Roorkee" }
];

// ==========================================
// DATA: BENEFITS
// ==========================================
const benefits = [
  { icon: FileText, title: "Reduces Manual Paperwork", description: "Eliminate physical registers and forms" },
  { icon: Shield, title: "Improves Hostel Security", description: "Enhanced verification and monitoring" },
  { icon: Clock, title: "Saves Administrative Time", description: "Automate routine tasks and processes" },
  { icon: Eye, title: "Real-Time Monitoring", description: "Live tracking and instant alerts" },
  { icon: TrendingUp, title: "Scalable for Universities", description: "Grows with your institution" },
  { icon: Award, title: "Compliance Ready", description: "Meet regulatory requirements" }
];

// ==========================================
// DATA: STATS
// ==========================================
const stats = [
  { value: "10M+", label: "Entry Records" },
  { value: "99.99%", label: "System Uptime" },
  { value: "<1sec", label: "Verification Time" },
  { value: "5+", label: "Partner Universities" }
];

export default function GateFlowPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 noise-texture opacity-30 mix-blend-overlay" />
        
        {/* Blue Gradient Orbs */}
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
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px]"
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
          className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-cyan-600/20 rounded-full blur-[140px]"
        />
      </motion.div>

      {/* ================= HERO SECTION ================= */}
      <motion.section 
        style={{ opacity: heroOpacity }}
        className="relative pt-32 pb-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-blue-500/30 mb-8 hover:border-blue-500/50 transition-all group"
              >
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold tracking-wider text-gray-300">
                  Smart Hostel Management
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter leading-[1.1]"
              >
                <span className="block text-white">GateFlow</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
                  Smart Digital Hostel
                </span>
                <span className="block text-white">Management System</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-gray-400 mb-8 leading-relaxed"
              >
                Transform traditional hostel management into a smart, secure, and automated system with{" "}
                <span className="text-white font-semibold">digital identity cards</span>,{" "}
                <span className="text-white font-semibold">real-time entry tracking</span>, and{" "}
                <span className="text-white font-semibold">intelligent monitoring</span>.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#demo"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                  >
                    <Play className="w-5 h-5" />
                    <span>Request Demo</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#features"
                    className="px-8 py-4 rounded-full glass-dark border border-blue-500/30 hover:border-blue-500/50 font-bold transition-all duration-300"
                  >
                    View Features
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                
                {/* Dashboard Mockup Card */}
                <div className="relative glass-dark rounded-3xl p-8 border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="glass-darker rounded-2xl p-4 border border-blue-500/20"
                      >
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Live Status Indicator */}
                  <div className="flex items-center justify-between glass-darker rounded-xl p-4 border border-blue-500/20">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
                      </div>
                      <span className="text-sm font-medium">System Online</span>
                    </div>
                    <div className="text-xs text-gray-500">Live Monitoring Active</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">GateFlow</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                GateFlow is a smart hostel management platform designed for modern universities. It replaces manual gate registers with a{" "}
                <span className="text-white font-semibold">fully digital system</span> that manages student entry, hostel verification, security monitoring, and real-time hostel data.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Our platform helps hostel wardens, security guards, hostel administrators, and university management streamline operations and enhance security.
              </p>

              {/* Who It Helps */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "Hostel Wardens" },
                  { icon: Shield, label: "Security Guards" },
                  { icon: Building, label: "Administrators" },
                  { icon: Award, label: "Universities" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 glass-dark rounded-xl p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square glass-dark rounded-3xl border border-blue-500/20 p-8 relative overflow-hidden">
                {/* Animated Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-8 right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"
                />
                
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                  <Shield className="w-24 h-24 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Secure. Smart. Simple.</h3>
                  <p className="text-gray-400">
                    Built for the modern campus with enterprise-grade security
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section id="features" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Features</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage your hostel digitally
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                
                <div className="relative glass-dark rounded-3xl p-6 border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4"
                  >
                    <feature.icon className="w-7 h-7 text-blue-400" />
                  </motion.div>

                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              How GateFlow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Works</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple, secure, and efficient in just four steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="glass-dark rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-blue-500/20 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6"
                  >
                    <step.icon className="w-7 h-7 text-blue-400" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERED INSTITUTIONS ================= */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Leading Institutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              GateFlow is designed to support modern campuses and is built to scale across multiple institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutions.map((institution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-dark rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 text-center"
              >
                <Building className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{institution.name}</h3>
                <p className="text-sm text-gray-500">{institution.location}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Trust Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 glass-dark px-6 py-3 rounded-full border border-blue-500/20">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Serving 5+ partner universities with 10M+ entry records</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY GATEFLOW SECTION ================= */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">GateFlow?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your hostel operations with modern technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-dark rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section id="demo" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
            
            {/* Card */}
            <div className="relative glass-dark rounded-3xl p-12 md:p-16 text-center border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Hostel Management with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">GateFlow</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Join leading institutions in modernizing hostel operations with our intelligent platform
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                  >
                    <Play className="w-6 h-6" />
                    <span>Request Demo</span>
                    <ChevronRight className="w-6 h-6" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="px-10 py-5 rounded-full glass-dark border border-blue-500/30 hover:border-blue-500/50 font-bold text-lg transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">GateFlow</span>
              </div>
              <p className="text-gray-400 mb-4">
                Smart Hostel Management Platform
              </p>
              <p className="text-sm text-gray-500">
                Transforming university hostel operations with intelligent digital solutions
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/features" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>support@gateflow.com</li>
                <li>+91-XXXXXXXXXX</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 GateFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Built by</span>
              <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                Hypenbloom
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}