import { Camera, Flag, PlaneTakeoff } from "lucide-react";
import { motion } from "framer-motion";
import SplitText from "../components/SplitText";

const Events = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
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
            <span className="text-mac-accent font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-8 block">
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
               We curate unforgettable aerial experiences combining absolute precision with sheer visual impact.
            </p>
          </div>
        </motion.div>
        
        {/* Minimalist decorative element */}
        <div className="absolute bottom-16 right-6 md:right-12 text-[10px] font-sans tracking-[0.3em] text-mac-muted uppercase rotate-90 origin-bottom-right pointer-events-none">
          MAC — IDX: EVT
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mt-24 mb-32">
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white border border-mac-border rounded-2xl overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="aspect-[4/3] bg-mac-surfaceDark relative overflow-hidden">
              <img
                src="/AeroPlainPrototype/ezgif-frame-120.jpg"
                alt="Air Shows"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-display text-mac-primary mb-3">
                Air Shows
              </h3>
              <p className="text-mac-muted font-sans leading-relaxed">
                Aircraft demonstrations and breathtaking maneuvers optimized for large-scale audience engagement.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-white border border-mac-border rounded-2xl overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="aspect-[4/3] bg-mac-surface relative flex items-center justify-center">
              <div className="absolute inset-0 bg-mac-bg/50"></div>
              <Camera
                strokeWidth={1.5}
                size={56}
                className="text-mac-accent relative z-10 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
               <h3 className="text-2xl font-bold font-display text-mac-primary mb-3">
                 Drone Displays
               </h3>
               <p className="text-mac-muted font-sans leading-relaxed">
                 Calculated aerial light shows and formations engineered for exclusive occasions and pivotal moments.
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-white border border-mac-border rounded-2xl overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="aspect-[4/3] bg-mac-surface relative flex items-center justify-center">
              <div className="absolute inset-0 bg-mac-bg/50"></div>
              <Flag
                strokeWidth={1.5}
                size={56}
                className="text-mac-accent relative z-10 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
             <h3 className="text-2xl font-bold font-display text-mac-primary mb-3">
               Flag Tows
             </h3>
             <p className="text-mac-muted font-sans leading-relaxed">
               High-visibility aerial banners and displays ideal for public campaigns and event signaling.
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
