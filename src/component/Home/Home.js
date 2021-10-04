import React from 'react';
import Awards from '../Awards/Awards';
import Cources from '../Cources/Cources';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Awards></Awards>
            <Cources show='home'></Cources>
            <Categories></Categories>
        </div>
    );
};

export default Home;