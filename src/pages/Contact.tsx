import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, translations } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const typeOptions = translations.contact.typeOptions[lang];

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      const form = e.currentTarget;
      const response = await fetch("https://formspree.io/f/xpwzgwkq", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSent(true);
        toast.success(t("contact.sent", lang));
      } else {
        toast.error(lang === "fr" ? "Erreur lors de l'envoi. Réessayez." : "Failed to send. Please try again.");
      }
    } catch {
      toast.error(lang === "fr" ? "Erreur réseau. Réessayez." : "Network error. Please try again.");
    } finally {
      setSending(false);
    }
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
                    <Input required name="name" placeholder={t("contact.name", lang)} className="bg-card" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.email", lang)}</label>
                    <Input required name="email" type="email" placeholder={t("contact.email", lang)} className="bg-card" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.type", lang)}</label>
                    <select name="profile" required className="flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      <option value="">{t("contact.type", lang)}</option>
                      {typeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.message", lang)}</label>
                    <Textarea required name="message" rows={5} placeholder={t("contact.message", lang)} className="bg-card resize-none" />
                  </div>
                  <Button type="submit" size="lg" disabled={sending} className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold mt-2">
                    <Send size={16} className="mr-2" />
                    {sending ? (lang === "fr" ? "Envoi…" : "Sending…") : t("contact.send", lang)}
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
                    <a href="mailto:info.bambooimpact@gmail.com" className="hover:text-primary transition-colors">info.bambooimpact@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Contact</div>
                    <span>BambooImpact</span>
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
