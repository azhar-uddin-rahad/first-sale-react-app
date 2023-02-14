import React from 'react';
import CustomerReview from '../../Home/CustomerReview/CustomerReview';
import AboutUs from '../AboutUs/AboutUs';
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
            <CustomerReview></CustomerReview>
            <GetInvolved></GetInvolved>
            <OurTeam></OurTeam>
            <JoinOur></JoinOur>
            
        </div>
    );
};

export default About;