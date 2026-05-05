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
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-white py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-brand-blue font-bold text-lg leading-tight">Bluebird</span>
                <span className="text-brand-blue text-xs leading-tight">Group</span>
              </div>
            </div>

            {/* Right Side - Hotline */}
            <div className="hidden lg:flex items-center">
              <a
                href="tel:021-794-1234"
                className="flex items-center gap-2 bg-brand-cyan text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-brand-cyan/90 transition-all hover:scale-105 active:scale-95 shadow-md shadow-brand-cyan/30"
              >
                <Phone className="w-4 h-4" />
                Hotline: 021-794-1234
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
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
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4">
                <a
                  href="tel:021-794-1234"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 bg-brand-cyan text-white px-5 py-3 rounded-xl font-bold text-sm w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Hotline: 021-794-1234
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll Banner - Experience the App Now */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-gray-50 border-b border-gray-200 py-2.5"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-6 flex-wrap">
              <span className="font-bold text-brand-dark-blue text-sm tracking-wide">
                Experience the App Now
              </span>
              <div className="flex items-center gap-2">
                {/* QR code placeholder */}
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-600" fill="currentColor">
                    <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zm-6 4h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zm0 4h2v2h-2zm-2 2h2v2h-2zm-2-2h2v2h-2zM3 21h8v-8H3v8zm2-6h4v4H5v-4z"/>
                  </svg>
                </div>
                {/* Google Play */}
                <a
                  href="#"
                  className="flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-lg hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div>
                    <div className="text-[9px] leading-none opacity-80">GET IT ON</div>
                    <div className="text-xs font-semibold leading-tight">Google Play</div>
                  </div>
                </a>
                {/* App Store */}
                <a
                  href="#"
                  className="flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-lg hover:opacity-80 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div>
                    <div className="text-[9px] leading-none opacity-80">Download on the</div>
                    <div className="text-xs font-semibold leading-tight">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
