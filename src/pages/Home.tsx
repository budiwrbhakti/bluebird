import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import ProductSection from "@/sections/ProductSection";
import AppSection from "@/sections/AppSection";
import ExploreSection from "@/sections/ExploreSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AppSection />
      <ProductSection />
      <ExploreSection />
      <Footer />
    </main>
  );
}
