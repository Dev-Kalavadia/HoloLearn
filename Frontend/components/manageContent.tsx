"use client";
import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/RemoveRedEye'; // or any other suitable icon
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import styles from './manageContent.module.css';
import { useAuth } from '@/app/(auth)/AuthContext';
import Preview from './dialogue';

interface ManageContentsProps {
    userEmail: string | null;
}

const ManageContents: React.FC<ManageContentsProps> = ({ userEmail }) => {
    const [contents, setContents] = useState<{ name: string, path: string, size: string }[]>([]);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });
    const [previewOpen, setPreviewOpen] = useState(false);
    const [currentPreviewContent, setCurrentPreviewContent] = useState<{ name: string; path: string; size: string; } | null>(null);
    const [previewImage, setPreviewImage] = useState<{ url: string; fileType: string } | null>(null);


    const handlePreview = (content: { name: string, path: string, size: string }) => {
        console.log(content);
        setCurrentPreviewContent(content);
        setPreviewOpen(true);
        
    };

    const fetchPreviewContent = async (contentName: string, fileType: string) => {
        try {
            const userEmail = encodeURIComponent(user?.email || '');
            const response = await fetch(`http://localhost:4000/get-preview-content?email=${userEmail}&contentName=${contentName}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Determine the content type based on the file type (e.g., image or PDF)
            const contentType = fileType === 'pdf' ? 'application/pdf' : 'image/*'; // Update as needed

            // Create a Blob from the response data with the specified content type
            const blob = await response.blob();
            const blobWithType = new Blob([blob], { type: contentType });

            // Display the preview content (image or PDF) in a new window or modal
            if (fileType === 'pdf') {
                // For PDFs, you can open them in a new tab or window
                const url = window.URL.createObjectURL(blobWithType);
                window.open(url, '_blank'); // Opens in a new window or tab
            } else {
                // For images, you can open them in a modal dialog
                const imageUrl = window.URL.createObjectURL(blobWithType);
                setPreviewImage({ url: imageUrl, fileType: fileType });
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unknown error occurred';
            console.error(message);
            // Handle any error, such as displaying an error message to the user
            setSnackbar({ open: true, message, severity: 'error' });
        }
    };



    const user = useAuth().user;
    const fetchContents = async () => {
        if (!user?.email) {
            setSnackbar({ open: true, message: 'User email is required', severity: 'error' });
            return;
        }

        try {
            const response = await fetch(`http://localhost:4000/get-contents?email=${user.email}`);
            if (!response.ok) {
                throw new Error('Failed to fetch contents');
            }
            const data = await response.json();
            console.log(data.contents);
            setContents(data.contents);
        } catch (error) {
            let errorMessage = 'Error fetching contents';
            if (error instanceof Error) {
                console.error('Error fetching contents:', error.message);
                errorMessage += `: ${error.message}`;
            } else {
                console.error('Error fetching contents:', error);
            }
            setSnackbar({ open: true, message: errorMessage, severity: 'error' });
        }
    };

    useEffect(() => {
        fetchContents();
    }, []);

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const handleDownload = async (contentName: string, fileType: string) => {
        try {
            const userEmail = encodeURIComponent(user?.email || '');
            const response = await fetch(`http://localhost:4000/get-content?email=${userEmail}&contentName=${contentName}`);
            if (!response.ok) {
                throw new Error('content download failed');
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
            a.download = contentName + '.' + fileType;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url); // Clean up the URL object
            a.remove(); // Remove the anchor from the DOM

            setSnackbar({ open: true, message: 'Content downloaded successfully', severity: 'success' });
        } catch (error) {
            const message = error instanceof Error ? error.message : 'An unknown error occurred';
            console.error(message);
            setSnackbar({ open: true, message, severity: 'error' });
        }
    };

    const handleDelete = async (contentName: string) => {
        try {
            const response = await fetch('http://localhost:4000/delete-content', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: user?.email, contentName }),
            });
            if (!response.ok) {
                throw new Error('Content deletion failed');
            }
            // Assuming the content is deleted successfully, update the UI accordingly:
            setContents(contents.filter(content => content.name !== contentName));
            setSnackbar({ open: true, message: 'Content deleted successfully', severity: 'success' });
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                setSnackbar({ open: true, message: error.message, severity: 'error' });
            }
        }
    };

    return (
        <div
            style={{
                paddingTop: '2rem',
            }}
        >
            {contents.length > 0 ? (

                <TableContainer component={Paper} className={`${styles.tableContainer} ${styles.customPaper}`}>
                    <Table sx={{ minWidth: 650 }} aria-label="contents table">
                        <TableHead className={styles.tableHead}>
                            <TableRow>
                                <TableCell className={styles.tableCellHead} >Content Name</TableCell>
                                <TableCell className={styles.tableCellHead} >Content ID</TableCell>
                                <TableCell className={styles.tableCellHead} >Content Size</TableCell>
                                <TableCell className={styles.tableCellHead} >File Type</TableCell>
                                <TableCell className={styles.tableCellHead} align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contents.map((content) => (
                                <TableRow
                                    key={content.path}
                                    className={styles.tableRow}
                                >
                                    <TableCell className={styles.tableCell} component="th" scope="row">
                                        {content.name}
                                    </TableCell>
                                    <TableCell className={styles.tableCell} >{content.path.split('.')[0].split('/content-')[1]}</TableCell>
                                    <TableCell className={styles.tableCell} >{(parseInt(content.size) / 1000000).toFixed(2)} MB</TableCell>
                                    <TableCell className={styles.tableCell} >{content.path.split('.')[1]}</TableCell>
                                    <TableCell className={styles.tableCell} align="right">
                                        {/* Icon button for preview of file which opens in a dialogue box wither images of pdfs */}
                                        <IconButton onClick={() => handlePreview(content)} aria-label="preview">

                                            <PreviewIcon />
                                        </IconButton>

                                        {previewOpen && currentPreviewContent && (
                                            <Preview
                                                previewOpen={previewOpen}
                                                setPreviewOpen={setPreviewOpen}
                                                fetchPreviewContent={fetchPreviewContent}
                                                content={currentPreviewContent
                                                }
                                            />
                                        )}


                                        <IconButton
                                            // pass tje content name along with the file type  <TableCell className={styles.tableCell} >{content.path.split('.')[1]}</TableCell>
                                            onClick={() => handleDownload(content.name
                                                , content.path.split('.')[1])}
                                            className={styles.iconButtonDownload} aria-label="download">
                                            <DownloadIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleDelete(content.name)} className={styles.iconButtonDelete} aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <p>No contents uploaded</p>
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

export default ManageContents;