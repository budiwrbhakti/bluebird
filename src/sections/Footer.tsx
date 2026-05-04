import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const aboutUsLinks = [
  "Company Profile",
  "History",
  "Purpose & Values",
  "Message from The Founder",
  "Vision & Mission",
  "Awards",
  "Investor Relations",
];

const productLinks = [
  "Taxi Service",
  "Car Rental",
  "Shuttle Service",
  "Charter Bus",
  "Logistic",
  "Advertising Solution",
  "Bluebird Kirim",
  "Corporate Solution",
];

const quickLinks = [
  "Career",
  "News",
  "Blog",
  "Terms & Conditions",
  "Privacy Policy",
  "Company Policy",
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark-blue text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Row - Logos & App Badges */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-blue" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-xl block">Bluebird</span>
              <span className="text-white/70 text-sm">Group</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">MyBluebird</span>
            </div>
            <a href="#" className="block">
              <div className="h-9 bg-black rounded-lg px-3 flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-white">
                  <div className="text-[8px] leading-none">GET IT ON</div>
                  <div className="text-xs font-semibold leading-tight">Google Play</div>
                </div>
              </div>
            </a>
            <a href="#" className="block">
              <div className="h-9 bg-black rounded-lg px-3 flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-white">
                  <div className="text-[8px] leading-none">App Store</div>
                  <div className="text-xs font-semibold leading-tight">Download</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {/* Address & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Bluebird Main Office</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Jl. Mampang Prapatan Raya<br />
              No. 60,<br />
              Jakarta 12790
            </p>

            <h4 className="text-white font-semibold text-sm mb-3">Connect with us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-6 space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-white/70 text-sm hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
            <div className="space-y-2">
              {aboutUsLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-white/70 text-sm hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <div className="grid grid-cols-2 gap-2">
              {productLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-white/70 text-sm hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-white/60 text-sm text-center">
            &copy; {new Date().getFullYear()} Bluebird Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
