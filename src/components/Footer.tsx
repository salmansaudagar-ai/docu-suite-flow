import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/merge-pdf" className="text-muted-foreground hover:text-primary transition-colors">
                  Merge PDF
                </Link>
              </li>
              <li>
                <Link to="/compress-pdf" className="text-muted-foreground hover:text-primary transition-colors">
                  Compress PDF
                </Link>
              </li>
              <li>
                <Link to="/jpg-to-pdf" className="text-muted-foreground hover:text-primary transition-colors">
                  JPG to PDF
                </Link>
              </li>
              <li>
                <Link to="/split-pdf" className="text-muted-foreground hover:text-primary transition-colors">
                  Split PDF
                </Link>
              </li>
              <li>
                <Link to="/edit-pdf" className="text-muted-foreground hover:text-primary transition-colors">
                  PDF Editor
                </Link>
              </li>
              <li>
                <Link to="/pdf-to-jpg" className="text-muted-foreground hover:text-primary transition-colors">
                  PDF to JPG
                </Link>
              </li>
              <li>
                <Link to="/image-to-pdf" className="text-muted-foreground hover:text-primary transition-colors">
                  Image to PDF
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/data-deletion" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-muted-foreground hover:text-primary transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support Us</h3>
            <p className="text-muted-foreground text-sm mb-4">
              If Docu-Suite saved you time, consider supporting us (totally optional!)
            </p>
            <Button variant="outline" className="gap-2">
              <Heart className="w-4 h-4" />
              Support Docu-Suite
            </Button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Docu-Suite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
