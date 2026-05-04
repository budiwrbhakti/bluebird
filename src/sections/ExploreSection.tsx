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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark-blue mb-8">
            Explore your interests
          </h2>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab("goldenbird")}
              className={`pb-3 text-sm md:text-base font-semibold transition-colors relative ${
                activeTab === "goldenbird"
                  ? "text-brand-blue"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Goldenbird
              {activeTab === "goldenbird" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("bigbird")}
              className={`pb-3 text-sm md:text-base font-semibold transition-colors relative ${
                activeTab === "bigbird"
                  ? "text-brand-blue"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Bigbird
              {activeTab === "bigbird" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                />
              )}
            </button>
          </div>

          {/* Cities Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {cities.map((city) => (
              <a
                key={city}
                href="#"
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-gray-600 hover:text-brand-blue hover:bg-brand-blue/5 transition-all group"
              >
                <MapPin className="w-4 h-4 text-gray-400 group-hover:text-brand-blue transition-colors" />
                <span className="text-sm font-medium">{city}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
