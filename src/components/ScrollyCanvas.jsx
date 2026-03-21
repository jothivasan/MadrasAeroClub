import { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const FRAME_COUNT = 240;

const ScrollyCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Track scroll progress ONLY inside this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Load images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const imgNumber = i.toString().padStart(3, '0');
      img.src = `/AeroPlainPrototype/ezgif-frame-${imgNumber}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      // In case an image fails to load, we still want to count it so it doesn't hang forever
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Frame calculation based on scroll
  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const drawFrame = useCallback((index) => {
    if (!canvasRef.current || !images[index]) return;

    const ctx = canvasRef.current.getContext('2d', { alpha: false });
    const canvas = canvasRef.current;
    
    // Check sizes
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Only resize if needed
    if (canvas.width !== Math.floor(rect.width * dpr) || canvas.height !== Math.floor(rect.height * dpr)) {
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
    }

    // Fill background to `#0f172a` just in case
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const img = images[index];

    // object-fit: cover calculation
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images]);

  useEffect(() => {
    if (!isLoaded) return;
    
    // Draw initial frame
    drawFrame(Math.floor(currentFrameIndex.get() || 0));

    const unsubscribe = currentFrameIndex.on('change', (latestValue) => {
      requestAnimationFrame(() => drawFrame(Math.floor(latestValue)));
    });

    return () => unsubscribe();
  }, [isLoaded, currentFrameIndex, drawFrame]);

  useEffect(() => {
    if (!isLoaded) return;
    const handleResize = () => {
      requestAnimationFrame(() => drawFrame(Math.floor(currentFrameIndex.get())));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, currentFrameIndex, drawFrame]);


  /* --- TEXT ANIMATION TRANSFORMS --- */
  // Section 1 - Centered
  const op1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.25], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.25], [50, 0, -50]);

  // Section 2 - Left Aligned
  const op2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.55], [50, 0, -50]);

  // Section 3 - Right Aligned
  const op3 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8], [50, 0, -50]);

  // Section 4 - Centered final
  const op4 = useTransform(scrollYProgress, [0.8, 0.85, 0.95, 1], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [50, 0, -50]);

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-gradient-to-b from-brand-start to-brand-end w-full">
      {/* 
        Sticky container logic: To ensure position:sticky works, 
        ABSOLUTELY NO ancestor can have overflow:hidden until the html/body level.
      */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center -z-0">
        
        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-brand-start to-brand-end z-50">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
              <p className="text-brand-textSecondary font-medium tracking-widest uppercase text-sm">Initializing Prototype</p>
            </div>
          </div>
        )}

        {/* The Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover select-none"
        />

        {/* Subtle Vignette / Gradient Overlay to make text readable over the 3D model */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E4E]/40 via-transparent to-[#0E1E4E]/60 pointer-events-none"></div>

        {/* --- Text Overlays (Positioned Absolute within the Sticky Container) --- */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
          
          {/* Section 1 */}
          <motion.div 
            style={{ opacity: op1, y: y1 }}
            className="absolute inset-x-0 mx-auto text-center px-6 max-w-4xl"
          >
            <p className="text-blue-500 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">Aero Prototype</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-textPrimary mb-6 drop-shadow-2xl leading-tight">
              Engineering the<br/>Future of Flight
            </h1>
          </motion.div>

          {/* Section 2 */}
          <motion.div 
            style={{ opacity: op2, y: y2 }}
            className="absolute left-6 md:left-24 max-w-lg px-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-textPrimary drop-shadow-2xl leading-tight">
              Every component designed with precision.
            </h2>
            <div className="w-24 h-1 bg-blue-500 mt-8 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          </motion.div>

          {/* Section 3 */}
          <motion.div 
            style={{ opacity: op3, y: y3 }}
            className="absolute right-6 md:right-24 max-w-lg px-4 text-right"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-textPrimary drop-shadow-2xl leading-tight">
              From concept to functional aircraft.
            </h2>
            <div className="w-24 h-1 bg-blue-500 mt-8 rounded-full ml-auto shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          </motion.div>

          {/* Section 4 */}
          <motion.div 
            style={{ opacity: op4, y: y4 }}
            className="absolute inset-x-0 mx-auto text-center px-6 max-w-4xl"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-textPrimary drop-shadow-2xl">
              Innovation takes flight.
            </h2>
            <p className="mt-6 text-xl text-brand-textSecondary font-light drop-shadow">
              The next generation of aerospace technology is here.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ScrollyCanvas;

