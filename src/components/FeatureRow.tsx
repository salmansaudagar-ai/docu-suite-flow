import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureRowProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export const FeatureRow = ({ icon: Icon, title, description, ctaText, ctaHref }: FeatureRowProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
      <div className="p-4 rounded-lg bg-trust-light shrink-0">
        <Icon className="w-8 h-8 text-trust" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Link to={ctaHref}>
        <Button variant="default" className="shrink-0">
          {ctaText}
        </Button>
      </Link>
    </div>
  );
};
