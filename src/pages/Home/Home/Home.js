import React from 'react';
import Advertise from '../../Dashboard/Advertise/Advertise';
import CategoryOPtion from '../CategoryOPtion/CategoryOPtion';
import ExtraSecction from '../ExtraSecction/ExtraSecction';
import ParallaxSection from '../ParallaxSection/ParallaxSection';
import Timer from '../Timer/Timer';
import TopBanner from '../TopBanner/TopBanner';
import TopProduct from '../TopProduct/TopProduct';
import TopProductInfo from '../TopProduct/TopProductInfo';
import AdsCard from './AdsCard/AdsCard';

const Home = () => {
    return (
        <div>
           <TopBanner></TopBanner>
           <CategoryOPtion></CategoryOPtion>
           <Advertise></Advertise>
           <Timer></Timer>
           <TopProductInfo></TopProductInfo>
           <ParallaxSection></ParallaxSection>
           <ExtraSecction></ExtraSecction>
           
            
        </div>
    );
};

export default Home;