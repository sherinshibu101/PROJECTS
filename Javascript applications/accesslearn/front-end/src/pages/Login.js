import '../index.css';
import Header from '../components/Header.js';
import React, { useState } from 'react';
import { Mail, Eye, EyeOff } from 'lucide-react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onLogInClicked = async (e) => {
    e.preventDefault(); // Prevent default form submit

    // Dummy logic for now
    if (!emailValue || !passwordValue) {
      setErrorMessage('Email and password are required.');
      return;
    }

    alert('Log in not implemented yet');
    // history.push('/dashboard'); // Uncomment when implementing navigation
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="relative w-full min-h-screen flex flex-col items-center justify-center py-12 px-6 overflow-hidden">
        <div className="bg-[#e5a9b8]">
          <div className="w-80 p-6 rounded-md bg-white shadow-md">
            <h2 className="text-5xl text-center mb-6 text-gray-800 text-corinthia">Log In</h2>

            {errorMessage && (
              <div className="text-red-600 text-center mb-4 text-sm">{errorMessage}</div>
            )}

            <form className="space-y-4" onSubmit={onLogInClicked}>
              {/* Email Input */}
              <div className="relative text-simonetta leading-relaxed">
                <input
                  type="email"
                  placeholder="someone@gmail.com"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded pr-10 focus:outline-none focus:ring-1 focus:ring-pink-300"
                />
                <Mail className="absolute right-3 top-2.5 text-gray-400" size={18} />
              </div>

              {/* Password Input */}
              <div className="relative text-simonetta leading-relaxed">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="password"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded pr-10 focus:outline-none focus:ring-1 focus:ring-pink-300"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2.5 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Log In Button */}
              <button
                type="submit"
                disabled={!emailValue || !passwordValue}
                className={`w-full p-2 text-gray-700 rounded transition duration-200 text-simonetta leading-relaxed ${
                  !emailValue || !passwordValue
                    ? 'bg-pink-50 cursor-not-allowed'
                    : 'bg-pink-100 hover:bg-pink-200'
                }`}
              >
                Log In
              </button>

              {/* Forgot Password */}
              <button
                type="button"
                onClick={() => alert('Redirect to password recovery')}
                className="w-full p-2 bg-pink-100 hover:bg-pink-200 text-gray-700 rounded transition duration-200 text-simonetta leading-relaxed"
              >
                Forgot your password?
              </button>

              {/* Sign Up */}
              <button
                type="button"
                onClick={() => history.push('/signup')}
                className="w-full p-2 bg-pink-100 hover:bg-pink-200 text-gray-700 rounded transition duration-200 text-simonetta leading-relaxed"
              >
                Don't have an account? Sign Up
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
