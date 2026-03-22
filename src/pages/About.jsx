import { motion } from "framer-motion";
import SplitText from "../components/SplitText";
import {
  BookOpen,
  Wrench,
  Plane,
  Compass,
  Target,
  Crosshair,
  Layers,
} from "lucide-react";

const About = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="bg-mac-bg text-mac-text">
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex items-center bg-[#FAFAFA] border-b border-mac-border relative overflow-hidden">
        {/* Subtle, elegant architectural lines */}
        <div className="absolute top-0 left-[20%] md:left-[30%] w-[1px] h-full bg-mac-border/60 pointer-events-none"></div>
        <div className="absolute top-0 right-[20%] md:right-[30%] w-[1px] h-full bg-mac-border/60 pointer-events-none"></div>
        <div className="absolute top-[50%] left-0 w-full h-[1px] bg-mac-border/30 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-16 relative z-10"
        >
          <div className="md:w-2/3 md:pr-12">
            <span className="text-mac-accent font-sans font-semibold tracking-[0.2em] uppercase text-sm mb-8 block">
              Our Heritage
            </span>
            <h1 className="mb-8">
              <SplitText
                text="Reimagining "
                className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-light text-mac-primary leading-[1.05] tracking-tight"
                delay={60}
                duration={1.2}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
              <br />
              <SplitText
                text="Flight Training."
                className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-light italic text-mac-accent font-serif leading-[1.05] tracking-tight"
                delay={60}
                duration={1.2}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                onLetterAnimationComplete={handleAnimationComplete}
                showCallback={true}
              />
            </h1>
          </div>
          <div className="md:w-1/3 pb-2">
            <div className="w-12 h-[2px] bg-mac-accent mb-8"></div>
            <p className="text-xl text-mac-muted font-sans font-light leading-relaxed">
              Madras Aero Club was founded with a bold vision — to redefine how
              aerospace is learned. We believe the future belongs to those who
              can build, understand, and command flight.
            </p>
          </div>
        </motion.div>

        {/* Minimalist decorative element */}
        <div className="absolute bottom-16 right-6 md:right-12 text-[10px] font-sans tracking-[0.3em] text-mac-muted uppercase rotate-90 origin-bottom-right pointer-events-none">
          MAC — IDX: ABT
        </div>
      </section>

      {/* 
        ========================================
        2. WHO WE ARE
        ========================================
      */}
      <section className="py-32 px-6 relative z-10 w-full max-w-7xl mx-auto border-b border-mac-border/30 overflow-hidden">
        {/* Subtle structural element */}
        <div className="absolute top-0 right-0 w-[1px] h-full bg-mac-border/30 pointer-events-none hidden lg:block"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          {/* Section Label (Architectural) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-mac-accent"></div>
              <span className="font-mono text-sm tracking-[0.3em] text-mac-accent uppercase font-bold">
                Who Wer Are
              </span>
            </div>

            {/* Abstract Drone Wireframe Model */}
            <div className="hidden lg:flex mt-auto pointer-events-none select-none relative w-32 h-32 items-center justify-center opacity-100">
              {/* Outer Radar Ring */}
              <div className="absolute inset-0 rounded-full border border-mac-border/40"></div>
              <div className="absolute top-1/2 left-[5%] w-[90%] h-[1px] bg-mac-border/20"></div>
              <div className="absolute left-1/2 top-[5%] h-[90%] w-[1px] bg-mac-border/20"></div>

              {/* Drone Design */}
            </div>
          </div>

          {/* Core Statement */}
          <div className="lg:col-span-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Large architectural quote mark overlay */}
              <span className="absolute -top-16 -left-8 md:-left-16 text-[10rem] md:text-[14rem] font-serif italic text-mac-accent/40 leading-none pointer-events-none select-none">
                "
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-mac-primary leading-[1.1] tracking-tight relative z-10">
                Madras Aero Club is an advanced aerospace learning and drone
                technology platform.
              </h2>

              <div className="w-16 h-1 bg-mac-accent my-10 md:my-12"></div>

              <p className="text-2xl md:text-3xl font-display font-light text-mac-muted leading-relaxed">
                We focus exclusively on{" "}
                <span className="font-serif italic text-mac-accent font-light">
                  practical education, real-world applications
                </span>
                , and forging future-ready aviation skills.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        ========================================
        3. WHAT WE DO
        ========================================
      */}
      <section className="py-24 md:py-32 px-6 relative z-10 w-full max-w-7xl mx-auto border-b border-mac-border/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Left Column: Heading & Sticky Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-52 h-fit">
            <div className="flex items-center gap-3 mb-8 text-mac-accent">
              <Layers size={16} strokeWidth={2} />
              <span className="font-mono text-sm tracking-[0.3em] uppercase font-bold">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-mac-primary leading-[1.05] tracking-tight mb-8">
              The MAC
              <br />
              Methodology.
            </h2>
            <p className="text-lg md:text-xl text-mac-muted font-light leading-relaxed mb-12 max-w-md">
              A relentless focus on transforming theory into tangible aerospace
              capability through a rigorous, sequential three-phase framework.
            </p>

            {/* Technical abstract decoration */}
            <div className="w-full max-w-xs h-[1px] bg-gradient-to-r from-mac-accent to-transparent mb-3"></div>
          </div>

          {/* Right Column: The 3 phases */}
          <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
            {[
              {
                id: "01",
                title: "Learn",
                desc: "Hands-on aerospace training.",
                icon: BookOpen,
                detail: "Theory & Sim",
              },
              {
                id: "02",
                title: "Build",
                desc: "Design, assemble, and fly systems.",
                icon: Wrench,
                detail: "Engineering",
              },
              {
                id: "03",
                title: "Apply",
                desc: "Solve real-world problems using drones.",
                icon: Plane,
                detail: "Field Ops",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-8 p-10 lg:p-12 bg-white border border-mac-border/40 hover:border-mac-accent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 overflow-hidden"
              >
                {/* Background massive number */}
                <span className="absolute -right-6 -bottom-16 text-[14rem] font-serif italic text-mac-accent/5 group-hover:text-mac-accent/10 group-hover:-translate-x-4 transition-all duration-700 pointer-events-none select-none">
                  {item.id}
                </span>

                {/* Icon Dial / Radar decoration */}
                <div className="relative shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full border border-mac-accent/20 group-hover:border-mac-accent bg-mac-bg/50 transition-colors duration-700">
                  <div className="absolute inset-2 rounded-full border border-dashed border-mac-accent/40 group-hover:rotate-180 transition-transform duration-[3s] ease-linear"></div>
                  <item.icon
                    size={28}
                    className="text-mac-accent relative z-10"
                    strokeWidth={1.5}
                  />

                  {/* Crosshair accents */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-mac-accent/20 -translate-x-1/2"></div>
                  <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-mac-accent/20 -translate-y-1/2"></div>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-mono font-bold text-mac-accent">
                      PHASE {item.id}
                    </span>
                    <div className="h-[1px] w-8 md:w-12 bg-mac-border"></div>
                    <span className="text-[10px] font-mono tracking-widest text-mac-muted uppercase">
                      {item.detail}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-mac-primary mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-base text-mac-muted font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ========================================
        4. VISION & MISSION
        ========================================
      */}
      <section className="py-24 md:py-32 px-6 relative z-10 w-full max-w-7xl mx-auto border-b border-mac-border/30">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="flex items-center gap-3 mb-8 text-mac-accent">
              <Target size={16} strokeWidth={2} />
              <span className="font-mono text-sm tracking-[0.3em] uppercase font-bold">
                Our Vision
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-mac-primary mb-8 leading-[1.1] tracking-tight">
              To become a leading aerospace and drone innovation ecosystem
            </h3>
            <p className="text-lg text-mac-muted font-light leading-relaxed border-l-2 border-mac-accent pl-6 py-1">
              Shaping the next generation of aviation leaders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="flex items-center gap-3 mb-8 text-mac-accent">
              <Crosshair size={16} strokeWidth={2} />
              <span className="font-mono text-sm tracking-[0.3em] uppercase font-bold">
                Our Mission
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-mac-primary mb-8 leading-[1.1] tracking-tight">
              To deliver hands-on, industry-relevant aerospace education
            </h3>
            <p className="text-lg text-mac-muted font-light leading-relaxed border-l-2 border-mac-accent pl-6 py-1">
              Empowering individuals to build real-world solutions using flying
              technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 
        ========================================
        5. OUR PHILOSOPHY
        ========================================
      */}
      <section className="py-24 px-6 bg-mac-surfaceDark text-mac-primary relative z-10 border-b border-mac-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-3xl md:text-5xl lg:text-[4rem] font-display font-bold mb-10 text-mac-primary leading-tight tracking-tight">
              "Aviation is not just a subject — <br />
              <span className="text-mac-accent font-serif">
                it’s a discipline."
              </span>
            </p>
            <div className="w-px h-16 bg-mac-border mx-auto mb-10" />
            <p className="text-mac-muted font-semibold tracking-wider text-xs uppercase mb-10">
              We train professionals to:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="text-lg font-sans text-mac-muted">
                Think like <br />
                <span className="font-bold font-display text-mac-primary text-xl mt-1 block">
                  Engineers
                </span>
              </div>
              <div className="w-1.5 h-1.5 bg-mac-accent rounded-full hidden md:block"></div>
              <div className="text-lg font-sans text-mac-muted">
                Solve like <br />
                <span className="font-bold font-display text-mac-primary text-xl mt-1 block">
                  Innovators
                </span>
              </div>
              <div className="w-1.5 h-1.5 bg-mac-accent rounded-full hidden md:block"></div>
              <div className="text-lg font-sans text-mac-muted">
                Execute like <br />
                <span className="font-bold font-display text-mac-primary text-xl mt-1 block">
                  Aviators
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
