// pages/page.tsx
"use client"

import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react';
import Image from 'next/image';

const BookDoctor: React.FC = () => {
  const [isBooked, setIsBooked] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault();
    if (form.current) {
      emailjs.sendForm(
        'service_jlucb46', 
        'template_88nr2pm', 
        form.current, 
        'Ru9x0aPw_-kAVv19J' // Make sure this is the correct key
      )
      .then(
        () => {
          setIsBooked(true);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Doctor's Image Section */}
      <div className="relative flex-1 hidden lg:block">
        <Image
          src="/Medicare.png" 
          alt="Doctor"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 rounded-r-lg"
        />
      </div>

      {/* Booking Form Section */}
      <div className="flex-1 bg-gray-100 p-8 lg:p-16 flex items-center justify-center">
        <div className="max-w-md w-full">
          {isBooked ? (
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Booked Appointment</h1>
              <p className="text-xl">Thank you for booking with us. We will get in touch with you soon! 👍</p>
            </div>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Book Your Appointment</h1>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="user_name" // Add this line
                    type="text"
                    placeholder="Enter your name"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="user_email" // Add this line
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    id="address"
                    name="user_address" // Add this line
                    type="text"
                    placeholder="Enter your Address"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="preferred_date" // Add this line
                    type="date"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message (Describe your problem)
                  </label>
                  <textarea
                    id="message"
                    name="user_message" // Add this line
                    placeholder="Describe your problem"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3"
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
                >
                  Book Appointment
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <BookDoctor />
    </div>
  );
};

export default Page;
