import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem('user');
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('user'); 
    navigate('/signin');
  };

  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">

        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <img src="/images/NASA-Logo-Large.png" alt="NASA Logo" className="h-12 mr-2" />
        </Link>

        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          {isLoggedIn && (
          <li>
            <Link to="/events" className="text-white hover:text-gray-300">
              News & Events
            </Link>
          </li>
          )}
          <li>
            <Link to="/pictures" className="text-white hover:text-gray-300">
              Picture Gallery
            </Link>
          </li>
          <li>

            {isLoggedIn ? (
              <button onClick={handleSignOut} className="text-white hover:text-gray-300">
                Sign Out
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/signin" className="text-white hover:text-gray-300">
                  Sign In
                </Link>
                <span className="text-white">|</span>
                <Link to="/signup" className="text-white hover:text-gray-300">
                  Sign Up
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
