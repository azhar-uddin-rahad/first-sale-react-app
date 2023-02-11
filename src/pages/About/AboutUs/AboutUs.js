import React from 'react';
import { motion } from "framer-motion";
import bannerImg from '../../../assits/banner1.jpeg'

const AboutUs = () => {
    return (
        <div>
     {/*    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className="banner"
    >
    
     </motion.div>
    */}
      <motion.img
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        src={bannerImg}
        alt="Banner Image"
      />
     
        </div>
    );
};

export default AboutUs;