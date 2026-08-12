import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Statement & Responsible Disclosure",
  description: "Corenova Technology Ltd security commitments, NDA guarantees, zero-trust infrastructure standards, and vulnerability disclosure policy.",
};

export default function SecurityStatementPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Security Statement & Responsible Disclosure
        </h1>
        <p className="text-sm font-mono text-muted-foreground mb-10 pb-6 border-b border-border/50">
          Effective Date: July 23, 2026 | Document Ref: SEC-POLICY-2026-v1.0
        </p>

        <div className="prose-custom space-y-8 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">1. Our Commitment to Security</h2>
            <p>
              At CORENOVA TECHNOLOGY LTD, security is not an afterthought—it is embedded into every line of code we write, every AI model we train, and every cloud server we configure. We employ strict zero-trust access controls, end-to-end encryption, and continuous monitoring to safeguard client data and proprietary infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">2. Mutual Non-Disclosure & IP Protection</h2>
            <p>
              We execute legally binding mutual Non-Disclosure Agreements (NDAs) prior to starting any technical engagement. All custom client codebases, database schemas, and AI models remain the 100% exclusive intellectual property of the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">3. Infrastructure Standards</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li><strong className="text-foreground">Encryption in Transit & Rest:</strong> All web communications utilize TLS 1.3 encryption, and data stores are encrypted at rest using AES-256.</li>
              <li><strong className="text-foreground">Edge DDoS Protection:</strong> Global Web Application Firewall (WAF) rules powered by Cloudflare mitigate automated bot traffic and DDoS attacks.</li>
              <li><strong className="text-foreground">Sentry Error Monitoring:</strong> Real-time automated error tracking isolates and alerts our SOC team to runtime anomalies instantly.</li>
              <li><strong className="text-foreground">NDPR & GDPR Compliance:</strong> Strict data privacy controls adhering to the Nigeria Data Protection Regulation (NDPR).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-bold text-foreground mb-3">4. Responsible Vulnerability Disclosure</h2>
            <p>
              We welcome reports from cybersecurity researchers and ethical security professionals. If you believe you have discovered a vulnerability in any Corenova system or client application:
            </p>
            <div className="p-6 rounded-2xl bg-card border border-border/50 my-4 text-foreground font-mono">
              <p className="mb-2">Email: <a href="mailto:contact@corenovatechnology.com" className="text-primary hover:underline">contact@corenovatechnology.com</a></p>
              <p>Subject: Security Vulnerability Report - [Target System]</p>
            </div>
            <p>
              We commit to acknowledging all reports within 24 hours and providing regular updates on remediation progress. We request that researchers refrain from public disclosure until the issue has been resolved.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
