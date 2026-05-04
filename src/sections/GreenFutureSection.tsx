
import { motion } from "framer-motion";

export default function GreenFutureSection() {
  return (
    <section className="pt-20 bg-white overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <span className="text-amber-500 font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            For Green Future
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#1e293b] leading-tight">
            Leading the way in spreading a green, zero-emission<br className="hidden md:block"/> lifestyle and protecting the environment
          </h2>
        </motion.div>
      </div>

      {/* Full Width Landscape Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] mt-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-32 z-10" />
        <img 
          src="/images/green-future-indonesia.png" 
          alt="Green Future Indonesia" 
          className="w-full h-full object-cover object-bottom"
        />
      </motion.div>
    </section>
  );
}
