import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../About/Header/Header';

const Home = () => {
    const navigation = useNavigation();

    return (
        <div>
            
            <Header></Header>
            <h2 className="text-center mt-3">This is Home</h2>

        <div>{navigation.state === 'loading' && 'sr-only'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;