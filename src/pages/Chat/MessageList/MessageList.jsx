import { useEffect, useState } from 'react';
import styles from './MessageList.module.css';
import MessageBubble from '../MessageBubble/MessageBubble';
import { getMessages } from '../../../services/chatApi';
import { useAuth } from '../../../context/AuthContext';

const MessageList = ({ conversation, socket }) => {
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!conversation) return;

    const loadMessages = async () => {
      try {
        const token = localStorage.getItem('token');
        const data = await getMessages(conversation.id, token);

        if (data.success) {
          setMessages(data.messages);
        }
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    };

    loadMessages();
  }, [conversation]);

  useEffect(() => {
    if (!socket) return;

    const handleReceiveMessage = (message) => {
      if (message.conversationId !== conversation?.id) return;

      setMessages((prev) => [...prev, message]);
    };

    socket.on('receive_message', handleReceiveMessage);

    return () => {
      socket.off('receive_message', handleReceiveMessage);
    };
  }, [socket, conversation]);

  return (
    <div className={styles.container}>
      {messages.map((message) => (
        <MessageBubble
          key={message._id}
          type={
            message.senderId?.toString() === user?.id?.toString()
              ? 'outgoing'
              : 'incoming'
          }
          message={message.message}
          time={new Date(message.createdAt).toLocaleTimeString()}
        />
      ))}
    </div>
  );
};

export default MessageList;