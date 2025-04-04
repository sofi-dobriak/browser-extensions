import styles from './ExtensionItem.module.css';
import Toggle from '../Toggle/Toggle';

const ExtensionItem = ({
    id,
    logo,
    name,
    description,
    isActive,
    toggleActiveState,
    deleteExtension,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageTextContainer}>
                <img className={styles.image} src={logo} alt='logo' />
                <div className={styles.titleDescContainer}>
                    <h2 className={styles.title}>{name}</h2>
                    <p className={styles.desctiption}>{description}</p>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <button onClick={() => deleteExtension(id)} className={styles.deleteButton}>
                    Remove
                </button>
                <Toggle isOn={isActive} onToggle={() => toggleActiveState(id)} id={id} />
            </div>
        </div>
    );
};

export default ExtensionItem;
