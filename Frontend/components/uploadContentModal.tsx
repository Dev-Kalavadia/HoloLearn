// modal component
'use client'
import { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { useAuth } from '@/app/(auth)/AuthContext';

import styles from './uploadContentModal.module.css';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';

export default function UploadContentModal() {
    const { user } = useAuth();
    const [file, setFile] = useState<File | null>(null);
    const [contentName, setContentName] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => {
        setOpenModal(false);
        setFile(null);
        setContentName('');
    };

    const [uploadClicked, setUploadClicked] = useState(false);

    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) {
            return;
        }

        const file = files[0];

        // if contentName name is not valid or empty, display error message
        if (!contentName || contentName.length < 1 || contentName.length > 50) {
            setSnackbar({ open: true, message: 'Invalid file name. Please enter a valid file name.', severity: 'error' });
        }


        if (/\.(pdf|jpeg|jpg|png)$/i.test(file.name)) {
            setFile(file);
        }
        else {
            setSnackbar({ open: true, message: 'Invalid file type. Please upload a valid file type.', severity: 'error' });
        }

        if (file.size > 20000000) {
            // Handle error: file too large
            setSnackbar({ open: true, message: 'File size too large. Please upload a file less than 20MB.', severity: 'error' });
        }

    }

    const handleContentUpload = async () => {
        if (!file || !contentName || !user) {
            setSnackbar({ open: true, message: 'Please provide a file and content name.', severity: 'error' });
            console.log(file, contentName, user);
            return;
        }

        const formData = new FormData();
        formData.append('content', file);
        formData.append('email', user.email);
        formData.append('contentName', contentName);

        setUploadClicked(true);

        try {
            const response = await fetch('http://localhost:4000/upload-content', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                handleCloseModal();
                window.location.href = '/dashboard';
                setSnackbar({ open: true, message: 'Content uploaded successfully', severity: 'success' });
            } else {
                const errorResponse = await response.text();
                setSnackbar({ open: true, message: errorResponse || 'Content upload failed. Please try again.', severity: 'error' });
            }
        } catch (error) {
            setSnackbar({ open: true, message: 'Network error: Failed to upload content.', severity: 'error' });
        }
    };


    const handleCloseSnackbar = () => {



        setSnackbar({ ...snackbar, open: false });
    };


    return (
        <>
            <div>
                <button className={styles.uploadContentButton} onClick={handleOpenModal}>Upload content</button>
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="upload-content-modal"
                    aria-describedby="modal-to-upload-contents"
                >
                    <Box className={styles.modalBox}>
                        <h2
                            id="upload-content-modal"
                            className={styles.modalTitle}
                        >Upload Content</h2>
                        <TextField
                            label="Content Name"
                            variant="outlined"
                            fullWidth
                            required
                            className={uploadClicked && !contentName ? 'error' : ''}
                            margin="normal"
                            value={contentName}
                            onChange={(e) => setContentName(e.target.value)}
                            InputLabelProps={{
                                style: { color: '#fff' }, // Adjust label color to white
                            }}
                            InputProps={{
                                style: { color: '#fff' }, // Adjust input text color to white
                            }}

                        />
                        {/* Upload Area */}
                        <p>
                            <br />
                            Please Upload files in image formats for easy integration. <br />Allowed file types: .pdf, .jpeg, .jpg, .png
                        </p>

                        {/* Drag and Drop File Input Container */}
                        <div className={styles.fileInputContainer}
                            onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                            onDrop={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                const files = e.dataTransfer.files;
                                if (!files) {
                                    return;
                                }
                                setFile(files[0]);
                            }}
                        >

                            <label htmlFor="file-upload" className={styles.dropFilePrompt}>
                                Drop your content file here or Click to Upload
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept=".pdf, .jpeg, .jpg, .png"
                                className={styles.customFileInput} // This will be hidden
                                onChange={handleFileInputChange} // Define this function to handle file input change
                                style={{ display: 'none' }} // Hide the input
                            />
                        </div>

                        <div className={styles.chooseFileWrapper}>
                            <label htmlFor="file-upload" className={styles.customFileBtn}>
                                Choose File
                            </label>


                            <div className={styles.fileNameDisplay}>{file && file.name}</div>
                        </div>
                        <Button className={styles.uploadContentButton} onClick={handleContentUpload}>Upload</Button>
                    </Box>
                </Modal>
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

