import styles from './ExtensionsList.module.css';
import ExtensionItem from '../ExtensionItem/ExtensionItem';

const ExtensionsList = ({ extensions, toggleActiveState, deleteExtension }) => {
    return (
        <ul className={styles.extensionsList}>
            {extensions.map(({ id, logo, name, description, isActive }) => (
                <ExtensionItem
                    key={id}
                    id={id}
                    logo={logo}
                    name={name}
                    description={description}
                    isActive={isActive}
                    toggleActiveState={toggleActiveState}
                    deleteExtension={deleteExtension}
                />
            ))}
        </ul>
    );
};

export default ExtensionsList;
