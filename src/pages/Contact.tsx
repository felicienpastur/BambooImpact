import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t, translations } from "@/lib/translations";
import AnimatedSection from "@/components/AnimatedSection";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const typeOptions = translations.contact.typeOptions[lang];

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
      <PageHeader
        label="Contact"
        title={t("contact.title", lang)}
        description={t("contact.subtitle", lang)}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            {/* Form */}
            <AnimatedSection className="md:col-span-3">
              {sent ? (
                <div className="text-center py-16">
                  <CheckCircle className="text-primary mx-auto mb-4" size={48} />
                  <p className="text-lg font-heading text-foreground">{t("contact.sent", lang)}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block font-body">{t("contact.name", lang)}</label>
                    <Input required name="name" placeholder={t("contact.name", lang)} className="bg-card h-11" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block font-body">{t("contact.email", lang)}</label>
                    <Input required name="email" type="email" placeholder={t("contact.email", lang)} className="bg-card h-11" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block font-body">{t("contact.type", lang)}</label>
                    <select name="profile" required className="flex h-11 w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-body">
                      <option value="">{t("contact.type", lang)}</option>
                      {typeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block font-body">{t("contact.message", lang)}</label>
                    <Textarea required name="message" rows={5} placeholder={t("contact.message", lang)} className="bg-card resize-none" />
                  </div>
                  <Button type="submit" size="lg" disabled={sending} className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium mt-2 h-12">
                    <Send size={15} className="mr-2" />
                    {sending ? (lang === "fr" ? "Envoi…" : "Sending…") : t("contact.send", lang)}
                  </Button>
                </form>
              )}
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.1} className="md:col-span-2">
              <h3 className="font-heading text-xl text-foreground mb-6">{t("contact.info", lang)}</h3>
              <div className="flex flex-col gap-5 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground text-sm font-body">Email</div>
                    <a href="mailto:info.bambooimpact@gmail.com" className="hover:text-primary transition-colors text-sm">info.bambooimpact@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground text-sm font-body">{lang === "fr" ? "Localisation" : "Location"}</div>
                    <span className="text-sm">{lang === "fr" ? "Wallonie, Belgique" : "Wallonia, Belgium"}</span>
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
