import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, translations } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Leaf, TrendingUp, Shield, ArrowRight, Sprout, Handshake,
  TreePine, Check, Search, Shovel, HeartHandshake, BadgeCheck,
  Eye, Phone, Users, Factory, Briefcase, Award, Recycle,
  Building2, Shirt, UtensilsCrossed, Hammer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bamboo-new.jpg";

const stats = [
  { value: "~100", key: "home.stat1Title" },
  { value: "~20", key: "home.stat2Title" },
];

const services = [
  { icon: Sprout, titleKey: "home.service1Title", descKey: "home.service1Desc" },
  { icon: Briefcase, titleKey: "home.service2Title", descKey: "home.service2Desc" },
  { icon: Award, titleKey: "home.service3Title", descKey: "home.service3Desc" },
  { icon: Recycle, titleKey: "home.service4Title", descKey: "home.service4Desc" },
  { icon: Shield, titleKey: "home.service5Title", descKey: "home.service5Desc" },
];

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

const envItems = [
  { icon: Leaf, titleKey: "home.env1Title", descKey: "home.env1Desc" },
  { icon: TreePine, titleKey: "home.env2Title", descKey: "home.env2Desc" },
  { icon: Eye, titleKey: "home.env3Title", descKey: "home.env3Desc" },
  { icon: Recycle, titleKey: "home.env4Title", descKey: "home.env4Desc" },
];

const bizItems = [
  { icon: Sprout, titleKey: "home.biz1Title", descKey: "home.biz1Desc" },
  { icon: Award, titleKey: "home.biz2Title", descKey: "home.biz2Desc" },
  { icon: TrendingUp, titleKey: "home.biz3Title", descKey: "home.biz3Desc" },
];

const futureIcons = [Building2, Shirt, Shield, UtensilsCrossed, Sprout, Recycle, Hammer, Leaf];

const Index = () => {
  const { lang } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] max-h-[70vh] flex items-center justify-center overflow-hidden">
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
            <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("hero.subtitle", lang)}
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-1">{s.value}</div>
                  <div className="text-primary-foreground/60 text-xs uppercase tracking-widest">{t(s.key, lang)}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8">
                <Link to="/contact">{t("hero.cta", lang)}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 text-base font-semibold px-8">
                <Link to="/project">{t("hero.cta2", lang)}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="premium-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
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

      {/* Why plant bamboo */}
      <section className="py-24 bg-section-alt">
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
      <section className="py-24">
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

      {/* Environmental Impact */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="premium-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t("home.envTitle", lang)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("home.envSubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {envItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-natura-leaf/10 flex items-center justify-center mb-5">
                    <item.icon className="text-natura-leaf" size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{t(item.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="premium-divider mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t("home.businessTitle", lang)}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("home.businessSubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {bizItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className="premium-card p-8 h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="text-accent" size={26} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{t(item.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision — Local transformation */}
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <div className="premium-divider mx-auto mb-6" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Factory className="text-primary" size={28} />
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
                {t("home.futureTitle", lang)}
              </h2>
              <p className="text-accent font-medium text-base mb-4">
                {t("home.futureSubtitle", lang)}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="premium-card p-8 md:p-10 mb-8">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {t("home.futureDesc", lang)}
                </p>
              </div>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-4">
              {(translations.home.futureItems[lang] as readonly string[]).map((item, i) => (
                <AnimatedSection key={i} delay={0.15 + i * 0.08}>
                  <div className="flex items-center gap-4 premium-card p-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {(() => { const Icon = futureIcons[i]; return <Icon size={20} className="text-primary" />; })()}
                    </div>
                    <span className="text-foreground font-medium text-sm">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
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
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
                <Link to="/contact" className="flex items-center gap-2">
                  <Phone size={16} /> {t("home.ctaButton2", lang)}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
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
