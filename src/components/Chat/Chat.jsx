import { useContext } from 'react'
import { ThemeContext } from '../../App';
import styles from './Chat.module.css'
import Button from '../Button/Button';
const Chat = ({ onClick }) => {
    const theme = useContext(ThemeContext);
    //    const className = 'chat-'+theme;
    const style_theme = {
        backgroundColor: `${theme}`,
        color: theme == 'black' ? 'white' : 'black',
    }
    // console.log(theme);

    return (
        <>
            {/* <Button onClick={onClick}>{theme == 'black' ? 'LIGHT' : 'DARK'}</Button> <br /> */}
            <div className={styles.container}>
                {/* 
                <h1 style={style_theme}> HELLO FROM CHAT COMPONENT </h1>
                <button style={style_theme}>Submit</button> <br /> <br />
                <button style={style_theme}>Click</button> */}

                {/* sidebar */}
                <div className={styles.sidebar}>

                </div>

                {/* chat window */}
                <div className={styles.chatContainer}>
                    <div className={styles.chatHeader}></div>
                    <div className={styles.chatWindow}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
