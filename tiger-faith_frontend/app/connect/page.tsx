import Navbar from "@/components/nav/NavBar";
import Footer from "@/components/sections/Footer";

export default function ConnectPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold mb-4">Connect With Us</h1>
          <p className="text-gray-600 mb-6">
            Get connected with Tiger Faith community and stay updated with our events and activities.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">
              Join us for worship, fellowship, and spiritual growth. Whether you're at Grambling State University 
              or Lancaster, there's a place for you in our community.
            </p>
            <p className="text-gray-700">
              Connect with us through social media, attend our weekly meetings, or reach out to our leadership team.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}