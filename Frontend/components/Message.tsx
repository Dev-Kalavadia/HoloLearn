import React from 'react';
import botImage from '../public/images/H_logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import styles from "./Message.module.css";

type MessageProps = {
    role: string;
    content: string;
};

const Message: React.FC<MessageProps> = ({ role, content }) => {
    return (
        <div className={styles.wrapper}>
            <div>
                {role === 'assistant' ? (
                    <img
                        src={botImage.src}
                        className={styles.avatar}
                        alt="assistant avatar"
                    />
                ) : (
                    <AccountCircleIcon sx={{ fontSize: 45 }} className={styles.avatar} />
                )}
            </div>
            <div className={styles.content}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Message;
