import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, Image } from "lucide-react";
import { useState } from "react";

export const FileDropzone = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // File handling logic would go here
  };

  return (
    <Card className="p-6 bg-card border-2 border-dashed border-border">
      <Tabs defaultValue="pdf" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="pdf" className="gap-2">
            <FileText className="w-4 h-4" />
            PDF
          </TabsTrigger>
          <TabsTrigger value="images" className="gap-2">
            <Image className="w-4 h-4" />
            Images
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="pdf">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex flex-col items-center justify-center py-12 px-6 rounded-lg border-2 border-dashed transition-all ${
              isDragging ? "border-primary bg-trust-light" : "border-border"
            }`}
          >
            <Upload className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-center text-foreground font-medium mb-2">
              Drop your PDF here
            </p>
            <p className="text-sm text-muted-foreground mb-4">or</p>
            <Button variant="default">Choose File</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="images">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex flex-col items-center justify-center py-12 px-6 rounded-lg border-2 border-dashed transition-all ${
              isDragging ? "border-primary bg-trust-light" : "border-border"
            }`}
          >
            <Upload className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-center text-foreground font-medium mb-2">
              Drop images here
            </p>
            <p className="text-sm text-muted-foreground mb-4">JPG, PNG, WebP, HEIC</p>
            <Button variant="default">Choose Files</Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        100% free • No watermark • Files auto-delete
      </p>
    </Card>
  );
};
