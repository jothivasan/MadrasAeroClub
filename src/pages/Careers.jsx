import {
  Target,
  Users,
  Plane,
  Database,
  BriefcaseBusiness,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import SplitText from "../components/SplitText";

const Careers = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
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
               Career Pathways
            </span>
            <h1 className="mb-8">
               <SplitText
                 text="Launch Your "
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
                 text="Aviation Career."
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
               The aerospace sector demands specialized expertise. Discover the foundation of an elite professional career.
            </p>
          </div>
        </motion.div>
        
        {/* Minimalist decorative element */}
        <div className="absolute bottom-16 right-6 md:right-12 text-[10px] font-sans tracking-[0.3em] text-mac-muted uppercase rotate-90 origin-bottom-right pointer-events-none">
          MAC — IDX: CAR
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 mt-16 mb-24">
        {/* Left Column - Opportunities */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-8 border-b border-mac-border pb-4">
            <h2 className="text-2xl font-bold font-display text-mac-primary">
              Professional Roles
            </h2>
            <span className="text-xs uppercase font-semibold text-mac-muted">
              Open Disciplines
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-mac-border rounded-xl p-8 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-mac-bg rounded-lg flex items-center justify-center mb-6 group-hover:bg-mac-accent/10 transition-colors">
                 <Plane className="text-mac-primary group-hover:text-mac-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold font-display text-mac-primary mb-3">
                UAV Pilot
              </h3>
              <p className="text-mac-muted font-sans text-sm leading-relaxed mb-6">
                Commercial flight operations across agriculture, media, and surveying domains.
              </p>
              <button className="text-mac-primary font-semibold text-xs tracking-wider uppercase hover:text-mac-accent transition-colors flex items-center gap-2">
                 Learn More <ArrowRight size={14} />
              </button>
            </div>

            <div className="bg-white border border-mac-border rounded-xl p-8 hover:shadow-md transition-shadow group">
               <div className="w-12 h-12 bg-mac-bg rounded-lg flex items-center justify-center mb-6 group-hover:bg-mac-accent/10 transition-colors">
                 <Target className="text-mac-primary group-hover:text-mac-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold font-display text-mac-primary mb-3">
                Aerospace Engineer
              </h3>
              <p className="text-mac-muted font-sans text-sm leading-relaxed mb-6">
                Design, test, and optimize structural and aerodynamic UAV frameworks.
              </p>
              <button className="text-mac-primary font-semibold text-xs tracking-wider uppercase hover:text-mac-accent transition-colors flex items-center gap-2">
                 Learn More <ArrowRight size={14} />
              </button>
            </div>

            <div className="bg-white border border-mac-border rounded-xl p-8 hover:shadow-md transition-shadow group">
               <div className="w-12 h-12 bg-mac-bg rounded-lg flex items-center justify-center mb-6 group-hover:bg-mac-accent/10 transition-colors">
                 <Users className="text-mac-primary group-hover:text-mac-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold font-display text-mac-primary mb-3">
                UAV Technician
              </h3>
              <p className="text-mac-muted font-sans text-sm leading-relaxed mb-6">
                Maintenance, hardware assembly, and continuous repair of unmanned aircraft systems.
              </p>
              <button className="text-mac-primary font-semibold text-xs tracking-wider uppercase hover:text-mac-accent transition-colors flex items-center gap-2">
                 Learn More <ArrowRight size={14} />
              </button>
            </div>

            <div className="bg-white border border-mac-border rounded-xl p-8 hover:shadow-md transition-shadow group">
               <div className="w-12 h-12 bg-mac-bg rounded-lg flex items-center justify-center mb-6 group-hover:bg-mac-accent/10 transition-colors">
                 <Database className="text-mac-primary group-hover:text-mac-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold font-display text-mac-primary mb-3">
                Survey Specialist
              </h3>
              <p className="text-mac-muted font-sans text-sm leading-relaxed mb-6">
                Processing photogrammetry and mapping data into verifiable topographies.
              </p>
              <button className="text-mac-primary font-semibold text-xs tracking-wider uppercase hover:text-mac-accent transition-colors flex items-center gap-2">
                 Learn More <ArrowRight size={14} />
              </button>
            </div>

            <div className="bg-white border border-mac-border rounded-xl p-8 hover:shadow-md transition-shadow group sm:col-span-2">
               <div className="flex items-center gap-6 mb-4">
                  <div className="w-12 h-12 bg-mac-bg rounded-lg flex items-center justify-center group-hover:bg-mac-accent/10 transition-colors">
                    <BriefcaseBusiness className="text-mac-primary group-hover:text-mac-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-mac-primary">
                      Systems & Robotics
                    </h3>
                  </div>
               </div>
              <p className="text-mac-muted font-sans text-sm leading-relaxed mb-6">
                Developing autonomous navigation algorithms, logic controllers, and integrating complex payloads for specialized commercial applications.
              </p>
              <button className="text-mac-primary font-semibold text-xs tracking-wider uppercase hover:text-mac-accent transition-colors flex items-center gap-2">
                 Learn More <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - How We Help */}
        <div className="lg:col-span-4">
          <div className="bg-white border border-mac-border rounded-2xl p-8 shadow-sm lg:sticky lg:top-32">
            <h3 className="text-xl font-bold font-display text-mac-primary mb-6">
              Career Support
            </h3>
            <p className="text-mac-muted text-sm font-sans mb-8">
              We provide structural guidance to ensure our graduates enter the workforce fully prepared.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-mac-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                   <div className="w-2 h-2 rounded-full bg-mac-accent"></div>
                </div>
                <div>
                  <strong className="block text-mac-primary mb-1 text-sm">
                    Career Clarity
                  </strong>
                  <p className="text-sm font-sans text-mac-muted">
                    Guidance on determining the optimal professional track.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-mac-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                   <div className="w-2 h-2 rounded-full bg-mac-accent"></div>
                </div>
                <div>
                  <strong className="block text-mac-primary mb-1 text-sm">
                    Skill Roadmap
                  </strong>
                  <p className="text-sm font-sans text-mac-muted">
                    Clear pathways to acquiring necessary industry certifications.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-mac-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                   <div className="w-2 h-2 rounded-full bg-mac-accent"></div>
                </div>
                <div>
                  <strong className="block text-mac-primary mb-1 text-sm">
                    Industry Access
                  </strong>
                  <p className="text-sm font-sans text-mac-muted">
                    Direct networking with commercial aviation and UAV partners.
                  </p>
                </div>
              </li>
            </ul>

            <button className="w-full py-4 bg-mac-primary text-white font-sans text-sm font-semibold rounded-lg hover:bg-mac-accent transition-colors">
              Schedule Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
