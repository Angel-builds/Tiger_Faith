import Link from "next/link";
import Image from "next/image";
import { MdCalendarMonth, MdArrowForward, MdSchedule, MdBookmark } from 'react-icons/md';

interface GatheringEvent {
  id: string;
  date: string;
  month: string;
  category: string;
  title: string;
  description: string;
  time: string;
  image: string;
}

// Placeholder data - will be connected to backend later
const placeholderEvents: GatheringEvent[] = [
  {
    id: "1",
    date: "24",
    month: "OCT",
    category: "WEEKLY GATHERING",
    title: "TUESDAY NIGHT FELLOWSHIP",
    description: "Connect with fellow students for worship, word, and real conversation.",
    time: "7:00 PM",
    image: "/Hero_photo.jpeg"
  },
  {
    id: "2",
    date: "02",
    month: "NOV",
    category: "OUTREACH",
    title: "CAMPUS CLEAN-UP DAY",
    description: "Serving our home campus through local stewardship and unity.",
    time: "9:00 AM",
    image: "/Impact_photo.jpeg"
  },
  {
    id: "3",
    date: "05",
    month: "NOV",
    category: "SMALL GROUPS",
    title: "STUDY & SABBATH",
    description: "Taking a break from finals to focus on spiritual renewal and rest.",
    time: "4:00 PM",
    image: "/Coronation_photo.jpeg"
  }
];

export default function Gatherings() {
  return (
    <section className="py-20 px-6 md:px-8 bg-gradient-to-b from-white to-amber-50/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <MdCalendarMonth className="text-amber-500 text-3xl" />
              <h2 className="text-4xl md:text-5xl font-black text-black">GATHERINGS</h2>
            </div>
            <Link 
              href="/events"
              className="bg-amber-500 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-amber-600 transition-all flex items-center gap-2"
            >
              Full Calendar
              <MdArrowForward className="text-lg" />
            </Link>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-500 font-bold text-sm uppercase tracking-wider">
              OUR MISSION
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-black mb-6">
            BUILDING COMMUNITY,<br />GROWING PURPOSE
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Tiger Faith is an energetic, faith-based campus ministry serving the students of Grambling 
            State and Lancaster. We aren&apos;t just an organization; we are a family dedicated to walking
            through the ups and downs of college life together, anchored in love and purpose.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-500"
            >
              {/* Image with Date Badge */}
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-black text-white rounded-lg p-3 text-center">
                  <div className="text-xs font-bold text-amber-500">{event.month}</div>
                  <div className="text-3xl font-black leading-none">{event.date}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">
                  {event.category}
                </div>
                <h4 className="text-xl font-black text-black mb-3">{event.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MdSchedule className="text-amber-500" />
                    <span className="font-bold text-sm">{event.time}</span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center hover:bg-amber-600 transition-colors">
                    <MdBookmark className="text-white text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
