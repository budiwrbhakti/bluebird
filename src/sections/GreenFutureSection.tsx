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

      {/* Full Width Landscape Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full h-[350px] md:h-[550px] lg:h-[650px] mt-auto"
      >
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-luxury-dark to-transparent z-10" />
        <img
          src="/images/green-future-indonesia.png"
          alt="Green Future Indonesia"
          className="w-full h-full object-cover object-[center_55%]"
        />
      </motion.div>
    </section>
  );
}
