
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockGuides } from '../data/mockData';
import { EditIcon } from '../components/icons';

const AdminEditGuidePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const guide = mockGuides.find(g => g.id === id);

    if (!guide) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Guide not found</h1>
                <p className="text-gray-600 mt-2">The guide with ID '{id}' does not exist.</p>
                <Link to="/dashboard/admin" className="mt-4 inline-block text-emerald-600 hover:underline">
                    Return to Admin Dashboard
                </Link>
            </div>
        );
    }
    
    // Mock status for demonstration
    const guideStatus = id && parseInt(id) % 3 === 0 ? 'Pending' : (id && parseInt(id) % 3 === 1 ? 'Approved' : 'Rejected');

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                <EditIcon className="w-8 h-8 mr-3 text-emerald-600" />
                Editing Guide: {guide.name}
            </h1>
            <p className="text-gray-600 mt-1">Modify guide details and manage their status.</p>

            <form className="mt-8 bg-white p-6 md:p-8 rounded-xl shadow-md space-y-8">
                {/* Status Management */}
                <div className="space-y-4 bg-slate-50 p-4 rounded-lg border">
                    <h3 className="text-xl font-bold text-gray-900">Status Management</h3>
                     <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Current Status</label>
                        <select id="status" name="status" defaultValue={guideStatus} className="mt-1 block w-full md:w-1/3 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm rounded-md">
                            <option>Pending</option>
                            <option>Approved</option>
                            <option>Rejected</option>
                        </select>
                    </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" name="full-name" id="full-name" defaultValue={guide.name} className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm py-2 px-3" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" name="email" id="email" defaultValue={guide.email} className="mt-1 block w-full bg-gray-100 border-gray-300 rounded-md shadow-sm py-2 px-3" />
                        </div>
                    </div>
                </div>

                {/* Guide Profile Details */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 border-b pb-3">Guide Profile Details</h3>
                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                        <textarea id="bio" name="bio" rows={5} defaultValue={guide.bio} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"></textarea>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price per Hour ($)</label>
                            <input type="number" name="price" id="price" defaultValue={guide.pricePerHour} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Primary Location</label>
                            <input type="text" name="location" id="location" defaultValue={guide.city} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" />
                        </div>
                    </div>
                </div>


                {/* Save Button */}
                <div className="pt-5 border-t">
                    <div className="flex justify-end space-x-3">
                         <Link to="/dashboard/admin" className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AdminEditGuidePage;
