'use client'
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import { useAuth } from '@/app/(auth)/AuthContext';
import { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { loadGapiInsideDOM } from "gapi-script";

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  useEffect(() => {
    // Perform logout logic
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  const handleLogout = async (): Promise<void> => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setIsAuthenticated(false);
      window.location.href = '/';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <div className="flex items-center">
                <img src="/images/H_logo.png" alt="HoloLearn" width="25" height="25" />
                <h1 className="text-purple-600 text-3xl font-bold ml-0.5">oloLearn</h1>
              </div>
            </Link>
          </div>

          {/* Conditional rendering based on authentication status */}
          {isAuthenticated ? (
            <div className="flex items-center">

              {/* dashboard link */}
              <Link href="/dashboard" className="font-bold  text-white  text-purple-600 hover:text-gray-400 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                Dashboard
              </Link>


              {/* Replace with your profile icon component */}
              <button onClick={handleLogout} className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                Logout
              </button>

              {/* profile user icon from material UI*/}
              <div className="ml-4">

                <Link href="/profile">
                  {/* <a> */}
                  <AccountCircleIcon sx={{ fontSize: 40 }} color="inherit" />
                  {/* </a> */}
                </Link>
              </div>

            </div>
          ) : (
            <nav className="hidden md:flex md:grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    href="/signin"
                    className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                    Sign up
                  </Link>
                </li>
              </ul>
            </nav>
          )}

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
