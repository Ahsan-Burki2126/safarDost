import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, ChevronRightIcon } from '../components/icons';
import { mockGuides, popularDestinations } from '../data/mockData';
import GuideCard from '../components/GuideCard';

declare const gsap: any;
declare const ScrollTrigger: any;

const HomePage: React.FC = () => {
  const featuredGuides = mockGuides.filter(g => g.isFeatured).slice(0, 3);
  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to('.hero-bg-img', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
      
      // Hero content animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
      tl.from('.hero-title', { opacity: 0, y: 50, duration: 0.8 })
        .from('.hero-subtitle', { opacity: 0, y: 40, duration: 0.7 }, '-=0.5')
        .from('.hero-form', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4');

      // On-scroll animations
      const sections = gsap.utils.toArray('.anim-section');
      sections.forEach((section: any) => {
        gsap.from(section.querySelectorAll('.anim-title'), {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
        gsap.from(section.querySelectorAll('.anim-subtitle'), {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });
      
      gsap.from('.how-it-works-card', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.how-it-works-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
      
      gsap.from('.guide-card-anim', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.featured-guides-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
      
      gsap.from('.destination-card-anim', {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.popular-destinations-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
      
      gsap.from('.cta-anim', {
         opacity: 0,
         y: 50,
         duration: 1,
         ease: 'power3.out',
         scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 85%',
            toggleActions: 'play none none none'
         }
      })

    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={main} className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white pt-32 pb-20 overflow-hidden hero-section">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 hero-bg-img" style={{ backgroundImage: "url('https://picsum.photos/seed/pakistan-map/1800/800')" }}></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight hero-title">
            Discover Pakistan with a <span className="text-emerald-400">Local Friend</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-200 hero-subtitle">
            Connect with trusted local guides for an authentic travel experience. Your adventure starts here.
          </p>
          <div className="mt-10 max-w-xl mx-auto hero-form">
            <form className="relative group">
              <input
                type="search"
                placeholder="Where to? (e.g., Hunza, Lahore, Skardu)"
                className="w-full pl-6 pr-32 py-5 text-lg text-gray-800 bg-white rounded-full border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-emerald-500/50 transition-all duration-300 shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-300 transform group-hover:scale-105"
              >
                <SearchIcon className="h-5 w-5 mr-2" />
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 anim-section how-it-works-section">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 anim-title">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 anim-subtitle">Your journey in three simple steps.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 how-it-works-card">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-700 mb-6 text-3xl font-bold">1</div>
            <h3 className="text-xl font-semibold text-gray-800">Search by Destination</h3>
            <p className="mt-2 text-gray-500">Find guides in any city or region of Pakistan you plan to visit.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 how-it-works-card">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-700 mb-6 text-3xl font-bold">2</div>
            <h3 className="text-xl font-semibold text-gray-800">Choose Your Guide</h3>
            <p className="mt-2 text-gray-500">Compare profiles, services, and read reviews from other travelers.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 how-it-works-card">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-700 mb-6 text-3xl font-bold">3</div>
            <h3 className="text-xl font-semibold text-gray-800">Connect & Explore</h3>
            <p className="mt-2 text-gray-500">Contact your chosen guide directly to plan your perfect trip.</p>
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 anim-section featured-guides-section">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 anim-title">Featured Guides</h2>
            <p className="mt-2 text-lg text-gray-600 anim-subtitle">Top-rated guides ready to show you the best of Pakistan.</p>
          </div>
           <Link to="/guides" className="flex items-center text-emerald-600 font-semibold hover:text-emerald-800 transition-colors">
            View All Guides <ChevronRightIcon className="h-5 w-5 ml-1" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGuides.map(guide => (
            <GuideCard key={guide.id} guide={guide} className="guide-card-anim" />
          ))}
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 anim-section popular-destinations-section">
         <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 anim-title">Popular Destinations</h2>
          <p className="mt-4 text-lg text-gray-600 anim-subtitle">Get inspired for your next adventure.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {popularDestinations.map(dest => (
            <Link to={`/destination/${encodeURIComponent(dest.name)}`} key={dest.name} className="group relative rounded-xl overflow-hidden cursor-pointer block destination-card-anim">
                <img src={dest.image} alt={dest.name} className="h-64 w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-lg font-bold">{dest.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA for Guides */}
      <section className="bg-white cta-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 cta-anim">
            <div className="max-w-4xl mx-auto text-center">
                 <h2 className="text-3xl font-extrabold text-emerald-800 sm:text-4xl">
                    Are You a Local Guide?
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                    Join our community of passionate guides, showcase your skills, and connect with travelers from around the world.
                </p>
                <Link to="/register-guide" className="mt-8 inline-block w-full sm:w-auto bg-emerald-600 text-white text-lg font-semibold py-4 px-10 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Register as a Guide
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
