import React from 'react';
import Advertise from '../../Dashboard/Advertise/Advertise';
import CategoryOPtion from '../CategoryOPtion/CategoryOPtion';
import ExtraSecction from '../ExtraSecction/ExtraSecction';
import NewArrivals from '../NewArrivals/NewArrivals';
import ParallaxSection from '../ParallaxSection/ParallaxSection';
import Timer from '../Timer/Timer';
import TopBanner from '../TopBanner/TopBanner';
import TopProductInfo from '../TopProduct/TopProductInfo';


const Home = () => {
    return (
        <div>
           <TopBanner></TopBanner>
           <CategoryOPtion></CategoryOPtion>
           <Advertise></Advertise>
           <Timer></Timer>
           <TopProductInfo></TopProductInfo> 
           <ParallaxSection></ParallaxSection>
           <NewArrivals></NewArrivals>
           <ExtraSecction></ExtraSecction>
           
            
        </div>
    );
};

export default Home;