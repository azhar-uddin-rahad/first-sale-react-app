import React from 'react';
import CategoryOPtion from '../CategoryOPtion/CategoryOPtion';
import ExtraSecction from '../ExtraSecction/ExtraSecction';
import TopBanner from '../TopBanner/TopBanner';
import AdsCard from './AdsCard/AdsCard';

const Home = () => {
    return (
        <div>
           <TopBanner></TopBanner>
           <AdsCard></AdsCard>
           <CategoryOPtion></CategoryOPtion>
           <ExtraSecction></ExtraSecction>
            
        </div>
    );
};

export default Home;