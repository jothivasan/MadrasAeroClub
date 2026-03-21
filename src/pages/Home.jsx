import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  ArrowRight, 
  Crosshair, 
  Cpu, 
  Layers, 
  Globe, 
  Video, 
  ShieldAlert, 
  Compass, 
  TerminalSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import SplitText from "../components/SplitText";

const Home = () => {
  const containerRef = useRef(null);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  // Parallax calculations for scrollytelling
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const heroScale = useTransform(smoothY, [0, 0.1], [1, 1.1]);
  const heroOpacity = useTransform(smoothY, [0, 0.1], [1, 0]);
  const heroY = useTransform(smoothY, [0, 0.1], ["0%", "20%"]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  return (
    <div ref={containerRef} className="bg-mac-bg w-full overflow-hidden text-mac-text font-sans selection:bg-mac-accent selection:text-white">
      
      {/* 
        ========================================
        1. HERO SECTION (Immersive Parallax)
        ========================================
      */}
      <motion.section 
        className="relative h-screen min-h-[800px] flex justify-center items-center px-6 bg-[#FAFAFA] border-b border-mac-border overflow-hidden"
      >
        {/* Ambient Warm Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mac-accent/15 rounded-full blur-[120px] pointer-events-none"></div>

        <motion.div
           variants={staggerContainer} initial="hidden" animate="show"
           className="relative z-30 w-full max-w-7xl mx-auto flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-10 inline-flex items-center gap-2 px-6 py-2 bg-black/5 border border-black/10 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-mac-accent animate-pulse"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] text-mac-primary uppercase">
              Madras Aero Club
            </span>
          </motion.div>

          <div className="mb-8 flex flex-col items-center">
            <div className="flex gap-2 lg:gap-4 items-center mb-2">
              <SplitText
                text="Build."
                className="text-7xl md:text-8xl lg:text-[8.5rem] font-display font-black tracking-[-0.03em] text-mac-primary leading-[0.95]"
                delay={60}
                duration={1.2}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
              <SplitText
                text="Fly."
                className="text-7xl md:text-8xl lg:text-[8.5rem] font-display font-black tracking-[-0.03em] text-mac-accent leading-[0.95]"
                delay={60}
                duration={1.2}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
            </div>
            <SplitText
              text="Innovate."
              className="text-7xl md:text-8xl lg:text-[8.5rem] font-display font-black tracking-[-0.03em] text-mac-primary leading-[0.95]"
              delay={60}
              duration={1.2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              onLetterAnimationComplete={handleAnimationComplete}
              showCallback={true}
            />
          </div>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-mac-muted font-sans font-light leading-relaxed max-w-2xl mx-auto mb-14"
          >
            Hands-on aerospace learning where students design, build, and fly real systems.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
            <Link
              to="/programs"
              className="group relative px-12 py-4 bg-mac-accent text-white rounded-full shadow-xl shadow-mac-accent/20 hover:shadow-mac-accent/40 transition-all hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 font-sans font-black text-sm tracking-wide">
                Explore Programs <ArrowRight size={20} />
              </span>
            </Link>
            <Link
              to="/contact"
              className="group px-12 py-4 bg-transparent border border-mac-border text-mac-primary rounded-full hover:bg-black/5 font-sans font-black text-sm tracking-wide transition-all"
            >
              Join the Club
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 
        ========================================
        2. ABOUT MAC (Scrollytelling Split)
        ========================================
      */}
      <section className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-mac-primary mb-6 leading-tight">
              A paradigm shift in <br/><span className="text-mac-accent">aerospace education.</span>
            </h2>
            <p className="text-mac-muted text-lg font-light leading-relaxed mb-8">
              We focus purely on practical aerospace education, drone technology training, and rapid experimentation. Transforming theoretical logic into physical airborne realities.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-mac-border pt-8">
              <div>
                <span className="text-4xl font-display font-black text-mac-primary block mb-2">100%</span>
                <span className="text-sm font-bold uppercase tracking-wider text-mac-accent">Hands-on Eng</span>
              </div>
              <div>
                <span className="text-4xl font-display font-black text-mac-primary block mb-2">24/7</span>
                <span className="text-sm font-bold uppercase tracking-wider text-mac-accent">Innovation Lab</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 relative"
          >
             <div className="aspect-square rounded-[3rem] bg-mac-surface shadow-2xl relative border border-mac-border p-4">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-mac-primary/10 z-10 mix-blend-multiply"></div>
                  <div className="w-full h-full bg-mac-surfaceDark flex items-center justify-center text-mac-muted font-display font-medium tracking-widest uppercase">Placeholder: Aero Education</div>
                </div>
                {/* Floating Glass UI Panel */}
                <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] max-w-[200px]">
                  <Crosshair className="text-mac-accent mb-3" size={24} />
                  <span className="font-display font-bold text-mac-primary text-sm leading-tight block">Precision Flight Operations</span>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        3. PROGRAMS PREVIEW (Interactive Hover)
        ========================================
      */}
      <section className="py-32 px-6 bg-white relative border-y border-mac-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-mac-primary mb-6">Core <span className="text-mac-accent">Programs</span></h2>
            <p className="text-mac-muted text-lg font-light">Interactive flight tracks engineered for direct deployment.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: "Aero Modelling", icon: <Layers size={32} />, desc: "Engineer and assemble custom aerodynamic airframes from scratch.", color: "group-hover:bg-[#E0F2FE]" },
              { title: "Drone Pilot Training", icon: <Crosshair size={32} />, desc: "Master telemetry, manual override, and autonomous flight path mapping.", color: "group-hover:bg-[#F0F9FF]" },
              { title: "STEM & Innovation", icon: <TerminalSquare size={32} />, desc: "Push boundaries in logic controllers, electronics, and sensor payloads.", color: "group-hover:bg-[#EFF6FF]" }
            ].map((program, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: idx * 0.15, duration: 0.6 }}
                className={`group bg-mac-bg p-12 rounded-[2rem] border border-mac-border hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500 overflow-hidden cursor-pointer ${program.color}`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-mac-accent mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-mac-primary mb-4">{program.title}</h3>
                <p className="text-mac-muted font-light leading-relaxed">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        4. INNOVATION LAB (Wide Scrollytelling format)
        ========================================
      */}
      <section className="py-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mac-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-[1400px] mx-auto bg-mac-primary rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Abstract background mesh */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <Cpu size={20} className="text-mac-accent" />
                 <span className="font-display font-bold tracking-widest text-white uppercase text-xs">Experimental Sector</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight">
                The Innovation <br/> <span className="text-mac-accent text-transparent bg-clip-text bg-gradient-to-r from-mac-accent to-mac-accentBright">Lab.</span>
              </h2>
              <p className="text-white/70 font-light text-lg mb-10 leading-relaxed max-w-lg">
                Our dedicated research environment focused on experimental aircraft builds, drone propulsion systems, and extreme student innovation projects.
              </p>
              <Link to="/programs" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-mac-primary rounded-xl backdrop-blur-md transition-all font-sans font-bold text-sm tracking-wide border border-white/20">
                View Lab Research
              </Link>
            </div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
               className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl"
            >
              <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/40 font-display font-medium tracking-widest uppercase transition-transform duration-[2s] hover:scale-105">Placeholder: Lab Space</div>
              {/* Floating UI Panel Inside Image */}
              <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-xl p-4 rounded-xl border border-white/10 flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-white/90 text-xs font-mono"><div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div> System Nominal</div>
                 <div className="flex items-center gap-2 text-white/90 text-xs font-mono"><div className="w-2 h-2 rounded-full bg-mac-accent animate-pulse"></div> Telemetry Active</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        5. PROFESSIONAL DRONE SERVICES (Grid)
        ========================================
      */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
             <div className="max-w-2xl">
               <h2 className="text-4xl md:text-5xl font-display font-bold text-mac-primary mb-4">Professional <span className="text-mac-accent">Services</span></h2>
               <p className="text-mac-muted font-light text-lg">Deploying industrial-grade UAV topologies for commercial sectors.</p>
             </div>
             <Link to="/services" className="text-mac-primary font-display font-bold text-sm uppercase tracking-widest hover:text-mac-accent transition-colors flex items-center gap-2 justify-center">
                All Capabilities <ArrowRight size={16} />
             </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Agriculture Drone Solutions", icon: <ShieldAlert size={28} />, desc: "Exact-dose spraying & crop monitoring." },
              { title: "Aerial Mapping & Surveying", icon: <Globe size={28} />, desc: "LiDAR and millimeter-accurate topographies." },
              { title: "Drone Videography", icon: <Video size={28} />, desc: "Cinema-grade aerial stabilization." }
            ].map((service, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.15 }}
                 className="bg-white border border-mac-border p-8 rounded-2xl flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-mac-bg flex items-center justify-center text-mac-primary mb-6 group-hover:bg-mac-accent group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-mac-primary mb-3">{service.title}</h3>
                <p className="text-mac-muted text-sm font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        6 & 7. EVENTS & GALLERY (Responsive Layout)
        ========================================
      */}
      <section className="py-24 px-6 bg-mac-bg border-y border-mac-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-6 h-[800px] lg:h-[600px]">
          
          {/* Main Events Highlight (Span 3) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-[2rem] overflow-hidden relative group border border-mac-border"
          >
             <div className="absolute inset-0 w-full h-full bg-mac-primary flex items-center justify-center text-white/20 font-display font-medium tracking-widest uppercase transition-all duration-1000 group-hover:scale-105">Placeholder: Live Events</div>
             <div className="absolute inset-0 bg-gradient-to-t from-mac-primary via-transparent to-transparent opacity-80 z-10"></div>
             
             <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
               <span className="inline-block px-4 py-1.5 bg-mac-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Live Experiences</span>
               <h2 className="text-4xl font-display font-bold text-white mb-4 leading-tight">Aerial Exhibitions <br/> & Campaigns</h2>
               <div className="flex flex-wrap gap-3">
                 <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-medium text-white border border-white/20">RC Air Shows</span>
                 <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-medium text-white border border-white/20">Drone Flower Drops</span>
                 <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-xs font-medium text-white border border-white/20">Flag Tow Campaigns</span>
               </div>
             </div>
          </motion.div>

          {/* Gallery Stack (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
               className="flex-1 bg-mac-surface rounded-[2rem] overflow-hidden relative group border border-mac-border"
             >
               <div className="w-full h-full bg-mac-surfaceDark flex items-center justify-center text-mac-muted font-display font-medium tracking-widest uppercase transition-transform duration-[1.5s] group-hover:scale-110">Placeholder: Workshops</div>
               <div className="absolute inset-0 bg-mac-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                 <span className="text-white font-display font-bold tracking-widest uppercase text-sm">Workshops</span>
               </div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
               className="flex-1 bg-mac-surface rounded-[2rem] overflow-hidden relative group border border-mac-border"
             >
               <div className="w-full h-full bg-mac-surfaceDark flex items-center justify-center text-mac-muted font-display font-medium tracking-widest uppercase transition-transform duration-[1.5s] group-hover:scale-110">Placeholder: Builds & Flights</div>
               <div className="absolute inset-0 bg-mac-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                 <span className="text-white font-display font-bold tracking-widest uppercase text-sm">Builds & Flights</span>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        8. CALL TO ACTION (Footer Anchor)
        ========================================
      */}
      <section className="py-32 px-6 relative flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Soft background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mac-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Compass size={48} strokeWidth={1} className="text-mac-accent mb-8 mx-auto animate-[spin_10s_linear_infinite]" />
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black text-mac-primary mb-10 tracking-tight leading-[1]">
            Let’s Build the <br/>
            <span className="text-mac-accent">Future Together.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers" className="px-10 py-5 bg-mac-primary text-white font-sans font-bold text-sm tracking-wide rounded-2xl shadow-xl hover:shadow-mac-primary/30 hover:-translate-y-1 transition-all">
              Join the Club
            </Link>
            <Link to="/contact" className="px-10 py-5 bg-white border border-mac-border text-mac-primary font-sans font-bold text-sm tracking-wide rounded-2xl hover:bg-mac-bg transition-all">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
