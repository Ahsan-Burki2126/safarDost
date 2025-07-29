
import React from 'react';
import { StarIcon } from './icons';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  totalStars = 5,
  className = 'h-5 w-5',
}) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} className={className} filled={true} />
      ))}
      {halfStar && (
         <div className="relative">
             <StarIcon className={className} filled={false} />
             <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                <StarIcon className={className} filled={true} />
             </div>
         </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarIcon key={`empty-${i}`} className={`${className} text-gray-300`} filled={true} />
      ))}
    </div>
  );
};

export default StarRating;
