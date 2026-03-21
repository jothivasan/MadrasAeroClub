import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
} from "lucide-react";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-mac-primary text-white pt-16 pb-8 relative overflow-hidden border-t border-white/5 font-sans">
      {/* Visual background details - Gradient Mesh & Noise */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-mac-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Top Editorial Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand Identity Block */}
          <div className="lg:w-1/3">
            <Link to="/" className="inline-flex items-center gap-4 mb-8 group">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={Logo}
                  alt="MAC Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-display font-black tracking-tighter">
                MADRAS
                <br />
                <span className="text-mac-accent">AERO CLUB</span>
              </h2>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-8 font-light">
              We aren't just an academy; we are a high-speed research lab for
              the future of aviation. Design, build, and deploy UAV systems in a
              production-grade environment.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Github size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-mac-accent/20 hover:border-mac-accent transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-mac-accent mb-6">
                Ecosystem
              </h4>
              <ul className="space-y-3">
                {["Home", "About Us", "Contact", "Research Lab"].map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="text-sm text-white/40 hover:text-white transition-colors flex items-center group gap-2"
                    >
                      {link}{" "}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-mac-accent"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-mac-accent mb-6">
                Flight Ops
              </h4>
              <ul className="space-y-3">
                {["Programs", "Services", "Events", "Safety Protocol"].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        to="/"
                        className="text-sm text-white/40 hover:text-white transition-colors flex items-center group gap-2"
                      >
                        {link}{" "}
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-mac-accent"
                        />
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-mac-accent mb-6">
                Command Center
              </h4>
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-20">
                  <Globe size={32} className="text-mac-accent" />
                </div>
                <p className="text-xs text-white/60 mb-5 font-light leading-relaxed">
                  Join the elite ranks of aerospace innovators.
                </p>
                <Link
                  to="/careers"
                  className="text-xs font-black uppercase tracking-wider text-mac-accent hover:text-white transition-colors flex items-center gap-1 group"
                >
                  Apply Now{" "}
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Flex */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8 text-[10px] font-mono uppercase tracking-widest text-white/20">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-mac-accent animate-pulse"></div>
            <span>© {new Date().getFullYear()} Madras Aero Club Protocol</span>
          </div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-mac-accent transition-colors">
              Infrastructure Terms
            </a>
            <a href="#" className="hover:text-mac-accent transition-colors">
              Privacy Nodes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
