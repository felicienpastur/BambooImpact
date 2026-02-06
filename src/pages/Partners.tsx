import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
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
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">{t("partners.title", lang)}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("partners.subtitle", lang)}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <AnimatedSection>
            <Handshake className="text-accent mx-auto mb-6" size={56} />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("partners.comingSoon", lang)}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              <Link to="/contact" className="flex items-center gap-2">
                {t("partners.ctaButton", lang)} <ArrowRight size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{t("partners.whyTitle", lang)}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <r.icon size={20} className="text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{t(r.key, lang)}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
