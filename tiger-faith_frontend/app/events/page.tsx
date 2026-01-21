import Navbar from "@/components/nav/NavBar";
import Footer from "@/components/sections/Footer";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-gray-600">Upcoming Tiger Faith events and activities.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}