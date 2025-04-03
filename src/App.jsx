import './App.css';
import Container from './component/Container/Container';
import Header from './component/Header/Header';
import FilterList from './component/FilterList/FilterList';
import ExtensionsList from './component/ExtensionsList/ExtensionsList';
import data from './assets/datas/data.json';

function App() {
    return (
        <>
            <Container>
                <Header />
                <FilterList />
                <ExtensionsList data={data} />
            </Container>
        </>
    );
}

export default App;
