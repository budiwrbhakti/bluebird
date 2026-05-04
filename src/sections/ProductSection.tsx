// Last Updated: 2026-05-04 17:05:00
import { motion } from "framer-motion";
import { Users, Zap, Smartphone, Shield, Wind, Star } from "lucide-react";

const SPECS = [
  { icon: Users, label: "6 Kursi Premium", value: "Kelas Eksekutif" },
  { icon: Zap, label: "Full Electric", value: "Zero Emission" },
  { icon: Wind, label: "Klima Ganda", value: "Cabin Comfort" },
  { icon: Smartphone, label: "MyBluebird App", value: "Easy Booking" },
  { icon: Shield, label: "Asuransi Penuh", value: "Trip Protection" },
  { icon: Star, label: "Rating 4.9", value: "Top Rated" },
];

export default function ProductSection() {
  return (
    <section id="product-services-section" className="pt-24 bg-white overflow-hidden">

      {/* Text & Specs Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Our Services
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark-blue mb-3">
                Silverbird — <span className="text-brand-blue">Denza D9</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl">
                Silverbird menghadirkan pengalaman berkendara kelas dunia dengan armada Denza D9 — kendaraan listrik premium yang menggabungkan kemewahan, teknologi canggih, dan kepedulian lingkungan.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="#download"
                className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-dark-blue transition-all hover:scale-105 active:scale-95 text-sm"
              >
                Pesan Sekarang
              </a>
              <button className="border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all text-sm">
                Lihat Detail
              </button>
            </div>
          </div>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-0">
          {SPECS.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-gray-50 hover:bg-brand-blue/5 border border-gray-100 hover:border-brand-blue/20 transition-all rounded-2xl p-4 flex flex-col items-center text-center gap-2"
            >
              <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                <spec.icon className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <div className="text-gray-800 text-xs font-bold leading-tight">{spec.label}</div>
                <div className="text-gray-400 text-[11px] mt-0.5">{spec.value}</div>
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
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10" />
        <img
          src="/images/denza-car.png"
          alt="Silverbird Denza D9 Executive"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

    </section>
  );
}
