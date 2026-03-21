import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Services", path: "/services" },
    { name: "Events", path: "/events" },
    { name: "Careers", path: "/careers" },
  ];

  const isHome = location.pathname === "/";
  const useDarkText = true;

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-mac-border py-4 shadow-sm"
          : "bg-transparent border-b border-transparent py-6"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Madras Aero Club" className="w-10 h-10 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className={clsx(
              "font-slab font-bold text-[1.4rem] uppercase tracking-wider transition-colors duration-300",
              useDarkText ? "text-mac-primary" : "text-white"
            )}>
              Madras Aero Club
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  "font-slab text-[1.05rem] font-bold tracking-wide transition-colors relative py-2",
                  isActive
                    ? "text-mac-accent"
                    : useDarkText ? "text-mac-text hover:text-mac-primary" : "text-white/70 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-mac-accent rounded-t-full shadow-[0_0_10px_rgba(196,154,108,0.5)]"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <NavLink to="/contact" className={clsx(
            "px-7 py-2.5 font-slab text-[1.05rem] font-bold tracking-wider rounded-full transition-all shadow-lg inline-block",
            useDarkText 
              ? "bg-mac-primary text-white shadow-mac-primary/20 hover:bg-mac-accent" 
              : "bg-mac-accent text-mac-primary shadow-mac-accent/20 hover:bg-white"
          )}>
            Join the Club
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className={clsx(
            "md:hidden p-2 transition-colors",
            useDarkText ? "text-mac-primary" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={clsx(
          "md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden shadow-lg",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
          useDarkText ? "bg-white border-b border-mac-border" : "bg-mac-primary border-b border-white/10"
        )}
      >
        <div className="py-4 px-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  "font-slab font-bold tracking-wide text-[1.3rem] py-3 border-b",
                  isActive
                    ? "text-mac-accent border-mac-accent/20"
                    : useDarkText 
                      ? "text-mac-text border-mac-border" 
                      : "text-white/70 border-white/10"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 pb-2">
            <NavLink to="/contact" className={clsx(
              "w-full py-3 font-slab text-[1.15rem] font-bold tracking-wider rounded-lg shadow-lg block text-center",
              useDarkText ? "bg-mac-primary text-white" : "bg-mac-accent text-mac-primary"
            )}>
              Join the Club
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
