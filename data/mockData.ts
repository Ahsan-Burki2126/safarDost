
import type { Guide, Destination, User, ChatMessage } from '../types';

export const mockGuides: Guide[] = [
  {
    id: '1',
    name: 'Ahmed Khan',
    email: 'ahmed.khan@example.com',
    city: 'Hunza',
    country: 'Pakistan',
    pricePerHour: 25,
    rating: 4.9,
    reviewCount: 120,
    languages: ['Urdu', 'English', 'Burushaski'],
    specialties: ['Trekking', 'Cultural Tours', 'Photography'],
    bio: "Passionate mountaineer and storyteller, I've been guiding adventurers through the majestic Karakoram mountains for over a decade. Let's explore the hidden gems of Hunza Valley together!",
    profileImage: 'https://picsum.photos/seed/ahmed/200/200',
    coverImage: 'https://picsum.photos/seed/hunza-cover/1200/400',
    isFeatured: true,
    reviews: [
      { id: 1, reviewerName: 'Alice Johnson', reviewerImage: 'https://picsum.photos/seed/alice/100/100', rating: 5, comment: 'Ahmed was incredible! His knowledge of the local culture and terrain is unmatched. Best trip of my life!', date: 'August 2023' },
      { id: 2, reviewerName: 'David Chen', reviewerImage: 'https://picsum.photos/seed/david/100/100', rating: 5, comment: 'An unforgettable experience. Highly recommended.', date: 'July 2023' },
    ],
  },
  {
    id: '2',
    name: 'Fatima Ali',
    email: 'fatima.ali@example.com',
    city: 'Lahore',
    country: 'Pakistan',
    pricePerHour: 15,
    rating: 4.8,
    reviewCount: 85,
    languages: ['Urdu', 'English', 'Punjabi'],
    specialties: ['Historical Sites', 'Food Tours', 'Art & Culture'],
    bio: 'Discover the heart of Pakistan with me! As a Lahore native, I offer immersive tours of the Walled City, historical landmarks, and the best culinary spots you won\'t find in guidebooks.',
    profileImage: 'https://picsum.photos/seed/fatima/200/200',
    coverImage: 'https://picsum.photos/seed/lahore-cover/1200/400',
    isFeatured: true,
    reviews: [
       { id: 1, reviewerName: 'Sophia Loren', reviewerImage: 'https://picsum.photos/seed/sophia/100/100', rating: 5, comment: 'Fatima is a gem! Her food tour was the highlight of our trip to Lahore.', date: 'September 2023' },
    ],
  },
  {
    id: '3',
    name: 'Bilal Hassan',
    email: 'bilal.hassan@example.com',
    city: 'Skardu',
    country: 'Pakistan',
    pricePerHour: 30,
    rating: 4.9,
    reviewCount: 95,
    languages: ['Urdu', 'English', 'Balti'],
    specialties: ['Mountaineering', 'Jeep Safaris', 'Camping'],
    bio: 'Adventure awaits in Skardu! I specialize in high-altitude treks and expeditions to K2 Base Camp. Safety and an unforgettable journey are my top priorities.',
    profileImage: 'https://picsum.photos/seed/bilal/200/200',
    coverImage: 'https://picsum.photos/seed/skardu-cover/1200/400',
    reviews: [],
  },
  {
    id: '4',
    name: 'Aisha Baig',
    email: 'aisha.baig@example.com',
    city: 'Karachi',
    country: 'Pakistan',
    pricePerHour: 18,
    rating: 4.7,
    reviewCount: 60,
    languages: ['Urdu', 'English', 'Sindhi'],
    specialties: ['City Exploration', 'Beach Trips', 'Modern History'],
    bio: "Experience the vibrant energy of Karachi, the city of lights. From bustling markets to serene beaches, I'll show you every facet of this dynamic metropolis.",
    profileImage: 'https://picsum.photos/seed/aisha/200/200',
    coverImage: 'https://picsum.photos/seed/karachi-cover/1200/400',
    reviews: [],
  },
   {
    id: '5',
    name: 'Yasir Shah',
    email: 'yasir.shah@example.com',
    city: 'Swat',
    country: 'Pakistan',
    pricePerHour: 22,
    rating: 4.8,
    reviewCount: 110,
    languages: ['Urdu', 'English', 'Pashto'],
    specialties: ['Nature Walks', 'Historical Buddhism Sites', 'Local Cuisine'],
    bio: 'Welcome to the Switzerland of Pakistan! I will guide you through the lush green valleys of Swat, exploring its rich history and breathtaking natural beauty.',
    profileImage: 'https://picsum.photos/seed/yasir/200/200',
    coverImage: 'https://picsum.photos/seed/swat-cover/1200/400',
    isFeatured: true,
    reviews: [
        { id: 1, reviewerName: 'Mike Brown', reviewerImage: 'https://picsum.photos/seed/mike/100/100', rating: 5, comment: 'Yasir knows Swat like the back of his hand. It was a beautiful and educational trip.', date: 'June 2023' },
    ]
  },
  {
    id: '6',
    name: 'Samina Iqbal',
    email: 'samina.iqbal@example.com',
    city: 'Islamabad',
    country: 'Pakistan',
    pricePerHour: 20,
    rating: 4.9,
    reviewCount: 75,
    languages: ['Urdu', 'English'],
    specialties: ['City Tours', 'Margalla Hills Hiking', 'Museums'],
    bio: 'Explore the green and serene capital city of Islamabad with a local. I offer customized tours focusing on architecture, nature, and the political history of Pakistan.',
    profileImage: 'https://picsum.photos/seed/samina/200/200',
    coverImage: 'https://picsum.photos/seed/islamabad-cover/1200/400',
    reviews: [],
  },
];


export const popularDestinations: Destination[] = [
    { 
        name: 'Swat Valley',
        image: 'https://picsum.photos/seed/swat-dest/400/500',
        description: 'Often called the "Switzerland of Pakistan," Swat Valley is a breathtaking region in the Khyber Pakhtunkhwa province, known for its lush forests, green meadows, and snow-capped mountains. It boasts a rich history with many archaeological sites of the Buddhist Gandhara civilization.',
        popularSpots: [
            { name: 'Malam Jabba', image: 'https://picsum.photos/seed/malam-jabba/400/300' },
            { name: 'Kalam Valley', image: 'https://picsum.photos/seed/kalam-valley/400/300' },
            { name: 'Mahodand Lake', image: 'https://picsum.photos/seed/mahodand-lake/400/300' },
        ]
    },
    { 
        name: 'Hunza Valley',
        image: 'https://picsum.photos/seed/hunza-dest/400/500',
        description: 'Nestled in the Karakoram Mountains, Hunza is a fairytale valley renowned for its dramatic scenery, the longevity of its people, and its delicious apricots. It offers stunning views of several 7,000m+ peaks like Rakaposhi and Ultar Sar.',
        popularSpots: [
            { name: 'Altit & Baltit Forts', image: 'https://picsum.photos/seed/baltit-fort/400/300' },
            { name: 'Attabad Lake', image: 'https://picsum.photos/seed/attabad-lake/400/300' },
            { name: 'Passu Cones', image: 'https://picsum.photos/seed/passu-cones/400/300' },
        ]
    },
    { 
        name: 'Skardu',
        image: 'https://picsum.photos/seed/skardu-dest/400/500',
        description: 'Skardu is the gateway to some of the world\'s highest peaks, including K2. It\'s a paradise for mountaineers and trekkers, offering rugged landscapes, serene lakes, and vast desert plains at high altitude.',
        popularSpots: [
            { name: 'Shangrila Resort', image: 'https://picsum.photos/seed/shangrila/400/300' },
            { name: 'Upper Kachura Lake', image: 'https://picsum.photos/seed/kachura-lake/400/300' },
            { name: 'Deosai National Park', image: 'https://picsum.photos/seed/deosai/400/300' },
        ]
    },
    { 
        name: 'Naran Kaghan',
        image: 'https://picsum.photos/seed/naran-dest/400/500',
        description: 'A popular summer holiday destination, the Naran and Kaghan valleys are famous for their alpine meadows, crystal-clear lakes, and cool weather. The Kunhar River flows through the valley, adding to its charm.',
        popularSpots: [
            { name: 'Saif-ul-Maluk Lake', image: 'https://picsum.photos/seed/saif-maluk/400/300' },
            { name: 'Lulusar Lake', image: 'https://picsum.photos/seed/lulusar-lake/400/300' },
            { name: 'Babusar Top', image: 'https://picsum.photos/seed/babusar-top/400/300' },
        ]
    },
    { 
        name: 'Lahore', 
        image: 'https://picsum.photos/seed/lahore-dest/400/500',
        description: 'Known as the cultural heart of Pakistan, Lahore is a vibrant city rich in history, art, and cuisine. From Mughal-era marvels to bustling food streets, Lahore offers a feast for the senses.',
        popularSpots: [
            { name: 'Badshahi Mosque', image: 'https://picsum.photos/seed/badshahi/400/300' },
            { name: 'Walled City (Androon)', image: 'https://picsum.photos/seed/walled-city/400/300' },
            { name: 'Wagah Border', image: 'https://picsum.photos/seed/wagah/400/300' },
        ]
    },
    { 
        name: 'Ziarat', 
        image: 'https://picsum.photos/seed/ziarat-dest/400/500',
        description: 'Ziarat is famous for having the second-largest Juniper forest in the world. It is a serene hill station in Balochistan, and home to the historic Ziarat Residency, where the founder of Pakistan spent his last days.',
        popularSpots: [
            { name: 'Ziarat Residency', image: 'https://picsum.photos/seed/ziarat-res/400/300' },
            { name: 'Juniper Forest', image: 'https://picsum.photos/seed/juniper/400/300' },
            { name: 'Prospect Point', image: 'https://picsum.photos/seed/prospect-point/400/300' },
        ]
    },
];

export const mockUsers: User[] = [
    { id: 'u1', name: 'Alice Johnson', email: 'alice.j@email.com', joinDate: '2023-08-15', role: 'user', avatar: 'https://picsum.photos/seed/alice/100/100' },
    { id: 'u2', name: 'David Chen', email: 'david.c@email.com', joinDate: '2023-07-22', role: 'user', avatar: 'https://picsum.photos/seed/david/100/100' },
    { id: 'u3', name: 'Sophia Loren', email: 'sophia.l@email.com', joinDate: '2023-09-01', role: 'user', avatar: 'https://picsum.photos/seed/sophia/100/100' },
    { id: 'u4', name: 'Mike Brown', email: 'mike.b@email.com', joinDate: '2023-06-10', role: 'user', avatar: 'https://picsum.photos/seed/mike/100/100' },
    { id: 'g1', name: 'Ahmed Khan', email: 'ahmed.khan@example.com', joinDate: '2022-01-20', role: 'guide', avatar: 'https://picsum.photos/seed/ahmed/100/100' },
    { id: 'a1', name: 'Admin User', email: 'admin@safardost.com', joinDate: '2021-11-01', role: 'admin', avatar: 'https://picsum.photos/seed/admin-avatar/100/100' },
];

export const mockChatHistory: ChatMessage[] = [
  { id: 1, sender: 'guide', text: "Hello! Thanks for reaching out. How can I help you plan your trip to Hunza?", timestamp: "10:30 AM" },
  { id: 2, sender: 'user', text: "Hi Ahmed! I'm interested in the 3-day trekking tour. Is it suitable for beginners?", timestamp: "10:31 AM" },
  { id: 3, sender: 'guide', text: "Absolutely! It's a moderate trek, and I guide many first-timers. We take plenty of breaks and enjoy the scenery. What are your dates?", timestamp: "10:32 AM" },
  { id: 4, sender: 'user', text: "That sounds great! I'm thinking of the first week of October.", timestamp: "10:34 AM" },
];