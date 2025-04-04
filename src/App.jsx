import Container from './component/Container/Container';
import Header from './component/Header/Header';
import FilterList from './component/FilterList/FilterList';
import ExtensionsList from './component/ExtensionsList/ExtensionsList';
import data from './assets/datas/data.json';
import { useEffect, useState } from 'react';

function App() {
    const [allExtensions, setAllExtensions] = useState(data);
    const [filter, setFilter] = useState('all');
    const [theme, setTheme] = useState(null);
    const [isThemeLoaded, setIsThemeLoaded] = useState(false);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        setIsThemeLoaded(true);
    }, []);

    useEffect(() => {
        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleActiveState = id => {
        setAllExtensions(prevExtensions =>
            prevExtensions.map(extension =>
                extension.id === id ? { ...extension, isActive: !extension.isActive } : extension
            )
        );
    };

    const getFilteredExtensions = () => {
        if (filter === 'active') {
            return allExtensions.filter(extension => extension.isActive);
        }

        if (filter === 'inactive') {
            return allExtensions.filter(extension => !extension.isActive);
        }

        return allExtensions;
    };

    const deleteExtension = id => {
        setAllExtensions(prevExt => {
            return prevExt.filter(ext => ext.id !== id);
        });
    };

    return (
        <>
            <Container>
                <Header toggleTheme={toggleTheme} theme={theme} />
                <FilterList setFilter={setFilter} />
                <ExtensionsList
                    extensions={getFilteredExtensions()}
                    toggleActiveState={toggleActiveState}
                    deleteExtension={deleteExtension}
                />
            </Container>
        </>
    );
}

export default App;
