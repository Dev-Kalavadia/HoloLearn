// modal component
'use client'
import { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { useAuth } from '@/app/(auth)/AuthContext';

import styles from './UploadAssetModal.module.css';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';

export default function UploadAssetModal() {
    const { user } = useAuth();
    const [file, setFile] = useState<File | null>(null);
    const [assetName, setAssetName] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => {
        setOpenModal(false);
        setFile(null);
        setAssetName('');
    };

    const [uploadClicked, setUploadClicked] = useState(false);

    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) {
            return;
        }

        const file = files[0];

        // if assetName name is not valid or empty, display error message
        if (!assetName || assetName.length < 1 || assetName.length > 50) {
            setSnackbar({ open: true, message: 'Invalid file name. Please enter a valid file name.', severity: 'error' });
        }


        if (/\.(obj|fbx|stl|amf|zip|glb)$/i.test(file.name)) {
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

    const handleAssetUpload = async () => {
        if (!file || !assetName || !user) {
            setSnackbar({ open: true, message: 'Please provide a file and asset name.', severity: 'error' });
            console.log(file, assetName, user);
            return;
        }

        const formData = new FormData();
        formData.append('asset', file);
        formData.append('email', user.email);
        formData.append('assetName', assetName);

        setUploadClicked(true);

        try {
            const response = await fetch('http://localhost:4000/upload-asset', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                handleCloseModal();
                window.location.href = '/dashboard';
                // setAssets(currentAssets => [...currentAssets, result.asset]);
                setSnackbar({ open: true, message: 'Asset uploaded successfully', severity: 'success' });
            } else {
                const errorResponse = await response.text();
                setSnackbar({ open: true, message: errorResponse || 'Asset upload failed. Please try again.', severity: 'error' });
            }
        } catch (error) {
            setSnackbar({ open: true, message: 'Network error: Failed to upload asset.', severity: 'error' });
        }
    };


    const handleCloseSnackbar = () => {



        setSnackbar({ ...snackbar, open: false });
    };


    return (
        <>
            <div>
                <button className={styles.uploadAssetButton} onClick={handleOpenModal}>Upload Asset</button>
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="upload-asset-modal"
                    aria-describedby="modal-to-upload-assets"
                >
                    <Box className={styles.modalBox}>
                        <h2
                            id="upload-asset-modal"
                            className={styles.modalTitle}
                        >Upload Asset</h2>
                        <TextField
                            label="Asset Name"
                            variant="outlined"
                            fullWidth
                            required
                            className={uploadClicked && !assetName ? 'error' : ''}
                            margin="normal"
                            value={assetName}
                            onChange={(e) => setAssetName(e.target.value)}
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
                            We recommend uploading assets in zip format. <br />Allowed file types: .obj, .fbx, .stl, .amf, .dae, .glb, .gltf, .ply, .x3d, .3mf, .zip
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
                                Drop your asset here or Click to Upload
                            </label>
                            <input
                                id="file-upload"
                                type="file"
                                accept=".obj, .fbx, .stl, .amf, .dae, .glb, .gltf, .ply, .x3d, .3mf, .zip"
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
                        <Button className={styles.uploadAssetButton} onClick={handleAssetUpload}>Upload</Button>
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

