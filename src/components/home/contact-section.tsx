"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Let's Build The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Future Together</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-12 max-w-md"
            >
              Whether you need to automate your operations, secure your infrastructure, or build a custom web application, our experts are ready to help.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <Mail />, title: "Email Us", detail: "contact@corenovatechnology.com" },
                { icon: <Phone />, title: "Call Us", detail: "+234 913 181 5101" },
                { icon: <MessageCircle />, title: "WhatsApp", detail: "+234 913 181 5101" },
                { icon: <MapPin />, title: "Visit Us", detail: "Corenova HQ, Lagos, Nigeria" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                    <p className="font-medium text-foreground">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-background border border-border/50 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient glow inside form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] pointer-events-none rounded-full" />
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <input type="text" id="name" className="bg-card border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input type="email" id="email" className="bg-card border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input type="text" id="subject" className="bg-card border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="How can we help?" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" rows={5} className="bg-card border border-border/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <MagneticButton className="w-full mt-4">
                Send Message
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
