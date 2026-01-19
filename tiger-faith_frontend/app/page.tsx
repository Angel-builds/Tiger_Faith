import Navbar from "@/components/nav/NavBar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold">Tiger Faith</h1>
        <p className="mt-2 text-neutral-600">
          Navbar is wired. Next: Hero section.
        </p>
      </div>
    </main>
  );
}
