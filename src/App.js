import React from 'react';
import Title from './components/title/Title';
import SearchBox from './components/searchBox/SearchBox';
import './App.css';

const App = () => {
    return (
        <header>
            <Title message={'Hey!'}/>
            <SearchBox/>
        </header>
    );
};

export default App;
