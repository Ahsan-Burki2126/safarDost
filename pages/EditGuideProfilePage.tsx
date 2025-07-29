
import React from 'react';
import { mockGuides } from '../data/mockData';
import { ImageIcon, PriceIcon, ServiceIcon, LanguageIcon, SaveIcon } from '../components/icons';

const EditGuideProfilePage: React.FC = () => {
    // For demonstration, we'll edit the first guide's profile
    const guide = mockGuides[0];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Edit Your Profile</h1>
            <p className="text-gray-600 mt-1">Keep your information up to date for travelers.</p>

            <form className="mt-8 bg-white p-6 md:p-8 rounded-xl shadow-md space-y-8">
                {/* Profile and Cover Images */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-3 flex items-center">
                        <ImageIcon className="w-6 h-6 mr-3 text-emerald-600" />
                        Profile Media
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
                            <div className="flex items-center space-x-4">
                                <img src={guide.profileImage} alt="Current profile" className="h-20 w-20 rounded-full object-cover" />
                                <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"/>
                            </div>
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Cover Photo</label>
                             <div className="flex items-center space-x-4">
                                <img src={guide.coverImage} alt="Current cover" className="h-20 w-36 rounded-lg object-cover" />
                                <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"/>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* About Section */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-3">About You</h3>
                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                        <textarea id="bio" name="bio" rows={5} defaultValue={guide.bio} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"></textarea>
                    </div>
                </div>

                {/* Details Section */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="price" className="flex items-center text-sm font-medium text-gray-700"><PriceIcon className="w-4 h-4 mr-2"/>Price per Hour ($)</label>
                            <input type="number" name="price" id="price" defaultValue={guide.pricePerHour} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                        </div>
                        <div>
                            <label htmlFor="location" className="flex items-center text-sm font-medium text-gray-700"><PriceIcon className="w-4 h-4 mr-2"/>Primary Location</label>
                            <input type="text" name="location" id="location" defaultValue={guide.city} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                        </div>
                        <div>
                            <label htmlFor="languages" className="flex items-center text-sm font-medium text-gray-700"><LanguageIcon className="w-4 h-4 mr-2"/>Languages</label>
                            <input type="text" name="languages" id="languages" defaultValue={guide.languages.join(', ')} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                            <p className="mt-1 text-xs text-gray-500">Separate with commas.</p>
                        </div>
                        <div>
                            <label htmlFor="specialties" className="flex items-center text-sm font-medium text-gray-700"><ServiceIcon className="w-4 h-4 mr-2"/>Specialties</label>
                            <input type="text" name="specialties" id="specialties" defaultValue={guide.specialties.join(', ')} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                            <p className="mt-1 text-xs text-gray-500">Separate with commas.</p>
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <div className="pt-5 border-t">
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="w-full md:w-auto flex items-center justify-center py-3 px-6 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all transform hover:scale-105"
                        >
                            <SaveIcon className="w-5 h-5 mr-2" />
                            Save Changes
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditGuideProfilePage;
