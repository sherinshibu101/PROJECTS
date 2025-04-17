import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function ProfileInfoPage() {
  const [profileInfo, setProfileInfo] = useState({
    favoriteFood: '',
    hairColor: '',
    bio: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({
      ...profileInfo,
      [name]: value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Save logic would go here
    console.log('Saving profile info:', profileInfo);
  };

  const handleReset = () => {
    setProfileInfo({
      favoriteFood: '',
      hairColor: '',
      bio: ''
    });
  };

  const handleLogout = () => {
    // Logout logic would go here
    console.log('Logging out');
  };

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 className="text-xl font-bold mb-4">Info for shaun.linkedin.learning+test2@gmail.com</h1>

      {/* Alert Message */}
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong className="font-bold">
          <AlertTriangle size={20} className="inline align-middle mr-1" />
          Important!
        </strong>
        <span className="block sm:inline"> You won't be able to make any changes until you verify your email.</span>
      </div>

      <form onSubmit={handleSave} className="space-y-4">
        {/* Favorite Food */}
        <div>
          <label htmlFor="favoriteFood" className="block text-sm font-medium text-gray-700">
            Favorite Food:
          </label>
          <input
            type="text"
            id="favoriteFood"
            name="favoriteFood"
            value={profileInfo.favoriteFood}
            onChange={handleInputChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Hair Color */}
        <div>
          <label htmlFor="hairColor" className="block text-sm font-medium text-gray-700">
            Hair Color:
          </label>
          <input
            type="text"
            id="hairColor"
            name="hairColor"
            value={profileInfo.hairColor}
            onChange={handleInputChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Bio */}
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            Bio:
          </label>
          <input
            type="text"
            id="bio"
            name="bio"
            value={profileInfo.bio}
            onChange={handleInputChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="space-y-3">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded border border-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded border border-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            >
              Reset Values
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded border border-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            >
              Log Out
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}