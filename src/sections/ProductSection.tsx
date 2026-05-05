// Last Updated: 2026-05-05 09:05:00
import { motion } from "framer-motion";
import { Users, Zap, Smartphone, Shield, Wind, Star } from "lucide-react";

const SPECS = [
  { icon: Users, label: "6 Kursi Premium", value: "Kelas Eksekutif" },
  { icon: Zap, label: "Full Electric", value: "Zero Emission" },
  { icon: Wind, label: "Klima Ganda", value: "Cabin Comfort" },
  { icon: Smartphone, label: "MyBluebird App", value: "Easy Booking" },
  { icon: Shield, label: "Asuransi Penuh", value: "Trip Protection" },
  { icon: Star, label: "Rating 5", value: "Top Rated" },
];

export default function ProductSection() {
  return (
    <section id="product-services-section" className="pt-24 bg-luxury-dark overflow-hidden">

      {/* Gold top border */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent mb-16" />

      {/* Text & Specs Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-luxury-gold" />
            <span className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase">
              Our Services
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-luxury-platinum leading-tight mb-4">
                Silverbird —{" "}
                <span className="text-luxury-gold">Denza D9</span>
              </h2>
              <p className="text-luxury-platinum-muted text-lg max-w-2xl leading-relaxed">
                Silverbird menghadirkan pengalaman berkendara kelas dunia dengan armada Denza D9 — kendaraan listrik premium yang menggabungkan kemewahan, teknologi canggih, dan kepedulian lingkungan.
              </p>
            </div>
            </div>
          </div>
        </motion.div>

        {/* Gold divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-luxury-gold/40 via-luxury-gold/20 to-transparent mb-12" />

        {/* Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {SPECS.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group border border-luxury-gold/20 hover:border-luxury-gold/60 bg-luxury-gold/5 hover:bg-luxury-gold/10 transition-all duration-300 p-4 flex flex-col items-center text-center gap-3"
            >
              <div className="w-10 h-10 border border-luxury-gold/30 group-hover:border-luxury-gold/60 flex items-center justify-center transition-all duration-300">
                <spec.icon className="w-5 h-5 text-luxury-gold" />
              </div>
              <div>
                <div className="text-luxury-platinum text-xs font-bold leading-tight tracking-wide">{spec.label}</div>
                <div className="text-luxury-platinum-muted text-[11px] mt-1 tracking-wider">{spec.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Width Landscape Car Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full h-[350px] md:h-[550px] lg:h-[650px]"
      >
        {/* Top fade to dark */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-luxury-dark to-transparent z-10" />
        {/* Bottom fade to dark */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-luxury-dark to-transparent z-10" />
        <img
          src="/images/denza-car.png"
          alt="Silverbird Denza D9 Executive"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

    </section>
  );
}
