import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
function Navbar(){
    return(
        <nav className={styles.navBar}>
            <h2 className={styles.title}>My Portfolio</h2>
            <ul className={styles.ulBar}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? 'active' : '')}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({isActive}) => (isActive ? 'active' : '')}>Project</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) => (isActive ? 'active' : '')}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;