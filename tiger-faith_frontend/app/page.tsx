import Navbar from "@/components/nav/NavBar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <div className="flex-grow" />
      <Footer />
    </main>
  );
}
