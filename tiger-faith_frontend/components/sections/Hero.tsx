import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Tiger Faith Community"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Grambling Realty Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/90 rounded-full text-sm font-bold text-white uppercase tracking-wide shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Grambling Realty
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-4 max-w-5xl">
          Welcome To
          <br />
          <span className="text-amber-400">Tiger Faith</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
          A home away from home for Grambling State and Lancaster students. 
          Boldly living our faith together.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/about"
            className="px-8 py-4 bg-amber-500 text-white font-black uppercase tracking-wider rounded-full hover:bg-amber-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Join Our Family
          </Link>
          
          <Link
            href="/events"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold uppercase tracking-wider rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all"
          >
            Submit Prayer Request
          </Link>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}