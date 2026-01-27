import Navbar from "@/components/nav/NavBar";
import Hero from "@/components/sections/Hero";
import Gatherings from "@/components/sections/Gatherings";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Gatherings />
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
