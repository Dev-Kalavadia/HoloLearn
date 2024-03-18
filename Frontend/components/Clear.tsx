import React from 'react';
import styles from './Clear.module.css';

// Define the interface for the props
interface ClearProps {
    onClick: () => void;
}

const Clear: React.FC<ClearProps> = ({ onClick }) => {
    return (
        <button className={styles.wrapper} onClick={onClick}>
            Clear
        </button>
    );
};

export default Clear;
