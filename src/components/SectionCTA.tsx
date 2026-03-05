import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

const SectionCTA = ({ title, description, primaryLabel, primaryTo, secondaryLabel, secondaryTo }: Props) => (
  <section className="py-20 bg-section-dark">
    <div className="container mx-auto px-4">
      <AnimatedSection className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-2xl md:text-4xl text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-primary-foreground/60 mb-8 text-base leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8">
            <Link to={primaryTo} className="flex items-center gap-2">
              {primaryLabel} <ArrowRight size={16} />
            </Link>
          </Button>
          {secondaryLabel && secondaryTo && (
            <Button asChild size="lg" className="border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/15 font-medium px-8">
              <Link to={secondaryTo}>
                {secondaryLabel}
              </Link>
            </Button>
          )}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SectionCTA;
