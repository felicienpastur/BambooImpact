import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import ROICalculator from "@/components/ROICalculator";
import {
  Leaf, TrendingUp, Shield, ArrowRight, Sprout, Handshake,
  TreePine, Check, Search, Shovel, HeartHandshake, BadgeCheck,
  Phone, Users, AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bamboo-new.jpg";

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
      {/* Hero */}
      <section className="relative min-h-[60vh] max-h-[75vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Bamboo plantation in Wallonia" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center py-16">
          <AnimatedSection>
            <p className="text-accent font-medium text-sm uppercase tracking-[0.2em] mb-4">
              {lang === "fr" ? "Wallonie · Bambou · Carbone" : "Wallonia · Bamboo · Carbon"}
            </p>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 whitespace-pre-line">
              {t("hero.title", lang)}
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
              {t("hero.subtitle", lang)}
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["hero.badge1", "hero.badge2", "hero.badge3"].map((key, i) => (
                <span key={i} className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 text-xs text-primary-foreground/90 font-medium">
                  <Check size={12} /> {t(key, lang)}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-1">~100</div>
                <div className="text-primary-foreground/60 text-xs uppercase tracking-widest">{t("home.stat1Title", lang)}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-1">~20</div>
                <div className="text-primary-foreground/60 text-xs uppercase tracking-widest">{t("home.stat2Title", lang)}</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8">
                <Link to="/contact">{t("hero.cta", lang)}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 text-base font-semibold px-8">
                <a href="#calculator">{t("hero.cta2", lang)}</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why plant bamboo */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="premium-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t("home.whyTitle", lang)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("home.whySubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {whyCards.slice(0, 3).map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                    <card.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{t(card.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(card.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {whyCards.slice(3).map((card, i) => (
              <AnimatedSection key={i + 3} delay={(i + 3) * 0.1}>
                <div className="premium-card p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                    <card.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{t(card.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(card.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="premium-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t("home.howTitle", lang)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("home.howSubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative premium-card p-8 h-full">
                  <span className="text-5xl font-heading font-bold text-primary/8 absolute top-4 right-6 select-none">{step.num}</span>
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <step.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{t(step.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(step.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.5} className="mt-10">
            <p className="text-center text-muted-foreground italic max-w-2xl mx-auto text-sm">
              {t("home.howNote", lang)}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Urgency / Scarcity */}
      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto premium-card p-8 md:p-10 text-center border-accent/30">
              <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-5">
                <AlertTriangle className="text-accent" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                {t("home.urgencyTitle", lang)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("home.urgencyDesc", lang)}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-section-dark">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="premium-divider mx-auto mb-8" style={{ backgroundColor: "hsl(42, 65%, 55%)" }} />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t("home.ctaTitle", lang)}
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-10 text-lg">
              {t("home.ctaDesc", lang)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
                <Link to="/contact" className="flex items-center gap-2">
                  {t("home.ctaButton", lang)} <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent bg-accent/15 text-primary-foreground hover:bg-accent/30 font-semibold px-8 shadow-sm">
                <Link to="/contact" className="flex items-center gap-2">
                  <Phone size={16} /> {t("home.ctaButton2", lang)}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent bg-accent/15 text-primary-foreground hover:bg-accent/30 font-semibold px-8 shadow-sm">
                <Link to="/contact" className="flex items-center gap-2">
                  <Users size={16} /> {t("home.ctaButton3", lang)}
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;
