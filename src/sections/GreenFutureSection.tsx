import { motion } from "framer-motion";

export default function GreenFutureSection() {
  return (
    <section className="pt-20 bg-luxury-dark overflow-hidden flex flex-col">

      {/* Gold border top */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent mb-14" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-luxury-gold" />
            <span className="text-luxury-gold font-bold text-xs tracking-[0.3em] uppercase">
              For Green Future
            </span>
            <div className="h-[1px] w-8 bg-luxury-gold" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-luxury-platinum leading-tight">
            Leading the way in spreading a green, zero-emission
            <br className="hidden md:block" /> lifestyle and protecting the environment
          </h2>
        </motion.div>
      </div>

      {/* Full Width Landscape Illustration with Panning Animation */}
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] mt-auto overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-luxury-dark to-transparent z-10" />
        
        <motion.img
          src="/images/green-future-indonesia.png"
          alt="Green Future Indonesia"
          className="absolute top-0 left-0 w-[115%] h-full max-w-none object-cover object-[center_80%]"
          animate={{ x: ["-7%", "0%", "-7%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
