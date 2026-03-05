import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import PageHeader from "@/components/PageHeader";
import SectionCTA from "@/components/SectionCTA";
import ROICalculator from "@/components/ROICalculator";
import {
  Coins, Leaf, TrendingUp, Users, Sprout, Clock, ArrowRight,
} from "lucide-react";

const Revenues = () => {
  const { lang } = useLanguage();

  return (
    <>
      <PageHeader
        label={lang === "fr" ? "Revenus & Business" : "Revenue & Business"}
        title={t("revenues.title", lang)}
        description={t("revenues.subtitle", lang)}
      />

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Business Model */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mb-14">
            <span className="section-label">{lang === "fr" ? "Modèle économique" : "Business model"}</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-4">
              {t("home.businessTitle", lang)}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("home.businessSubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="max-w-5xl">
            {/* Funding */}
            <AnimatedSection delay={0.08}>
              <div className="premium-card p-7 mb-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <Coins className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base text-foreground mb-2">{t("home.bizFundingTitle", lang)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t("home.bizFundingDesc", lang)}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            {/* Commission cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <AnimatedSection delay={0.16}>
                <div className="premium-card p-7 h-full">
                  <Leaf className="text-natura-leaf mb-4" size={22} />
                  <h3 className="font-heading text-base text-foreground mb-4">{t("home.bizCarbonTitle", lang)}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-primary/5 rounded-lg p-3">
                      <Sprout size={15} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{t("home.bizCarbonFarmer", lang)}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                      <Users size={15} className="text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{t("home.bizCarbonPrivate", lang)}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.24}>
                <div className="premium-card p-7 h-full">
                  <TrendingUp className="text-accent mb-4" size={22} />
                  <h3 className="font-heading text-base text-foreground mb-4">{t("home.bizBiomassTitle", lang)}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-primary/5 rounded-lg p-3">
                      <Sprout size={15} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{t("home.bizBiomassFarmer", lang)}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-accent/5 rounded-lg p-3">
                      <Users size={15} className="text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{t("home.bizBiomassPrivate", lang)}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            {/* Timeline */}
            <AnimatedSection delay={0.32}>
              <div className="premium-card p-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base text-foreground mb-2">{t("home.bizTimelineTitle", lang)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t("home.bizTimelineDesc", lang)}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
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

export default Revenues;
