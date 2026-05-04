import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import ProductSection from "@/sections/ProductSection";
import AppSection from "@/sections/AppSection";
import GreenFutureSection from "@/sections/GreenFutureSection";
import ExploreSection from "@/sections/ExploreSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <hr className="border-gray-100" />
      <AppSection />
      <hr className="border-gray-100" />
      <ProductSection />
      <hr className="border-gray-100" />
      <GreenFutureSection />
      <hr className="border-gray-100" />
      <ExploreSection />
      <Footer />
    </main>
  );
}
