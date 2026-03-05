import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, translations } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import PageHeader from "@/components/PageHeader";
import SectionCTA from "@/components/SectionCTA";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  Check, Leaf, TrendingUp, Wind, TreePine, Sprout, Recycle, Droplets,
  Building2, Shield, Shirt, UtensilsCrossed, Hammer, Factory, ArrowRight,
} from "lucide-react";

const marketData = [
  { year: "2021", value: 3.5, projection: false },
  { year: "2022", value: 3.7, projection: false },
  { year: "2023", value: 3.9, projection: false },
  { year: "2024", value: 3.92, projection: false },
  { year: "2025", value: 4.18, projection: false },
  { year: "2026", value: 5.12, projection: false },
  { year: "2030", value: 8.39, projection: true },
];

const envItems = [
  { icon: Leaf, titleKey: "home.env1Title", descKey: "home.env1Desc" },
  { icon: TreePine, titleKey: "home.env2Title", descKey: "home.env2Desc" },
  { icon: Sprout, titleKey: "home.env3Title", descKey: "home.env3Desc" },
  { icon: Recycle, titleKey: "home.env4Title", descKey: "home.env4Desc" },
  { icon: Droplets, titleKey: "home.env5Title", descKey: "home.env5Desc" },
];

const futureIcons = [Building2, Shield, Shirt, UtensilsCrossed, Sprout, Recycle, Hammer, Leaf];

const Impact = () => {
  const { lang } = useLanguage();
  const envListItems = translations.impact.envItems[lang];

  return (
    <>
      <PageHeader
        label={lang === "fr" ? "Impact écologique" : "Ecological impact"}
        title={t("impact.title", lang)}
        description={t("impact.subtitle", lang)}
      />

      {/* Environmental Impact Cards */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mb-14">
            <span className="section-label">{lang === "fr" ? "Environnement" : "Environment"}</span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-4">
              {t("home.envTitle", lang)}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("home.envSubtitle", lang)}
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5 mb-5 max-w-5xl">
            {envItems.slice(0, 3).map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="premium-card-hover p-7 h-full">
                  <item.icon className="text-natura-leaf mb-4" size={22} />
                  <h3 className="font-heading text-base text-foreground mb-2">{t(item.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:w-2/3">
            {envItems.slice(3).map((item, i) => (
              <AnimatedSection key={i + 3} delay={(i + 3) * 0.08}>
                <div className="premium-card-hover p-7 h-full">
                  <item.icon className="text-natura-leaf mb-4" size={22} />
                  <h3 className="font-heading text-base text-foreground mb-2">{t(item.titleKey, lang)}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey, lang)}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CO2 & Biomass — editorial two-column */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <AnimatedSection>
              <Wind className="text-primary mb-4" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{t("impact.co2Title", lang)}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("impact.co2Desc", lang)}</p>
              <p className="text-foreground font-medium text-sm leading-relaxed editorial-border-left">{t("impact.co2Conclusion", lang)}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <TrendingUp className="text-primary mb-4" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{t("impact.biomassTitle", lang)}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("impact.biomassDesc", lang)}</p>
              <p className="text-foreground font-medium text-sm leading-relaxed editorial-border-left">{t("impact.biomassConclusion", lang)}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Market Chart */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <span className="section-label">{lang === "fr" ? "Marché" : "Market"}</span>
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">{t("impact.marketTitle", lang)}</h2>
            <p className="text-muted-foreground mb-8">{t("impact.marketDesc", lang)}</p>
            <div className="premium-card p-6 md:p-8">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 12%, 88%)" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: "Inter" }} stroke="hsl(160, 8%, 48%)" />
                  <YAxis tick={{ fontSize: 12, fontFamily: "Inter" }} stroke="hsl(160, 8%, 48%)" unit=" B$" domain={[0, 10]} />
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(40,12%,88%)", fontFamily: "Inter" }} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} name={lang === "fr" ? "Marché (Mds USD)" : "Market (B USD)"}>
                    {marketData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={entry.projection ? "hsl(38, 55%, 50%)" : "hsl(155, 40%, 24%)"}
                        fillOpacity={entry.projection ? 0.6 : 1}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(155, 40%, 24%)" }} />
                  <span className="text-xs text-muted-foreground font-body">{lang === "fr" ? "Données historiques" : "Historical data"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm opacity-60" style={{ backgroundColor: "hsl(38, 55%, 50%)" }} />
                  <span className="text-xs text-muted-foreground font-body">{lang === "fr" ? "Projection 2030" : "2030 Projection"}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">{t("impact.marketSource", lang)}</p>
              <p className="text-foreground font-medium mt-4 text-sm leading-relaxed">{t("impact.marketConclusion", lang)}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Carbon credits + env list */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <AnimatedSection>
              <Leaf className="text-primary mb-4" size={28} />
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{t("impact.carbonTitle", lang)}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("impact.carbonDesc", lang)}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">{t("impact.envTitle", lang)}</h2>
              <div className="flex flex-col gap-3">
                {envListItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/8 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionCTA
        title={lang === "fr" ? "Prêt à contribuer à cet impact ?" : "Ready to contribute to this impact?"}
        description={lang === "fr" ? "Découvrez combien vos terres peuvent générer." : "Discover how much your land can generate."}
        primaryLabel={lang === "fr" ? "Simuler mes revenus" : "Simulate my revenue"}
        primaryTo="/revenues"
        secondaryLabel={lang === "fr" ? "Recevoir une étude gratuite" : "Get a free assessment"}
        secondaryTo="/contact"
      />

      {/* Future — Filières */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <AnimatedSection className="mb-10">
              <span className="section-label">{lang === "fr" ? "Ambition" : "Ambition"}</span>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-4">
                {t("home.futureTitle", lang)}
              </h2>
              <p className="text-accent font-body font-medium text-sm mb-6">
                {t("home.futureSubtitle", lang)}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("home.futureDesc", lang)}
              </p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-3">
              {(translations.home.futureItems[lang] as readonly string[]).map((item, i) => (
                <AnimatedSection key={i} delay={0.05 + i * 0.04}>
                  <div className="flex items-center gap-3 premium-card p-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                      {(() => { const Icon = futureIcons[i]; return <Icon size={16} className="text-primary" />; })()}
                    </div>
                    <span className="text-foreground text-sm font-body">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
