import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';
import Advertise from '../../Dashboard/Advertise/Advertise';
import Brand from '../Brand/Brand';
import CategoryOPtion from '../CategoryOPtion/CategoryOPtion';
import CreateNtfs from '../CreateNtfs/CreateNtfs';
import CustomerReview from '../CustomerReview/CustomerReview';
import ExtraSecction from '../ExtraSecction/ExtraSecction';
import NewArrivals from '../NewArrivals/NewArrivals';
import ParallaxSection from '../ParallaxSection/ParallaxSection';
import Timer from '../Timer/Timer';
import TopBanner from '../TopBanner/TopBanner';
import TopProductInfo from '../TopProduct/TopProductInfo';
import TopSeller from '../TopSeller/TopSeller';

import './Home.css'


const Home = () => {
    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

    return (
        <div>
           
           <TopBanner></TopBanner>
           <CategoryOPtion></CategoryOPtion>
           <motion.div className="progress-bar" style={{ scaleX }} />
           <Advertise></Advertise>
           <Timer></Timer>
           <TopProductInfo></TopProductInfo> 
           <ParallaxSection></ParallaxSection>
           <NewArrivals></NewArrivals>
           <TopSeller></TopSeller>
           <CustomerReview></CustomerReview>
           <CreateNtfs></CreateNtfs>
           <Brand></Brand>
          
           
             
        </div>
    );
};

export default Home;