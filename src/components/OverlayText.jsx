import { motion, useScroll, useTransform } from 'framer-motion';

const OverlayText = () => {
  const { scrollYProgress } = useScroll();
  
  // Opacity transforms for each section to fade them in and out smoothly
  const op1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [50, 0, -50]);

  const op2 = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [50, 0, -50]);

  const op3 = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [50, 0, -50]);

  const op4 = useTransform(scrollYProgress, [0.75, 0.8, 0.9, 0.95], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [50, 0, -50]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center">
      
      {/* Section 1 - Centered */}
      <motion.div 
        style={{ opacity: op1, y: y1 }}
        className="absolute inset-x-0 mx-auto text-center px-6 max-w-4xl"
      >
        <p className="text-blue-500 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">Aero Prototype</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-textPrimary mb-6 drop-shadow-xl leading-tight">
          Engineering the<br/>Future of Flight
        </h1>
      </motion.div>

      {/* Section 2 - Left Aligned */}
      <motion.div 
        style={{ opacity: op2, y: y2 }}
        className="absolute left-6 md:left-24 max-w-lg px-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-textPrimary drop-shadow-xl leading-tight">
          Every component designed with precision.
        </h2>
        <div className="w-24 h-1 bg-blue-500 mt-8 rounded-full"></div>
      </motion.div>

      {/* Section 3 - Right Aligned */}
      <motion.div 
        style={{ opacity: op3, y: y3 }}
        className="absolute right-6 md:right-24 max-w-lg px-4 text-right"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-textPrimary drop-shadow-xl leading-tight">
          From concept to functional aircraft.
        </h2>
        <div className="w-24 h-1 bg-blue-500 mt-8 rounded-full ml-auto"></div>
      </motion.div>

      {/* Section 4 - Centered */}
      <motion.div 
        style={{ opacity: op4, y: y4 }}
        className="absolute inset-x-0 mx-auto text-center px-6 max-w-4xl"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-textPrimary drop-shadow-xl">
          Innovation takes flight.
        </h2>
        <p className="mt-6 text-xl text-brand-textSecondary font-light">
          The next generation of aerospace technology is here.
        </p>
      </motion.div>

    </div>
  );
};

export default OverlayText;

