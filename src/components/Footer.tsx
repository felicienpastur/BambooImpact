import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { Mail } from "lucide-react";

const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-natura-deep text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-3">BambooImpact</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t("footer.tagline", lang)}
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("nav.home", lang)}</Link>
              <Link to="/project" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("nav.project", lang)}</Link>
              <Link to="/impact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("nav.impact", lang)}</Link>
              <Link to="/partners" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("nav.partners", lang)}</Link>
              <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">{t("nav.contact", lang)}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("contact.info", lang)}</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <span className="font-medium text-primary-foreground">BambooImpact</span>
              <a href="mailto:info.bambooimpact@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail size={14} /> info.bambooimpact@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} BambooImpact. {t("footer.rights", lang)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
