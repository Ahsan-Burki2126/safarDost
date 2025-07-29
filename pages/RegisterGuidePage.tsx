
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, UserPlusIcon } from '../components/icons';

const RegisterGuidePage: React.FC = () => {
  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
            <Link to="/" className="inline-block">
                <LogoIcon className="h-16 w-auto text-emerald-600 mx-auto" />
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Become a SafarDost Guide</h2>
            <p className="mt-2 text-lg text-gray-600">
                Join our community and share your passion for Pakistan with travelers worldwide.
            </p>
        </div>

        <form className="mt-10 bg-white p-8 rounded-xl shadow-lg space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 border-b pb-3 flex items-center">
                    <UserPlusIcon className="w-6 h-6 mr-3 text-emerald-600" />
                    Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="full-name" id="full-name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" name="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                     <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" id="password" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                    <div>
                        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" name="phone-number" id="phone-number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                </div>
            </div>

            {/* Guide Profile */}
             <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Guide Profile</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Primary Location (City)</label>
                        <input type="text" name="location" id="location" placeholder="e.g., Hunza" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price per Hour ($)</label>
                        <input type="number" name="price" id="price" min="0" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    </div>
                </div>
                 <div>
                    <label htmlFor="languages" className="block text-sm font-medium text-gray-700">Languages Spoken</label>
                    <input type="text" name="languages" id="languages" placeholder="e.g., English, Urdu, Pashto" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                     <p className="mt-1 text-xs text-gray-500">Please separate languages with a comma.</p>
                </div>
                 <div>
                    <label htmlFor="specialties" className="block text-sm font-medium text-gray-700">Specialties / Services</label>
                    <input type="text" name="specialties" id="specialties" placeholder="e.g., Trekking, Food Tours, Photography" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                    <p className="mt-1 text-xs text-gray-500">Please separate specialties with a comma.</p>
                </div>
                 <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">About You (Bio)</label>
                    <textarea name="bio" id="bio" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"></textarea>
                    <p className="mt-1 text-xs text-gray-500">Tell travelers a little bit about yourself and your experience.</p>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                <button
                    type="submit"
                    className="w-full md:w-auto flex justify-center py-3 px-8 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all transform hover:scale-105"
                >
                    Submit Application
                </button>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterGuidePage;
