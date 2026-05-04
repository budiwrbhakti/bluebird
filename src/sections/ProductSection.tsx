// Last Updated: 2026-05-04 17:00:00
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
    <section id="product-services-section" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            Armada Terbaik Kami
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Nikmati pengalaman berkendara eksklusif bersama Silverbird dengan armada premium terdepan.
          </p>
        </motion.div>

        {/* Main Card */}
        <div className="relative bg-[#1e1e2e] rounded-3xl overflow-hidden shadow-2xl">

          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2a1f4e]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row">

            {/* Left Panel - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-[45%] p-8 md:p-12 flex flex-col justify-between"
            >
              {/* Brand Tag */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                      <path d="M21 6.5C21 8.43 19.43 10 17.5 10S14 8.43 14 6.5 15.57 3 17.5 3 21 4.57 21 6.5zM6.5 10C8.43 10 10 8.43 10 6.5S8.43 3 6.5 3 3 4.57 3 6.5 4.57 10 6.5 10zm0 1C4.01 11 -1 12.01 -1 14.5V15c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-.5c0-2.49-5.01-3.5-7.5-3.5zm11 0c-2.49 0-7.5 1.01-7.5 3.5V15c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-.5c0-2.49-5.01-3.5-7.5-3.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest">Premium Service</div>
                    <div className="text-white font-bold text-lg leading-tight">Silverbird</div>
                  </div>
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Denza D9<br/>
                  <span className="text-brand-cyan">Executive</span>
                </h3>

                <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                  Silverbird menghadirkan pengalaman berkendara kelas dunia dengan armada Denza D9 — kendaraan listrik premium yang menggabungkan kemewahan, teknologi canggih, dan kepedulian lingkungan.
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {SPECS.map((spec, i) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                      className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-3 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-brand-cyan/20 rounded-lg flex items-center justify-center shrink-0">
                        <spec.icon className="w-4 h-4 text-brand-cyan" />
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold leading-tight">{spec.label}</div>
                        <div className="text-white/50 text-[11px]">{spec.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#download"
                  className="bg-brand-cyan text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-cyan/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-cyan/30 text-sm"
                >
                  Pesan Sekarang
                </a>
                <button className="border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all text-sm">
                  Lihat Detail
                </button>
              </div>
            </motion.div>

            {/* Right Panel - Car Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-[55%] relative flex items-end justify-center min-h-[300px] lg:min-h-[500px] p-8"
            >
              {/* Glow effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-cyan/20 rounded-full blur-3xl" />
              <motion.img
                src="/images/denza-car.png"
                alt="Denza D9 Executive"
                className="relative w-full max-w-2xl object-contain drop-shadow-2xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
