import React from 'react';
import "./home.css";
import homeimg from '../../assets/homeImage.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className="homeLeftItem">
                <div className="homeheading">Differentiate yourself & stand out from the crowd.</div>
                <div className="homesubheading">Evaluate yourself & Improve, Take test now</div>
                <Link to="test" className='homebtn'>Take Test</Link>
            </div>
            <div className="homeRightItem">
                <img src={homeimg} alt="home" />
            </div>
        </div>
    )
}

export default Home
