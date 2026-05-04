// Last Updated: 2026-05-04 15:59:00
import React from "react";
import { motion } from "framer-motion";

export default function ProductSection() {
  return (
    <section id="product-services-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Experience the most reliable transportation service in Indonesia, serving millions of passengers with pride.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="flex flex-col gap-16">
          {SERVICES_DATA.map((service, si) => (
            <motion.div
              key={service.brand}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: si * 0.1 }}
            >
              {/* Brand Banner */}
              <div className={`${service.bgColor} rounded-2xl p-6 md:p-8`}>
                {/* Brand Logo + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                      <path d="M21 6.5C21 8.43 19.43 10 17.5 10S14 8.43 14 6.5 15.57 3 17.5 3 21 4.57 21 6.5zM6.5 10C8.43 10 10 8.43 10 6.5S8.43 3 6.5 3 3 4.57 3 6.5 4.57 10 6.5 10zm0 1C4.01 11 -1 12.01 -1 14.5V15c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-.5c0-2.49-5.01-3.5-7.5-3.5zm11 0c-2.49 0-7.5 1.01-7.5 3.5V15c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-.5c0-2.49-5.01-3.5-7.5-3.5z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-xl">{service.brand}</span>
                </div>

                {/* Category + Description */}
                <h3 className="text-white font-bold text-lg mb-2">{service.category}</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>

              {/* Vehicles Center */}
              <div className="flex justify-center mt-8">
                <div className="max-w-md w-full">
                {service.vehicles.map((vehicle, vi) => (
                  <motion.div
                    key={vehicle.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + vi * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Car Image */}
                    <div className="w-full flex items-end justify-center h-44 mb-4">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="h-full object-contain drop-shadow-md"
                      />
                    </div>

                    {/* Car Name */}
                    <h4 className="text-gray-800 font-semibold text-lg mb-4">
                      {vehicle.name}
                    </h4>

                    {/* Feature List */}
                    <div className="flex flex-col items-start gap-2 self-start w-full pl-4 md:pl-12">
                      {vehicle.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                            {FEATURE_ICONS[feat] || (
                              <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-blue" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                              </svg>
                            )}
                          </div>
                          <span className="text-gray-600 text-sm">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
                </div>
              </div>

              {/* Divider */}
              {si < SERVICES_DATA.length - 1 && (
                <div className="border-b border-gray-200 mt-16" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURE_ICONS: Record<string, React.ReactNode> = {
  "6 Seats": (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-blue" fill="currentColor">
      <path d="M4 16v2h16v-2c0-2.67-5.33-4-8-4s-8 1.33-8 4zm8-6c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
    </svg>
  ),
  "4 Seats": (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-blue" fill="currentColor">
      <path d="M4 16v2h16v-2c0-2.67-5.33-4-8-4s-8 1.33-8 4zm8-6c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
    </svg>
  ),
  "Charging Port": (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-blue" fill="currentColor">
      <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z" />
    </svg>
  ),
  "Air Conditioned": (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-blue" fill="currentColor">
      <path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z" />
    </svg>
  ),
  "Available On App": (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-blue" fill="currentColor">
      <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
    </svg>
  ),
};

const SERVICES_DATA = [
  {
    brand: "Silverbird",
    brandLogo: null,
    category: "Executive Taxi",
    description:
      "Silverbird is a line of premium vehicles that ranges from a minivan to electric vehicles. This line of premium taxis are known for their distinctive black color, and comfort. Silverbird gives a new meaning to executive taxis.",
    bgColor: "bg-[#6b7280]",
    vehicles: [
      {
        name: "Executive Taxi - Alphard",
        image: "/images/taxi-car.png",
        features: ["6 Seats", "Charging Port", "Available On App"],
      },
    ],
  },
];
