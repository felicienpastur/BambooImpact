import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import AnimatedSection from "@/components/AnimatedSection";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";
import { Calculator, TrendingUp, Leaf, Coins } from "lucide-react";

const CO2_PER_HA = 100;
const BIOMASS_PER_HA = 20;
const CO2_PRICE = 30;
const BIOMASS_PRICE = 150;

const COMMISSIONS = {
  farmer: { carbon: 0.30, biomass: 0.20 },
  private: { carbon: 0.45, biomass: 0.50 },
};

const ROICalculator = () => {
  const { lang } = useLanguage();
  const [hectares, setHectares] = useState(5);
  const [userType, setUserType] = useState<"farmer" | "private">("farmer");

  const commission = COMMISSIONS[userType];
  const ownerCarbonShare = 1 - commission.carbon;
  const ownerBiomassShare = 1 - commission.biomass;

  const yearlyCarbon = CO2_PER_HA * CO2_PRICE * ownerCarbonShare * hectares;
  const yearlyBiomass = BIOMASS_PER_HA * BIOMASS_PRICE * ownerBiomassShare * hectares;

  const chartData = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => {
      const year = i + 1;
      const carbon = Math.round(yearlyCarbon);
      let biomassRatio = 0;
      if (year >= 8) biomassRatio = 1;
      else if (year === 7) biomassRatio = 0.75;
      else if (year === 6) biomassRatio = 0.5;
      else if (year === 5) biomassRatio = 0.25;
      const biomass = Math.round(yearlyBiomass * biomassRatio);
      return {
        year: `${lang === "fr" ? "An" : "Yr"} ${year}`,
        carbon,
        biomass,
        total: carbon + biomass,
      };
    });
  }, [hectares, userType, lang, yearlyCarbon, yearlyBiomass]);

  const totalCarbon10 = chartData.reduce((s, d) => s + d.carbon, 0);
  const totalBiomass10 = chartData.reduce((s, d) => s + d.biomass, 0);
  const total10 = totalCarbon10 + totalBiomass10;

  return (
    <section className="py-20 md:py-28 bg-section-alt" id="calculator">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-2xl mb-12">
          <span className="section-label">{lang === "fr" ? "Simulateur" : "Simulator"}</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-4">
            {t("calc.title", lang)}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("calc.subtitle", lang)}
          </p>
        </AnimatedSection>

        <div className="max-w-5xl">
          <AnimatedSection delay={0.1}>
            <div className="premium-card p-7 md:p-10">
              {/* Inputs */}
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-3 block font-body">
                    {t("calc.hectares", lang)}
                  </Label>
                  <Input
                    type="number"
                    min={1}
                    max={100}
                    value={hectares}
                    onChange={(e) => setHectares(Math.max(1, Math.min(100, Number(e.target.value) || 1)))}
                    className="text-base h-11"
                  />
                  <p className="text-xs text-muted-foreground mt-2">{t("calc.hectaresNote", lang)}</p>
                </div>
                <div>
                  <Label className="text-sm font-semibold text-foreground mb-3 block font-body">
                    {t("calc.userType", lang)}
                  </Label>
                  <RadioGroup
                    value={userType}
                    onValueChange={(v) => setUserType(v as "farmer" | "private")}
                    className="flex flex-col gap-3"
                  >
                    <div className="flex items-center gap-3 premium-card p-4 cursor-pointer">
                      <RadioGroupItem value="farmer" id="farmer" />
                      <Label htmlFor="farmer" className="cursor-pointer font-body text-sm">
                        {t("calc.farmer", lang)}
                      </Label>
                    </div>
                    <div className="flex items-center gap-3 premium-card p-4 cursor-pointer">
                      <RadioGroupItem value="private" id="private" />
                      <Label htmlFor="private" className="cursor-pointer font-body text-sm">
                        {t("calc.private", lang)}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Results */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-primary/5 rounded-xl p-6 text-center border border-primary/8">
                  <Leaf className="text-primary mx-auto mb-2" size={22} />
                  <div className="text-2xl md:text-3xl font-heading text-primary">
                    {totalCarbon10.toLocaleString("fr-BE")} €
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 font-body">{t("calc.carbonTotal", lang)}</p>
                </div>
                <div className="bg-accent/5 rounded-xl p-6 text-center border border-accent/8">
                  <Coins className="text-accent mx-auto mb-2" size={22} />
                  <div className="text-2xl md:text-3xl font-heading text-accent">
                    {totalBiomass10.toLocaleString("fr-BE")} €
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 font-body">{t("calc.biomassTotal", lang)}</p>
                </div>
                <div className="bg-natura-deep/5 rounded-xl p-6 text-center border border-natura-deep/8">
                  <TrendingUp className="text-natura-deep mx-auto mb-2" size={22} />
                  <div className="text-2xl md:text-3xl font-heading text-natura-deep">
                    {total10.toLocaleString("fr-BE")} €
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 font-body">{t("calc.totalRevenue", lang)}</p>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-card rounded-xl border border-border p-5 md:p-6">
                <h3 className="font-heading text-base text-foreground mb-4">
                  {t("calc.chartTitle", lang)}
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData} barCategoryGap="20%">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 12%, 88%)" />
                    <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: "Inter" }} stroke="hsl(160, 8%, 48%)" />
                    <YAxis tick={{ fontSize: 11, fontFamily: "Inter" }} stroke="hsl(160, 8%, 48%)" unit=" €" />
                    <Tooltip
                      contentStyle={{ borderRadius: 8, border: "1px solid hsl(40,12%,88%)", fontFamily: "Inter" }}
                      formatter={(value: number) => [`${value.toLocaleString("fr-BE")} €`]}
                    />
                    <Legend />
                    <Bar
                      dataKey="carbon"
                      stackId="a"
                      fill="hsl(155, 40%, 24%)"
                      radius={[0, 0, 0, 0]}
                      name={lang === "fr" ? "Revenus carbone" : "Carbon revenue"}
                    />
                    <Bar
                      dataKey="biomass"
                      stackId="a"
                      fill="hsl(38, 55%, 50%)"
                      radius={[4, 4, 0, 0]}
                      name={lang === "fr" ? "Revenus biomasse" : "Biomass revenue"}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground font-body">
                  {t("calc.disclaimer", lang)}
                </p>
                <p className="text-xs text-muted-foreground mt-1 font-body">
                  {userType === "farmer" ? t("calc.commFarmer", lang) : t("calc.commPrivate", lang)}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
