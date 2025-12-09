import React from "react";

export default function EmergencySection() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2 flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold text-gray-900">With access to</h2>

          {/* 24 Hour box */}
          <span className="inline-block text-4xl font-extrabold text-cyan-600  px-4 py-1 rounded">
            24 Hour
          </span>

          {/* Emergency Assistance */}
          <h3 className="text-3xl font-bold text-gray-900 mt-2">Emergency Assistance</h3>

          <p className="text-gray-700 text-lg mt-4">
            An emergency number is available, through which you can summon an ambulance service from your home, provided by the Best hospital in Jaipur.
          </p>

          {/* Have any Query Box */}
          <div className="mt-6 bg-cyan-100 border-l-4 border-red-600 p-4 rounded shadow-md">
            <h4 className="text-xl font-semibold text-gray-800">Have any Query?</h4>
            <p className="text-gray-700 mt-1">Call Now!</p>
            <div className="flex items-center justify-between mt-2">
              <div className="h-px flex-1 bg-gray-300 mr-2"></div>
              <p className="font-bold text-cyan-800 text-2xl">0141-2551500</p>
              <div className="h-px flex-1 bg-gray-300 ml-2"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 bg-white border border-gray-200 rounded-lg shadow-md p-8">
          <h4 className="text-lg font-semibold text-gray-800">Need Emergency Assistance?</h4>
          <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Book an Appointment</h3>

          <form className="flex flex-col gap-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {/* Select Department */}
            <select
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option>Select Department</option>
              <option>Emergency</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Radiology</option>
              <option>Surgery</option>
            </select>
            {/* Message */}
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={4}
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-cyan-600 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
