"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Target,
  Database,
  Layout,
  FileText,
  PieChart,
  Layers,
  History,
  PlayCircle,
  ArrowRight,
  CheckCircle2,
  XCircle,
  UploadCloud,
  Settings,
  Download,
  Zap,
  Shield,
  FileSpreadsheet,
  Server,
  TerminalSquare,
  Code
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PaperFlowLanding() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-900/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-orange-900/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">PaperFlow.ai</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block">
              Login
            </button>
            <button className="px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] text-white">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        {/* 1. HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 pt-10 pb-24 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">AI-Powered Exam Paper Generation</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
              Generate Perfect <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                Exam Papers in Seconds
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Upload your question bank, let AI create professionally formatted examination papers automatically. Save 95% of your time with intelligent paper generation.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] text-white flex items-center justify-center gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" /> Watch Demo
              </button>
            </motion.div>

            {/* Dashboard Mockup */}
            <motion.div 
              variants={fadeIn}
              className="mt-20 w-full max-w-5xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl relative"
            >
              <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  {[
                    { label: "Papers Generated", value: "1,248" },
                    { label: "AI Accuracy", value: "99.8%" },
                    { label: "Time Saved", value: "340 hrs" },
                    { label: "Live Status", value: "Online", isStatus: true }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2">
                      <span className="text-sm text-gray-400">{stat.label}</span>
                      <div className="flex items-center gap-2">
                        {stat.isStatus && <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />}
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                          {stat.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-48 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Generation Activity Chart Placeholder</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 2. HOW IT WORKS SECTION */}
        <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10 text-center">
           <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 mb-16 max-w-2xl mx-auto">Generate perfect exam papers in four simple steps</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: UploadCloud, title: "Upload Question Bank", desc: "Import your questions in any format (Word, Excel, PDF, CSV)" },
                { icon: Settings, title: "Configure Settings", desc: "Set difficulty level, topic distribution, marks allocation, and pattern" },
                { icon: Brain, title: "AI Generates Paper", desc: "Advanced AI selects questions, balances difficulty, and creates the paper" },
                { icon: Download, title: "Download PDF", desc: "Get professionally formatted, print-ready examination paper in seconds" }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeIn} className="relative flex flex-col items-center">
                  {i < 3 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent dashed-line" />}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/30 flex items-center justify-center mx-auto mb-6 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <step.icon className="w-8 h-8 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 3. CORE FEATURES SECTION */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to automate your examination generation process</p>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Brain, title: "AI-Powered Selection", desc: "Machine learning algorithms select optimal question combinations" },
              { icon: Target, title: "Smart Difficulty Balancing", desc: "Automatic distribution across easy, medium, and hard questions" },
              { icon: Database, title: "Question Bank Management", desc: "Organize thousands of questions with tags, topics, and metadata" },
              { icon: Layout, title: "Multiple Paper Patterns", desc: "Support for various exam formats: MCQ, subjective, mixed, case studies" },
              { icon: FileText, title: "Professional PDF Export", desc: "Beautifully formatted papers with headers, footers, and instructions" },
              { icon: PieChart, title: "Topic-Wise Distribution", desc: "Ensure balanced coverage across all syllabus topics" },
              { icon: Layers, title: "Bloom's Taxonomy", desc: "Question classification by cognitive levels (Remember, Understand, etc.)" },
              { icon: History, title: "Previous Year Analysis", desc: "Avoid repetition by tracking previously used questions" }
            ].map((feature, i) => (
              <motion.div 
                key={i} variants={fadeIn} 
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <feature.icon className="w-24 h-24 text-purple-400" />
                </div>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 relative z-10">{feature.title}</h3>
                <p className="text-sm text-gray-400 relative z-10">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 4. ADVANCED CAPABILITIES & 8. TECHNICAL FEATURES SECTION */}
        <section className="py-24 border-t border-white/10 bg-black/50 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <h2 className="text-3xl font-bold mb-8">Advanced Capabilities</h2>
                <div className="space-y-6">
                  {[
                    { title: "Lightning Fast Generation", desc: "Generate complete papers in under 10 seconds" },
                    { title: "99.5% Accuracy", desc: "AI ensures perfect question selection and formatting" },
                    { title: "Unlimited Question Banks", desc: "Store and manage unlimited questions across subjects" },
                    { title: "Multi-Format Support", desc: "Import from Word, Excel, PDF, CSV, and more" }
                  ].map((cap, i) => (
                    <motion.div key={i} variants={fadeIn} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{cap.title}</h4>
                        <p className="text-gray-400 text-sm">{cap.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <h2 className="text-3xl font-bold mb-8">Technical Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: TerminalSquare, title: "AI Engine", desc: "GPT-4 based question analysis" },
                    { icon: Shield, title: "Security", desc: "Bank-grade encryption" },
                    { icon: FileSpreadsheet, title: "Format Support", desc: "DOCX, XLSX, PDF, CSV" },
                    { icon: Download, title: "Export Options", desc: "Custom templates & branding" },
                    { icon: Code, title: "Integration", desc: "API available for LMS" },
                    { icon: Server, title: "Scalability", desc: "Cloud-native architecture" }
                  ].map((tech, i) => (
                    <motion.div key={i} variants={fadeIn} className="p-4 rounded-xl border border-white/5 bg-white/5 flex gap-3 items-start">
                      <tech.icon className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{tech.title}</h4>
                        <p className="text-xs text-gray-400">{tech.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 6. STATS & METRICS SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {[
              { value: "10,000+", label: "Papers Generated" },
              { value: "99.5%", label: "AI Accuracy" },
              { value: "95%", label: "Time Saved" },
              { value: "3", label: "Partner Universities" },
              { value: "50,000+", label: "Questions in DB" },
              { value: "<10 sec", label: "Generation Time" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-center flex flex-col justify-center min-h-[140px]">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">{stat.value}</span>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 7. PROBLEM SOLUTION SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="p-8 md:p-12 rounded-3xl bg-red-950/20 border border-red-500/20"
            >
              <h3 className="text-2xl font-bold mb-8 text-red-400">The Old Way</h3>
              <ul className="space-y-6">
                {[
                  "Manual question selection takes hours",
                  "Difficulty balancing is inconsistent",
                  "Formatting errors and typos",
                  "Question repetition across papers",
                  "Topic coverage imbalance",
                  "Time-consuming process"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-gray-300">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full" />
              <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 relative z-10">The PaperFlow.ai Way</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "AI selects questions in seconds",
                  "Perfect difficulty distribution",
                  "Professional formatting guaranteed",
                  "Intelligent repetition avoidance",
                  "Optimal topic coverage",
                  "95% time savings"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-gray-100">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 5. PARTNER UNIVERSITIES SECTION */}
        <section id="testimonials" className="py-24 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Leading Educational Institutions</h2>
            <p className="text-gray-400 mb-16 max-w-2xl mx-auto">PaperFlow.ai powers examination systems at top universities across India</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  name: "COER University", 
                  location: "Roorkee, Uttarakhand",
                  quote: "PaperFlow.ai has transformed our examination process. We've reduced paper generation time from 3 hours to 3 minutes.",
                  author: "Dr. Rajesh Kumar",
                  role: "Examination Controller"
                },
                { 
                  name: "Quantum University", 
                  location: "Roorkee, Uttarakhand",
                  quote: "The AI-powered question selection ensures perfect difficulty distribution. A game-changer for academic institutions.",
                  author: "Prof. Meera Sharma",
                  role: "Dean of Academics"
                },
                { 
                  name: "Graphic Era University", 
                  location: "Dehradun, Uttarakhand",
                  quote: "Managing our question bank and generating semester papers has never been easier. Highly recommended!",
                  author: "Dr. Amit Singh",
                  role: "HOD Computer Science"
                }
              ].map((uni, i) => (
                <motion.div 
                  key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                  className="p-8 rounded-3xl bg-black/40 border border-white/10 text-left flex flex-col relative"
                >
                  <div className="mb-6 w-[200px] h-[80px] rounded-lg border border-dashed border-white/20 flex flex-col items-center justify-center bg-white/5 mx-auto">
                    {/* PLACEHOLDER - 200x200px space requested by user, scaled to fit layout aesthetically but clearly marked */}
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{uni.name}</span>
                    <span className="text-[10px] text-gray-600 mt-1">Logo Placeholder</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-300 italic mb-6 leading-relaxed">"{uni.quote}"</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{uni.author}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-purple-400">{uni.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. USE CASES SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10 text-center">
          <h2 className="text-3xl font-bold mb-4">Supported Examination Types</h2>
          <p className="text-gray-400 mb-12">One platform for all your assessment needs</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "📝 Semester Examinations",
              "📊 Mid-term Tests",
              "🎯 Mock Tests & Practice Papers",
              "📚 Competitive Exam Papers",
              "🔬 Subject-specific Assessments",
              "📖 Assignment Question Sets"
            ].map((useCase, i) => (
              <motion.div 
                key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-default"
              >
                <span className="text-gray-300 font-medium">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 10. PRICING TEASER SECTION */}
        <section id="pricing" className="max-w-4xl mx-auto px-6 py-16 text-center border-t border-white/10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="p-12 rounded-3xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/20">
            <h2 className="text-3xl font-bold mb-4">Flexible plans for institutions of all sizes</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Available in Starter, Professional, and Enterprise tiers to fit your specific needs and scale.</p>
            <button className="px-8 py-3 rounded-full text-sm font-semibold border border-purple-500 hover:bg-purple-500/10 transition-all text-white">
              View Pricing Details
            </button>
          </motion.div>
        </section>

        {/* 11. FINAL CTA SECTION */}
        <section className="relative py-32 border-t border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20" />
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="max-w-4xl mx-auto px-6 text-center relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Transform Your Examination Process with AI
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join leading universities in automating exam paper generation and save hundreds of hours every semester.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)] text-white">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold bg-white/10 hover:bg-white/20 transition-all text-white">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* 12. FOOTER */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">PaperFlow.ai</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">AI-Powered Exam Paper Generation system for modern educational institutions.</p>
              <p className="text-xs text-gray-500">support@paperflow.ai</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 test-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Partner Universities</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 test-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">Copyright © 2024 PaperFlow.ai. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-gray-500">
                <Shield className="w-4 h-4" /> Secure & Compliant
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400 font-medium tracking-wide flex items-center gap-1">
                Powered by <span className="text-purple-400">Hypenbloom</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
