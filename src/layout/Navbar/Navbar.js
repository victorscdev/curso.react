import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar({ routes }) {
    return (
        <ul className={ styles.list }>
            {routes.map((item, index) => (
                <li key={ index } className={ styles.item }>
                    <Link to={ item.linkTo }>{ item.linkName }</Link>
                </li>
            ))}
        </ul>
    )
}

export default Navbar