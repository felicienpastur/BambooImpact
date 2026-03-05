import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import ROICalculator from "@/components/ROICalculator";
import {
  Coins, Leaf, TrendingUp, Users, Sprout, Clock, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Revenues = () => {
  const { lang } = useLanguage();

  return (
    <>
      {/* Header */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("revenues.title", lang)}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("revenues.subtitle", lang)}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Business Model */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="premium-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("home.businessTitle", lang)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("home.businessSubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="max-w-5xl mx-auto">
            {/* Funding */}
            <AnimatedSection delay={0.1}>
              <div className="premium-card p-8 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Coins className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{t("home.bizFundingTitle", lang)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t("home.bizFundingDesc", lang)}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            {/* Commission cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <AnimatedSection delay={0.2}>
                <div className="premium-card p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-natura-leaf/10 flex items-center justify-center mb-5">
                    <Leaf className="text-natura-leaf" size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{t("home.bizCarbonTitle", lang)}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-primary/5 rounded-lg p-3">
                      <Sprout size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{t("home.bizCarbonFarmer", lang)}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                      <Users size={16} className="text-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{t("home.bizCarbonPrivate", lang)}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="premium-card p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                    <TrendingUp className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{t("home.bizBiomassTitle", lang)}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-primary/5 rounded-lg p-3">
                      <Sprout size={16} className="text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{t("home.bizBiomassFarmer", lang)}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                      <Users size={16} className="text-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{t("home.bizBiomassPrivate", lang)}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            {/* Timeline */}
            <AnimatedSection delay={0.4}>
              <div className="premium-card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{t("home.bizTimelineTitle", lang)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t("home.bizTimelineDesc", lang)}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-section-dark">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t("home.ctaTitle", lang)}
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8 text-lg">
              {t("home.ctaDesc", lang)}
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
              <Link to="/contact" className="flex items-center gap-2">
                {t("home.ctaButton", lang)} <ArrowRight size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Revenues;
