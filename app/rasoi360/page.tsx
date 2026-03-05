"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingCart, Package, Users, TrendingUp, DollarSign,
  CheckCircle2, Star, ChevronRight, Play, Menu, X,
  BarChart3, Receipt, Utensils, Smartphone, ChefHat, Store,
  Zap, ArrowRight, Coffee, LayoutDashboard, Settings, Flame,
  Clock, MapPin, Bell, Shield, PieChart
} from "lucide-react";

// ─── FONT IMPORT (add to your globals.css or layout) ───────────────────────
// @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

const FONT_URL = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap";

// ─── DATA ───────────────────────────────────────────────────────────────────

const features = [
  {
    icon: DollarSign,
    title: "Smart Billing",
    description: "Lightning-fast POS with split payments, custom taxes, and instant digital receipts.",
    accent: "#F97316",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    description: "Unified hub for dine-in, takeaway, and multi-channel online orders — all in one view.",
    accent: "#EAB308",
  },
  {
    icon: Package,
    title: "Inventory Tracking",
    description: "Live stock levels, automated low-stock alerts, and recipe-linked ingredient deduction.",
    accent: "#22C55E",
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Scheduling, attendance, shift swaps, and payroll — streamlined from one dashboard.",
    accent: "#3B82F6",
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Peak-hour trends, best-sellers, profit margins, and AI forecasting at your fingertips.",
    accent: "#A855F7",
  },
  {
    icon: Smartphone,
    title: "QR Table Ordering",
    description: "Guests scan, browse, and order directly from their phones. Zero wait, maximum satisfaction.",
    accent: "#EC4899",
  },
];

const steps = [
  {
    number: "01",
    title: "Quick Setup",
    description: "Upload your menu and configure your floor plan in under 15 minutes. No IT team needed.",
    icon: Store,
  },
  {
    number: "02",
    title: "Train Your Staff",
    description: "Our intuitive interface is so simple, your team will master it before the first service.",
    icon: Users,
  },
  {
    number: "03",
    title: "Grow Revenue",
    description: "Automated marketing, loyalty programs, and upsell prompts keep customers coming back.",
    icon: BarChart3,
  },
];

const testimonials = [
  {
    quote: "Rasoi 360 cut our checkout time in half. The kitchen display is a game-changer for weekend rushes.",
    author: "Priya Sharma",
    role: "Owner, The Spice Garden",
    rating: 5,
    img: "/images/food 1.jpg",
  },
  {
    quote: "Recipe-linked inventory is genius. We reduced food waste by 30% within two months of switching.",
    author: "Rahul Mehta",
    role: "Head Chef, Urban Bites",
    rating: 5,
    img: "/images/food 4.jpg",
  },
  {
    quote: "Three locations, one screen. I monitor live sales from my phone while I'm at a supplier meeting.",
    author: "Anjali Desai",
    role: "Director, Café Delight Chain",
    rating: 5,
    img: "/images/food 5.jpg",
  },
];

const stats = [
  { value: "500+", label: "Restaurants", icon: Store },
  { value: "₹2Cr+", label: "Daily GMV Processed", icon: DollarSign },
  { value: "30%", label: "Avg. Waste Reduction", icon: Package },
  { value: "4.9★", label: "App Store Rating", icon: Star },
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

function GoogleFonts() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `@import url('${FONT_URL}');
      .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
      .font-body { font-family: 'DM Sans', sans-serif; }
      * { font-family: 'DM Sans', sans-serif; }
      h1, h2 { font-family: 'Cormorant Garamond', Georgia, serif; }
      `
    }} />
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Rasoi<span className="text-orange-400">360</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["Features", "How It Works", "Stories"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium tracking-wide"
              >
                {item}
              </a>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              Book a Demo
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/70"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 flex flex-col gap-4 border-t border-white/10 mt-4">
                {["Features", "How It Works", "Stories"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-white/70 font-medium text-center">
                    {item}
                  </a>
                ))}
                <Link href="/contact" className="mx-4 py-3 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold text-center">
                  Book a Demo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D0D0D]">
      {/* Full-bleed hero background image */}
      <div className="absolute inset-0">
        <img
          src="/images/food 2.jpg"
          alt="Restaurant ambience"
          className="w-full h-full object-cover opacity-30"
          style={{ objectPosition: "center 40%" }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/40" />
        {/* Warm glow */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
            >
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-xs font-semibold text-orange-300 tracking-widest uppercase">New: AI Inventory Forecasting</span>
            </motion.div>

            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 text-white tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700 }}
            >
              Run your
              <br />
              restaurant{" "}
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg, #F97316, #FB923C, #FBBF24)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                like clockwork.
              </em>
            </h1>

            <p className="text-lg text-white/50 mb-10 leading-relaxed max-w-lg font-light">
              The all-in-one POS and management platform built for modern restaurants, cafes, and cloud kitchens. 
              Ditch the chaos and focus on the food.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold text-base hover:opacity-90 transition-all shadow-xl shadow-orange-500/25 hover:-translate-y-0.5"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-base hover:bg-white/10 transition-all backdrop-blur-sm">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#0D0D0D] overflow-hidden bg-white/10"
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/notionists/svg?seed=r${i}&backgroundColor=1a1a1a`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-white/40">
                Trusted by <span className="text-white font-semibold">500+</span> restaurant owners across India
              </div>
            </div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main Dashboard Card */}
            <div className="w-full bg-[#161616] rounded-2xl shadow-2xl border border-white/8 overflow-hidden">
              {/* Window Bar */}
              <div className="h-11 border-b border-white/5 bg-[#111]/60 flex items-center px-4 justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="text-[11px] font-medium text-white/20">rasoi360.app / dashboard</div>
                <div className="w-10" />
              </div>

              <div className="flex" style={{ height: "440px" }}>
                {/* Sidebar */}
                <div className="w-14 border-r border-white/5 bg-[#0F0F0F] flex flex-col items-center py-5 gap-5">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center">
                    <ChefHat className="w-4 h-4 text-white" />
                  </div>
                  {[LayoutDashboard, ShoppingCart, Users, Package, BarChart3].map((Icon, i) => (
                    <Icon
                      key={i}
                      className={`w-4 h-4 ${i === 0 ? "text-orange-400" : "text-white/20"}`}
                    />
                  ))}
                  <Settings className="w-4 h-4 text-white/20 mt-auto" />
                </div>

                {/* Content */}
                <div className="flex-1 p-5 overflow-hidden">
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <h3 className="text-sm font-semibold text-white">Today's Overview</h3>
                      <p className="text-[11px] text-white/30 mt-0.5">Saturday, 14 Oct — Dinner Service</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Live</span>
                    </div>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Revenue", value: "₹62,840", change: "+18.2%", up: true },
                      { label: "Orders", value: "142", change: "31 active", up: true },
                      { label: "Avg. Bill", value: "₹442", change: "+5.4%", up: true },
                    ].map((kpi, i) => (
                      <div key={i} className="bg-white/4 rounded-xl p-3 border border-white/5">
                        <div className="text-[10px] text-white/30 mb-1">{kpi.label}</div>
                        <div className="text-lg font-bold text-white">{kpi.value}</div>
                        <div className="text-[10px] text-emerald-400 font-medium mt-0.5">{kpi.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Sales Bar Chart Visual */}
                  <div className="bg-white/3 rounded-xl p-3 border border-white/5 mb-4">
                    <div className="text-[10px] text-white/30 mb-3 uppercase tracking-wider">Hourly Revenue</div>
                    <div className="flex items-end gap-1.5 h-16">
                      {[30, 45, 60, 55, 80, 100, 90, 70, 85, 95, 100, 75].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background: i === 10
                              ? "linear-gradient(to top, #F97316, #FBBF24)"
                              : i > 7
                              ? "rgba(249,115,22,0.4)"
                              : "rgba(255,255,255,0.08)",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Recent Orders */}
                  <div className="bg-white/3 rounded-xl border border-white/5 overflow-hidden">
                    <div className="px-3 py-2 border-b border-white/5">
                      <span className="text-[10px] font-semibold text-white/30 uppercase tracking-wider">Live Orders</span>
                    </div>
                    {[
                      { id: "#1047", items: "Butter Chicken, Garlic Naan ×2", total: "₹980", status: "In Kitchen", dot: "orange" },
                      { id: "#1046", items: "Paneer Tikka, Masala Chai", total: "₹520", status: "Served", dot: "emerald" },
                      { id: "#1045", items: "Dal Makhani Thali", total: "₹380", status: "Served", dot: "emerald" },
                    ].map((o, i) => (
                      <div key={i} className="px-3 py-2.5 flex justify-between items-center border-b border-white/4 last:border-0 hover:bg-white/3 transition-colors">
                        <div>
                          <div className="text-xs font-bold text-white">{o.id}</div>
                          <div className="text-[10px] text-white/30 mt-0.5">{o.items}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-white">{o.total}</div>
                          <div className={`text-[10px] font-semibold mt-0.5 ${o.dot === "orange" ? "text-orange-400" : "text-emerald-400"}`}>{o.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Notification Cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-10 bg-[#161616] border border-white/10 rounded-2xl p-3.5 shadow-2xl flex items-center gap-3 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider">Alert</div>
                <div className="text-xs font-bold text-white">Stock levels optimal</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-6 bg-[#161616] border border-white/10 rounded-2xl p-3.5 shadow-2xl flex items-center gap-3 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                <Flame className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider">Peak Hour</div>
                <div className="text-xs font-bold text-white">8pm rush — 31 active</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none" />
    </section>
  );
}

function StatsBar() {
  return (
    <section className="bg-[#111111] border-y border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {stat.value}
              </div>
              <div className="text-sm text-white/30 font-medium uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoodGalleryBanner() {
  return (
    <div className="relative py-16 bg-[#0D0D0D] overflow-hidden">
      <div className="flex gap-4 animate-none" style={{ width: "max-content" }}>
        {/* Use CSS animation via style tag */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
            .marquee-track { display: flex; gap: 1rem; animation: marquee 20s linear infinite; width: max-content; }
          `
        }} />
        <div className="marquee-track">
          {["/images/food 1.jpg", "/images/food 2.jpg", "/images/food 4.jpg", "/images/food 5.jpg",
            "/images/food 1.jpg", "/images/food 2.jpg", "/images/food 4.jpg", "/images/food 5.jpg"].map((src, i) => (
            <div
              key={i}
              className="w-64 h-40 rounded-2xl overflow-hidden flex-shrink-0 border border-white/5"
            >
              <img src={src} alt={`Food ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none z-10" />
    </div>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="py-28 px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-xs font-semibold text-orange-400 uppercase tracking-[0.3em] mb-5">Platform Features</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-5xl md:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Everything you need
              <br />
              to <em className="not-italic text-orange-400">serve better.</em>
            </h2>
            <p className="text-white/40 max-w-sm text-base leading-relaxed md:text-right">
              Stop juggling multiple apps. One platform for your floor, kitchen, and back-office.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-white/15 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{ background: `radial-gradient(circle at 50% 100%, ${feature.accent}15, transparent 70%)` }}
              />

              <div
                className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{ background: `${feature.accent}15`, border: `1px solid ${feature.accent}25` }}
              >
                <feature.icon className="w-5 h-5" style={{ color: feature.accent }} />
              </div>

              <h3 className="relative text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="relative text-sm text-white/40 leading-relaxed mb-6">{feature.description}</p>

              <div className="relative flex items-center text-xs font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: feature.accent }}>
                Learn more <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 px-6 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-52 rounded-2xl overflow-hidden">
                  <img src="/images/food 4.jpg" alt="Food" className="w-full h-full object-cover" />
                </div>
                <div className="h-36 rounded-2xl overflow-hidden">
                  <img src="/images/food 1.jpg" alt="Food" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-36 rounded-2xl overflow-hidden">
                  <img src="/images/food 4.jpg" alt="Food" className="w-full h-full object-cover" />
                </div>
                <div className="h-52 rounded-2xl overflow-hidden">
                  <img src="/images/food 5.jpg" alt="Food" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* Overlay card */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#161616]/90 backdrop-blur-lg border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/15 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <div className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Setup Time</div>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Under 15 minutes
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold text-orange-400 uppercase tracking-[0.3em] mb-5">How It Works</p>
            <h2
              className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Up and running
              <br />
              <em className="not-italic text-orange-400">in minutes.</em>
            </h2>
            <p className="text-white/40 mb-12 leading-relaxed">
              We know restaurant owners are busy. That's why Rasoi 360 is completely frictionless to set up.
            </p>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <step.icon className="w-5 h-5 text-white/40 group-hover:text-orange-400 transition-colors" />
                    </div>
                    {i < steps.length - 1 && <div className="w-px flex-1 bg-white/5 mt-3" />}
                  </div>
                  <div className="pb-8">
                    <div className="text-[10px] font-bold text-orange-400/60 uppercase tracking-widest mb-2">Step {step.number}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/35 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/contact" className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 group mt-2">
              See how easy it is
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="stories" className="py-28 px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold text-orange-400 uppercase tracking-[0.3em] mb-5">Stories</p>
          <h2
            className="text-5xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Loved by owners <em className="not-italic text-orange-400">&amp; chefs.</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-white/15 transition-all duration-300"
            >
              {/* Top image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={t.img}
                  alt={t.author}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#161616]" style={{ top: 0, height: "192px", position: "absolute" }} />
              </div>

              {/* Content */}
              <div className="bg-[#161616] p-7">
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/70 text-base leading-relaxed mb-7 italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.author}</div>
                    <div className="text-xs text-white/30 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#0A0A0A]">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img src="/images/food 2.jpg" alt="CTA Background" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(249,115,22,0.12) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold text-orange-400 uppercase tracking-[0.3em] mb-6">Get Started Today</p>
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to upgrade
            <br />
            <em className="not-italic text-orange-400">your restaurant?</em>
          </h2>
          <p className="text-lg text-white/40 mb-12 max-w-xl mx-auto leading-relaxed">
            Join hundreds of successful restaurants on Rasoi 360. Start your 14-day free trial today — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-base hover:opacity-90 transition-all shadow-2xl shadow-orange-500/20 hover:-translate-y-0.5">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-all backdrop-blur-sm">
              Talk to Sales
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-14">
            {[
              { icon: Shield, label: "SOC 2 Compliant" },
              { icon: Zap, label: "99.9% Uptime" },
              { icon: Clock, label: "24/7 Support" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-white/30 text-sm">
                <badge.icon className="w-4 h-4" />
                {badge.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#080808] text-white/30 py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center">
                <ChefHat className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Rasoi<span className="text-orange-400">360</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              The modern operating system for forward-thinking restaurants, cloud kitchens, and cafes across India.
            </p>
            <div className="flex gap-3">
              {["IN", "POS"].map((tag, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 text-white/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm">
              {["Features", "How it Works", "Pricing", "Changelog"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Contact", "Privacy Policy", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Rasoi 360. All rights reserved.</p>
          <p>
            Built by{" "}
            <a href="#" className="text-white font-medium hover:text-orange-400 transition-colors">
              Hypenbloom
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

export default function Rasoi360Page() {
  return (
    <div className="relative w-full min-h-screen bg-[#0D0D0D] overflow-x-hidden selection:bg-orange-500/30 selection:text-orange-200">
      <GoogleFonts />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <FoodGalleryBanner />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}