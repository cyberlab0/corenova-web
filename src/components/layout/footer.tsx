import Link from "next/link";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <AnimatedLogo />
            <p className="mt-6 text-muted-foreground max-w-sm">
              Helping businesses transform through Artificial Intelligence, Automation, Cybersecurity, Modern Software Development and Cloud Solutions.
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="#" className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors">
                <FaGithub size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/#services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About the CEO</Link></li>
              <li><Link href="/#contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/legal/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/legal/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link href="/legal/accessibility" className="hover:text-foreground transition-colors">Accessibility Statement</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Corenova Technologies Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
            <Link href="/legal/ndpr" className="hover:text-foreground transition-colors">NDPR Notice</Link>
            <Link href="/sitemap.xml" className="hover:text-foreground transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
