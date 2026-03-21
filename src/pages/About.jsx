import { motion } from "framer-motion";
import SplitText from "../components/SplitText";

const About = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div className="bg-mac-bg text-mac-text pb-32">
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
            <span className="text-mac-accent font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-8 block">
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
               Madras Aero Club was founded with a bold vision — to redefine how aerospace is learned. We believe the future belongs to those who can build, understand, and command flight.
            </p>
          </div>
        </motion.div>
        
        {/* Minimalist decorative element */}
        <div className="absolute bottom-16 right-6 md:right-12 text-[10px] font-sans tracking-[0.3em] text-mac-muted uppercase rotate-90 origin-bottom-right pointer-events-none">
          MAC — IDX: ABT
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-mac-primary">
            The Pursuit of Excellence
          </h2>
          <p className="text-lg text-mac-muted leading-relaxed mb-8 font-sans">
            We are an advanced aerospace learning and drone technology platform focused on practical education, rigorous safety standards, and future-forward systems.
          </p>
          <div className="w-12 h-1 bg-mac-accent rounded-full my-10" />
          <ul className="space-y-8">
            {[
              {
                num: "01",
                title: "Learn",
                desc: "Rigorous, principles-first aviation theory and aerospace engineering.",
              },
              {
                num: "02",
                title: "Build",
                desc: "Iterative design, assembly, and UAV hardware integration.",
              },
              {
                num: "03",
                title: "Fly",
                desc: "Deploying autonomous solutions and executing manual flight operations.",
              },
            ].map((item, i) => (
              <li key={i} className="flex gap-6 group">
                <span className="text-mac-accent/40 font-bold text-sm tracking-widest pt-1">
                  {item.num}
                </span>
                <div>
                  <h4 className="text-mac-primary text-xl mb-2 font-display font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-mac-muted font-sans">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 bg-white border border-mac-border rounded-2xl p-10 md:p-14 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-mac-accent/5 rounded-bl-full pointer-events-none"></div>

          <span className="block text-xs font-semibold tracking-wider uppercase text-mac-accent mb-4">
            Core Principles
          </span>
          <h3 className="text-2xl font-display font-bold text-mac-primary mb-4">Our Vision</h3>
          <p className="text-mac-muted mb-12 leading-relaxed font-sans text-lg">
            To pioneer a premier aerospace and drone innovation ecosystem, actively shaping the next generation of aviation leaders.
          </p>

          <h3 className="text-2xl font-display font-bold text-mac-primary mb-4">Our Mission</h3>
          <p className="text-mac-muted leading-relaxed font-sans text-lg">
            To deliver industry-relevant aviation education that empowers individuals to forge practical, real-world solutions through modern flight technologies.
          </p>
        </motion.div>
      </section>


    </div>
  );
};

export default About;
