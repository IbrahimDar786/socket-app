
import styles from './ConversationItem.module.css';

const ConversationItem = ({ conversation, onSelect }) => {
    return (
        <div
            className={styles.container}
            onClick={() => onSelect(conversation)}
        >
            <img
                className={styles.avatar}
                src={conversation.user.avatar}
                alt={conversation.user.name}
            />

            <div className={styles.content}>
                <h4 className={styles.name}>
                    {conversation.user.name}
                </h4>

                <p className={styles.message}>
                    {conversation.lastMessage?.text || 'No messages yet'}
                </p>
            </div>

            <div className={styles.meta}>
                <span className={styles.time}>
                    {conversation.lastMessage?.timestamp || ''}
                </span>

                {conversation.unreadCount > 0 && (
                    <span className={styles.unreadBadge}>
                        {conversation.unreadCount}
                    </span>
                )}
            </div>
        </div>
    );
};

export default ConversationItem;

