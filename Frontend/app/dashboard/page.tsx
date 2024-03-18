"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Dashboard.module.css';
import QRCode from 'qrcode.react';
import { TextField } from '@mui/material';
import UploadAssetModal from '@/components/uploadAssetModal';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import ManageAssets from '@/components/manageAsset';
import { useAuth } from '@/app/(auth)/AuthContext';
import ManageContents from '@/components/manageContent';
import UploadContentModal from '@/components/uploadContentModal';
import Chat from '@/components/chat';
import './Chat.css';

export default function Dashboard() {
    // localStorage  // Access localStorage in useEffect
    const [activeTab, setActiveTab] = useState('holotutor'); // Initialize with default value

    useEffect(() => {
        document.title = 'Dashboard - HoloLearn';

        // Check if window is defined (this means we're on the client side)
        if (typeof window !== "undefined") {
            const storedActiveTab = localStorage.getItem('activeTab');
            if (storedActiveTab) {
                setActiveTab(storedActiveTab);
            }
        }
    }, []);

    const handleTabChange = (tabName: string) => {
        setActiveTab(tabName);
        // Make sure window is defined before using localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem('activeTab', tabName);
        }
    }

    const [qrValue, setQrValue] = useState(''); // State to store the value to encode in the QR code
    const qrRef = useRef<SVGSVGElement | null>(null);
    const user = useAuth().user;
    const [isUserLoaded, setIsUserLoaded] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

    const handleDownload = (fileName: string) => {
        const canvas = document.getElementById('123456') as HTMLCanvasElement;
        const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        let downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = `${fileName}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    useEffect(() => {
        if (user) {
            setIsUserLoaded(true);
        }
    }, [user]);


    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };


    return (
        <>
            <div className={styles.dashboardContainer}>
                {/* Sidebar */}
                <div className={styles.sidebar}>
                    <ul className={styles.sidebarList}>
                        <li
                            className={activeTab === 'holotutor' ? styles.activeTab : ''}
                            onClick={() => {
                                handleTabChange('holotutor')
                            }}
                        >
                            HoloTutor
                        </li>
                        <li
                            className={activeTab === 'manage-assets' ? styles.activeTab : ''}
                            onClick={() => {
                                handleTabChange('manage-assets')
                            }}
                        >
                            Manage Assets
                        </li>
                        <li
                            className={activeTab === 'manage-content' ? styles.activeTab : ''}
                            onClick={() => handleTabChange('manage-content')}
                        >
                            Manage Content
                        </li>
                        <li
                            className={activeTab === 'generate-qr' ? styles.activeTab : ''}
                            onClick={() => handleTabChange('generate-qr')}
                        >
                            Generate QR
                        </li>
                    </ul>
                </div>

                {/* Main content */}
                <div className={styles.mainContent}>

                    {user && activeTab === 'holotutor' && (
                        <div>
                            <h1 className={styles.heading}>HoloTutor</h1>
                            <div className={styles.chatContainer}>
                                <Chat />
                            </div>
                        </div>
                    )}

                    {user && activeTab === 'manage-assets' && (
                        <div>
                            <h1 className={styles.heading}>Manage Assets</h1>
                            <UploadAssetModal />
                            <div className={styles.manageAssetsContainer}>
                                <ManageAssets userEmail={user.email} />
                            </div>
                        </div>
                    )}

                    {user && activeTab === 'manage-content' && (
                        <div>
                            <h1 className={styles.heading}>Manage Content</h1>
                            <UploadContentModal />
                            <div className={styles.manageAssetsContainer}>
                                <ManageContents userEmail={user.email} />
                            </div>
                        </div>
                    )}

                    {activeTab === 'generate-qr' && (
                        <div>
                            <h1 className={styles.heading}>Generate QR Code</h1>
                            <div className={styles.inputContainer}>
                                <TextField
                                    label="Enter text for QR code"
                                    variant="outlined"
                                    value={qrValue}
                                    onChange={(e) => setQrValue(e.target.value)}
                                    margin="normal"
                                    fullWidth
                                    className={styles.textField} // This should be the name of the class you have defined in your CSS module for the text field.
                                    InputLabelProps={{
                                        className: styles.inputLabel // This should be the name of the class you have defined in your CSS module for the label.
                                    }}
                                    InputProps={{
                                        className: styles.input // This should be the name of the class you have defined in your CSS module for the input.
                                    }}
                                    sx={{
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'transparent',
                                            boxShadow: 'none',
                                        },
                                    }}
                                />
                            </div>
                            <div className={styles.qrCodeContainer}>
                                <QRCode
                                    level={"H"}
                                    includeMargin={true}
                                    id="123456"
                                    value={qrValue}
                                    size={256} />
                            </div>
                            <div className={styles.downloadButtonContainer}>
                                <button className={styles.downloadButton}
                                    onClick={
                                        () => handleDownload(qrValue)
                                    }
                                >Download QR Code</button>
                            </div>
                        </div>
                    )}
                </div>
            </div >

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

