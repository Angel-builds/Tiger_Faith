export interface Publication {
  id: string;
  title: string;
  author: string;
  type: 'Book' | 'Article' | 'Devotional' | 'Podcast';
  description: string;
  imageUrl: string;
  externalLink?: string; // For all external links (Amazon, podcast platforms, article links, etc.)
}

// Placeholder publications - to be replaced with actual data
export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: 'Faith on Campus',
    author: 'Tiger Faith Team',
    type: 'Book',
    description: 'A comprehensive guide to navigating faith and academics in college life.',
    imageUrl: 'https://picsum.photos/seed/book1/400/600',
    externalLink: 'https://www.amazon.com' //placeholder link
  },
  {
    id: '2',
    title: 'Finding Purpose in Studies',
    author: 'Dr. Sarah Johnson',
    type: 'Article',
    description: 'Exploring the intersection of faith and academic pursuit in higher education.',
    imageUrl: 'https://picsum.photos/seed/article1/400/600',
    externalLink: 'https://spotify.com/episode' //placeholder link
  },
  {
    id: '3',
    title: 'Daily Devotional Guide',
    author: 'Tiger Faith Ministry',
    type: 'Devotional',
    description: 'A 30-day journey through scripture designed specifically for college students.',
    imageUrl: 'https://picsum.photos/seed/lit1/400/600'
  },
  {
    id: '4',
    title: 'Prayer and Meditation',
    author: 'Rev. Michael Davis',
    type: 'Podcast',
    description: 'Guided audio sessions for finding peace and clarity during exam season.',
    imageUrl: 'https://picsum.photos/seed/audio1/400/600',
    externalLink: 'https://spotify.com/episode' //placeholder link
  },
  {
    id: '5',
    title: 'Building Community',
    author: 'Tiger Faith Leaders',
    type: 'Book',
    description: 'Stories and insights on creating meaningful relationships on campus.',
    imageUrl: 'https://picsum.photos/seed/book2/400/600',
    externalLink: 'https://www.amazon.com' //placeholder link
  },
  {
    id: '6',
    title: 'Navigating Life Transitions',
    author: 'Dr. Emily Carter',
    type: 'Article',
    description: 'Understanding and embracing change during your college journey.',
    imageUrl: 'https://picsum.photos/seed/article2/400/600'
  }
];
