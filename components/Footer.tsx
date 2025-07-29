
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: (props: any) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg> },
    { name: 'Instagram', href: '#', icon: (props: any) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg> },
    { name: 'Twitter', href: '#', icon: (props: any) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.216 3.792 4.653-.562 1.525-2.167 1.739-2.653.076.598 1.883 2.332 3.255 4.385 3.293-1.616 1.267-3.645 2.022-5.842 2.022-.378 0-.75-.022-1.116-.065 2.089 1.353 4.579 2.144 7.283 2.144 8.733 0 13.518-7.242 13.518-13.518 0-.206-.005-.412-.013-.617.928-.67 1.733-1.508 2.37-2.457z" /></svg> }
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center space-x-2">
              <LogoIcon className="h-10 w-10" />
              <span className="text-2xl font-bold">SafarDost</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Connecting travelers with authentic local guides across Pakistan.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:col-span-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">Explore</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/guides" className="text-base text-gray-300 hover:text-white transition-colors">Find a Guide</Link></li>
                <li><Link to="/guides" className="text-base text-gray-300 hover:text-white transition-colors">Destinations</Link></li>
                <li><Link to="/register-guide" className="text-base text-gray-300 hover:text-white transition-colors">Become a Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/about" className="text-base text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-base text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} SafarDost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;