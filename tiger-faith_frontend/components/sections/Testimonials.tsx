import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  image: string;
}

// Placeholder testimonials - will be replaced with actual content
const testimonials: Testimonial[] = [
  // Add testimonials here
];

export default function Testimonials() {
  // Don't render anything if there are no testimonials
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-6 md:px-8 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Single Testimonial Card - Placeholder for carousel */}
        <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl shadow-xl p-12 md:p-16 border-2 border-amber-200">
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="text-amber-400 text-7xl leading-none font-serif">"</div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Author Image */}
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-amber-500 shadow-lg">
                <Image
                  src={testimonials[0].image}
                  alt={testimonials[0].author}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quote and Author */}
            <div className="flex-grow text-center md:text-left">
              <p className="text-2xl md:text-3xl font-bold text-black leading-relaxed mb-6">
                {testimonials[0].quote}
              </p>
              
              <div>
                <p className="text-amber-600 font-black text-lg uppercase tracking-wider mb-1">
                  {testimonials[0].author}
                </p>
                <p className="text-amber-500 font-bold text-sm uppercase tracking-wider">
                  {testimonials[0].title}
                </p>
              </div>
            </div>
          </div>

          {/* Pagination Dots - Placeholder for future carousel */}
          <div className="flex justify-center gap-3 mt-10">
            <button className="w-3 h-3 rounded-full bg-amber-500"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
            <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
          </div>
        </div>

        {/* Note: This is a placeholder. Will be enhanced with carousel functionality later */}
      </div>
    </section>
  );
}
