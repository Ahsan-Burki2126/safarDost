
import React from 'react';
import { MailIcon } from '../components/icons';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-lg mx-auto lg:max-w-none">
          <div className="text-center">
             <MailIcon className="mx-auto h-12 w-12 text-emerald-600" />
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Have a question or feedback? We'd love to hear from you. Fill out the form below or reach out to us directly.
            </p>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    required
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="mt-10 lg:mt-0">
               <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
               <div className="space-y-6 text-lg text-gray-600">
                   <p>
                    <strong className="block text-gray-800">Email Us:</strong>
                    <a href="mailto:support@safardost.com" className="text-emerald-600 hover:underline">support@safardost.com</a>
                   </p>
                    <p>
                    <strong className="block text-gray-800">Call Us:</strong>
                    <a href="tel:+923001234567" className="text-emerald-600 hover:underline">+92 300 1234567</a>
                   </p>
                   <p>
                    <strong className="block text-gray-800">Address:</strong>
                    123-A, Main Boulevard<br/>
                    Lahore, Pakistan
                   </p>
                   <p>
                    <strong className="block text-gray-800">Business Hours:</strong>
                    Monday - Friday: 9am - 6pm PKT
                   </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
