import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
    const listIcons = [
        {
            icon: FaFacebook
        },
        {
            icon: FaInstagram
        },
        {
            icon: FaLinkedin
        },
    ]

    return (
        <footer>
            <ul className={ styles.social_list }>
                {listIcons.map((icon, index) => (
                    <li
                        key={index}
                        className={styles.list_icons}
                    >
                        <icon.icon className={styles.svg} />
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer