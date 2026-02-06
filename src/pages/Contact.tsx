import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, translations } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const typeOptions = translations.contact.typeOptions[lang];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success(t("contact.sent", lang));
  };

  return (
    <>
      <section className="py-24 bg-section-alt">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">{t("contact.title", lang)}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("contact.subtitle", lang)}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Form */}
            <AnimatedSection className="md:col-span-3">
              {sent ? (
                <div className="text-center py-16">
                  <CheckCircle className="text-primary mx-auto mb-4" size={56} />
                  <p className="text-lg font-medium text-foreground">{t("contact.sent", lang)}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.name", lang)}</label>
                    <Input required placeholder={t("contact.name", lang)} className="bg-card" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.email", lang)}</label>
                    <Input required type="email" placeholder={t("contact.email", lang)} className="bg-card" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.type", lang)}</label>
                    <Select>
                      <SelectTrigger className="bg-card">
                        <SelectValue placeholder={t("contact.type", lang)} />
                      </SelectTrigger>
                      <SelectContent>
                        {typeOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.message", lang)}</label>
                    <Textarea required rows={5} placeholder={t("contact.message", lang)} className="bg-card resize-none" />
                  </div>
                  <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold mt-2">
                    <Send size={16} className="mr-2" />
                    {t("contact.send", lang)}
                  </Button>
                </form>
              )}
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.15} className="md:col-span-2">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">{t("contact.info", lang)}</h3>
              <div className="flex flex-col gap-5 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a href="mailto:felicien.pastur@gmail.com" className="hover:text-primary transition-colors">felicien.pastur@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{lang === "fr" ? "Téléphone" : "Phone"}</div>
                    <a href="tel:+32493933932" className="hover:text-primary transition-colors">+32 493 93 39 32</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Contact</div>
                    <span>Félicien Pastur</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
