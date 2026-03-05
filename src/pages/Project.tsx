import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import PageHeader from "@/components/PageHeader";
import SectionCTA from "@/components/SectionCTA";
import {
  Sprout, HeartHandshake, Shovel, Coins, ShieldCheck,
  Check, ExternalLink, Eye, Globe, Recycle,
  Leaf, Shield as ShieldIcon, FileCheck,
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
      <PageHeader
        label={lang === "fr" ? "Notre projet" : "Our project"}
        title={t("project.title", lang)}
        description={t("project.subtitle", lang)}
      />

      {/* Full-width image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden">
            <img src={bambooForest} alt="Bamboo forest" className="w-full h-64 md:h-[400px] object-cover" />
          </div>
        </div>
      </section>

      {/* Services — asymmetric layout */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mb-14">
            <span className="section-label">{lang === "fr" ? "Services" : "Services"}</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-4">
              {t("home.servicesTitle", lang)}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("home.servicesSubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {services.slice(0, 3).map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="premium-card-hover p-7 h-full">
                  <s.icon className="text-primary mb-4" size={22} />
                  <h3 className="font-heading text-base text-foreground mb-2">{t(s.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(s.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:w-2/3">
            {services.slice(3).map((s, i) => (
              <AnimatedSection key={i + 3} delay={(i + 3) * 0.08}>
                <div className="premium-card-hover p-7 h-full">
                  <s.icon className="text-primary mb-4" size={22} />
                  <h3 className="font-heading text-base text-foreground mb-2">{t(s.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(s.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bamboologic Partnership */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <AnimatedSection className="mb-10">
              <span className="section-label">{lang === "fr" ? "Partenariat" : "Partnership"}</span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-4">
                {t("home.bamboologicTitle", lang)}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {t("home.bamboologicSubtitle", lang)}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="premium-card p-8 md:p-10">
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {bamboologicItems.map((key, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-primary/8 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-primary" />
                      </div>
                      <span className="text-foreground font-body text-sm">{t(key, lang)}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" size="lg" className="font-medium">
                  <a href="https://bamboologic.eu/fr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {t("home.bamboologicCta", lang)} <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mb-14">
            <span className="section-label">{lang === "fr" ? "Certification" : "Certification"}</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-4">
              {t("home.certTitle", lang)}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("home.certSubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <AnimatedSection delay={0.08}>
              <div className="premium-card p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mb-5 border border-primary/10">
                  <FileCheck className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">{t("home.certAgroTitle", lang)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("home.certAgroDesc", lang)}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.16}>
              <div className="premium-card p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 border border-accent/10">
                  <ShieldCheck className="text-accent" size={28} />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">{t("home.certVeritasTitle", lang)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("home.certVeritasDesc", lang)}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits — editorial split */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl">
            <AnimatedSection>
              <span className="section-label">{lang === "fr" ? "Propriétaires" : "Landowners"}</span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-8">{t("project.benefitsTitle", lang)}</h2>
              <div className="flex flex-col gap-4">
                {benefitKeys.map((key, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-accent" />
                    </div>
                    <span className="text-foreground text-sm">{t(key, lang)}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="rounded-xl overflow-hidden">
                <img src={bambooRoots} alt="Bamboo roots" className="w-full h-72 md:h-96 object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <AnimatedSection className="mb-10">
              <span className="section-label">{lang === "fr" ? "Vision" : "Vision"}</span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-4">
                {t("project.whyBiTitle", lang)}
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {t("project.whyBiSubtitle", lang)}
              </p>
            </AnimatedSection>
            <div className="flex flex-col gap-3">
              {visionKeys.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="flex items-center gap-4 premium-card p-5">
                    <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-body">{t(item.key, lang)}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

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

export default Project;
