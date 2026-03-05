import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import PageHeader from "@/components/PageHeader";
import SectionCTA from "@/components/SectionCTA";
import { Button } from "@/components/ui/button";
import { Handshake, ArrowRight, Award, TrendingUp, Heart, Leaf } from "lucide-react";

const reasons = [
  { icon: Award, key: "partners.reason1" },
  { icon: TrendingUp, key: "partners.reason2" },
  { icon: Heart, key: "partners.reason3" },
  { icon: Leaf, key: "partners.reason4" },
];

const Partners = () => {
  const { lang } = useLanguage();

  return (
    <>
      <PageHeader
        label={lang === "fr" ? "Réseau" : "Network"}
        title={t("partners.title", lang)}
        description={t("partners.subtitle", lang)}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center">
            <Handshake className="text-accent mx-auto mb-6" size={48} />
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">{t("partners.comingSoon", lang)}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8">
              <Link to="/contact" className="flex items-center gap-2">
                {t("partners.ctaButton", lang)} <ArrowRight size={16} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-section-alt">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="mb-10">
            <span className="section-label">{lang === "fr" ? "Avantages" : "Benefits"}</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">{t("partners.whyTitle", lang)}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 premium-card-hover p-6">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <r.icon size={18} className="text-accent" />
                  </div>
                  <span className="text-foreground text-sm font-body">{t(r.key, lang)}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title={t("home.ctaTitle", lang)}
        description={t("home.ctaDesc", lang)}
        primaryLabel={t("home.ctaButton", lang)}
        primaryTo="/contact"
      />
    </>
  );
};

export default Partners;
