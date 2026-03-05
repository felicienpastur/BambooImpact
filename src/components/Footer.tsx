import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const { lang } = useLanguage();

  const navLinks = [
    { key: "nav.home", path: "/" },
    { key: "nav.project", path: "/project" },
    { key: "nav.revenues", path: "/revenues" },
    { key: "nav.impact", path: "/impact" },
    { key: "nav.partners", path: "/partners" },
    { key: "nav.contact", path: "/contact" },
  ];

  return (
    <footer className="bg-natura-deep text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main footer */}
        <div className="py-16 grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-heading text-sm font-bold">B</span>
              </div>
              <span className="font-heading text-xl">BambooImpact</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-sm mb-6">
              {t("footer.tagline", lang)}
            </p>
            <a 
              href="mailto:info.bambooimpact@gmail.com" 
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Mail size={14} /> info.bambooimpact@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-body font-semibold uppercase tracking-[0.15em] text-primary-foreground/40 mb-5">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {t(item.key, lang)}
                </Link>
              ))}
            </div>
          </div>

          {/* External */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-body font-semibold uppercase tracking-[0.15em] text-primary-foreground/40 mb-5">
              {lang === "fr" ? "Partenaire" : "Partner"}
            </h4>
            <a 
              href="https://bamboologic.eu/fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Bamboologic <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} BambooImpact. {t("footer.rights", lang)}
          </p>
          <p className="text-xs text-primary-foreground/30">
            {lang === "fr" ? "Wallonie, Belgique" : "Wallonia, Belgium"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
