import React from 'react';
import Brand from '../../Home/Brand/Brand';
import CustomerReview from '../../Home/CustomerReview/CustomerReview';
import AboutUs from '../AboutUs/AboutUs';
import BuyOnline from '../BuyOnline/BuyOnline';
import CeoDetails from '../CeoDetails/CeoDetails';
import GetInvolved from '../GetInvolved/GetInvolved';
import JoinOur from '../JoinOur/JoinOur';
import OurCompany from '../OurCompany/OurCompany';
import OurTeam from '../OurTeam/OurTeam';

const About = () => {
    return (
        <div>
            <AboutUs></AboutUs>
            <CeoDetails></CeoDetails>
            <OurCompany></OurCompany>
            <BuyOnline></BuyOnline>
            <CustomerReview></CustomerReview>
            <GetInvolved></GetInvolved>
            <OurTeam></OurTeam>
            <JoinOur></JoinOur>
            <Brand></Brand>
            
        </div>
    );
};

export default About;