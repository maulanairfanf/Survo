import React from 'react';

export default function Settings() {
  return (
    <div className="flex justify-around container mt-12">
      <div>
        <div className="border rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center">Manage Account</p>
        </div>
        <div className="border rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center">Privacy Policy</p>
        </div>
        <div className="border rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center">Terms & Conditions</p>
        </div>
        <div className="border rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center">Copyright Policy</p>
        </div>
        <div className="border rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center">Report a Problem</p>
        </div>
        <div className="border rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center">Help Center</p>
        </div>
        <div className="border rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center">Language</p>
        </div>
      </div>
      <div>
        <div className="border border-red-100 rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center text-red-100">Reward</p>
        </div>
        <div className="border border-red-100 rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center text-red-100">Survey Results</p>
        </div>
        <div className="border border-red-100 rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center text-red-100">Subsciption</p>
        </div>
        <div className="border border-red-100 rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center text-red-100">Share Profile</p>
        </div>
        <div className="border border-red-100 rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center text-red-100">Dark Mode</p>
        </div>
        <div className="border border-red-100 rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center text-red-100">Accessibility</p>
        </div>
        <div className="border border-red-100 rounded-full px-20 py-5 mb-7">
          <p className="text-2xl text-center text-red-100">Clear Cache</p>
        </div>
      </div>
    </div>
  );
}
