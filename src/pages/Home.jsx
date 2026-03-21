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
  TerminalSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import SplitText from "../components/SplitText";

const Home = () => {
  const containerRef = useRef(null);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#FAFAFA] w-full overflow-hidden text-mac-text font-sans selection:bg-mac-accent selection:text-white relative"
    >
      {/* Editorial Grid Lines - Absolute Background (Stops at footer) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center overflow-hidden">
        <div className="w-full max-w-7xl h-full border-x border-mac-border/30 relative flex justify-between">
          <div className="w-[1px] h-full bg-mac-border/40 absolute left-1/3"></div>
          <div className="w-[1px] h-full bg-mac-border/40 absolute right-1/3"></div>
        </div>
      </div>

      {/* 
        ========================================
        1. HERO SECTION 
        ========================================
      */}
      <motion.section className="relative h-screen min-h-[800px] flex justify-center items-center px-6 border-b border-mac-border/50 overflow-hidden z-10">
        {/* Ambient Warm Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mac-accent/15 rounded-full blur-[120px] pointer-events-none"></div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-30 w-full max-w-7xl mx-auto flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="mb-10 inline-flex items-center gap-2 px-6 py-2 bg-black/5 border border-black/10 rounded-full backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-mac-accent animate-pulse"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] text-mac-primary uppercase">
              Madras Aero Club
            </span>
          </motion.div>

          <div className="mb-12 flex flex-col items-center">
            <div className="flex gap-2 lg:gap-4 items-center mb-0">
              <SplitText
                text="Build."
                className="text-[5rem] md:text-8xl lg:text-[8.5rem] font-display font-black tracking-tight text-mac-primary leading-[1]"
                delay={40}
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
                className="text-[5rem] md:text-8xl lg:text-[8.5rem] font-display font-black tracking-tight text-mac-accent leading-[1]"
                delay={40}
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
              className="text-[5rem] md:text-8xl lg:text-[8.5rem] font-display font-black tracking-tight text-mac-primary leading-[1]"
              delay={40}
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
            className="text-lg md:text-xl text-mac-muted font-sans font-light leading-relaxed max-w-3xl mx-auto mb-14"
          >
            Welcome to Madras Aero Club — where aerospace learning meets
            real-world innovation. We don’t just teach aviation. We create
            engineers, pilots, innovators, and problem-solvers ready for the
            future of flight. From RC aircraft to advanced drone systems,
            experience hands-on aerospace like never before.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              to="/programs"
              className="group relative px-12 py-4 bg-mac-accent text-white font-sans font-bold text-xs uppercase tracking-widest shadow-xl shadow-mac-accent/20 hover:shadow-mac-accent/40 transition-all hover:-translate-y-1 block"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="group px-12 py-4 bg-transparent border border-mac-border text-mac-primary font-sans font-bold text-xs uppercase tracking-widest hover:bg-black/5 transition-all block"
            >
              Join the Club
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 
        ========================================
        2. OUR MISSION
        ========================================
      */}
      <section className="py-24 md:py-32 px-6 relative z-10 w-full max-w-7xl mx-auto border-b border-mac-border/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-8 h-[1px] bg-mac-accent"></div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-mac-accent uppercase font-bold">
                The Directive
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-mac-primary tracking-tight leading-[1.1]"
            >
              We aim to bridge the{" "}
              <span className="font-serif italic text-mac-accent">
                gap between:
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-mac-muted font-light max-w-md text-sm md:text-base mb-2 md:mb-4"
          >
            Madras Aero Club isn't just about building aircraft; it's about
            building the minds that will command the future of aviation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-[#FAFAFA] border border-mac-border/40 hover:bg-white transition-colors duration-500 overflow-hidden flex flex-col shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
          >
            <div className="w-full h-56 md:h-64 overflow-hidden relative transition-all duration-700 bg-mac-accent/5 border-b border-mac-border/20 flex items-center justify-center">
              <div className="font-mono text-[10px] tracking-[0.2em] text-mac-accent/40 uppercase relative z-10 transition-transform duration-700 group-hover:scale-110">
                [ Image Placeholder 01 ]
              </div>
            </div>
            <div className="p-8 pb-10 flex-grow relative">
              <h3 className="text-2xl font-display font-bold text-mac-primary mb-4 leading-tight relative mt-2">
                Theory{" "}
                <span className="italic font-serif font-light text-mac-accent">
                  &
                </span>{" "}
                Application
              </h3>
              <p className="text-sm text-mac-muted font-light leading-relaxed">
                Aerodynamic principles are immediately tested in physical
                prototypes and strict stress simulations.
              </p>
            </div>
            <div className="px-8 pb-8 mt-auto">
              <div className="w-12 h-[1px] bg-mac-border/60 group-hover:bg-mac-accent group-hover:w-full transition-all duration-700"></div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-[#FAFAFA] border border-mac-border/40 hover:bg-white transition-colors duration-500 overflow-hidden flex flex-col shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
          >
            <div className="w-full h-56 md:h-64 overflow-hidden relative transition-all duration-700 bg-mac-accent/5 border-b border-mac-border/20 flex items-center justify-center">
              <div className="font-mono text-[10px] tracking-[0.2em] text-mac-accent/40 uppercase relative z-10 transition-transform duration-700 group-hover:scale-110">
                [ Image Placeholder 02 ]
              </div>
            </div>
            <div className="p-8 pb-10 flex-grow relative">
              <h3 className="text-2xl font-display font-bold text-mac-primary mb-4 leading-tight relative mt-2">
                Learning{" "}
                <span className="italic font-serif font-light text-mac-accent">
                  &
                </span>{" "}
                Doing
              </h3>
              <p className="text-sm text-mac-muted font-light leading-relaxed">
                To us, knowledge without execution is incomplete. Construct
                industrial-grade UAVs from day one.
              </p>
            </div>
            <div className="px-8 pb-8 mt-auto">
              <div className="w-12 h-[1px] bg-mac-border/60 group-hover:bg-mac-accent group-hover:w-full transition-all duration-700"></div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-[#FAFAFA] border border-mac-border/40 hover:bg-white transition-colors duration-500 overflow-hidden flex flex-col shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
          >
            <div className="w-full h-56 md:h-64 overflow-hidden relative transition-all duration-700 bg-mac-accent/5 border-b border-mac-border/20 flex items-center justify-center">
              <div className="font-mono text-[10px] tracking-[0.2em] text-mac-accent/40 uppercase relative z-10 transition-transform duration-700 group-hover:scale-110">
                [ Image Placeholder 03 ]
              </div>
            </div>
            <div className="p-8 pb-10 flex-grow relative">
              <h3 className="text-2xl font-display font-bold text-mac-primary mb-4 leading-tight relative mt-2">
                Curiosity{" "}
                <span className="italic font-serif font-light text-mac-accent">
                  &
                </span>{" "}
                Innovation
              </h3>
              <p className="text-sm text-mac-muted font-light leading-relaxed">
                The future of flight isn't found in textbooks; it's discovered
                through relentless lab experimentation.
              </p>
            </div>
            <div className="px-8 pb-8 mt-auto">
              <div className="w-12 h-[1px] bg-mac-border/60 group-hover:bg-mac-accent group-hover:w-full transition-all duration-700"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        7. CALL TO ACTION 
        ========================================
      */}
      <section className="py-24 px-6 relative flex flex-col items-center justify-center text-center overflow-hidden z-20  bg-mac-surfaceDark">
        {/* Soft background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mac-accent/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Compass
            size={48}
            strokeWidth={1}
            className="text-mac-accent mb-12 mx-auto animate-[spin_15s_linear_infinite]"
          />
          <h2 className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-black text-mac-primary mb-12 tracking-tight leading-[1.05]">
            Let’s Build the <br />
            <span className="text-mac-accent italic">Future Together.</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/careers"
              className="px-12 py-5 bg-mac-accent text-white font-sans font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-mac-accent/30 hover:-translate-y-1 transition-all"
            >
              Join the Club
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
