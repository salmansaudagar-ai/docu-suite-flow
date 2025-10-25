import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Merge, 
  Minimize2, 
  FileImage, 
  Scissors, 
  Edit3, 
  FileOutput,
  Sparkles,
  Shield,
  Zap,
  Languages
} from "lucide-react";
import { Link } from "react-router-dom";
import { ToolCard } from "@/components/ToolCard";
import { FeatureRow } from "@/components/FeatureRow";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FileDropzone } from "@/components/FileDropzone";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroIllustration from "@/assets/hero-illustration.png";

const Index = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Docu-Suite really free and without watermarks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Core tools are 100% free with no watermarks and no forced sign-ups."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need an account to edit or convert PDFs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Everything works without logging in. You can start immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Are my files private?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We're privacy-first. Files are processed ephemerally and auto-deleted by default."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support OCR for my language?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We support English and key Indic scripts (Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Gujarati, Marathi)."
        }
      },
      {
        "@type": "Question",
        "name": "How is redaction 'secure'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We permanently remove underlying text/vectors in redacted regions—not just draw a black box."
        }
      },
      {
        "@type": "Question",
        "name": "Can I support Docu-Suite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Totally optional—tap Support to donate via UPI QR or share a kind word."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-hero">
                  <FileImage className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Docu-Suite</span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/merge-pdf" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Merge
                </Link>
                <Link to="/compress-pdf" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Compress
                </Link>
                <Link to="/edit-pdf" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Edit
                </Link>
                <Link to="/jpg-to-pdf" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Convert
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-trust-light/30 to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-slide-up">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                    Free Online PDF Tools — Edit, Merge, Compress & Convert (No Login)
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Fast, free, no-login PDF tools — from quick merges to a full AI editor with secure redaction.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    <Badge variant="secondary" className="gap-1">
                      <Shield className="w-3 h-3" />
                      No login
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Languages className="w-3 h-3" />
                      OCR (English + Indic)
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Shield className="w-3 h-3" />
                      Secure redaction
                    </Badge>
                    <Badge variant="secondary" className="gap-1">
                      <Zap className="w-3 h-3" />
                      Privacy-first
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/edit-pdf">
                      <Button variant="hero" size="lg" className="w-full sm:w-auto">
                        Open PDF Editor
                      </Button>
                    </Link>
                    <Link to="/merge-pdf">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        Merge PDF
                      </Button>
                    </Link>
                    <Link to="/image-to-pdf">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        Image to PDF
                      </Button>
                    </Link>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-6">
                    100% free • No watermark • Files auto-delete
                  </p>
                </div>
                
                <div className="animate-fade-in">
                  <div className="relative">
                    <img 
                      src={heroIllustration} 
                      alt="PDF tools illustration" 
                      className="w-full h-auto mb-6 rounded-lg"
                      loading="eager"
                    />
                    <FileDropzone />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Tools Section */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Popular PDF Tools
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to work with PDFs — all free, no login required
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ToolCard
                  icon={Merge}
                  title="Merge PDF"
                  description="Combine multiple PDFs in seconds. Reorder before you merge."
                  href="/merge-pdf"
                />
                <ToolCard
                  icon={Minimize2}
                  title="Compress PDF"
                  description="Shrink file size while keeping text crisp."
                  href="/compress-pdf"
                />
                <ToolCard
                  icon={FileImage}
                  title="JPG to PDF"
                  description="Turn images (JPG/PNG/WebP/HEIC) into a single PDF."
                  href="/jpg-to-pdf"
                />
                <ToolCard
                  icon={Scissors}
                  title="Split PDF"
                  description="Extract pages or ranges without re-uploading."
                  href="/split-pdf"
                />
                <ToolCard
                  icon={Edit3}
                  title="PDF Editor (AI)"
                  description="Annotate, securely redact, fill & sign — right in your browser."
                  href="/edit-pdf"
                />
                <ToolCard
                  icon={FileOutput}
                  title="PDF to JPG"
                  description="Export selected pages as high-quality images."
                  href="/pdf-to-jpg"
                />
              </div>
            </div>
          </section>

          {/* Feature Marquee Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Docu-Suite wins
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <FeatureRow
                  icon={Sparkles}
                  title="AI PDF Editor"
                  description="Annotate, securely redact (true removal), fill & sign, page numbers, headers/footers."
                  ctaText="Try the Editor"
                  ctaHref="/edit-pdf"
                />
                <FeatureRow
                  icon={FileImage}
                  title="Image → PDF (OCR)"
                  description="Auto-crop, de-warp, glare/shadow fix, OCR for English & Indic (hi, bn, ta, te, kn, ml, gu, mr)."
                  ctaText="Convert Images"
                  ctaHref="/image-to-pdf"
                />
                <FeatureRow
                  icon={Shield}
                  title="Privacy-first"
                  description="No login. No watermark. Files auto-delete."
                  ctaText="Learn More"
                  ctaHref="/privacy"
                />
                <FeatureRow
                  icon={Zap}
                  title="Fast & free"
                  description="Designed for speed. Donation-friendly, never paywalled."
                  ctaText="Get Started"
                  ctaHref="/edit-pdf"
                />
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Loved by users worldwide
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <TestimonialCard
                  quote="Exactly what I needed! No sign-up hassles, works perfectly."
                  author="Priya S."
                  role="Small Business Owner"
                />
                <TestimonialCard
                  quote="The OCR for Hindi is surprisingly accurate. Saved hours of work."
                  author="Rahul M."
                  role="Content Creator"
                />
                <TestimonialCard
                  quote="Clean, fast, and completely free. This is how tools should be."
                  author="Sarah K."
                  role="Freelance Designer"
                />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      Is Docu-Suite really free and without watermarks?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. Core tools are 100% free with no watermarks and no forced sign-ups.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      Do I need an account to edit or convert PDFs?
                    </AccordionTrigger>
                    <AccordionContent>
                      No. Everything works without logging in. You can start immediately.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      Are my files private?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. We're privacy-first. Files are processed ephemerally and auto-deleted by default.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      Do you support OCR for my language?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. We support English and key Indic scripts (Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Gujarati, Marathi).
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">
                      How is redaction "secure"?
                    </AccordionTrigger>
                    <AccordionContent>
                      We permanently remove underlying text/vectors in redacted regions—not just draw a black box.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">
                      Can I support Docu-Suite?
                    </AccordionTrigger>
                    <AccordionContent>
                      Totally optional—tap Support to donate via UPI QR or share a kind word.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
