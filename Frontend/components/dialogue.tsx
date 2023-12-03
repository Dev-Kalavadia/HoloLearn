import React, { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

interface PreviewProps {
  previewOpen: boolean;
  setPreviewOpen: (open: boolean) => void;
  fetchPreviewContent: (contentName: string, fileType: string) => void;
  content: { name: string; path: string; size: string };
}

const Preview: React.FC<PreviewProps> = ({
  previewOpen,
  setPreviewOpen,
  fetchPreviewContent,
  content,
}) => {
  useEffect(() => {
    if (previewOpen) {
      // Fetch and display the content when the modal/dialog is opened
      fetchPreviewContent(content.name, content.path.split('.')[1]);
    }
  }, [previewOpen, content, fetchPreviewContent]);

  const handleClose = () => {
    setPreviewOpen(false);
  };

  // Determine whether the content is an image or a PDF based on its file type
  const isImage = content.path.split('.')[1] !== 'pdf';

  return (
    <Dialog
      open={previewOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="md"
      fullWidth={true}
    >
      <DialogContent>
        {/* Display the content accordingly (image or PDF) */}
        {isImage ? (
          <img
            src={content.path}
            alt={content.name}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        ) : (
          <iframe
            src={content.path}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          ></iframe>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Preview;
