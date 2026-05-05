import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-luxury-dark/95 backdrop-blur-xl border-b border-luxury-gold/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 border border-luxury-gold/50 rounded-full flex items-center justify-center bg-luxury-gold/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-luxury-gold" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-luxury-gold font-bold text-lg leading-tight tracking-wider">BLUEBIRD</span>
                <span className="text-luxury-platinum-muted text-[10px] leading-tight tracking-[0.3em] uppercase">Group</span>
              </div>
            </div>

            {/* Right - Hotline */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:021-794-1234"
                className="flex items-center gap-2 border border-luxury-gold/60 text-luxury-gold px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300 hover:scale-105 active:scale-95 tracking-wide"
              >
                <Phone className="w-4 h-4" />
                Hotline: 021-794-1234
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-luxury-gold/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-luxury-gold" />
              ) : (
                <Menu className="w-6 h-6 text-luxury-gold" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-luxury-dark border-t border-luxury-gold/20 overflow-hidden"
            >
              <div className="px-4 py-4">
                <a
                  href="tel:021-794-1234"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 border border-luxury-gold/60 text-luxury-gold px-5 py-3 rounded-xl font-semibold text-sm w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Hotline: 021-794-1234
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll Banner */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-luxury-navy/95 backdrop-blur-md border-b border-luxury-gold/20 py-2.5"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-6 flex-wrap">
              <span className="font-semibold text-luxury-gold text-sm tracking-[0.15em] uppercase">
                Experience the App Now
              </span>
              <div className="flex items-center gap-2">
                <a href="#" className="flex items-center gap-1.5 border border-luxury-gold/40 bg-luxury-gold/10 text-luxury-gold px-3 py-1.5 rounded-lg hover:bg-luxury-gold hover:text-luxury-dark transition-all text-xs font-semibold">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Google Play
                </a>
                <a href="#" className="flex items-center gap-1.5 border border-luxury-gold/40 bg-luxury-gold/10 text-luxury-gold px-3 py-1.5 rounded-lg hover:bg-luxury-gold hover:text-luxury-dark transition-all text-xs font-semibold">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  App Store
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
