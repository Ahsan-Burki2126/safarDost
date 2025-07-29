
import React from 'react';
import { Link } from 'react-router-dom';
import { mockGuides } from '../data/mockData';
import { UsersIcon, FileTextIcon, CheckCircleIcon, XCircleIcon, PriceIcon, StarIcon, EditIcon } from '../components/icons';

const AdminDashboardPage: React.FC = () => {

    const stats = [
        { name: 'Total Guides', value: mockGuides.length, icon: UsersIcon, color: 'text-blue-500' },
        { name: 'Pending Approvals', value: '3', icon: FileTextIcon, color: 'text-yellow-500' },
        { name: 'Total Revenue (Month)', value: '$8,450', icon: PriceIcon, color: 'text-green-500' },
        { name: 'Avg. Rating', value: '4.85', icon: StarIcon, color: 'text-amber-500' },
    ];
    
    const guideWithStatus = mockGuides.map((guide, index) => ({
        ...guide,
        status: index % 3 === 0 ? 'Pending' : (index % 3 === 1 ? 'Approved' : 'Rejected')
    }));

    const getStatusChip = (status: string) => {
        switch (status) {
            case 'Approved':
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Approved</span>;
            case 'Pending':
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Pending</span>;
            case 'Rejected':
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Rejected</span>;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage guides, users, and platform settings.</p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
                {stats.map(stat => (
                    <div key={stat.name} className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4 transition-transform hover:scale-105 duration-300">
                         <div className={`p-3 rounded-full bg-emerald-100 ${stat.color}`}>
                           <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

             {/* Quick Actions */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link to="/dashboard/admin/users" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-center">
                           <UsersIcon className="w-6 h-6 text-emerald-600"/>
                           <h3 className="ml-3 font-semibold text-gray-700">Manage Users</h3>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">View, edit, or remove users.</p>
                    </Link>
                     <Link to="/register-guide" className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                        <div className="flex items-center">
                           <UsersIcon className="w-6 h-6 text-emerald-600"/>
                           <h3 className="ml-3 font-semibold text-gray-700">Add New Guide</h3>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Onboard a new guide manually.</p>
                    </Link>
                </div>
            </div>


            {/* Manage Guides Table */}
            <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Guides</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {guideWithStatus.map(guide => (
                                <tr key={guide.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full object-cover" src={guide.profileImage} alt={guide.name} />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{guide.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{guide.city}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{getStatusChip(guide.status)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex items-center space-x-4">
                                            <a href="#" className="text-green-600 hover:text-green-900" title="Approve"><CheckCircleIcon className="w-5 h-5"/></a>
                                            <a href="#" className="text-red-600 hover:text-red-900" title="Reject"><XCircleIcon className="w-5 h-5"/></a>
                                            <Link to={`/dashboard/admin/guide/edit/${guide.id}`} className="text-gray-500 hover:text-emerald-700" title="Edit">
                                                <EditIcon className="w-5 h-5"/>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;