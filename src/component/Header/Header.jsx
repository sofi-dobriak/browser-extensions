import styles from './Header.module.css';
import { IoExtensionPuzzleOutline } from 'react-icons/io5';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const Header = ({ toggleTheme, theme }) => {
    return (
        <div className={styles.headerBackdrop}>
            <div className={styles.iconTitleContainer}>
                <IoExtensionPuzzleOutline className={styles.icon} />
                <p className={styles.headerTitle}>Extensions</p>
            </div>
            <button onClick={toggleTheme} className={styles.buttonTheme}>
                {theme === 'dark' ? (
                    <IoSunnyOutline className={styles.buttonThemeIcon} />
                ) : (
                    <IoMoonOutline className={styles.buttonThemeIcon} />
                )}
            </button>
        </div>
    );
};

export default Header;
