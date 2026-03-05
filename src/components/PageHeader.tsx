import AnimatedSection from "./AnimatedSection";

interface Props {
  label: string;
  title: string;
  description?: string;
}

const PageHeader = ({ label, title, description }: Props) => (
  <section className="pt-28 pb-16 bg-section-alt border-b border-border/50">
    <div className="container mx-auto px-4">
      <AnimatedSection className="max-w-3xl">
        <span className="section-label">{label}</span>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground leading-tight mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </AnimatedSection>
    </div>
  </section>
);

export default PageHeader;
