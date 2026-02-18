export interface LeadershipMember {
  name: string;
  position: string;
  image: string;
  bio?: string;
  campus: 'Grambling' | 'Lancaster';
}

export const leadershipTeam: LeadershipMember[] = [
  {
    name: "Kelly Monroe",
    position: "President",
    image: "/Kelly_headshot.jpeg",
    bio: "Leading Tiger Faith with passion and dedication to serve our campus community.",
    campus: "Grambling"
  },
  {
    name: "Paris Robinson",
    position: "Vice President",
    image: "/Paris_headshot.jpeg",
    bio: "Supporting our mission and coordinating campus outreach initiatives.",
    campus: "Grambling"
  },
  {
    name: "Jacey Keys",
    position: "Secretary",
    image: "/Jacey_headshot.jpeg",
    bio: "Keeping our community connected and organized through communication.",
    campus: "Lancaster"
  },
  {
    name: "Maya Mukabe",
    position: "Treasurer",
    image: "/Maya_headshot.jpeg",
    bio: "Managing resources to maximize our impact on campus.",
    campus: "Lancaster"
  }
];
