import { useState } from 'react';
import styles from './Chat.module.css';
import useChat from '../../hooks/useChat';
import ConversationList from './ConversationList/ConversationList';
import ChatWindow from './ChatWindow/ChatWindow';

const Chat = () => {

  const socket = useChat();
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className={styles.container}>
      <ConversationList
        selectedConversation={selectedConversation}
        onSelectConversation={setSelectedConversation}
      />

      <ChatWindow
        conversation={selectedConversation}
        socket={socket}
      />
    </div>
  );
};

export default Chat;