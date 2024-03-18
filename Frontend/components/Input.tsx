import React from 'react';
import styles from "./Input.module.css";

// Define the interface for the props
interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, onClick }) => {
  // Function to handle key press
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.text}
        placeholder="Ask HoloTutor your question..."
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress} // Add key press handler here
      />
      <button className={styles.btn} onClick={onClick}>
        Go
      </button>
    </div>
  );
};

export default Input;
