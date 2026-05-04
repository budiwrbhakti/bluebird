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
    <section className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-blue mb-4">
              Jelajahi Indonesia Bersama Kami
            </h2>
            <p className="text-gray-500 text-lg">
              Kami hadir di berbagai kota besar di seluruh Indonesia untuk memastikan 
              kebutuhan transportasi Anda terpenuhi dengan standar layanan terbaik.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
            <button
              onClick={() => setActiveTab("goldenbird")}
              className={`px-6 py-3 text-sm md:text-base font-bold rounded-xl transition-all ${
                activeTab === "goldenbird"
                  ? "bg-brand-blue text-white shadow-md"
                  : "text-gray-500 hover:text-brand-blue hover:bg-brand-blue/5"
              }`}
            >
              Goldenbird
            </button>
            <button
              onClick={() => setActiveTab("bigbird")}
              className={`px-6 py-3 text-sm md:text-base font-bold rounded-xl transition-all ${
                activeTab === "bigbird"
                  ? "bg-brand-blue text-white shadow-md"
                  : "text-gray-500 hover:text-brand-blue hover:bg-brand-blue/5"
              }`}
            >
              Bigbird
            </button>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-6 bg-brand-cyan rounded-full" />
            <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wider">
              {activeTab === "goldenbird" ? "Pilihan Kota Goldenbird" : "Pilihan Kota Bigbird"}
              <span className="ml-3 text-gray-400 font-normal normal-case">({cities.length} Kota)</span>
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
                <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center group-hover:bg-brand-blue group-hover:shadow-lg transition-all duration-300">
                  <MapPin className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-blue transition-colors">
                  {city}
                </span>
              </motion.a>
            ))}
          </motion.div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
            <button className="flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all">
              Lihat Seluruh Layanan <MapPin className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
