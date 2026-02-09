import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import { Leaf, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bamboo.jpg";

const stats = [
  { value: "~100", key: "home.stat1Title" },
  { value: "~20", key: "home.stat2Title" },
];

const cards = [
  { icon: Leaf, titleKey: "home.card1Title", descKey: "home.card1Desc" },
  { icon: TrendingUp, titleKey: "home.card2Title", descKey: "home.card2Desc" },
  { icon: Shield, titleKey: "home.card3Title", descKey: "home.card3Desc" },
];

const Index = () => {
  const { lang } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Bamboo plantation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 whitespace-pre-line">
              {t("hero.title", lang)}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              {t("hero.subtitle", lang)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8">
                <Link to="/contact">{t("hero.cta", lang)}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                <Link to="/project">{t("hero.cta2", lang)}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {stats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.15} className="text-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-accent mb-2">{s.value}</div>
                <div className="text-primary-foreground/80 text-sm uppercase tracking-widest">{t(s.key, lang)}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why bamboo */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t("home.whyTitle", lang)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("home.whySubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <card.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{t(card.titleKey, lang)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(card.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-natura-deep">
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

export default Index;
