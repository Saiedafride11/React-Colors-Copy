import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import BgTextColor from '../BgTextColor/BgTextColor';
import GradientBgColor from '../GradientBgColor/GradientBgColor';
import GradientTextColor from '../GradientTextColor/GradientTextColor';
import TextColor from '../TextColor/TextColor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TextColor></TextColor>
            <BgTextColor></BgTextColor>
            <GradientBgColor></GradientBgColor>
            <GradientTextColor></GradientTextColor>
        </div>
    );
};

export default Home;