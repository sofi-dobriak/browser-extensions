import { useEffect, useState } from 'react';
import styles from './Toggle.module.css';

const Toggle = ({ isOn, onToggle, id }) => {
    const [isToggled, setIsToggled] = useState(isOn);
    const toggleId = `toggle-${id}`;

    useEffect(() => {
        setIsToggled(isOn);
    }, [isOn]);

    return (
        <div className={styles.toggleContainer}>
            <input
                type='checkbox'
                id={toggleId}
                className={styles.toggleInput}
                checked={isToggled}
                onChange={() => {
                    setIsToggled(!isToggled);
                    onToggle();
                }}
            />
            <label
                htmlFor={toggleId}
                className={`${styles.toggleLabel} ${isToggled ? styles.on : ''}`}
            ></label>
        </div>
    );
};

export default Toggle;
