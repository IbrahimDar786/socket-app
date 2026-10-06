import styles from './ChatWindow.module.css';

import ChatHeader from '../ChatHeader/ChatHeader';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';

const ChatWindow = ({ conversation, socket }) => {
    if (!conversation) {
        return (
            <div className={styles.empty}>
                <p>Select a conversation to start chatting.</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <ChatHeader conversation={conversation} />
            <MessageList conversation={conversation} socket={socket} />
            <MessageInput conversation={conversation} socket={socket} />
        </div>
    );
};

export default ChatWindow;