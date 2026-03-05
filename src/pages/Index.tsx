import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import SectionCTA from "@/components/SectionCTA";
import {
  Leaf, TrendingUp, Shield, ArrowRight, Sprout, Handshake,
  TreePine, Check, Search, Shovel, HeartHandshake, BadgeCheck,
  Phone, Users, AlertTriangle, Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bamboo-new.jpg";
import bambooForest from "@/assets/bamboo-forest.jpg";

const whyCards = [
  { icon: Leaf, titleKey: "home.card1Title", descKey: "home.card1Desc" },
  { icon: TrendingUp, titleKey: "home.card2Title", descKey: "home.card2Desc" },
  { icon: TreePine, titleKey: "home.card3Title", descKey: "home.card3Desc" },
  { icon: Handshake, titleKey: "home.card4Title", descKey: "home.card4Desc" },
  { icon: Shield, titleKey: "home.card5Title", descKey: "home.card5Desc" },
];

const steps = [
  { icon: Search, titleKey: "home.step1Title", descKey: "home.step1Desc", num: "01" },
  { icon: Shovel, titleKey: "home.step2Title", descKey: "home.step2Desc", num: "02" },
  { icon: HeartHandshake, titleKey: "home.step3Title", descKey: "home.step3Desc", num: "03" },
  { icon: BadgeCheck, titleKey: "home.step4Title", descKey: "home.step4Desc", num: "04" },
];

const Index = () => {
  const { lang } = useLanguage();

  return (
    <>
      {/* Hero — full viewport, editorial */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <img src={heroBg} alt="Bamboo plantation in Wallonia" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 pb-16 pt-32">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                {["Wallonie", "Bambou", "Carbone"].map((w, i) => (
                  <span key={i} className="text-accent text-xs font-body font-semibold uppercase tracking-[0.15em]">
                    {i > 0 && <span className="text-primary-foreground/30 mr-3">·</span>}
                    {w}
                  </span>
                ))}
              </div>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6">
                {t("hero.title", lang)}
              </h1>
              <p className="text-primary-foreground/70 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-body">
                {t("hero.subtitle", lang)}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {["hero.badge1", "hero.badge2", "hero.badge3"].map((key, i) => (
                  <span key={i} className="inline-flex items-center gap-2 bg-primary-foreground/8 border border-primary-foreground/15 rounded-full px-4 py-1.5 text-xs text-primary-foreground/80 font-body font-medium">
                    <Check size={11} className="text-accent" /> {t(key, lang)}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8 h-12">
                  <Link to="/contact">{t("hero.cta", lang)}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/25 bg-primary-foreground/8 text-primary-foreground hover:bg-primary-foreground/15 font-medium px-8 h-12">
                  <Link to="/revenues">
                    <Calculator size={15} className="mr-2" />
                    {t("hero.cta2", lang)}
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key stats — editorial strip */}
      <section className="border-b border-border/50 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1 py-10 sm:border-r border-border/50">
              <AnimatedSection className="text-center">
                <div className="text-4xl md:text-5xl font-heading text-primary mb-1">~100</div>
                <div className="text-muted-foreground text-xs font-body uppercase tracking-widest">{t("home.stat1Title", lang)}</div>
              </AnimatedSection>
            </div>
            <div className="flex-1 py-10 sm:border-r border-border/50">
              <AnimatedSection delay={0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-heading text-primary mb-1">~20</div>
                <div className="text-muted-foreground text-xs font-body uppercase tracking-widest">{t("home.stat2Title", lang)}</div>
              </AnimatedSection>
            </div>
            <div className="flex-1 py-10">
              <AnimatedSection delay={0.2} className="text-center">
                <div className="text-4xl md:text-5xl font-heading text-primary mb-1">625</div>
                <div className="text-muted-foreground text-xs font-body uppercase tracking-widest">
                  {lang === "fr" ? "Plants / hectare" : "Plants / hectare"}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Why plant bamboo — editorial layout */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-16">
            <AnimatedSection className="md:col-span-5">
              <span className="section-label">{lang === "fr" ? "Avantages" : "Benefits"}</span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-4">
                {t("home.whyTitle", lang)}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("home.whySubtitle", lang)}
              </p>
            </AnimatedSection>
            <div className="md:col-span-7">
              <div className="rounded-xl overflow-hidden">
                <img src={bambooForest} alt="Bamboo plantation" className="w-full h-64 md:h-80 object-cover" />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {whyCards.slice(0, 3).map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="premium-card-hover p-7 h-full">
                  <card.icon className="text-accent mb-4" size={22} />
                  <h3 className="font-heading text-lg text-foreground mb-2">{t(card.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(card.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-[66%] md:max-w-none md:w-2/3">
            {whyCards.slice(3).map((card, i) => (
              <AnimatedSection key={i + 3} delay={(i + 3) * 0.08}>
                <div className="premium-card-hover p-7 h-full">
                  <card.icon className="text-accent mb-4" size={22} />
                  <h3 className="font-heading text-lg text-foreground mb-2">{t(card.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(card.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — numbered steps */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mb-14">
            <span className="section-label">{lang === "fr" ? "Processus" : "Process"}</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-4">
              {t("home.howTitle", lang)}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("home.howSubtitle", lang)}
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="premium-card p-7 h-full relative">
                  <span className="text-6xl font-heading text-primary/[0.06] absolute top-3 right-5 select-none leading-none">{step.num}</span>
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                    <step.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-heading text-base text-foreground mb-2">{t(step.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(step.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4} className="mt-8">
            <p className="text-muted-foreground italic text-sm max-w-2xl">
              {t("home.howNote", lang)}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Urgency — minimal, editorial */}
      <section className="py-16 border-b border-border/50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto flex items-start gap-5 md:gap-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="text-accent" size={22} />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {t("home.urgencyTitle", lang)}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("home.urgencyDesc", lang)}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        title={t("home.ctaTitle", lang)}
        description={t("home.ctaDesc", lang)}
        primaryLabel={t("home.ctaButton", lang)}
        primaryTo="/contact"
        secondaryLabel={t("home.ctaButton2", lang)}
        secondaryTo="/contact"
      />
    </>
  );
};

export default Index;
