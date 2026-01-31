import Link from "next/link";
import { MdGroupAdd, MdLogin, MdFavorite, MdArrowForward } from 'react-icons/md';

interface CTACard {
  Icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const ctaCards: CTACard[] = [
  {
    Icon: MdGroupAdd,
    title: "BECOME A MEMBER",
    description: "Join a community committed to growth, service, and building lasting friendships on campus.",
    buttonText: "LEARN MORE",
    buttonLink: "/about"
  },
  {
    Icon: MdLogin,
    title: "SHARE A TESTIMONY",
    description: "Your story has the power to inspire. Share how your journey is unfolding at Tiger Faith.",
    buttonText: "SUBMIT STORY",
    buttonLink: "/connect"
  },
  {
    Icon: MdFavorite,
    title: "GIVE LIFE TO CHRIST",
    description: "Take the first step in a life-changing relationship. We're here to walk beside you.",
    buttonText: "START HERE",
    buttonLink: "/connect"
  }
];

export default function CTA() {
  return (
    <section className="py-20 px-6 md:px-8 bg-gradient-to-br from-black via-gray-900 to-amber-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            START YOUR JOURNEY
          </h2>
          <p className="text-amber-500 text-lg font-bold uppercase tracking-wider">
            Choose Your Next Bold Step
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctaCards.map((card, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-gray-800 hover:border-amber-500 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center mb-6">
                <card.Icon className="text-black text-3xl font-bold" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-white mb-4 uppercase">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {card.description}
              </p>

              {/* Button */}
              <Link 
                href={card.buttonLink}
                className="inline-flex items-center gap-2 text-amber-500 font-bold text-sm uppercase tracking-wider hover:text-amber-400 transition-colors group"
              >
                {card.buttonText}
                <MdArrowForward className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
