import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-8 px-4 md:px-8 lg:px-12">
      <div className="relative w-full max-w-7xl mx-auto h-[500px] md:h-[600px] overflow-hidden rounded-2xl border-b-8 border-amber-500 shadow-2xl">
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
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 text-center">
          {/* Join Us Badge */}
          <div className="mb-4">
            <Link href="/connect">
              <span className="inline-block px-6 py-2 bg-amber-500 text-sm font-bold text-white uppercase tracking-widest hover:bg-amber-600 transition-all cursor-pointer shadow-lg">
                Join Us
              </span>
            </Link>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-tight">
            Worship with Us
          </h1>

          {/* Supporting Text */}
          <p className="text-base md:text-lg lg:text-xl text-white/95 max-w-3xl leading-relaxed">
            Join Tiger Faith
          </p>
        </div>
      </div>
    </section>
  );
}