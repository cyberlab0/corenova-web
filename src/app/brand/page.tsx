"use client";

import { AnimatedLogo } from "@/components/ui/animated-logo";
import { Download, Check, Copy } from "lucide-react";
import { useState } from "react";

export default function BrandGuidelinesPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border/50 pb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Brand Guidelines</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              The official visual identity for Corenova Technology Ltd. An original, geometric abstract symbol representing connectivity, intelligence, and secure digital transformation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/corenova-logo-dark.svg"
              download="corenova-logo.svg"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Download size={16} />
              Download Vectors (SVG)
            </a>
          </div>
        </div>

        {/* Core Identity */}
        <section className="mb-20">
          <h2 className="text-2xl font-heading font-semibold mb-8 border-b border-border/50 pb-4">Core Identity Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 rounded-3xl bg-card border border-border flex flex-col items-center justify-center text-center gap-6 relative group">
              <AnimatedLogo variant="primary" />
              <p className="text-sm font-medium text-muted-foreground">Primary Logo (Horizontal)</p>
              <a
                href="/corenova-logo-dark.svg"
                download="corenova-logo-horizontal.svg"
                className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4 p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20"
                title="Download SVG"
              >
                <Download size={16} />
              </a>
            </div>
            
            <div className="p-12 rounded-3xl bg-card border border-border flex flex-col items-center justify-center text-center gap-6 relative group">
              <AnimatedLogo variant="vertical" />
              <p className="text-sm font-medium text-muted-foreground">Vertical Logo (Stacked)</p>
              <a
                href="/corenova-logo-dark.svg"
                download="corenova-logo-stacked.svg"
                className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4 p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20"
                title="Download SVG"
              >
                <Download size={16} />
              </a>
            </div>

            <div className="p-12 rounded-3xl bg-card border border-border flex flex-col items-center justify-center text-center gap-6 relative group">
              <AnimatedLogo variant="icon-only" />
              <p className="text-sm font-medium text-muted-foreground">Icon-only Logo (App Icon / Social Avatar)</p>
              <a
                href="/corenova-icon.svg"
                download="corenova-icon.svg"
                className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4 p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20"
                title="Download SVG"
              >
                <Download size={16} />
              </a>
            </div>

            <div className="p-12 rounded-3xl bg-[#000000] border border-border flex flex-col items-center justify-center text-center gap-6 relative group">
              <AnimatedLogo variant="monochrome" />
              <p className="text-sm font-medium text-muted-foreground">Monochrome Version (Dark/Print)</p>
              <a
                href="/corenova-logo-dark.svg"
                download="corenova-logo-monochrome.svg"
                className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4 p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20"
                title="Download SVG"
              >
                <Download size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Application Mockups / Loading states */}
        <section className="mb-20">
          <h2 className="text-2xl font-heading font-semibold mb-8 border-b border-border/50 pb-4">Digital Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border flex flex-col items-center justify-center text-center gap-6 aspect-square">
              <div className="w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden bg-background">
                <AnimatedLogo variant="icon-only" interactive={false} />
              </div>
              <p className="text-sm font-medium text-muted-foreground">iOS App Icon</p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border flex flex-col items-center justify-center text-center gap-6 aspect-square">
              <div className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center bg-background border border-border">
                <AnimatedLogo variant="icon-only" interactive={false} className="scale-75" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Social Media Avatar</p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border flex flex-col items-center justify-center text-center gap-6 aspect-square">
              <div className="flex items-center justify-center">
                 <AnimatedLogo variant="icon-only" interactive={true} className="animate-pulse" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Loading Animation</p>
            </div>
          </div>
        </section>

        {/* Colors & Typography */}
        <section>
          <h2 className="text-2xl font-heading font-semibold mb-8 border-b border-border/50 pb-4">Design System</h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-heading font-medium mb-6">Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Primary Dark", hex: "#0B1220", text: "text-white" },
                { name: "Accent Blue", hex: "#2563EB", text: "text-white" },
                { name: "Electric Cyan", hex: "#06B6D4", text: "text-black" },
                { name: "Soft Silver", hex: "#F8FAFC", text: "text-black" },
              ].map((color, idx) => (
                <div
                  key={idx}
                  onClick={() => copyToClipboard(color.hex)}
                  className="rounded-2xl border border-border overflow-hidden flex flex-col cursor-pointer group hover:border-primary/50 transition-colors"
                >
                  <div className={`h-24 w-full flex items-end justify-between p-4 font-mono text-sm font-bold ${color.text}`} style={{ backgroundColor: color.hex }}>
                    <span>{color.hex}</span>
                    {copiedColor === color.hex ? (
                      <Check size={16} className="text-green-400" />
                    ) : (
                      <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <div className="p-4 bg-card">
                    <p className="text-sm font-medium text-foreground">{color.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-medium mb-6">Typography (Corenova Technology)</h3>
            <div className="p-8 rounded-3xl bg-card border border-border space-y-8">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Primary Heading Font — Space Grotesk</p>
                <p className="font-heading text-4xl md:text-5xl font-bold tracking-tight">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="font-heading text-4xl md:text-5xl font-bold tracking-tight">abcdefghijklmnopqrstuvwxyz</p>
                <p className="font-heading text-4xl md:text-5xl font-bold tracking-tight">0123456789</p>
              </div>
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-2">Secondary Body Font — Inter</p>
                <p className="font-sans text-2xl md:text-3xl font-normal">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p className="font-sans text-2xl md:text-3xl font-normal">abcdefghijklmnopqrstuvwxyz</p>
                <p className="font-sans text-2xl md:text-3xl font-normal">0123456789</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

