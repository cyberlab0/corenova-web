"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  Landmark, 
  GraduationCap, 
  ShoppingBag, 
  Truck, 
  Flame, 
  Hotel, 
  Building2 
} from "lucide-react";

const industries = [
  { icon: <Activity size={24} className="text-rose-400" />, title: "Healthcare & Telehealth", desc: "HIPAA/NDPR compliant patient portals & EHR systems." },
  { icon: <Landmark size={24} className="text-emerald-400" />, title: "Banking & FinTech", desc: "Zero-trust security audits, payment gateways & fraud detection." },
  { icon: <GraduationCap size={24} className="text-blue-400" />, title: "Education & Schools", desc: "University ERPs, online tuition portals & student analytics." },
  { icon: <ShoppingBag size={24} className="text-amber-400" />, title: "Retail & E-Commerce", desc: "Multi-branch POS engines & high-scale online storefronts." },
  { icon: <Truck size={24} className="text-cyan-400" />, title: "Logistics & Supply Chain", desc: "AI document extraction & automated shipment tracking." },
  { icon: <Flame size={24} className="text-orange-400" />, title: "Oil, Gas & Energy", desc: "Asset monitoring, IoT data pipelines & infrastructure protection." },
  { icon: <Hotel size={24} className="text-purple-400" />, title: "Hospitality & Travel", desc: "Booking engines, guest management & automated billing." },
  { icon: <Building2 size={24} className="text-secondary" />, title: "Government & Enterprise", desc: "Custom workflow automation & enterprise software systems." },
];

export function IndustriesSection() {
  return (
    <section className="py-32 relative bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
            Vertical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
            Industries We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Engineered For
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Domain-specific software engineering and security compliance tailored to your sector's regulatory standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-background border border-border/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {ind.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {ind.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
