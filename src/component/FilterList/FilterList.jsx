import styles from './FilterList.module.css';

const FilterList = () => {
    return (
        <>
            <h1 className={styles.extesionsListTitle}>Extension List</h1>

            <ul className={styles.extesionsButtonList}>
                <li className={styles.extesionsButtonItem}>
                    <button className={styles.extesionsButton} type='button'>
                        All
                    </button>
                </li>
                <li className={styles.extesionsButtonItem}>
                    <button className={styles.extesionsButton} type='button'>
                        Active
                    </button>
                </li>
                <li className={styles.extesionsButtonItem}>
                    <button className={styles.extesionsButton} type='button'>
                        Inactive
                    </button>
                </li>
            </ul>
        </>
    );
};

export default FilterList;
