import React from "react";
import { Link } from "react-router-dom";
import type { Guide } from "../types";
import { MapPinIcon } from "./icons";
import StarRating from "./StarRating";

interface GuideCardProps {
  guide: Guide;
  className?: string;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide, className }) => {
  return (
    <Link
      to={`/guide/${guide.id}`}
      className={`group block ${className || ""}`}
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-xl w-full">
        <div className="relative">
          <img
            className="h-56 w-full object-cover"
            src={guide.coverImage}
            alt={`${guide.name}'s cover image`}
          />
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
            ${guide.pricePerHour}/hr
          </div>
          {guide.isFeatured && (
            <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Featured
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <img
              className="h-20 w-20 object-cover rounded-full border-4 border-white  shadow-lg"
              src={guide.profileImage}
              alt={`Profile of ${guide.name}`}
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                {guide.name}
              </h3>
              <div className="flex items-center text-gray-500 mt-1">
                <MapPinIcon className="h-4 w-4 mr-1.5" />
                <span className="text-sm">
                  {guide.city}, {guide.country}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <StarRating rating={guide.rating} />
              <span className="text-gray-600 text-sm ml-2">
                ({guide.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-600 text-sm line-clamp-2">{guide.bio}</p>
          </div>

          <div className="mt-5">
            <span className="w-full text-center inline-block px-6 py-3 text-base font-semibold text-white bg-emerald-600 rounded-full group-hover:bg-emerald-700 transition-all duration-300 transform group-hover:scale-105">
              View Profile
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GuideCard;
