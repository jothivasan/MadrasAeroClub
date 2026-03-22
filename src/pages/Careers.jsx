import {
  Target,
  Users,
  Plane,
  Database,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import SplitText from "../components/SplitText";

const Careers = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="bg-mac-bg text-mac-text">
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
            <span className="text-mac-accent font-sans font-semibold tracking-[0.2em] uppercase text-sm mb-8 block">
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
              The aerospace sector demands specialized expertise. Discover the
              foundation of an elite professional career.
            </p>
          </div>
        </motion.div>

        {/* Minimalist decorative element */}
        <div className="absolute bottom-16 right-6 md:right-12 text-[10px] font-sans tracking-[0.3em] text-mac-muted uppercase rotate-90 origin-bottom-right pointer-events-none">
          MAC — IDX: CAR
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mt-24 mb-32">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-mac-primary tracking-tight mb-4">
            CAREERS
          </h2>
          <div className="w-16 h-[2px] bg-mac-accent"></div>
        </div>

        <div className="mb-24">
          <h3 className="text-sm font-sans font-bold tracking-[0.2em] text-mac-muted uppercase mb-8 border-b border-mac-border/50 pb-4">
            Career Opportunities
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Drone Pilot",
                icon: <Plane size={22} strokeWidth={1.5} />,
                desc: "Commercial flight operations, mapping, and surveying.",
              },
              {
                title: "Aerospace Engineer",
                icon: <Target size={22} strokeWidth={1.5} />,
                desc: "Design, test, and optimize UAV frameworks.",
              },
              {
                title: "UAV Technician",
                icon: <Users size={22} strokeWidth={1.5} />,
                desc: "Hardware assembly, maintenance, and diagnostics.",
              },
              {
                title: "Survey Specialist",
                icon: <Database size={22} strokeWidth={1.5} />,
                desc: "Processing photogrammetry and topographical data.",
              },
              {
                title: "Robotics Engineer",
                icon: <BriefcaseBusiness size={22} strokeWidth={1.5} />,
                desc: "Autonomous navigation and logic controllers.",
              },
            ].map((role, idx) => (
              <div
                key={idx}
                className="bg-white border border-mac-border rounded-xl p-6 hover:shadow-md transition-all flex items-start gap-5 group cursor-pointer"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-mac-bg flex items-center justify-center text-mac-primary group-hover:text-mac-accent transition-colors">
                  {role.icon}
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-mac-primary group-hover:text-mac-accent transition-colors mb-1.5">
                    {role.title}
                  </h4>
                  <p className="text-mac-muted font-sans text-[13px] leading-relaxed mb-3">
                    {role.desc}
                  </p>
                  <div className="flex items-center gap-2 text-mac-primary text-[11px] font-semibold uppercase tracking-wider group-hover:text-mac-accent transition-colors">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right Column / New Section - We Help You With */}
      <section className="w-full bg-mac-surfaceDark py-20 px-6 md:px-12 relative overflow-hidden">
        {/* Subtle white lighting glow for depth */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/60 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-mac-accent/10 rounded-full blur-[60px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 relative z-10">
          <div className="lg:w-1/3">
            <h3 className="text-3xl md:text-4xl font-display font-light text-mac-primary mb-6 leading-tight">
              We Help <br />
              <span className="font-serif italic text-mac-accent font-semibold block mt-1">
                You With:
              </span>
            </h3>
            <button className="hidden lg:flex px-8 py-3.5 bg-mac-primary text-white shadow-md font-sans text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-mac-accent hover:shadow-lg hover:shadow-mac-accent/20 transition-all duration-300">
              Get Started
            </button>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-5 lg:gap-6 w-full">
            {[
              "Career clarity",
              "Skill development roadmap",
              "Industry exposure",
              "Practical experience",
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-5 items-center group p-5 rounded-xl border border-mac-border/40 hover:border-mac-accent/40 bg-white/40 backdrop-blur-sm hover:bg-white/80 hover:shadow-md hover:shadow-mac-accent/5 transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-white border border-mac-border/60 flex items-center justify-center text-mac-accent font-mono text-sm tracking-wider group-hover:bg-mac-accent group-hover:border-mac-accent group-hover:text-white transition-all duration-300 shadow-sm relative overflow-hidden">
                  <span className="relative z-10 font-bold">0{index + 1}</span>
                </div>
                <p className="text-lg font-sans font-medium text-mac-primary group-hover:text-mac-accent transition-colors duration-300">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <button className="lg:hidden w-full px-8 py-3.5 bg-mac-primary text-white shadow-md font-sans text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-mac-accent hover:shadow-lg hover:shadow-mac-accent/20 transition-all duration-300 mt-6">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
