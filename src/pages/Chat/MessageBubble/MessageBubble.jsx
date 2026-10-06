import styles from './MessageBubble.module.css';

const MessageBubble = ({ type, message, time }) => {
    return (
        <div
            className={`${styles.wrapper} ${type === 'outgoing' ? styles.outgoing : styles.incoming
                }`}
        >
            <div className={styles.bubble}>
                <p className={styles.message}>{message}</p>
                <span className={styles.time}>{time}</span>
            </div>
        </div>
    );
};

export default MessageBubble;