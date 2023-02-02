import React from 'react';
import { Header } from '../components';

const MainLayout = ({ children }) => (
    <>
        <Header />
        {children}
    </>
);

export default MainLayout;
