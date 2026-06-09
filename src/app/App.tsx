import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../imports/DeepStar_Icon.png";
import heroImg from "../imports/final.png";

/* MARKER-MAKE-KIT-INVOKED */

// ─── Data ───────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "17+", label: "Years of Operation", sub: "Since 2009" },
  { value: "40+", label: "Trucks", sub: "Heavy & Semi-Heavy" },
  { value: "40+", label: "Trailers", sub: "Flatbed & Container" },
  { value: "100%", label: "GPS Tracked", sub: "Real-time Fleet" },
];

const SERVICES = [
  {
    icon: "🏗️",
    title: "Raw Materials Transport",
    desc: "Expert hauling of cement bags, steel bars, aluminium bars, and construction dividers across mainland UAE.",
    tags: ["Cement", "Steel Bars", "Aluminium", "Dividers"],
  },
  {
    icon: "📦",
    title: "Container & Cargo",
    desc: "Full container transport and general cargo logistics including port-to-site delivery with proper documentation.",
    tags: ["20ft", "40ft Containers", "Break Bulk", "General Cargo"],
  },
  {
    icon: "🏭",
    title: "Factory Direct Supply",
    desc: "Authorized transporter for Sharjah Cement Factory and Sharjah Ministry of Public Works — direct supply chain.",
    tags: ["Sharjah Cement", "Ministry of Works", "Factory Direct"],
  },
  {
    icon: "🛣️",
    title: "Route Permit Services",
    desc: "Full knowledge of UAE No Entry zones and heavy vehicle time restrictions. We handle all route permits for you.",
    tags: ["Route Permits", "No Entry Zones", "Scheduling", "Compliance"],
  },
  {
    icon: "📡",
    title: "GPS Fleet Management",
    desc: "All vehicles equipped with live GPS tracking — accurate logs, delivery timelines, and full visibility for clients.",
    tags: ["Live Tracking", "Delivery Logs", "Fleet Reports", "ETA Alerts"],
  },
  {
    icon: "📋",
    title: "Invoicing & Documentation",
    desc: "Dedicated PRO team handling delivery notes, invoicing, and all paperwork so you can focus on your business.",
    tags: ["Delivery Notes", "Invoicing", "PRO Services", "Documentation"],
  },
];

const CLIENTS = [
  "Sharjah Cement Factory",
  "Sharjah Ministry of Public Works",
  "Desert Building Materials",
  "Al Madaien General Trading Co",
  "Al Kawther General Trading",
  "Hamriya ASAS Steel",
  "Hamriya AGSI Steel",
  "Jessour Building Materials",
  "Naseer General Trading",
  "Momentum Logistics",
  "Gulftainer",
  "DP World",
];

const WHY_ITEMS = [
  {
    icon: "🏆",
    title: "17+ Years Expertise",
    desc: "Deep knowledge of UAE logistics regulations, road networks, and heavy vehicle operations built since 2009.",
  },
  {
    icon: "⚡",
    title: "Real-time GPS Tracking",
    desc: "Every truck and trailer is live-tracked. You always know exactly where your cargo is.",
  },
  {
    icon: "📜",
    title: "Fully Compliant",
    desc: "We navigate No Entry zones, heavy vehicle timings, and route permits on your behalf — zero hassle.",
  },
  {
    icon: "🤝",
    title: "Trusted by Industry Leaders",
    desc: "DP World, Gulftainer, and direct government ministry contracts speak to our credibility.",
  },
  {
    icon: "📑",
    title: "End-to-End Documentation",
    desc: "Our PRO team manages delivery notes, invoices, and all logistics paperwork seamlessly.",
  },
  {
    icon: "🗺️",
    title: "UAE-Wide Coverage",
    desc: "Servicing Dubai, Sharjah, Abu Dhabi, and all emirates with a fleet ready to deploy at short notice.",
  },
];

// ─── Components ──────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,14,26,0.97)" : "rgba(10,14,26,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(232,0,28,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3">
          <img src={logoImg} alt="Deep Star Transport Logo" className="h-12 w-12 object-contain" />
          <div className="text-left">
            <p style={{ fontFamily: "'Teko', sans-serif", fontSize: "1.4rem", letterSpacing: "0.08em", color: "#e8001c", lineHeight: 1 }}>
              DEEP STAR
            </p>
            <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em", color: "#8a96b0", lineHeight: 1 }}>
              TRANSPORT L.L.C
            </p>
          </div>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-sm tracking-widest uppercase transition-colors duration-200 hover:text-red-500"
                style={{ fontFamily: "'Rajdhani', sans-serif", color: "#8a96b0", fontWeight: 600 }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("#contact")}
          className="hidden md:block px-5 py-2 text-sm uppercase tracking-widest font-semibold transition-all duration-200 hover:bg-red-700"
          style={{ fontFamily: "'Rajdhani', sans-serif", background: "#e8001c", color: "#fff", borderRadius: "2px" }}
        >
          Get a Quote
        </button>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white transition-all" style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "" }} />
          <span className="block w-6 h-0.5 bg-white transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-white transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "" }} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(10,14,26,0.98)", borderTop: "1px solid rgba(232,0,28,0.2)" }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="w-full text-left text-base tracking-widest uppercase"
                    style={{ fontFamily: "'Rajdhani', sans-serif", color: "#f0f2f7", fontWeight: 600 }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full py-2 text-base uppercase tracking-widest font-semibold"
                  style={{ fontFamily: "'Rajdhani', sans-serif", background: "#e8001c", color: "#fff", borderRadius: "2px" }}
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background: "#0a0e1a" }}>
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Deep Star Transport fleet on Dubai desert highway"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 65%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #0a0e1a 10%, rgba(10,14,26,0.4) 55%, rgba(10,14,26,0.15) 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(10,14,26,0.75) 0%, transparent 55%)" }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#e8001c" }} />

      <div className="relative max-w-7xl mx-auto px-6 pb-24 pt-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p
            className="mb-4 tracking-[0.3em] uppercase text-sm"
            style={{ fontFamily: "'Rajdhani', sans-serif", color: "#e8001c", fontWeight: 600 }}
          >
            UAE — Established 2009
          </p>
          <h1
            className="mb-6 leading-none"
            style={{
              fontFamily: "'Teko', sans-serif",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              color: "#f0f2f7",
              letterSpacing: "0.02em",
              lineHeight: 0.95,
            }}
          >
            DEEP STAR<br />
            <span style={{ color: "#e8001c" }}>TRANSPORT</span>
          </h1>
          <p
            className="mb-8 max-w-xl"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1rem", color: "#8a96b0", lineHeight: 1.7 }}
          >
            Dubai's trusted heavy haulage specialists. Over 17 years moving raw materials,
            containers, and bulk cargo across mainland UAE — with a fleet of 40+ trucks
            and 40+ trailers, all GPS-tracked.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 text-base uppercase tracking-widest font-semibold transition-all duration-200 hover:bg-red-700 hover:scale-105"
              style={{ fontFamily: "'Rajdhani', sans-serif", background: "#e8001c", color: "#fff", borderRadius: "2px" }}
            >
              Request a Quote
            </button>
            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 text-base uppercase tracking-widest font-semibold transition-all duration-200 hover:bg-white hover:text-gray-900"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#f0f2f7",
                borderRadius: "2px",
                background: "transparent",
              }}
            >
              Our Services
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: "rgba(232,0,28,0.3)", borderTop: "1px solid rgba(232,0,28,0.3)" }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-5" style={{ background: "rgba(10,14,26,0.85)" }}>
              <p style={{ fontFamily: "'Teko', sans-serif", fontSize: "2.2rem", color: "#e8001c", lineHeight: 1 }}>{s.value}</p>
              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#f0f2f7", fontWeight: 600, letterSpacing: "0.08em" }}>{s.label}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#8a96b0" }}>{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24" style={{ background: "#0d1220" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "'Rajdhani', sans-serif", color: "#e8001c", fontWeight: 600 }}>
              Who We Are
            </p>
            <h2
              className="mb-6"
              style={{ fontFamily: "'Teko', sans-serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#f0f2f7", lineHeight: 1.05, letterSpacing: "0.03em" }}
            >
              A REPUTED NAME IN<br />
              <span style={{ color: "#e8001c" }}>UAE HEAVY HAULAGE</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#8a96b0", lineHeight: 1.8 }} className="mb-4">
              Deep Star Transport L.L.C has been operating in mainland Dubai, UAE since 2009.
              With over 17 years in the industry, we have built an unmatched reputation as a
              reliable, compliant, and efficient heavy transport provider.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#8a96b0", lineHeight: 1.8 }}>
              We are one of the few transporters authorized to haul directly for the
              <strong style={{ color: "#f0f2f7" }}> Sharjah Cement Factory</strong> and the
              <strong style={{ color: "#f0f2f7" }}> Sharjah Ministry of Public Works</strong> — a testament
              to our standards, professionalism, and deep regulatory knowledge.
            </p>
            <div className="mt-8 pl-4" style={{ borderLeft: "3px solid #e8001c" }}>
              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "1.1rem", color: "#f0f2f7", fontWeight: 600, letterSpacing: "0.05em" }}>
                "We don't just move cargo — we move industries forward."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1641973506533-da6bde28f373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
              alt="Aerial view of UAE desert highway"
              className="w-full object-cover"
              style={{ aspectRatio: "4/3", borderRadius: "2px" }}
            />
            <div className="absolute bottom-0 left-0 px-6 py-4" style={{ background: "#e8001c" }}>
              <p style={{ fontFamily: "'Teko', sans-serif", fontSize: "1.6rem", color: "#fff", lineHeight: 1 }}>SINCE 2009</p>
              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.15em" }}>DUBAI, U.A.E.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((v) => Math.max(0, v - 1));
  const next = () => setActive((v) => Math.min(SERVICES.length - 1, v + 1));

  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % SERVICES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="services" className="py-24" style={{ background: "#0a0e1a" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <p className="mb-2 tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "'Rajdhani', sans-serif", color: "#e8001c", fontWeight: 600 }}>
              What We Do
            </p>
            <h2 style={{ fontFamily: "'Teko', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#f0f2f7", letterSpacing: "0.03em", lineHeight: 1.05 }}>
              OUR SERVICES
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={active === 0}
              className="w-10 h-10 flex items-center justify-center border transition-all hover:border-red-500 disabled:opacity-30"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#f0f2f7", borderRadius: "2px" }}
            >
              ‹
            </button>
            <button
              onClick={next}
              disabled={active === SERVICES.length - 1}
              className="w-10 h-10 flex items-center justify-center border transition-all hover:border-red-500 disabled:opacity-30"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#f0f2f7", borderRadius: "2px" }}
            >
              ›
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${active} * (min(360px, 90vw) + 24px))` }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
          >
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                className="flex-shrink-0 cursor-pointer"
                style={{ width: "min(360px, 90vw)" }}
                onClick={() => setActive(i)}
                animate={{ opacity: i === active ? 1 : 0.55, scale: i === active ? 1 : 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="h-full p-8 flex flex-col gap-4 transition-all duration-300"
                  style={{
                    background: i === active ? "#111827" : "#0d1220",
                    border: i === active ? "1px solid rgba(232,0,28,0.5)" : "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "2px",
                    minHeight: "320px",
                  }}
                >
                  <span style={{ fontSize: "2.5rem" }}>{s.icon}</span>
                  <h3 style={{ fontFamily: "'Teko', sans-serif", fontSize: "1.5rem", color: i === active ? "#f0f2f7" : "#8a96b0", letterSpacing: "0.05em", lineHeight: 1.1 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#8a96b0", lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs uppercase tracking-wider"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                          background: i === active ? "rgba(232,0,28,0.15)" : "rgba(255,255,255,0.05)",
                          color: i === active ? "#e8001c" : "#8a96b0",
                          borderRadius: "2px",
                          fontWeight: 600,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex gap-2 mt-8">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300"
              style={{
                width: i === active ? "2rem" : "0.5rem",
                height: "3px",
                background: i === active ? "#e8001c" : "rgba(255,255,255,0.2)",
                borderRadius: "99px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  return (
    <section id="fleet" className="py-24 relative overflow-hidden" style={{ background: "#0d1220" }}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "'Rajdhani', sans-serif", color: "#e8001c", fontWeight: 600 }}>
            Our Assets
          </p>
          <h2 style={{ fontFamily: "'Teko', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#f0f2f7", letterSpacing: "0.03em", lineHeight: 1.05 }}>
            GPS-TRACKED FLEET
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              count: "40+",
              label: "TRUCKS",
              desc: "Heavy-duty tractor units and semi-heavy trucks capable of hauling all categories of raw materials and cargo throughout the UAE road network.",
              types: ["Flatbed Trucks", "Container Carriers", "Tipper Trucks", "Semi-Heavy Units"],
            },
            {
              count: "40+",
              label: "TRAILERS",
              desc: "Diverse trailer fleet covering flatbeds, container chassis, low-bed and extendable trailers — all maintained to UAE RTA standards.",
              types: ["Flatbed Trailers", "Container Chassis", "Low-Bed Trailers", "Skeletal Trailers"],
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 relative overflow-hidden"
              style={{ background: "#111827", border: "1px solid rgba(232,0,28,0.3)", borderRadius: "2px" }}
            >
              <div className="absolute top-0 left-0 w-1 h-full" style={{ background: "#e8001c" }} />
              <p style={{ fontFamily: "'Teko', sans-serif", fontSize: "5rem", color: "#e8001c", lineHeight: 1 }}>{item.count}</p>
              <h3 style={{ fontFamily: "'Teko', sans-serif", fontSize: "1.8rem", color: "#f0f2f7", letterSpacing: "0.05em" }}>{item.label}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#8a96b0", lineHeight: 1.7, marginTop: "0.5rem" }}>
                {item.desc}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {item.types.map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <span style={{ color: "#e8001c", fontSize: "0.6rem" }}>◆</span>
                    <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#8a96b0", fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 flex flex-col md:flex-row items-center gap-8"
          style={{ background: "#e8001c", borderRadius: "2px" }}
        >
          <div style={{ fontSize: "3rem" }}>📡</div>
          <div className="flex-1">
            <h3 style={{ fontFamily: "'Teko', sans-serif", fontSize: "1.8rem", color: "#fff", letterSpacing: "0.05em" }}>
              REAL-TIME GPS TRACKING ON EVERY VEHICLE
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
              Every truck and trailer in our fleet is equipped with live GPS trackers. This allows us to maintain
              top-of-the-line fleet management, provide accurate delivery ETAs, and generate full logistics logs for our clients.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            {["Live Location", "Delivery Logs", "Route History", "ETA Updates"].map((f) => (
              <span key={f} style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.9)", fontWeight: 600, letterSpacing: "0.1em" }}>
                ✓ {f}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24" style={{ background: "#0a0e1a" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-2 tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "'Rajdhani', sans-serif", color: "#e8001c", fontWeight: 600 }}>
            The Deep Star Difference
          </p>
          <h2 style={{ fontFamily: "'Teko', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#f0f2f7", letterSpacing: "0.03em", lineHeight: 1.05 }}>
            WHY CHOOSE US
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 transition-all duration-300 cursor-default"
              style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2px" }}
            >
              <span style={{ fontSize: "2rem" }}>{item.icon}</span>
              <h3 style={{ fontFamily: "'Teko', sans-serif", fontSize: "1.3rem", color: "#f0f2f7", letterSpacing: "0.05em", marginTop: "0.75rem", marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#8a96b0", lineHeight: 1.7 }}>
                {item.desc}
              </p>
              <div className="mt-4 h-0.5 w-8 transition-all duration-300 group-hover:w-16" style={{ background: "#e8001c" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const duplicated = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="py-24" style={{ background: "#0d1220" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-2 tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "'Rajdhani', sans-serif", color: "#e8001c", fontWeight: 600 }}>
            Trusted By
          </p>
          <h2 style={{ fontFamily: "'Teko', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#f0f2f7", letterSpacing: "0.03em", lineHeight: 1.05 }}>
            OUR ESTEEMED CLIENTS
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "#8a96b0", lineHeight: 1.7 }}>
            From government ministries to leading trading houses and global port operators —
            Deep Star Transport is trusted by the best names in UAE industry.
          </p>
        </motion.div>

        <div className="overflow-hidden relative mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to right, #0d1220, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(to left, #0d1220, transparent)" }} />
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ width: "max-content" }}
          >
            {duplicated.map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex-shrink-0 px-6 py-4"
                style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2px", minWidth: "220px" }}
              >
                <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.9rem", color: "#8a96b0", fontWeight: 600, letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                  {client}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Sharjah Cement Factory", "Sharjah Ministry of Public Works", "DP World", "Gulftainer"].map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 text-center"
              style={{ background: "#111827", border: "1px solid rgba(232,0,28,0.3)", borderRadius: "2px" }}
            >
              <div className="mb-2" style={{ color: "#e8001c", fontSize: "1.4rem" }}>⭐</div>
              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#f0f2f7", fontWeight: 700, letterSpacing: "0.06em" }}>
                {c}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#e8001c", marginTop: "0.25rem" }}>Key Partner</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24" style={{ background: "#0a0e1a" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-2 tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "'Rajdhani', sans-serif", color: "#e8001c", fontWeight: 600 }}>
            Reach Out
          </p>
          <h2 style={{ fontFamily: "'Teko', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#f0f2f7", letterSpacing: "0.03em", lineHeight: 1.05 }}>
            GET IN TOUCH
          </h2>
          <p className="mt-3 max-w-xl" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "#8a96b0", lineHeight: 1.8 }}>
            Ready to streamline your heavy haulage logistics? Reach us directly — our team
            is available to discuss your requirements and provide a competitive quote.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { icon: "📍", label: "Address", lines: ["# 5, 1st Floor, Saeed Suhail Bldg,", "Ras Al Khor, Dubai, U.A.E", "P.O Box 233597 DXB"] },
            { icon: "📞", label: "Phone", lines: ["+971-505470391", "+971-522873622"] },
            { icon: "✉️", label: "Email", lines: ["deepstartpt@gmail.com"] },
            { icon: "🕐", label: "Operating Hours", lines: ["Sat – Thu: 8:00 AM – 6:00 PM", "Fri: 9:00 AM – 1:00 PM", "24/7 dispatch for existing clients"] },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 flex flex-col gap-3"
              style={{ background: "#111827", border: "1px solid rgba(232,0,28,0.3)", borderRadius: "2px" }}
            >
              <span style={{ fontSize: "1.8rem" }}>{item.icon}</span>
              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", color: "#e8001c", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {item.label}
              </p>
              <div className="flex flex-col gap-1">
                {item.lines.map((line) => (
                  <p key={line} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "#8a96b0", lineHeight: 1.6 }}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6"
          style={{ background: "#e8001c", borderRadius: "2px" }}
        >
          <p style={{ fontFamily: "'Teko', sans-serif", fontSize: "1.6rem", color: "#fff", letterSpacing: "0.04em", lineHeight: 1.1 }}>
            CALL US NOW FOR AN INSTANT QUOTE
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+971505470391"
              className="px-6 py-3 text-sm uppercase tracking-widest font-semibold transition-all hover:bg-white hover:text-red-600"
              style={{ fontFamily: "'Rajdhani', sans-serif", background: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.4)", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              +971-505470391
            </a>
            <a
              href="mailto:deepstartpt@gmail.com"
              className="px-6 py-3 text-sm uppercase tracking-widest font-semibold transition-all hover:bg-white hover:text-red-600"
              style={{ fontFamily: "'Rajdhani', sans-serif", background: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.4)", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#060a13", borderTop: "1px solid rgba(232,0,28,0.2)" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Deep Star Transport" className="h-12 w-12 object-contain" />
              <div>
                <p style={{ fontFamily: "'Teko', sans-serif", fontSize: "1.4rem", color: "#e8001c", lineHeight: 1 }}>DEEP STAR</p>
                <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.65rem", color: "#8a96b0", letterSpacing: "0.2em" }}>TRANSPORT L.L.C</p>
              </div>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#8a96b0", lineHeight: 1.7 }}>
              Dubai's trusted heavy haulage partner since 2009. Authorised, GPS-tracked,
              and fully compliant with all UAE transport regulations.
            </p>
          </div>

          <div>
            <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", color: "#e8001c", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })}
                    style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.9rem", color: "#8a96b0", fontWeight: 600, letterSpacing: "0.05em" }}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", color: "#e8001c", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
              Contact
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#8a96b0", lineHeight: 1.7 }}>
              # 5, 1st Floor, Saeed Suhail Bldg,<br />
              Ras Al Khor, Dubai, U.A.E<br />
              P.O Box 233597 DXB
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#8a96b0", marginTop: "0.75rem" }}>
              +971-505470391<br />
              +971-522873622
            </p>
            <a href="mailto:deepstartpt@gmail.com" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#e8001c", marginTop: "0.5rem", display: "block" }}>
              deepstartpt@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#8a96b0" }}>
            © {new Date().getFullYear()} Deep Star Transport L.L.C — All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#8a96b0" }}>
            Dubai, U.A.E · Mainland Licensed · RTA Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ background: "#0a0e1a", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <WhyUs />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
