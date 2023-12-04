"use client";
import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import styles from './manageAsset.module.css';
import { useAuth } from '@/app/(auth)/AuthContext';
import * as QRCode from 'qrcode';

interface ManageAssetsProps {
    userEmail: string | null;
}

const ManageAssets: React.FC<ManageAssetsProps> = ({ userEmail }) => {
    const [assets, setAssets] = useState<{ name: string, path: string, size: string }[]>([]);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });
    const user = useAuth().user;
    const fetchAssets = async () => {
        if (!user?.email) {
            setSnackbar({ open: true, message: 'User email is required', severity: 'error' });
            return;
        }

        try {

            const response = await fetch(`http://localhost:4000/get-assets?email=${user.email}`);
            if (!response.ok) {
                throw new Error('Failed to fetch assets');
            }
            const data = await response.json();
            console.log(data.assets);
            setAssets(data.assets);
        } catch (error) {
            let errorMessage = 'Error fetching assets';
            if (error instanceof Error) {
                console.error('Error fetching assets:', error.message);
                errorMessage += `: ${error.message}`;
            } else {
                console.error('Error fetching assets:', error);
            }
            setSnackbar({ open: true, message: errorMessage, severity: 'error' });
        }
    };

    useEffect(() => {
        fetchAssets();
    }, []); // Empty dependency array ensures fetchAssets is called only once when the component mounts


    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const handleDownload = async (assetName: string, fileType: string) => {
        try {
            const userEmail = encodeURIComponent(user?.email || '');
            const response = await fetch(`http://localhost:4000/get-asset?email=${userEmail}&assetName=${assetName}`);
            if (!response.ok) {
                throw new Error('Asset download failed');
            }

            // Use the MIME type from the response, defaulting to 'application/octet-stream' if not present
            const mimeType = response.headers.get('Content-Type') || 'application/octet-stream';

            // Create a Blob from the response data with the MIME type
            const blob = await response.blob();
            const blobWithType = new Blob([blob], { type: mimeType });
            const url = window.URL.createObjectURL(blobWithType);

            // Create a temporary anchor element and trigger a download
            const a = document.createElement('a');
            a.href = url;
            a.download = assetName + '.' + fileType;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url); // Clean up the URL object
            a.remove(); // Remove the anchor from the DOM

            setSnackbar({ open: true, message: 'Asset downloaded successfully', severity: 'success' });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unknown error occurred';
            console.error(message);
            setSnackbar({ open: true, message, severity: 'error' });
        }
    };

    const handleDelete = async (assetName: string) => {
        try {
            const response = await fetch('http://localhost:4000/delete-asset', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: user?.email, assetName }),
            });
            if (!response.ok) {
                throw new Error('Asset deletion failed');
            }
            // Assuming the asset is deleted successfully, update the UI accordingly:
            setAssets(assets.filter(asset => asset.name !== assetName));
            setSnackbar({ open: true, message: 'Asset deleted successfully', severity: 'success' });
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                setSnackbar({ open: true, message: error.message, severity: 'error' });
            }
        }
    };

    const handleQRcodeDownload = async (
        assetId: string,
    ) => {
        try {
            // Generate QR code
            const qrData = assetId; // Replace with your asset-specific data
            const qrCodeDataURL = await QRCode.toDataURL(qrData);

            // Create a temporary link to trigger download
            const downloadLink = document.createElement('a');
            downloadLink.href = qrCodeDataURL;
            downloadLink.download = `QRCode-${assetId}.png`; // Filename for the download

            // Append to the DOM and trigger click
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } catch (error) {
            console.error('Error generating QR code: ', error);
            setSnackbar({ open: true, message: 'Error generating QR code', severity: 'error' });
        }
    };



    return (
        <div
            style={{
                paddingTop: '2rem',
            }}
        >
            {assets.length > 0 ? (

                <TableContainer component={Paper} className={`${styles.tableContainer} ${styles.customPaper}`}>
                    <Table sx={{ minWidth: 650 }} aria-label="assets table">
                        <TableHead className={styles.tableHead}>
                            <TableRow>
                                <TableCell className={styles.tableCellHead} >Asset Name</TableCell>
                                <TableCell className={styles.tableCellHead} >Asset ID</TableCell>
                                <TableCell className={styles.tableCellHead} >Asset Size</TableCell>
                                <TableCell className={styles.tableCellHead} >File Type</TableCell>
                                <TableCell className={styles.tableCellHead} align="right">QR Code</TableCell>
                                <TableCell className={styles.tableCellHead} align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {assets.map((asset) => (
                                <TableRow
                                    key={asset.path}
                                    className={styles.tableRow}
                                >
                                    <TableCell className={styles.tableCell} component="th" scope="row">
                                        {asset.name}
                                    </TableCell>
                                    <TableCell className={styles.tableCell} >{asset.path.split('.')[0].split('/asset-')[1]}</TableCell>
                                    <TableCell className={styles.tableCell} >{(parseInt(asset.size) / 1000000).toFixed(2)} MB</TableCell>
                                    <TableCell className={styles.tableCell} >{asset.path.split('.')[1]}</TableCell>
                                    {/* add a button with left padding which says Get QR */}
                                    <TableCell className={styles.tableCell} align="right">
                                        <Button variant="contained" className={styles.button}
                                            onClick={() => handleQRcodeDownload(asset.path.split('.')[0].split('/asset-')[1])}>
                                            Get QR
                                        </Button>
                                    </TableCell>

                                    <TableCell className={styles.tableCell} align="right">
                                        <IconButton
                                            // pass tje asset name along with the file type  <TableCell className={styles.tableCell} >{asset.path.split('.')[1]}</TableCell>
                                            onClick={() => handleDownload(asset.name
                                                , asset.path.split('.')[1])}
                                            className={styles.iconButtonDownload} aria-label="download">
                                            <DownloadIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(asset.name)} className={styles.iconButtonDelete} aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <p>No assets uploaded</p>
            )}
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
        </div>
    );
};

export default ManageAssets;