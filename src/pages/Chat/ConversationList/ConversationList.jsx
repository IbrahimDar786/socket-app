
import { useEffect, useState } from 'react';
import styles from './ConversationList.module.css';
import ConversationItem from '../ConversationItem/ConversationItem';
import { getConversations } from '../../../services/chatApi';

const ConversationList = ({ onSelectConversation }) => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const token = localStorage.getItem('token');

                const data = await getConversations(token);

                if (data.success) {
                    setConversations(data.conversations);
                }
            } catch (error) {
                console.error('Failed to fetch conversations:', error);
            }
        };

        fetchConversations();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Messages</h2>

                <input
                    className={styles.search}
                    type="text"
                    placeholder="Search conversations..."
                />
            </div>

            <div className={styles.list}>
                {conversations.map((conversation) => (
                    <ConversationItem
                        key={conversation.id}
                        conversation={conversation}
                        onSelect={onSelectConversation}
                    />
                ))}
            </div>
        </div>
    );
};

export default ConversationList;

