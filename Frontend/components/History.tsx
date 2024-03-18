import React from 'react';
import styles from "./History.module.css";

// Define the interface for the props
interface HistoryProps {
    question: string;
    onClick: () => void;
}

const History: React.FC<HistoryProps> = ({ question, onClick }) => {
    return (
        <div className={styles.wrapper} onClick={onClick}>
            <p>{question.substring(0, 15)}...</p>
        </div>
    );
};

export default History;
