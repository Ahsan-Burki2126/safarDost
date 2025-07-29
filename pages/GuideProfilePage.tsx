import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { mockGuides } from "../data/mockData";
import StarRating from "../components/StarRating";
import {
  MapPinIcon,
  LanguageIcon,
  ServiceIcon,
  PriceIcon,
  WhatsAppIcon,
  MailIcon,
  StarIcon,
  MessageCircleIcon,
} from "../components/icons";
import ChatModal from "../components/ChatModal";

declare const gsap: any;
declare const ScrollTrigger: any;

const GuideProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const guide = mockGuides.find((g) => g.id === id);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !guide ||
      typeof gsap === "undefined" ||
      typeof ScrollTrigger === "undefined"
    )
      return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header animation
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });
      tl.from(".profile-image-anim", { opacity: 0, scale: 0.8, y: 50 })
        .from(".profile-name-anim", { opacity: 0, y: 30 }, "-=0.7")
        .from(".profile-meta-anim", { opacity: 0, y: 20 }, "-=0.8")
        .from(
          ".profile-featured-anim",
          { opacity: 0, y: 20, scale: 0.9 },
          "-=0.7"
        );

      // Section animations on scroll
      const sections = gsap.utils.toArray(".anim-section");
      sections.forEach((section: any) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, main);

    return () => ctx.revert();
  }, [guide]);

  if (!guide) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Guide not found</h1>
        <p className="text-gray-600 mt-2">
          The guide you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div ref={main}>
      {/* Cover Image */}
      <div className="h-64 md:h-80 lg:h-96 w-full relative">
        <img
          src={guide.coverImage}
          alt={`${guide.name}'s cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end -mt-20 md:-mt-14 relative z-10">
          <img
            src={guide.profileImage}
            alt={guide.name}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl profile-image-anim"
          />
          <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 profile-name-anim">
              {guide.name}
            </h1>
            <div className="flex items-center justify-center md:justify-start mt-2 text-gray-600 profile-meta-anim">
              <MapPinIcon className="h-5 w-5 mr-2" />
              <span>
                {guide.city}, {guide.country}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-center md:justify-start space-x-4 profile-meta-anim">
              <StarRating rating={guide.rating} />
              <span className="text-gray-600">
                {guide.rating.toFixed(1)} ({guide.reviewCount} reviews)
              </span>
            </div>
          </div>
          {guide.isFeatured && (
            <div className="mt-4 md:ml-auto md:self-end bg-emerald-100 text-emerald-800 text-sm font-bold px-4 py-2 rounded-full flex items-center profile-featured-anim">
              <StarIcon className="w-4 h-4 mr-2" />
              Featured Guide
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="mt-12 lg:grid lg:grid-cols-3 lg:gap-12 pb-24">
          {/* Left Column (About & Details) */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section className="anim-section">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-4">
                About {guide.name.split(" ")[0]}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {guide.bio}
              </p>
            </section>

            {/* Specialties */}
            <section className="anim-section">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-4">
                Specialties
              </h2>
              <div className="flex flex-wrap gap-3">
                {guide.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="bg-slate-100 text-slate-800 px-4 py-2 rounded-full font-medium text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section className="anim-section">
              <h2 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-6">
                Reviews
              </h2>
              <div className="space-y-8">
                {guide.reviews.length > 0 ? (
                  guide.reviews.map((review) => (
                    <div key={review.id} className="flex space-x-4">
                      <img
                        src={review.reviewerImage}
                        alt={review.reviewerName}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {review.reviewerName}
                        </h4>
                        <div className="flex items-center my-1">
                          <StarRating
                            rating={review.rating}
                            className="h-4 w-4"
                          />
                          <span className="text-sm text-gray-500 ml-3">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">
                    This guide doesn't have any reviews yet.
                  </p>
                )}
              </div>
            </section>
          </div>

          {/* Right Column (Contact & Info Card) */}
          <aside className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="sticky top-24 bg-white p-6 rounded-xl shadow-lg border anim-section">
              <h3 className="text-2xl font-bold text-center mb-6">
                Guide Information
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <PriceIcon className="h-6 w-6 mr-4 text-emerald-600" />{" "}
                  <div>
                    <span className="font-bold text-lg">
                      ${guide.pricePerHour}
                    </span>{" "}
                    / hour
                  </div>
                </li>
                <li className="flex items-start">
                  <LanguageIcon className="h-6 w-6 mr-4 text-emerald-600 flex-shrink-0 mt-1" />{" "}
                  <div>
                    <span className="font-semibold">Languages:</span>
                    <br />
                    {guide.languages.join(", ")}
                  </div>
                </li>
                <li className="flex items-start">
                  <ServiceIcon className="h-6 w-6 mr-4 text-emerald-600 flex-shrink-0 mt-1" />{" "}
                  <div>
                    <span className="font-semibold">Services:</span>
                    <br />
                    {guide.specialties.join(", ")}
                  </div>
                </li>
              </ul>
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="w-full flex items-center justify-center px-6 py-4 text-lg font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <MessageCircleIcon className="h-6 w-6 mr-3" /> Chat with{" "}
                  {guide.name.split(" ")[0]}
                </button>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="flex-1 w-full flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-800 bg-slate-100 rounded-full hover:bg-slate-200 transition-all duration-300"
                  >
                    <WhatsAppIcon className="h-5 w-5 mr-2" /> WhatsApp
                  </a>
                  <a
                    href="#"
                    className="flex-1 w-full flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-800 bg-slate-100 rounded-full hover:bg-slate-200 transition-all duration-300"
                  >
                    <MailIcon className="h-5 w-5 mr-2" /> Email
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        guide={guide}
      />
    </div>
  );
};

export default GuideProfilePage;
