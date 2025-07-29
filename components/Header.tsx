
import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoIcon, ChevronDownIcon } from './icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDashboardsOpen, setIsDashboardsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `text-base font-medium transition-colors duration-300 ${
      isActive
        ? 'text-emerald-600'
        : 'text-gray-600 hover:text-emerald-600'
    }`;
    
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDashboardsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <LogoIcon className="h-10 w-10" />
            <span className="text-2xl font-bold text-emerald-800">SafarDost</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/guides" className={navLinkClasses}>Find a Guide</NavLink>
            
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDashboardsOpen(!isDashboardsOpen)}
                className="flex items-center text-base font-medium text-gray-600 hover:text-emerald-600 transition-colors duration-300 focus:outline-none"
              >
                Dashboards
                <ChevronDownIcon className={`w-5 h-5 ml-1 transition-transform duration-200 ${isDashboardsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDashboardsOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-xl z-20 py-1 ring-1 ring-black ring-opacity-5">
                  <NavLink to="/dashboard/guide" onClick={() => setIsDashboardsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Guide Dashboard</NavLink>
                  <NavLink to="/dashboard/admin" onClick={() => setIsDashboardsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Admin Dashboard</NavLink>
                </div>
              )}
            </div>
            
            <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-base font-medium text-gray-600 hover:text-emerald-600 transition-colors">Log in</Link>
            <Link to="/signup" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-white bg-emerald-600 border border-transparent rounded-full shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300 transform hover:scale-105">
              Register
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-white/95 backdrop-blur-lg shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Home</NavLink>
            <NavLink to="/guides" onClick={() => setIsMenuOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Find a Guide</NavLink>
             <NavLink to="/dashboard/guide" onClick={() => setIsMenuOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Guide Dashboard</NavLink>
             <NavLink to="/dashboard/admin" onClick={() => setIsMenuOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Admin Dashboard</NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>About Us</NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}>Contact</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full text-center px-4 py-2 text-base font-medium text-gray-600 hover:text-emerald-600 transition-colors">Log in</Link>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700">Register</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;