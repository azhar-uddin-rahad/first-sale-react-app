import React from 'react';
import CategoryOPtion from '../CategoryOPtion/CategoryOPtion';
import TopBanner from '../TopBanner/TopBanner';
import AdsCard from './AdsCard/AdsCard';

const Home = () => {
    return (
        <div>
           <TopBanner></TopBanner>
           <AdsCard></AdsCard>
           <CategoryOPtion></CategoryOPtion>
            
        </div>
    );
};

export default Home;