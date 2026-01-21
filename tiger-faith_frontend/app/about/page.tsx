import Navbar from "@/components/nav/NavBar";
import Footer from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600">Learn more about Tiger Faith and our mission.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}