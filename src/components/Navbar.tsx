import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { key: "nav.home", path: "/" },
  { key: "nav.project", path: "/project" },
  { key: "nav.revenues", path: "/revenues" },
  { key: "nav.impact", path: "/impact" },
  { key: "nav.partners", path: "/partners" },
  { key: "nav.contact", path: "/contact" },
];

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading text-sm font-bold">B</span>
          </div>
          <span className={`font-heading text-lg tracking-tight transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}>
            BambooImpact
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === item.path 
                  ? scrolled ? "text-primary bg-primary/5" : "text-primary-foreground bg-primary-foreground/10"
                  : scrolled ? "text-muted-foreground hover:text-foreground hover:bg-muted/50" : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {t(item.key, lang)}
            </Link>
          ))}
          <div className="w-px h-5 bg-border/50 mx-2" />
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className={`flex items-center gap-1.5 px-3 py-2 text-sm rounded-md transition-colors ${
              scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
            }`}
          >
            <Globe size={14} />
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button 
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`} 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden shadow-lg"
          >
            <div className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path 
                      ? "text-primary bg-primary/5" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {t(item.key, lang)}
                </Link>
              ))}
              <button
                onClick={() => { setLang(lang === "fr" ? "en" : "fr"); setOpen(false); }}
                className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg"
              >
                <Globe size={14} />
                {lang === "fr" ? "English" : "Français"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
