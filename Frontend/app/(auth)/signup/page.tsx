'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You'll need to install axios with `npm install axios` or `yarn add axios`
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import { useAuth } from '../AuthContext';
import { GoogleLogin } from 'react-google-login';
import { loadGapiInsideDOM } from "gapi-script";

export default function SignUp() {
  useEffect(() => {
    document.title = 'Sign Up - HoloLearn'; // Set the title dynamically
  }, []);

  // State hooks to store form field values
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });
  const { setUser, setIsAuthenticated } = useAuth(); // Initialize setIsAuthenticated with an initial value of false

  useEffect(() => {
    (async () => {
      await loadGapiInsideDOM();
    })();
  });

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault(); // Prevent the default form submission
    // Your code here
    try {
      // Send a POST request to the backend signup endpoint
      const response = await axios.post('http://localhost:4000/signup', {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      });

      // Handle success (e.g., navigate to a different page, show a success message, etc.)
      console.log('User signed up:', response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setIsAuthenticated(true); // Set authentication to true
      // success message to the user on the snackbar
      setSnackbar({ open: true, message: 'User signed up successfully', severity: 'success' });

      window.location.href = '/signin';

    } catch (error) {
      // Handle error (e.g., show error message to the user)
      // if response status code is 400, it means the user already exists show card 
      // with message that user already exists
      setSnackbar({ open: true, message: 'User already exists', severity: 'error' });


      if (axios.isAxiosError(error)) {
        console.error('Signup failed:', error.response?.data?.error);
      }
    }
  };

  // Function to close the Snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const responseGoogle = async (response: any) => {
    console.log('Google response:', response);

    if (response.error) {
      console.error('Error from Google Sign In:', response.error);
      setSnackbar({ open: true, message: `Google Sign In Error: ${response.error}`, severity: 'error' });
      return;
    }

    if (!response.tokenId) {
      console.error('Token ID is undefined');
      setSnackbar({ open: true, message: 'Token ID is undefined. Cannot proceed with sign in.', severity: 'error' });
      return;
    }

    try {
      const res = await axios.post('http://localhost:4000/google-signup', {
        tokenId: response.tokenId,
      });

      console.log('Backend response:', res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setIsAuthenticated(true);
      setUser(res.data.user);

      setSnackbar({ open: true, message: 'User signed up successfully', severity: 'success' });
      window.location.href = '/dashboard';

    } catch (error) {
      console.error('Sign in failed:', error);
      setSnackbar({ open: true, message: 'Sign in failed. Please try again.', severity: 'error' });
    }
  };


  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome. We exist to make learning easier.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <GoogleLogin

                    render={renderProps => (
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                        <span className="flex-auto pl-16 pr-8 -ml-16"
                        >Sign up with Google</span>
                      </button>
                    )}

                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    clientId="286133937381-1cjo5acc5pumi8afqh3vnig2o27tfcsr.apps.googleusercontent.com"
                    cookiePolicy={'single_host_origin'}
                  />
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-400">Or, register with your email</div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>

            {/* Form */}

            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 py-2">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">First Name <span className="text-red-600">*</span></label>
                  <input id="full-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="First name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 py-2">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Last Name <span className="text-red-600">*</span></label>
                  <input id="company-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 py-2">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email Address<span className="text-red-600">*</span></label>
                  <input id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="Your Email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required />

                </div>
              </div>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3 py-2">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                  <input id="password"
                    type="password"
                    className="form-input w-full text-gray-300"
                    placeholder="Password (at least 10 characters)"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required />
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center py-1">
                I agree to be contacted by HoloLearn about this offer as per the HoloLearn <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Already using HoloLearn? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
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
