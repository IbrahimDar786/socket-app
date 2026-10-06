import styles from './MessageInput.module.css';
import { useState } from 'react';
const MessageInput = ({conversation, socket }) => {
  const [message, setMessage] = useState('');
    const handleSend = () => {
        if (!message.trim() || !conversation || !socket) return;

        socket.emit('send_message', {
            conversationId: conversation.id,
            receiverId: conversation.user.id,
            message: message.trim(),
        });

        setMessage('');
    };
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                placeholder="Type a message..."
            />

            <button onClick={handleSend} className={styles.sendButton}>
                Send
            </button>
        </div>
    );
};

export default MessageInput;