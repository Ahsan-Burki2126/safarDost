import React, { useState } from 'react';
import { mockGuides } from '../data/mockData';
import GuideCard from '../components/GuideCard';
import { SearchIcon } from '../components/icons';

const GuidesPage: React.FC = () => {
  const [guides] = useState(mockGuides);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredGuides = guides.filter(guide => 
    guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guide.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guide.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1 mb-8 lg:mb-0">
          <div className="sticky top-24 p-6 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Filter Guides</h2>
            
            <form>
              <div className="space-y-6">
                {/* Search by name/specialty */}
                <div>
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                       <SearchIcon className="h-5 w-5 text-gray-400"/>
                    </div>
                    <input
                      type="text"
                      id="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                      placeholder="Name, city, specialty..."
                    />
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                  <select id="location" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md">
                    <option>All Locations</option>
                    <option>Hunza</option>
                    <option>Lahore</option>
                    <option>Skardu</option>
                    <option>Karachi</option>
                    <option>Swat</option>
                    <option>Islamabad</option>
                  </select>
                </div>
                
                {/* Price Range Filter */}
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price per hour</label>
                  <input type="range" id="price" min="0" max="50" defaultValue="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2 accent-emerald-600" />
                   <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$50+</span>
                   </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <span className="block text-sm font-medium text-gray-700">Rating</span>
                  <div className="mt-2 space-y-2">
                    {[5, 4, 3].map(rating => (
                      <div key={rating} className="flex items-center">
                        <input id={`rating-${rating}`} name="rating" type="radio" className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300" />
                        <label htmlFor={`rating-${rating}`} className="ml-3 block text-sm font-medium text-gray-700">{rating} Stars & Up</label>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </form>
          </div>
        </aside>

        {/* Guides Grid */}
        <main className="lg:col-span-3">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Guides</h1>
          <p className="text-gray-600 mb-8">Found {filteredGuides.length} guides matching your criteria.</p>

          <div className="grid sm:grid-cols-2 gap-8">
            {filteredGuides.map(guide => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
             {filteredGuides.length === 0 && (
              <div className="sm:col-span-2 text-center py-16 px-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">No Guides Found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or filters to find the perfect guide for your adventure.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuidesPage;