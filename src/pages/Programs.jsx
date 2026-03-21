import { motion } from "framer-motion";
import { Wrench, Navigation, Lightbulb, Hexagon } from "lucide-react";

const Programs = () => {
  return (
    <div className="bg-mac-bg text-mac-text pb-32">
      {/* Header */}
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
            <span className="text-mac-accent font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-8 block">
               Educational Programs
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-light mb-8 text-mac-primary leading-[1.05] tracking-tight">
               Elevate Your <br />
               <span className="italic text-mac-accent font-serif">Expertise.</span>
            </h1>
          </div>
          <div className="md:w-1/3 pb-2">
            <div className="w-12 h-[2px] bg-mac-accent mb-8"></div>
            <p className="text-xl text-mac-muted font-sans font-light leading-relaxed">
               Our programs are meticulously structured to take you from foundational aerodynamic theory to uncompromising professional execution.
            </p>
          </div>
        </motion.div>
        
        {/* Minimalist decorative element */}
        <div className="absolute bottom-16 right-6 md:right-12 text-[10px] font-sans tracking-[0.3em] text-mac-muted uppercase rotate-90 origin-bottom-right pointer-events-none">
          MAC — IDX: PRG
        </div>
      </section>

      {/* Programs List */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-16 mt-16">
        
        {/* Program 1 */}
        <div className="bg-white rounded-3xl border border-mac-border shadow-sm overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-mac-surfaceDark/30 p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-mac-border relative overflow-hidden">
            <Hexagon className="absolute text-mac-accent/5 w-[150%] h-[150%] -right-1/4 -bottom-1/4 stroke-1 pointer-events-none" />
            <Wrench strokeWidth={1.5} size={80} className="text-mac-accent relative z-10" />
          </div>
          <div className="lg:w-3/5 p-8 md:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mac-bg border border-mac-border rounded-full text-xs font-semibold text-mac-muted uppercase mb-6">
              Track 01
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mac-primary mb-4">
              Aero Modelling Architecture
            </h2>
            <p className="text-mac-muted mb-8 leading-relaxed font-sans">
              Deconstruct the physics of flight by engineering tangible models from absolute scratch. Learn structural stability, RC systems integration, and practical aerodynamics.
            </p>

            <h4 className="font-semibold text-mac-primary mb-4 uppercase text-xs font-sans tracking-wider">
              Curriculum Modules:
            </h4>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Fluid Aerodynamics",
                "Structural Stability",
                "RC Systems Integration",
                "Airframe Assembly",
                "Flight Test Operations",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-mac-accent"></div>
                  <span className="text-mac-text text-sm font-sans font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <button className="px-6 py-3 bg-mac-primary text-white font-sans text-sm font-semibold rounded-lg hover:bg-mac-accent transition-colors">
              View Curriculum & Enroll
            </button>
          </div>
        </div>

        {/* Program 2 */}
        <div className="bg-white rounded-3xl border border-mac-border shadow-sm overflow-hidden flex flex-col lg:flex-row-reverse">
          <div className="lg:w-2/5 bg-[#F0F8FF] p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-l border-mac-border relative overflow-hidden">
             <Hexagon className="absolute text-mac-accent/5 w-[150%] h-[150%] -left-1/4 -top-1/4 stroke-1 pointer-events-none" />
            <Navigation
              strokeWidth={1.5}
              size={80}
              className="text-mac-accent transform rotate-45 relative z-10"
            />
          </div>
          <div className="lg:w-3/5 p-8 md:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mac-bg border border-mac-border rounded-full text-xs font-semibold text-mac-muted uppercase mb-6">
              Track 02
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mac-primary mb-4">
              UAV Pilot Operations
            </h2>
            <p className="text-mac-muted mb-8 leading-relaxed font-sans">
              Master autonomous and manual drone operation. Execute mission-planning logic for uncompromising commercial and industrial applications.
            </p>

            <h4 className="font-semibold text-mac-primary mb-4 uppercase text-xs font-sans tracking-wider">
              Curriculum Modules:
            </h4>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Drone Hardware Architecture",
                "Telemetry Systems",
                "Regulatory Frameworks",
                "Manual Override Flight",
                "Autonomous Mission Protocol",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-mac-accent"></div>
                  <span className="text-mac-text text-sm font-sans font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <button className="px-6 py-3 bg-mac-primary text-white font-sans text-sm font-semibold rounded-lg hover:bg-mac-accent transition-colors">
              View Curriculum & Enroll
            </button>
          </div>
        </div>

        {/* Program 3 */}
        <div className="bg-white rounded-3xl border border-mac-border shadow-sm overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-mac-surfaceDark/30 p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-mac-border relative overflow-hidden">
            <Hexagon className="absolute text-mac-accent/5 w-[150%] h-[150%] -right-1/4 -bottom-1/4 stroke-1 pointer-events-none" />
            <Lightbulb strokeWidth={1.5} size={80} className="text-mac-accent relative z-10" />
          </div>
          <div className="lg:w-3/5 p-8 md:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mac-bg border border-mac-border rounded-full text-xs font-semibold text-mac-muted uppercase mb-6">
              Track 03
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mac-primary mb-4">
              Innovation & Robotics Incubator
            </h2>
            <p className="text-mac-muted mb-8 leading-relaxed font-sans">
              For absolute boundary pushing. A dedicated laboratory track designed to forge the future of aerospace hardware and autonomous logic controllers.
            </p>

            <h4 className="font-semibold text-mac-primary mb-4 uppercase text-xs font-sans tracking-wider">
              Lab Operations:
            </h4>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Experimental Airframes",
                "Advanced Circuit Integration",
                "Logic Controller Design",
                "Iterative Prototyping",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-mac-accent"></div>
                  <span className="text-mac-text text-sm font-sans font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <button className="px-6 py-3 bg-mac-primary text-white font-sans text-sm font-semibold rounded-lg hover:bg-mac-accent transition-colors">
              Submit Lab Application
            </button>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Programs;
