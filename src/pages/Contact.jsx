import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <div className="bg-mac-bg min-h-screen relative flex flex-col pt-32 pb-24 font-sans text-mac-primary">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 max-w-2xl"
        >
          <span className="text-mac-accent font-sans text-xs tracking-[0.2em] font-bold uppercase mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-light text-mac-primary tracking-tight leading-[1.1] mb-6">
            Let's start the <br />
            <span className="font-serif italic text-mac-accent font-medium">conversation.</span>
          </h1>
          <p className="text-mac-muted text-lg md:text-xl font-light leading-relaxed">
            Whether you have a specific project in mind, want to join our programs, or simply have a question, our team is ready to help.
          </p>
        </motion.div>

        {/* Main Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Form Side */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-mac-border/50">
              <form onSubmit={handleSubmit} className="space-y-8 w-full">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-mac-primary uppercase tracking-wider">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-mac-bg border border-mac-border rounded-lg py-3.5 px-4 text-mac-primary focus:outline-none focus:ring-2 focus:ring-mac-accent/30 focus:border-mac-accent transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-mac-primary uppercase tracking-wider">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-mac-bg border border-mac-border rounded-lg py-3.5 px-4 text-mac-primary focus:outline-none focus:ring-2 focus:ring-mac-accent/30 focus:border-mac-accent transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-mac-primary uppercase tracking-wider">
                    Subject / Topic
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full bg-mac-bg border border-mac-border rounded-lg py-3.5 px-4 text-mac-primary focus:outline-none focus:ring-2 focus:ring-mac-accent/30 focus:border-mac-accent transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-mac-primary uppercase tracking-wider">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    required
                    rows="5"
                    className="w-full bg-mac-bg border border-mac-border rounded-lg py-4 px-4 text-mac-primary focus:outline-none focus:ring-2 focus:ring-mac-accent/30 focus:border-mac-accent transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={formState !== "idle"}
                    className="w-full md:w-auto bg-mac-primary hover:bg-mac-accent text-white font-sans font-semibold tracking-wide px-10 py-4 rounded-lg flex items-center justify-center gap-3 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === "idle" && (
                       <>
                          <span>Send Message</span>
                          <ArrowUpRight size={18} />
                       </>
                    )}
                    {formState === "submitting" && <span>Sending...</span>}
                    {formState === "success" && (
                       <>
                          <CheckCircle2 size={18} className="text-green-400" />
                          <span>Message Sent!</span>
                       </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </motion.div>

          {/* Contact Details Side */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Direct Contact Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-mac-border/50">
              <h3 className="text-2xl font-display font-medium text-mac-primary mb-8 tracking-tight">
                Direct Contact
              </h3>
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-mac-bg flex items-center justify-center text-mac-accent">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-mac-muted uppercase block border-b border-mac-border pb-2 mb-2">Email Us</span>
                    <a href="mailto:contact@madrasaeroclub.com" className="text-lg font-light text-mac-primary hover:text-mac-accent transition-colors">
                      contact@madrasaeroclub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-mac-bg flex items-center justify-center text-mac-accent">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-mac-muted uppercase block border-b border-mac-border pb-2 mb-2">Call Us</span>
                    <a href="tel:+919876543210" className="text-lg font-light text-mac-primary hover:text-mac-accent transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-mac-primary text-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
              
              <h3 className="text-2xl font-display font-medium mb-8 tracking-tight flex items-center gap-3">
                <MapPin size={24} className="text-mac-accent" /> Headquarters
              </h3>
              
              <address className="not-italic font-light text-lg leading-relaxed text-white/80">
                Madras Aero Club,<br />
                Aerospace Innovation Bay,<br />
                IIT Madras Campus,<br />
                Chennai, TN 600036
              </address>

              <div className="mt-10 pt-6 border-t border-white/10">
                 <a href="#map" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-mac-accent hover:text-white transition-colors">
                    Get Directions <ArrowUpRight size={16} />
                 </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
