import React from 'react';
import AuthProvider from '../(default)/AuthProvider';
import RootLayout from '.layout/RootLayout'
// Path to your global CSS file
import '../styles.css';

function MyApp({ Component, pageProps }) {
  console.log('MyApp');
  const { setIsAuthenticated } = useAuth(); // Initialize setIsAuthenticated with an initial value of false


  useEffect(() => {
    // Check if there's an authentication token in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // If a token exists, set isAuthenticated to true
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </AuthProvider>
  );
}

export default MyApp;
