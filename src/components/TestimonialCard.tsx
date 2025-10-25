import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <Card className="p-6 bg-card border border-border">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="text-foreground mb-4 italic">"{quote}"</blockquote>
      <div>
        <div className="font-semibold text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </Card>
  );
};
