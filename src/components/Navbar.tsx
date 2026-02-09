import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { key: "nav.home", path: "/" },
  { key: "nav.project", path: "/project" },
  { key: "nav.impact", path: "/impact" },
  { key: "nav.partners", path: "/partners" },
  { key: "nav.contact", path: "/contact" },
];

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-heading text-xl font-bold text-primary tracking-tight">
          BambooImpact
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {t(item.key, lang)}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Globe size={16} />
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {t(item.key, lang)}
                </Link>
              ))}
              <button
                onClick={() => { setLang(lang === "fr" ? "en" : "fr"); setOpen(false); }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Globe size={16} />
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
