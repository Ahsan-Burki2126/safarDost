import React from "react";
import { Link } from "react-router-dom";
import { mockGuides } from "../data/mockData";
import {
  EditIcon,
  FileTextIcon,
  MailIcon,
  PriceIcon,
  StarIcon,
} from "../components/icons";

const GuideDashboardPage: React.FC = () => {
  // Using a mock guide for demonstration purposes
  const guide = mockGuides[0];

  const stats = [
    {
      name: "Active Bookings",
      value: "5",
      icon: FileTextIcon,
      color: "text-blue-500",
    },
    {
      name: "Pending Requests",
      value: "2",
      icon: MailIcon,
      color: "text-yellow-500",
    },
    {
      name: "Total Earnings (Month)",
      value: "$1,250",
      icon: PriceIcon,
      color: "text-green-500",
    },
    {
      name: "Overall Rating",
      value: "4.9",
      icon: StarIcon,
      color: "text-amber-500",
    },
  ];

  const pendingRequests = [
    {
      name: "David Chen",
      trip: "Hunza Valley Trek",
      date: "2 days ago",
      avatar: "https://picsum.photos/seed/david/100/100",
    },
    {
      name: "Laura Smith",
      trip: "Rakaposhi Base Camp",
      date: "4 days ago",
      avatar: "https://picsum.photos/seed/laura/100/100",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome back, {guide.name.split(" ")[0]}!
      </h1>
      <p className="text-gray-600 mt-1">
        Here's a snapshot of your guide activity.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4 transition-transform hover:scale-105 duration-300"
          >
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

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {/* Pending Requests */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-gray-800">
            Pending Booking Requests
          </h2>
          <div className="mt-4 space-y-4">
            {pendingRequests.map((req) => (
              <div
                key={req.name}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center">
                  <img
                    src={req.avatar}
                    alt={req.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">{req.name}</p>
                    <p className="text-sm text-gray-500">{req.trip}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{req.date}</p>
                  <a
                    href="#"
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-800"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <img
            src={guide.profileImage}
            alt={guide.name}
            className="h-24 w-24 rounded-full object-cover mx-auto border-4 border-emerald-200"
          />
          <h3 className="mt-4 text-xl font-bold text-gray-800">{guide.name}</h3>
          <p className="text-sm text-gray-500">
            {guide.city}, {guide.country}
          </p>
          <div className="mt-4 flex justify-center items-center">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="ml-2 font-semibold text-gray-700">
              {guide.rating} ({guide.reviewCount} reviews)
            </span>
          </div>
          <Link
            to="/dashboard/guide/edit"
            className="mt-6 w-full flex items-center justify-center bg-emerald-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-transform hover:scale-105 duration-300"
          >
            <EditIcon className="w-5 h-5 mr-2" /> Edit My Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuideDashboardPage;
