import { motion } from "framer-motion";
import { Car, Phone, Shield, Clock, Star, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "All drivers are professionally trained and verified for your safety.",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Our taxi service operates round the clock, whenever you need it.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Well-maintained vehicles ensuring a comfortable ride every time.",
  },
  {
    icon: Phone,
    title: "Easy Booking",
    description: "Book through our app or call center with just a few taps.",
  },
];

export default function ProductSection() {
  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Our Service
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Experience the most reliable taxi service in Indonesia, serving millions of passengers with pride.
          </p>
        </motion.div>

        {/* Single Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-brand-blue to-brand-dark-blue rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="lg:w-1/2 p-8 md:p-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                  Featured Service
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">Taxi Service</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Bluebird Taxi is Indonesia's most trusted transportation service. 
                With a fleet of well-maintained vehicles and professional drivers, 
                we ensure every journey is safe, comfortable, and reliable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{feature.title}</h4>
                      <p className="text-white/60 text-xs mt-1">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-xl font-semibold hover:bg-brand-cyan hover:text-white transition-colors"
              >
                Book a Ride
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px]">
              <img
                src="/images/taxi-car.png"
                alt="Bluebird Taxi"
                className="absolute inset-0 w-full h-full object-contain p-4 md:p-8"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
