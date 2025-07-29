import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockGuides, popularDestinations } from '../data/mockData';
import GuideCard from '../components/GuideCard';
import { MapPinIcon, CameraIcon } from '../components/icons';

declare const gsap: any;
declare const ScrollTrigger: any;

const DestinationPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const destinationName = name ? decodeURIComponent(name) : '';

  const destination = popularDestinations.find(d => d.name.toLowerCase() === destinationName.toLowerCase());
  
  const filteredGuides = mockGuides.filter(guide => 
    guide.city.toLowerCase() === destinationName.toLowerCase()
  );

  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-title-anim', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
      gsap.from('.hero-subtitle-anim', { opacity: 0, y: 40, duration: 1, ease: 'power3.out', delay: 0.2 });

      // Sections animation
      const sections = gsap.utils.toArray('.anim-section');
      sections.forEach((section: any) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });

      // Popular spots card animation
      gsap.from('.spot-card-anim', {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.popular-spots-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
      
      // Guide card animation
       gsap.from('.guide-card-anim', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.guides-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

    }, main);

    return () => ctx.revert();
  }, [destinationName]);

  return (
    <div ref={main} className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-80 bg-gray-800">
        <img src={destination?.image || 'https://picsum.photos/seed/default-dest/1600/400'} alt={`View of ${destinationName}`} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight hero-title-anim">
            {destinationName}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl hero-subtitle-anim">
            Discover the best local guides in {destinationName} and start planning your authentic adventure.
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* About Destination Section */}
        {destination && (
            <section className="anim-section">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About {destination.name}</h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">{destination.description}</p>
            </section>
        )}
        
        {/* Popular Spots Section */}
        {destination && destination.popularSpots.length > 0 && (
            <section className="popular-spots-section">
                <div className="flex items-center mb-6 anim-section">
                    <CameraIcon className="h-8 w-8 text-emerald-600 mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">Popular Spots in {destination.name}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destination.popularSpots.map(spot => (
                        <div key={spot.name} className="group relative rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-300 spot-card-anim">
                            <img src={spot.image} alt={spot.name} className="h-64 w-full object-cover"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{spot.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        )}

        {/* Main Content */}
        <section className="guides-section">
            <div className="flex items-center mb-8 anim-section">
                <MapPinIcon className="h-8 w-8 text-emerald-600 mr-3"/>
                <h2 className="text-3xl font-bold text-gray-900">Guides in {destinationName}</h2>
            </div>

            {filteredGuides.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {filteredGuides.map(guide => (
                <GuideCard key={guide.id} guide={guide} className="guide-card-anim" />
                ))}
            </div>
            ) : (
            <div className="text-center py-16 px-6 bg-white rounded-lg shadow-sm anim-section">
                <h3 className="text-xl font-semibold text-gray-800">No Guides Found in {destinationName}</h3>
                <p className="text-gray-500 mt-2">
                We don't have any guides in this location yet. Please check back later or explore other destinations.
                </p>
                <Link to="/guides" className="mt-6 inline-block bg-emerald-600 text-white text-base font-semibold py-3 px-8 rounded-full hover:bg-emerald-700 transition-colors duration-300">
                    View All Guides
                </Link>
            </div>
            )}
        </section>
      </div>
    </div>
  );
};

export default DestinationPage;