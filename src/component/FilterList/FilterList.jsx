import styles from './FilterList.module.css';

const FilterList = ({ setFilter }) => {
    return (
        <>
            <h1 className={styles.extesionsListTitle}>Extension List</h1>

            <ul className={styles.extesionsButtonList}>
                <li className={styles.extesionsButtonItem}>
                    <button
                        onClick={() => setFilter('all')}
                        className={styles.extesionsButton}
                        type='button'
                    >
                        All
                    </button>
                </li>
                <li className={styles.extesionsButtonItem}>
                    <button
                        onClick={() => setFilter('active')}
                        className={styles.extesionsButton}
                        type='button'
                    >
                        Active
                    </button>
                </li>
                <li className={styles.extesionsButtonItem}>
                    <button
                        onClick={() => setFilter('inactive')}
                        className={styles.extesionsButton}
                        type='button'
                    >
                        Inactive
                    </button>
                </li>
            </ul>
        </>
    );
};

export default FilterList;
