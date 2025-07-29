import React, { useEffect, useRef } from 'react';
import { LogoIcon, UsersIcon } from '../components/icons';

declare const gsap: any;
declare const ScrollTrigger: any;

const AboutPage: React.FC = () => {
    const main = useRef<HTMLDivElement>(null);

    const teamMembers = [
        { name: 'Ali Khan', role: 'Founder & CEO', image: 'https://picsum.photos/seed/team1/400/400' },
        { name: 'Fatima Ahmed', role: 'Head of Operations', image: 'https://picsum.photos/seed/team2/400/400' },
        { name: 'Bilal Chaudhry', role: 'Lead Developer', image: 'https://picsum.photos/seed/team3/400/400' },
        { name: 'Ayesha Malik', role: 'Community Manager', image: 'https://picsum.photos/seed/team4/400/400' },
    ];
    
    const values = [
        { name: 'Authenticity', description: 'We connect travelers with genuine local experiences, moving beyond the typical tourist trails.', icon: '🌍' },
        { name: 'Trust', description: 'Safety and reliability are paramount. Every guide on our platform is vetted to ensure quality and peace of mind.', icon: '🤝' },
        { name: 'Community', description: 'We are building a community of passionate travelers and knowledgeable guides who share a love for Pakistan.', icon: '❤️' },
    ];

    useEffect(() => {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Hero animation
            gsap.from('.hero-anim', { opacity: 0, y: 50, duration: 1, ease: 'power3.out', stagger: 0.2 });

            // Section animations
            const sections = gsap.utils.toArray('.anim-section');
            sections.forEach((section: any) => {
                gsap.from(section.querySelectorAll('.anim-title, .anim-content, .anim-icon'), {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });

            // Values animation
            gsap.from('.value-card-anim', {
                 opacity: 0,
                 y: 50,
                 scale: 0.9,
                 duration: 0.7,
                 stagger: 0.2,
                 ease: 'power3.out',
                 scrollTrigger: {
                     trigger: '.values-section',
                     start: 'top 80%',
                     toggleActions: 'play none none none'
                 }
            });

            // Team animation
            gsap.from('.team-member-anim', {
                 opacity: 0,
                 y: 50,
                 scale: 0.9,
                 duration: 0.7,
                 stagger: 0.2,
                 ease: 'power3.out',
                 scrollTrigger: {
                     trigger: '.team-section',
                     start: 'top 80%',
                     toggleActions: 'play none none none'
                 }
            });

        }, main);

        return () => ctx.revert();
    }, []);

  return (
    <div ref={main} className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-emerald-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold hero-anim">Our Story</h1>
          <p className="mt-4 text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto hero-anim">
            SafarDost was born from a simple idea: to make the beauty and culture of Pakistan accessible to the world through the eyes of those who know it best—the local people.
          </p>
        </div>
      </section>

      <div className="py-24 space-y-24">
        {/* Our Mission */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 anim-section">
          <div className="max-w-4xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 anim-title">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600 anim-content">
                Our mission is to empower local communities by creating a platform where they can share their heritage, stories, and skills with travelers. We aim to foster authentic connections that benefit both the visitor and the host, promoting sustainable tourism that respects local cultures and environments.
              </p>
              <p className="mt-4 text-lg text-gray-600 anim-content">
                We believe travel should be transformative, not just transactional.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center">
              <LogoIcon className="h-48 w-48 text-emerald-600 anim-icon" />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-white values-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 anim-section">
                 <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 anim-title">What We Stand For</h2>
                    <p className="mt-4 text-lg text-gray-600 anim-content">
                        Our principles guide every decision we make and every connection we foster.
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-12 text-center">
                    {values.map(value => (
                        <div key={value.name} className="value-card-anim">
                            <div className="text-5xl mb-4">{value.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800">{value.name}</h3>
                            <p className="mt-2 text-gray-500">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


        {/* The Team Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 team-section anim-section">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center anim-title">
                <UsersIcon className="w-8 h-8 mr-3 text-emerald-600"/>
                Meet the Team
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto anim-content">The passionate individuals dedicated to bringing you the best of Pakistan.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.name} className="text-center team-member-anim">
                <img className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg" src={member.image} alt={member.name} />
                <h3 className="mt-6 text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-emerald-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
