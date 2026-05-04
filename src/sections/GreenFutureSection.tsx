import React from "react";
import { motion } from "framer-motion";

export default function GreenFutureSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* We are using the generated image which contains the landmarks and the car */}
          <img 
            src="/images/green-future-indonesia.png" 
            alt="Green Future Indonesia" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
