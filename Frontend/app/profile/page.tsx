// Profile page
'use client'
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/app/(auth)/AuthContext';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import styles from './profile.module.css'; // Import the CSS module

interface User {
    name?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    assets?: { /* Define asset structure here */ }[];
}

const Profile: React.FC = () => {
    useEffect(() => {
        document.title = 'Profile - HoloLearn'; // Set the title dynamically
    }, []);

    const { user, logout } = useAuth();
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

    if (!user) {
        return <div className={styles.loading}>Loading...</div>;
    }

    const { isAuthenticated, setIsAuthenticated } = useAuth();

    useEffect(() => {
        // Perform logout logic
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, [setIsAuthenticated]);

    const handleDeleteUser = async () => {
        if (!user?.email) {
            // Display an error message if the user's email is not available
            setSnackbar({ open: true, message: 'User email is required', severity: 'error' });
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/delete-user', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: user.email })
            });

            if (!response.ok) {
                throw new Error('Failed to delete user');
            }

            const data = await response.json();
            setSnackbar({ open: true, message: data.message, severity: 'success' });

            // Additional actions after successful deletion
            // e.g., redirecting the user, clearing local user data, etc.
            // ...
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setIsAuthenticated(false);
            window.location.href = '/';

        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unknown error occurred';
            console.error(message);
            setSnackbar({ open: true, message, severity: 'error' });
        }
    };

    const userProfile = user as User; // Typecasting to ensure proper typing

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <>
            <div className={styles.profileContainer}>
                <h1 className={styles.profileTitle}>Profile</h1>
                <p className={styles.profileSubtitle}>Welcome, {userProfile.firstname || userProfile.name || 'User'}!</p>
                <p className={styles.profileDetail}><strong>Name:</strong> {userProfile.firstname} {userProfile.lastname}</p>
                <p className={styles.profileDetail}><strong>Number of Assets:</strong> {userProfile.assets?.length}</p>
                <p className={styles.profileDetail}><strong>Email:</strong> {userProfile.email}</p>
                <button onClick={handleDeleteUser} className={styles.logoutButton}>Delete Account</button>
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
        </>
    );
}

export default Profile;
