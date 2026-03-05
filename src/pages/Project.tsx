import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Sprout, BarChart3, Coins, Check, ArrowRight, Eye, Leaf, Globe, Recycle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import bambooForest from "@/assets/bamboo-forest.jpg";
import bambooRoots from "@/assets/bamboo-roots.jpg";

const steps = [
  { icon: MapPin, titleKey: "project.step1Title", descKey: "project.step1Desc" },
  { icon: Sprout, titleKey: "project.step2Title", descKey: "project.step2Desc" },
  { icon: BarChart3, titleKey: "project.step3Title", descKey: "project.step3Desc" },
  { icon: Coins, titleKey: "project.step4Title", descKey: "project.step4Desc" },
];

const benefitKeys = [
  "project.benefit1", "project.benefit2", "project.benefit3",
  "project.benefit4", "project.benefit5", "project.benefit6",
];

const visionKeys = [
  { icon: Eye, key: "project.whyBi1" },
  { icon: Globe, key: "project.whyBi2" },
  { icon: Recycle, key: "project.whyBi3" },
  { icon: Leaf, key: "project.whyBi4" },
  { icon: ShieldCheck, key: "project.whyBi5" },
];

const Project = () => {
  const { lang } = useLanguage();

  return (
    <>
      {/* Header */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">{t("project.title", lang)}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{t("project.subtitle", lang)}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-lg">
            <img src={bambooForest} alt="Bamboo forest" className="w-full h-72 md:h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{t("project.howTitle", lang)}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="text-primary" size={28} />
                  </div>
                  <div className="text-sm font-bold text-accent mb-2 uppercase tracking-wider">0{i + 1}</div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{t(step.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(step.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <AnimatedSection>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">{t("project.benefitsTitle", lang)}</h2>
              <div className="flex flex-col gap-4">
                {benefitKeys.map((key, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-accent" />
                    </div>
                    <span className="text-foreground">{t(key, lang)}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={bambooRoots} alt="Bamboo roots" className="w-full h-80 object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pourquoi BambooImpact — Vision */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <div className="premium-divider mx-auto mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("project.whyBiTitle", lang)}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {t("project.whyBiSubtitle", lang)}
              </p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-1 gap-4">
              {visionKeys.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="flex items-center gap-4 premium-card p-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{t(item.key, lang)}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.6} className="mt-10 text-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
                <Link to="/contact" className="flex items-center gap-2">
                  {t("home.ctaButton", lang)} <ArrowRight size={18} />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
