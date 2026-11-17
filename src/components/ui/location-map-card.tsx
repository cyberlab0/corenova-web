"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Calendar,
  Building2,
  Compass,
  Layers,
  Map as MapIcon,
  Globe,
} from "lucide-react";

const LOCATION = {
  title: "CoreNovaTechnologiesLTD",
  address1: "Kobo Street, Along Ikirun Road",
  address2: "Osogbo, Osun State, Nigeria",
  fullAddress: "CoreNovaTechnologiesLTD, Kobo Street, Along Ikirun Road, Osogbo, Osun State, Nigeria",
  lat: 7.8304235,
  lng: 4.5981209,
  placeId: "ChIJY0jM174NmowRb0xaqaMQ_LU",
};

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${LOCATION.lat},${LOCATION.lng}&destination_place_id=${LOCATION.placeId}`;
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${LOCATION.lat},${LOCATION.lng}&query_place_id=${LOCATION.placeId}`;
const OSM_EMBED_URL = `https://www.openstreetmap.org/export/embed.html?bbox=4.5910,7.8250,4.6052,7.8358&layer=mapnik&marker=${LOCATION.lat},${LOCATION.lng}`;

interface LocationMapCardProps {
  showBookAppointment?: boolean;
}

export function LocationMapCard({ showBookAppointment = true }: LocationMapCardProps) {
  const [copied, setCopied] = useState(false);
  const [mapType, setMapType] = useState<"roadmap" | "satellite" | "osm">("roadmap");

  const embedUrl =
    mapType === "osm"
      ? OSM_EMBED_URL
      : `https://maps.google.com/maps?q=${LOCATION.lat},${LOCATION.lng}+(${encodeURIComponent(
          LOCATION.title
        )})&t=${mapType === "satellite" ? "k" : ""}&z=${mapType === "satellite" ? 17 : 16}&ie=UTF8&iwloc=B&output=embed`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(LOCATION.fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-background border border-border/60 shadow-2xl overflow-hidden relative"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Top Status Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-card/80 border-b border-border/50">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
            Verified Office Location &bull; Osogbo, Osun State
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-mono font-semibold">
            CAC RC 9697390
          </span>
          <div className="inline-flex rounded-lg bg-background border border-border/60 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setMapType("roadmap")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-colors ${
                mapType === "roadmap"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <MapIcon size={12} />
              <span>Map</span>
            </button>
            <button
              type="button"
              onClick={() => setMapType("satellite")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-colors ${
                mapType === "satellite"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Layers size={12} />
              <span>Satellite</span>
            </button>
            <button
              type="button"
              onClick={() => setMapType("osm")}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium transition-colors ${
                mapType === "osm"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Globe size={12} />
              <span>OpenStreet</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Split Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
        {/* Left Details & Actions Panel */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-border/50 bg-card/30">
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest mb-2">
                <Building2 size={14} />
                <span>Headquarters</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                {LOCATION.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Private Company Limited by Shares &bull; Registered under CAC
              </p>
            </div>

            {/* Address Box */}
            <div className="p-4 rounded-2xl bg-background/80 border border-border/60 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Street Address
                  </p>
                  <p className="text-sm font-medium text-foreground mt-0.5 leading-relaxed">
                    {LOCATION.address1}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {LOCATION.address2}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-border/40 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-muted-foreground font-mono">
                  <Compass size={14} className="text-secondary shrink-0" />
                  <span>
                    {LOCATION.lat.toFixed(6)}&deg; N, {LOCATION.lng.toFixed(6)}&deg; E
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-foreground text-xs font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm transition-all shadow-lg shadow-primary/20"
            >
              <Navigation size={16} />
              <span>Get Directions</span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-card border border-border/60 hover:border-primary/40 text-foreground text-xs font-semibold transition-colors"
              >
                <ExternalLink size={14} className="text-primary" />
                <span>Open in Google Maps</span>
              </a>

              {showBookAppointment && (
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-secondary/10 border border-secondary/30 hover:bg-secondary/20 text-foreground text-xs font-semibold transition-colors"
                >
                  <Calendar size={14} className="text-secondary" />
                  <span>Book Appointment</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right Interactive Free Map Embed */}
        <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[430px] bg-slate-950">
          <iframe
            key={mapType}
            title="CoreNovaTechnologiesLTD Location Map - Kobo Street, Along Ikirun Road, Osogbo, Osun State, Nigeria"
            src={embedUrl}
            className="w-full h-full min-h-[360px] lg:min-h-[430px] border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </motion.div>
  );
}
