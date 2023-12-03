'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import { useAuth } from '../AuthContext';

export default function SignIn() {

  useEffect(() => {
    document.title = 'Sign In - HoloLearn'; // Set the title dynamically
  }, []);

  const { setUser, setIsAuthenticated } = useAuth(); // Initialize setIsAuthenticated with an initial value of false

  // State hooks for form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/signin', {
        email: email,
        password: password,
      });

      console.log(response.data);

      setUser(response.data.user);

      localStorage.setItem('user', JSON.stringify(response.data.user));
      setIsAuthenticated(true); // Set authentication to true

      setSnackbar({ open: true, message: 'User signed in successfully', severity: 'success' });
      localStorage.setItem('token', response.data.token);

      window.location.href = '/dashboard';
       

    } catch (error) {

      if (axios.isAxiosError(error)) {
        switch ((error.response as { status: number }).status) {
          case 401:
            setSnackbar({ open: true, message: 'Invalid user. Please try again.', severity: 'error' });
            break;
          case 402:
            setSnackbar({ open: true, message: 'Invalid password. Please try again.', severity: 'error' });
            break;
          default:
            setSnackbar({ open: true, message: 'Sign in failed. Please try again.', severity: 'error' });
            break;
        }
      } else {
        setSnackbar({ open: true, message: 'Sign in failed. Please try again.', severity: 'error' });
      }
    }
  };

  // Function to close the Snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome back. We exist to make learning easier.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                    <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                    <span className="flex-auto pl-16 pr-8 -ml-16"
                    >Sign in with Google</span>
                  </button>

                  {/* <GoogleSignInButton /> */}

                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-400">Or, sign in with your email</div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="you@yourdomain.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                  <input id="password"
                    type="password"
                    className="form-input w-full text-gray-300"
                    placeholder="Password (at least 10 characters)"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-400 ml-2">Keep me signed in</span>
                    </label>
                    <Link href="/reset-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Forgot Password?</Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign in</button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Don’t you have an account? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
            </div>
          </div>

        </div>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity as AlertColor} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </section>
  )
}
