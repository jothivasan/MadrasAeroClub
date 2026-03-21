import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const SplitText = ({
  text = '',
  className = '',
  delay = 100, // delay between characters in ms
  duration = 1,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
  showCallback = false
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Find all the inner spans
    const elements = Array.from(containerRef.current.children).filter(
      (el) => el.tagName === 'SPAN'
    );
    
    // Set initial properties immediately
    gsap.set(elements, { ...from });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(elements, {
            ...to,
            duration,
            ease,
            stagger: delay / 1000,
            onComplete: () => {
              if (showCallback && onLetterAnimationComplete) {
                onLetterAnimationComplete();
              }
            }
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, [delay, duration, ease, from, to, threshold, rootMargin, showCallback, onLetterAnimationComplete]);

  // Evaluate splitting logic
  const parts = splitType === 'chars' ? text.split('') : text.split(' ');

  return (
    <span 
      ref={containerRef} 
      className={`inline-block ${className}`}
      style={{ textAlign, display: 'inline-block' }}
    >
      {parts.map((item, index) => (
        <span
          key={index}
          className="inline-block"
          style={{ whiteSpace: 'pre' }}
        >
          {item === ' ' ? '\u00A0' : item}
          {splitType === 'words' && index < parts.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
