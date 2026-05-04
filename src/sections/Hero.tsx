import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Car } from "lucide-react";

const slides = [
  {
    image: "/images/hero-luxury.png",
    subtitle: "Premium Mobility",
    title: "Nikmati Perjalanan",
    highlight: "Eksklusif",
    description: "Layanan Silverbird memberikan kenyamanan dan privasi tingkat tinggi untuk setiap keperluan bisnis maupun pribadi Anda.",
  },
  {
    image: "/images/hero-family.png",
    subtitle: "Family & Leisure",
    title: "Liburan Aman Bersama",
    highlight: "Keluarga",
    description: "Jadikan setiap momen liburan lebih bermakna dengan layanan transportasi yang aman, nyaman, dan terpercaya.",
  },
  {
    image: "/images/hero-bg.jpg",
    subtitle: "Daily Reliable",
    title: "Andalan Setiap",
    highlight: "Perjalanan",
    description: "Dari kantor hingga ke rumah, Bluebird selalu setia menemani langkah Anda dengan standar layanan terbaik.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        key={currentSlide}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0"
      >
        <img
          src={slides[currentSlide].image}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          key={`text-${currentSlide}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-brand-cyan" />
            <p className="text-white/90 text-lg md:text-xl font-semibold tracking-wide uppercase">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            {slides[currentSlide].title}{" "}
            <span className="text-brand-cyan">{slides[currentSlide].highlight}</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            {slides[currentSlide].description}
          </p>
          <div className="flex gap-4">
            <button className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-dark-blue transition-all hover:shadow-lg hover:scale-105 active:scale-95">
              Pesan Sekarang
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
              Lihat Detail
            </button>
          </div>
        </motion.div>
      </div>

      {/* Side Indicators */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-16 md:left-20 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Floating Bottom Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 left-4 right-4 md:left-8 md:right-8 z-20"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Single Product */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-light rounded-xl flex items-center justify-center shrink-0">
                <img
                  src="/images/taxi-car.png"
                  alt="Taxi Service"
                  className="w-14 h-14 md:w-16 md:h-16 object-contain"
                />
              </div>
              <div>
                <h3 className="text-brand-blue font-bold text-lg md:text-xl">Taxi Service</h3>
                <p className="text-gray-500 text-sm">Your trusted ride, anytime anywhere</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#product"
              className="w-full md:w-auto bg-brand-blue text-white px-8 py-3 rounded-xl font-medium hover:bg-brand-dark-blue transition-colors flex items-center justify-center gap-2 shrink-0"
            >
              <Car className="w-5 h-5" />
              Explore Now
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
