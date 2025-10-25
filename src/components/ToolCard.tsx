import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export const ToolCard = ({ icon: Icon, title, description, href }: ToolCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card border border-border hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col items-start gap-4">
        <div className="p-3 rounded-lg bg-trust-light">
          <Icon className="w-6 h-6 text-trust" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <Link to={href} className="w-full">
          <Button variant="outline" className="w-full">
            Try {title}
          </Button>
        </Link>
      </div>
    </Card>
  );
};
