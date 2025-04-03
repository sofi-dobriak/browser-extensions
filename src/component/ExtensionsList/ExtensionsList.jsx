import styles from './ExtensionsList.module.css';
import ExtensionItem from '../ExtensionItem/ExtensionItem';
import { useState } from 'react';

const ExtensionsList = ({ data }) => {
    const [extensions, setExtensions] = useState(data);

    const toggleActiveState = id => {
        setExtensions(prevExtensions =>
            prevExtensions.map(extension =>
                extension.id === id ? { ...extension, isActive: !extension.isActive } : extension
            )
        );
    };

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
                />
            ))}
        </ul>
    );
};

export default ExtensionsList;
