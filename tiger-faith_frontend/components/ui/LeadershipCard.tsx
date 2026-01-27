import Image from "next/image";

interface LeadershipCardProps {
  name: string;
  position: string;
  image: string;
  bio?: string;
}

export default function LeadershipCard({ name, position, image, bio }: LeadershipCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-500 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={`${name} - ${position}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      {/* Content - flex-grow pushes border to bottom */}
      <div className="p-6 flex-grow">
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-black mb-1">{name}</h3>
          <p className="text-amber-500 font-bold text-sm uppercase tracking-wider">{position}</p>
        </div>
        
        {bio && (
          <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
        )}
      </div>
      
      {/* Decorative bottom border - stays at bottom */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 mt-auto"></div>
    </div>
  );
}
