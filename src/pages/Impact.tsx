import { useLanguage } from "@/contexts/LanguageContext";
import { t, translations } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import { AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Check, Leaf } from "lucide-react";

const co2Data = [
  { year: "An 1", co2: 30 },
  { year: "An 2", co2: 65 },
  { year: "An 3", co2: 103 },
  { year: "An 4", co2: 206 },
  { year: "An 5", co2: 350 },
  { year: "An 6", co2: 515 },
  { year: "An 7", co2: 618 },
  { year: "An 8", co2: 721 },
  { year: "An 9", co2: 824 },
  { year: "An 10", co2: 1030 },
];

const biomassData = [
  { year: "An 1", biomass: 5 },
  { year: "An 2", biomass: 10 },
  { year: "An 3", biomass: 15 },
  { year: "An 4", biomass: 18 },
  { year: "An 5", biomass: 20 },
  { year: "An 6", biomass: 20 },
  { year: "An 7", biomass: 20 },
  { year: "An 8", biomass: 20 },
  { year: "An 9", biomass: 20 },
  { year: "An 10", biomass: 20 },
];

const marketData = [
  { year: "2021", value: 3.5, projection: false },
  { year: "2022", value: 3.7, projection: false },
  { year: "2023", value: 3.9, projection: false },
  { year: "2024", value: 3.92, projection: false },
  { year: "2025", value: 4.18, projection: false },
  { year: "2026", value: 5.12, projection: false },
  { year: "2030", value: 8.39, projection: true },
];

const Impact = () => {
  const { lang } = useLanguage();
  const envItems = translations.impact.envItems[lang];

  return (
    <>
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">{t("impact.title", lang)}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("impact.subtitle", lang)}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* CO2 Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">{t("impact.co2Title", lang)}</h2>
            <p className="text-muted-foreground mb-8">{t("impact.co2Desc", lang)}</p>
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={co2Data}>
                  <defs>
                    <linearGradient id="co2Gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(152, 45%, 28%)" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="hsl(152, 45%, 28%)" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(45, 15%, 85%)" />
                  <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="hsl(150, 10%, 45%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(150, 10%, 45%)" unit=" t" />
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(45,15%,85%)" }} />
                  <Area type="monotone" dataKey="co2" stroke="hsl(152, 45%, 28%)" fill="url(#co2Gradient)" strokeWidth={2.5} name="CO₂ (tonnes)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Biomass Chart */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">{t("impact.biomassTitle", lang)}</h2>
            <p className="text-muted-foreground mb-8">{t("impact.biomassDesc", lang)}</p>
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={biomassData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(45, 15%, 85%)" />
                  <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="hsl(150, 10%, 45%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(150, 10%, 45%)" unit=" t" />
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(45,15%,85%)" }} />
                  <Bar dataKey="biomass" fill="hsl(135, 40%, 42%)" radius={[6, 6, 0, 0]} name={lang === "fr" ? "Biomasse (tonnes)" : "Biomass (tonnes)"} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bamboo Market Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">{t("impact.marketTitle", lang)}</h2>
            <p className="text-muted-foreground mb-8">{t("impact.marketDesc", lang)}</p>
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(45, 15%, 85%)" />
                  <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="hsl(150, 10%, 45%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(150, 10%, 45%)" unit=" B$" domain={[0, 10]} />
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(45,15%,85%)" }} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} name={lang === "fr" ? "Marché (Mds USD)" : "Market (B USD)"}>
                    {marketData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={entry.projection ? "hsl(42, 65%, 55%)" : "hsl(152, 45%, 28%)"}
                        fillOpacity={entry.projection ? 0.6 : 1}
                        strokeDasharray={entry.projection ? "4 2" : undefined}
                        stroke={entry.projection ? "hsl(42, 65%, 55%)" : undefined}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(152, 45%, 28%)" }} />
                  <span className="text-xs text-muted-foreground">{lang === "fr" ? "Données historiques" : "Historical data"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm opacity-60" style={{ backgroundColor: "hsl(42, 65%, 55%)" }} />
                  <span className="text-xs text-muted-foreground">{lang === "fr" ? "Projection 2030" : "2030 Projection"}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">{t("impact.marketSource", lang)}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Carbon credits + env */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <Leaf className="text-primary mb-4" size={36} />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{t("impact.carbonTitle", lang)}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("impact.carbonDesc", lang)}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">{t("impact.envTitle", lang)}</h2>
              <div className="flex flex-col gap-3">
                {envItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impact;
