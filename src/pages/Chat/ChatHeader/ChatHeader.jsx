import styles from './ChatHeader.module.css';

const ChatHeader = ({ conversation }) => {
    return (
        <header className={styles.container}>
            <div className={styles.left}>
                <button className={styles.backButton}>
                    ←
                </button>

                <img
                    className={styles.avatar}
                    src={conversation.avatar}
                    alt={conversation.name}
                />

                <div className={styles.info}>
                    <h3 className={styles.name}>
                        {conversation.name}
                    </h3>

                    <div className={styles.status}>
                        <span className={styles.statusDot}></span>
                        <span>Online</span>
                    </div>
                </div>
            </div>

            <div className={styles.actions}>
                <button className={styles.actionButton}>
                    📹
                </button>

                <button className={styles.actionButton}>
                    ⋮
                </button>
            </div>
        </header>
    );
};

export default ChatHeader;