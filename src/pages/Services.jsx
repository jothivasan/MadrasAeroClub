import { Sprout, Map, Video, ShieldCheck, Compass, CloudLightning } from "lucide-react";
import { motion } from "framer-motion";
import SplitText from "../components/SplitText";
import { Link } from "react-router-dom";

const Services = () => {
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
               Commercial Solutions
            </span>
            <h1 className="mb-8">
               <SplitText
                 text="Technology That "
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
                 text="Commands."
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
               We deliver professional UAV architectures driven by efficiency, scale, and operational exactness.
            </p>
          </div>
        </motion.div>
        
        {/* Minimalist decorative element */}
        <div className="absolute bottom-16 right-6 md:right-12 text-[10px] font-sans tracking-[0.3em] text-mac-muted uppercase rotate-90 origin-bottom-right pointer-events-none">
          MAC — IDX: SRV
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 mt-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="bg-white border border-mac-border rounded-2xl p-10 hover:shadow-lg transition-all flex flex-col items-start group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-mac-accent/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            <div className="text-mac-primary mb-8 pb-6 border-b border-mac-border w-full flex items-center justify-between relative z-10">
              <Sprout
                size={36}
                strokeWidth={1.5}
                className="text-mac-accent transition-transform duration-500 group-hover:-translate-y-1"
              />
              <span className="text-mac-muted/50 text-sm font-bold tracking-wider">
                01
              </span>
            </div>
            <h3 className="text-2xl font-bold font-display text-mac-primary mb-4 relative z-10">
              Agronomic Aerial Systems
            </h3>
            <ul className="space-y-4 mb-12 w-full text-mac-muted font-sans relative z-10">
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-mac-accent"></div> 
                Precision exact-dose spraying
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-mac-accent"></div> 
                Multispectral crop monitoring
              </li>
            </ul>
            <div className="mt-auto pt-6 border-t border-mac-border w-full relative z-10">
              <button className="text-mac-primary font-semibold text-sm uppercase tracking-wider hover:text-mac-accent flex items-center justify-between w-full transition-colors">
                Explore Solution <span>&rarr;</span>
              </button>
            </div>
          </div>

          <div className="bg-white border border-mac-border rounded-2xl p-10 hover:shadow-lg transition-all flex flex-col items-start group relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-mac-accent/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            <div className="text-mac-primary mb-8 pb-6 border-b border-mac-border w-full flex items-center justify-between relative z-10">
              <Map
                size={36}
                strokeWidth={1.5}
                className="text-mac-accent transition-transform duration-500 group-hover:-translate-y-1"
              />
              <span className="text-mac-muted/50 text-sm font-bold tracking-wider">
                02
              </span>
            </div>
            <h3 className="text-2xl font-bold font-display text-mac-primary mb-4 relative z-10">
              Cartography & Survey
            </h3>
            <ul className="space-y-4 mb-12 w-full text-mac-muted font-sans relative z-10">
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-mac-accent"></div> LiDAR landscape mapping
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-mac-accent"></div> 
                Millimeter survey-grade accuracy
              </li>
            </ul>
            <div className="mt-auto pt-6 border-t border-mac-border w-full relative z-10">
              <button className="text-mac-primary font-semibold text-sm uppercase tracking-wider hover:text-mac-accent flex items-center justify-between w-full transition-colors">
                Explore Solution <span>&rarr;</span>
              </button>
            </div>
          </div>

          <div className="bg-white border border-mac-border rounded-2xl p-10 hover:shadow-lg transition-all flex flex-col items-start group relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-mac-accent/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            <div className="text-mac-primary mb-8 pb-6 border-b border-mac-border w-full flex items-center justify-between relative z-10">
              <Video
                size={36}
                strokeWidth={1.5}
                className="text-mac-accent transition-transform duration-500 group-hover:-translate-y-1"
              />
              <span className="text-mac-muted/50 text-sm font-bold tracking-wider">
                03
              </span>
            </div>
            <h3 className="text-2xl font-bold font-display text-mac-primary mb-4 relative z-10">
              Aerial Cinematography
            </h3>
            <ul className="space-y-4 mb-12 w-full text-mac-muted font-sans relative z-10">
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-mac-accent"></div> 
                Cinema-grade stabilization
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-mac-accent"></div> 
                Dynamic tracking coverage
              </li>
            </ul>
            <div className="mt-auto pt-6 border-t border-mac-border w-full relative z-10">
              <button className="text-mac-primary font-semibold text-sm uppercase tracking-wider hover:text-mac-accent flex items-center justify-between w-full transition-colors">
                Explore Solution <span>&rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-mac-surfaceDark text-mac-primary px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Aviation-Grade <br/><span className="text-mac-accent">Reliability.</span>
            </h2>
            <div className="w-16 h-1 bg-mac-accent rounded-full mb-8" />
            <p className="text-mac-muted text-lg mb-10 leading-relaxed font-sans">
              We do not merely fly drones; we aggregate actionable intelligence, map complex topographies, and execute with absolute operational certainty.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-mac-primary text-white px-8 py-4 text-sm font-semibold rounded-lg hover:bg-mac-accent transition-colors"
            >
              Consult Our Team
            </Link>
          </div>

          <div className="grid gap-8">
            <div className="bg-white p-6 rounded-xl border border-mac-border shadow-sm flex items-start gap-6">
               <div className="bg-mac-bg p-3 rounded-lg text-mac-accent shrink-0">
                 <ShieldCheck size={28} />
               </div>
               <div>
                  <h4 className="text-lg font-bold font-display text-mac-primary mb-2">
                    Paramount Compliance
                  </h4>
                  <p className="text-mac-muted font-sans text-sm">
                    Navigating regulatory frameworks and enforcing strict safety protocols on every mission.
                  </p>
               </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-mac-border shadow-sm flex items-start gap-6">
               <div className="bg-mac-bg p-3 rounded-lg text-mac-accent shrink-0">
                 <CloudLightning size={28} />
               </div>
               <div>
                  <h4 className="text-lg font-bold font-display text-mac-primary mb-2">
                    Advanced Technology
                  </h4>
                  <p className="text-mac-muted font-sans text-sm">
                    Leveraging advanced sensor suites, LiDAR, and reliable autonomous flight systems.
                  </p>
               </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-mac-border shadow-sm flex items-start gap-6">
               <div className="bg-mac-bg p-3 rounded-lg text-mac-accent shrink-0">
                 <Compass size={28} />
               </div>
               <div>
                  <h4 className="text-lg font-bold font-display text-mac-primary mb-2">
                    Data Finality
                  </h4>
                  <p className="text-mac-muted font-sans text-sm">
                    Refining abstract aerial metrics into highly accurate, quantifiable engineering assets.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
