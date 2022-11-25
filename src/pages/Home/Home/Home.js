import React from 'react';
import Category from '../Category/Category';
import TopBanner from '../TopBanner/TopBanner';
import AdsCard from './AdsCard/AdsCard';

const Home = () => {
    return (
        <div>
           <TopBanner></TopBanner>
           <AdsCard></AdsCard>
           <Category></Category>
            
        </div>
    );
};

export default Home;