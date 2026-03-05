import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Sprout, HeartHandshake, Shovel, Coins, ShieldCheck,
  Leaf, TrendingUp, Users, FileCheck, Check, ExternalLink, Clock,
  ArrowRight, Eye, Globe, Recycle, Shield as ShieldIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import bambooForest from "@/assets/bamboo-forest.jpg";
import bambooRoots from "@/assets/bamboo-roots.jpg";

const services = [
  { icon: Sprout, titleKey: "home.service1Title", descKey: "home.service1Desc" },
  { icon: HeartHandshake, titleKey: "home.service2Title", descKey: "home.service2Desc" },
  { icon: Shovel, titleKey: "home.service3Title", descKey: "home.service3Desc" },
  { icon: Coins, titleKey: "home.service4Title", descKey: "home.service4Desc" },
  { icon: ShieldCheck, titleKey: "home.service5Title", descKey: "home.service5Desc" },
];

const benefitKeys = [
  "project.benefit1", "project.benefit2", "project.benefit3",
  "project.benefit4", "project.benefit5", "project.benefit6",
];

const bamboologicItems = [
  "home.bamboologic1", "home.bamboologic2", "home.bamboologic3", "home.bamboologic4",
];

const visionKeys = [
  { icon: Eye, key: "project.whyBi1" },
  { icon: Globe, key: "project.whyBi2" },
  { icon: Recycle, key: "project.whyBi3" },
  { icon: Leaf, key: "project.whyBi4" },
  { icon: ShieldIcon, key: "project.whyBi5" },
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

      {/* Service complet */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="premium-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("home.servicesTitle", lang)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("home.servicesSubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {services.slice(0, 3).map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <s.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{t(s.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(s.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {services.slice(3).map((s, i) => (
              <AnimatedSection key={i + 3} delay={(i + 3) * 0.1}>
                <div className="premium-card p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <s.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{t(s.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(s.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model with Commissions */}
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

      {/* Benefits */}
      <section className="py-24 bg-section-alt">
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

      {/* Certification */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="premium-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("home.certTitle", lang)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("home.certSubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="premium-card p-8 h-full text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 border-2 border-primary/20">
                  <FileCheck className="text-primary" size={36} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{t("home.certAgroTitle", lang)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("home.certAgroDesc", lang)}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="premium-card p-8 h-full text-center">
                <div className="w-20 h-20 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-6 border-2 border-accent/20">
                  <ShieldCheck className="text-accent" size={36} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{t("home.certVeritasTitle", lang)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("home.certVeritasDesc", lang)}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bamboologic Partnership */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <div className="premium-divider mx-auto mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("home.bamboologicTitle", lang)}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {t("home.bamboologicSubtitle", lang)}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="premium-card p-8 md:p-10">
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {bamboologicItems.map((key, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-primary" />
                      </div>
                      <span className="text-foreground font-medium text-sm">{t(key, lang)}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button asChild variant="outline" size="lg" className="font-semibold px-8">
                    <a href="https://bamboologic.eu/fr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      {t("home.bamboologicCta", lang)} <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pourquoi BambooImpact — Vision */}
      <section className="py-24">
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
