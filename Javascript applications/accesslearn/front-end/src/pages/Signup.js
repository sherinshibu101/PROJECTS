import '../index.css';
import Header from '../components/Header.js';
import React, { useState } from 'react';
import { Mail, Eye, EyeOff } from 'lucide-react';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="relative w-full min-h-screen flex flex-col items-center justify-center py-12 px-6 overflow-hidden bg-[#e5a9b8]">
        <div className="w-80 p-6 rounded-md bg-white shadow-md border border-purple-300">
          <h2 className="text-5xl text-center mb-6 text-gray-800 text-corinthia">Sign Up</h2>

          <form className="space-y-6">
            {/* Email Input */}
            <div className="relative text-simonetta leading-relaxed">
              <label className="block mb-1 text-sm text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="someone@gmail.com"
                className="w-full p-2 border border-gray-300 rounded pr-10 focus:outline-none focus:ring-1 focus:ring-purple-300"
              />
              <Mail className="absolute right-3 top-[38px] text-gray-400" size={18} />
            </div>

            {/* Password Input */}
            <div className="relative text-simonetta leading-relaxed">
              <label className="block mb-1 text-sm text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="w-full p-2 border border-gray-300 rounded pr-10 focus:outline-none focus:ring-1 focus:ring-purple-300"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-[38px] text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative text-simonetta leading-relaxed">
              <label className="block mb-1 text-sm text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="reenter password"
                className="w-full p-2 border border-gray-300 rounded pr-10 focus:outline-none focus:ring-1 focus:ring-purple-300"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-[38px] text-gray-400"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full p-2 bg-pink-100 hover:bg-pink-200 text-gray-700 rounded transition duration-200 text-simonetta leading-relaxed"
            >
              Sign Up
            </button>

            {/* Login Link */}
            <p className="text-center text-sm mt-2 text-gray-600 text-simonetta">
              Already have an account?{' '}
              <a href="/login" className="text-purple-500 hover:underline">Log In</a>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
