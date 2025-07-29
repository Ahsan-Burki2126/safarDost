
import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { LogoIcon, LayoutDashboardIcon, UsersIcon, SettingsIcon, LogOutIcon } from '../components/icons';

const DashboardLayout: React.FC = () => {
    
  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
      isActive
        ? 'bg-emerald-600 text-white shadow-md'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;
    
  // Mock user role - in a real app, this would come from auth context
  const userRole = 'admin'; 

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col flex-shrink-0">
        <div className="h-20 flex items-center justify-center px-4 border-b border-gray-700">
          <Link to="/" className="flex items-center space-x-2">
            <LogoIcon className="h-9 w-9" />
            <span className="text-xl font-bold">SafarDost</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {/* Guide Links */}
          <NavLink to="/dashboard/guide" className={navLinkClasses}>
            <LayoutDashboardIcon className="h-5 w-5 mr-3" />
            My Dashboard
          </NavLink>
          
          {/* Admin Links */}
          {userRole === 'admin' && (
            <>
                <div className="pt-4 mt-2 border-t border-gray-700/50">
                    <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Admin Tools</h3>
                </div>
                <NavLink to="/dashboard/admin" className={navLinkClasses}>
                    <LayoutDashboardIcon className="h-5 w-5 mr-3" />
                    Admin Overview
                </NavLink>
                <NavLink to="/dashboard/admin/users" className={navLinkClasses}>
                    <UsersIcon className="h-5 w-5 mr-3" />
                    Manage Users
                </NavLink>
            </>
          )}

          <div className="pt-4 mt-4 border-t border-gray-700 space-y-2">
            <a href="#" className={navLinkClasses({isActive:false})}>
              <SettingsIcon className="h-5 w-5 mr-3" />
              Settings
            </a>
            <Link to="/login" className={navLinkClasses({isActive:false})}>
              <LogOutIcon className="h-5 w-5 mr-3" />
              Logout
            </Link>
          </div>
        </nav>
        <div className="p-4 border-t border-gray-700">
            <div className="flex items-center">
                <img src="https://picsum.photos/seed/user-avatar/100/100" alt="User avatar" className="h-10 w-10 rounded-full" />
                <div className="ml-3">
                    <p className="text-sm font-medium text-white">Ahmed Khan</p>
                    <a href="#" className="text-xs text-gray-400 hover:text-emerald-400">View Profile</a>
                </div>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100">
          <div className="container mx-auto px-6 lg:px-8 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;