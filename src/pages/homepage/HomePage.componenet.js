import React from 'react'
// import './HomePage.styles.scss';
import Directory from '../../components/directory/directory.component';
import {HomePageContainer} from './Homepage.styles';

const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}

export default HomePage;
