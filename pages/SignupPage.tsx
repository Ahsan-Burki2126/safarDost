
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../components/icons';

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-full flex bg-slate-50">
       <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://picsum.photos/seed/signup-bg/1200/1600"
          alt="Beautiful valley in Pakistan"
        />
        <div className="absolute inset-0 bg-gray-800 opacity-20"></div>
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Link to="/" className="flex items-center">
              <LogoIcon className="h-12 w-auto" />
               <span className="ml-3 text-3xl font-bold text-emerald-800">SafarDost</span>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Already a member?{' '}
              <Link to="/login" className="font-medium text-emerald-600 hover:text-emerald-500">
                Sign in
              </Link>
            </p>
          </div>
          <div className="mt-8">
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                    Full Name
                    </label>
                    <div className="mt-1">
                    <input
                        id="full-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    />
                    </div>
                </div>

                <div>
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                    </label>
                    <div className="mt-1">
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                    </label>
                    <div className="mt-1">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    />
                    </div>
                </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                >
                  Create Account
                </button>
              </div>
            </form>
            <div className="mt-6">
                <p className="text-sm text-center text-gray-600">
                    Are you a guide?{' '}
                    <Link to="/register-guide" className="font-medium text-emerald-600 hover:text-emerald-500">
                    Register here
                    </Link>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;