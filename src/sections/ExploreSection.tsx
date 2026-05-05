import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const goldenbirdCities = [
  "Bandung", "Bali", "Yogyakarta", "Surabaya", "Lombok",
  "Semarang", "Jakarta", "Makassar", "Medan", "Tangerang",
  "Depok", "Bekasi", "Manado", "Balikpapan", "Solo",
];

const bigbirdCities = [
  "Jakarta", "Bandung", "Surabaya", "Bali", "Medan",
  "Makassar", "Semarang", "Yogyakarta", "Palembang", "Padang",
];

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState<"goldenbird" | "bigbird">("goldenbird");

  const cities = activeTab === "goldenbird" ? goldenbirdCities : bigbirdCities;

  return (
    <section className="py-20 md:py-28 bg-luxury-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-platinum mb-4">
              Jelajahi Indonesia Bersama Kami
            </h2>
            <p className="text-luxury-platinum-muted text-lg">
              Kami hadir di berbagai kota besar di seluruh Indonesia untuk memastikan 
              kebutuhan transportasi Anda terpenuhi dengan standar layanan terbaik.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 bg-luxury-navy/80 border border-luxury-gold/20 p-1.5">
            <button
              onClick={() => setActiveTab("goldenbird")}
              className={`px-6 py-3 text-sm md:text-base font-bold transition-all tracking-wider uppercase text-xs ${
                activeTab === "goldenbird"
                  ? "bg-luxury-gold text-luxury-dark"
                  : "text-luxury-platinum-muted hover:text-luxury-gold"
              }`}
            >
              Goldenbird
            </button>
            <button
              onClick={() => setActiveTab("bigbird")}
              className={`px-6 py-3 text-sm md:text-base font-bold transition-all tracking-wider uppercase text-xs ${
                activeTab === "bigbird"
                  ? "bg-luxury-gold text-luxury-dark"
                  : "text-luxury-platinum-muted hover:text-luxury-gold"
              }`}
            >
              Bigbird
            </button>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="border border-luxury-gold/20 bg-luxury-navy/40 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-[2px] h-5 bg-luxury-gold" />
            <h3 className="text-base font-bold text-luxury-platinum uppercase tracking-[0.2em]">
              {activeTab === "goldenbird" ? "Pilihan Kota Goldenbird" : "Pilihan Kota Bigbird"}
              <span className="ml-3 text-luxury-platinum-muted/60 font-normal normal-case tracking-normal text-sm">({cities.length} Kota)</span>
            </h3>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4"
          >
            {cities.map((city, index) => (
              <motion.a
                key={city}
                href="#"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 border border-luxury-gold/30 group-hover:border-luxury-gold flex items-center justify-center group-hover:bg-luxury-gold transition-all duration-300">
                  <MapPin className="w-4 h-4 text-luxury-gold group-hover:text-luxury-dark transition-colors" />
                </div>
                <span className="text-sm font-semibold text-luxury-platinum-muted group-hover:text-luxury-gold transition-colors">
                  {city}
                </span>
              </motion.a>
            ))}
          </motion.div>
          
          <div className="mt-12 pt-8 border-t border-luxury-gold/20 flex justify-center">
            <button className="flex items-center gap-2 text-luxury-gold font-bold hover:gap-3 transition-all text-sm tracking-widest uppercase">
              Lihat Seluruh Layanan <MapPin className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
