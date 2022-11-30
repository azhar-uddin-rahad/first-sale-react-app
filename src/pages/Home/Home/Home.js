import React from 'react';
import Advertise from '../../Dashboard/Advertise/Advertise';
import CategoryOPtion from '../CategoryOPtion/CategoryOPtion';
import ExtraSecction from '../ExtraSecction/ExtraSecction';
import TopBanner from '../TopBanner/TopBanner';
import AdsCard from './AdsCard/AdsCard';

const Home = () => {
    return (
        <div>
           <TopBanner></TopBanner>
           
           <CategoryOPtion></CategoryOPtion>


           <Advertise></Advertise>

           <ExtraSecction></ExtraSecction>
            
        </div>
    );
};

export default Home;