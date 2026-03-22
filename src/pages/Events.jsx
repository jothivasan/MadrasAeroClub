import {
  BookOpen,
  Compass,
  Settings,
  Calendar,
  PlaneTakeoff,
} from "lucide-react";
import { motion } from "framer-motion";
import SplitText from "../components/SplitText";

const Events = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="bg-mac-bg text-mac-text pb-32">
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
              Aerial Experiences
            </span>
            <h1 className="mb-8">
              <SplitText
                text="The Sky is our "
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
                text="Canvas."
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
              We curate unforgettable aerial experiences combining absolute
              precision with sheer visual impact.
            </p>
          </div>
        </motion.div>

        {/* Minimalist decorative element */}
        <div className="absolute bottom-16 right-6 md:right-12 text-[10px] font-sans tracking-[0.3em] text-mac-muted uppercase rotate-90 origin-bottom-right pointer-events-none">
          MAC — IDX: EVT
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mt-24 mb-32">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-mac-primary mb-6">
            Experience Aerospace{" "}
            <span className="font-serif italic text-mac-accent">
              in Action.
            </span>
          </h2>
          <p className="text-mac-muted font-sans text-lg max-w-2xl bg-white border-l-2 border-mac-accent pl-4">
            Immerse yourself in high-caliber technical operations and
            aeronautical engineering platforms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white border border-mac-border rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all flex flex-col items-start"
          >
            <div className="aspect-[4/3] w-full bg-mac-surface relative flex items-center justify-center">
              <div className="absolute inset-0 bg-mac-bg/50"></div>
              <BookOpen
                strokeWidth={1.5}
                size={48}
                className="text-mac-accent relative z-10 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 w-full border-t border-mac-border/50 bg-white">
              <h3 className="text-xl font-display font-bold text-mac-primary mb-3">
                Workshops
              </h3>
              <p className="text-mac-muted font-sans text-sm leading-relaxed">
                Hands-on technical training and theoretical deep dives into
                modern aerospace engineering and drone architecture.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Drone flights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-white border border-mac-border rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all flex flex-col items-start"
          >
            <div className="aspect-[4/3] w-full bg-mac-surface relative flex items-center justify-center">
              <div className="absolute inset-0 bg-mac-bg/50"></div>
              <Compass
                strokeWidth={1.5}
                size={48}
                className="text-mac-accent relative z-10 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 w-full border-t border-mac-border/50 bg-white">
              <h3 className="text-xl font-display font-bold text-mac-primary mb-3">
                Drone Flights
              </h3>
              <p className="text-mac-muted font-sans text-sm leading-relaxed">
                Real-world autonomous flight testing, high-velocity maneuvers,
                and precision waypoint navigation operations.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Aircraft builds */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-white border border-mac-border rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all flex flex-col items-start"
          >
            <div className="aspect-[4/3] w-full bg-mac-surface relative flex items-center justify-center">
              <div className="absolute inset-0 bg-mac-bg/50"></div>
              <Settings
                strokeWidth={1.5}
                size={48}
                className="text-mac-accent relative z-10 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 w-full border-t border-mac-border/50 bg-white">
              <h3 className="text-xl font-display font-bold text-mac-primary mb-3">
                Aircraft Builds
              </h3>
              <p className="text-mac-muted font-sans text-sm leading-relaxed">
                Collaborative chassis assembly, drivetrain integration, and
                rapid prototyping of fixed-wing and multirotor UAVs.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Live events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group bg-white border border-mac-border rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all flex flex-col items-start"
          >
            <div className="aspect-[4/3] w-full bg-mac-surface relative flex items-center justify-center">
              <div className="absolute inset-0 bg-mac-bg/50"></div>
              <Calendar
                strokeWidth={1.5}
                size={48}
                className="text-mac-accent relative z-10 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 w-full border-t border-mac-border/50 bg-white">
              <h3 className="text-xl font-display font-bold text-mac-primary mb-3">
                Live Events
              </h3>
              <p className="text-mac-muted font-sans text-sm leading-relaxed">
                Industry panels, competitive flying showcases, and public
                demonstrations displaying sheer engineering capability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-mac-surfaceDark text-mac-primary border-t border-mac-border">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-mac-primary">
            The Distinction
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-mac-border shadow-sm flex flex-col items-center">
              <h4 className="font-display font-bold text-mac-accent mb-3 text-3xl">
                01
              </h4>
              <p className="text-sm font-semibold font-sans text-mac-primary">
                Audience Engagement
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-mac-border shadow-sm flex flex-col items-center">
              <h4 className="font-display font-bold text-mac-accent mb-3 text-3xl">
                02
              </h4>
              <p className="text-sm font-semibold font-sans text-mac-primary">
                Methodical Execution
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-mac-border shadow-sm flex flex-col items-center">
              <h4 className="font-display font-bold text-mac-accent mb-3 text-3xl">
                03
              </h4>
              <p className="text-sm font-semibold font-sans text-mac-primary">
                Safety Protocol
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-mac-border shadow-sm flex flex-col items-center">
              <h4 className="font-display font-bold text-mac-accent mb-3 text-3xl">
                04
              </h4>
              <p className="text-sm font-semibold font-sans text-mac-primary">
                Visual Impact
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
