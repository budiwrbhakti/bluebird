import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/bali-temple.png",
    subtitle: "Premium Car Rental",
    title: "Sewa Mobil",
    highlight: "Eksklusif Bali",
    description: "Jelajahi keindahan budaya dan alam Bali dengan kenyamanan maksimal bersama armada mewah Vigor Ride.",
  },
  {
    image: "/images/bali-beach.png",
    subtitle: "Vacation Mobility",
    title: "Liburan Pantai",
    highlight: "Lebih Nyaman",
    description: "Perjalanan menuju destinasi wisata favorit di Bali menjadi lebih elegan dan berkesan dengan layanan rental profesional kami.",
  },
  {
    image: "/images/bali-resort.png",
    subtitle: "VIP Transfer",
    title: "Layanan Antar Jemput",
    highlight: "Premium",
    description: "Nikmati kemewahan perjalanan dari bandara ke resort impian Anda. Vigor Ride adalah pilihan utama rental mobil VVIP.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-luxury-dark">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle bottom overlay for text readability without darkening the whole image */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-luxury-dark/90 to-transparent" />

      {/* Gold shimmer top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[1px] w-10 bg-luxury-gold" />
              <p className="text-luxury-gold text-sm md:text-base font-semibold tracking-[0.3em] uppercase">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-luxury-platinum leading-tight mb-5">
              {slides[currentSlide].title}{" "}
              <span className="text-luxury-gold">{slides[currentSlide].highlight}</span>
            </h1>

            {/* Gold divider */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-luxury-gold to-transparent mb-5" />

            {/* Description */}
            <p className="text-luxury-platinum-muted text-base md:text-lg max-w-xl leading-relaxed mb-10">
              {slides[currentSlide].description}
            </p>


          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 right-6 md:right-12 z-20 flex flex-col gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 ${
              index === currentSlide
                ? "w-[2px] h-8 bg-luxury-gold"
                : "w-[1px] h-4 bg-luxury-platinum-muted/40 hover:bg-luxury-gold/50"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 bottom-10 z-20 w-12 h-12 border border-luxury-gold/40 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute left-20 md:left-24 bottom-10 z-20 w-12 h-12 border border-luxury-gold/40 flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide counter */}
      <div className="absolute bottom-14 right-6 md:right-16 z-20 text-luxury-platinum-muted/60 text-xs tracking-widest">
        0{currentSlide + 1} / 0{slides.length}
      </div>
    </section>
  );
}
