import React from 'react';
import Page_1 from '../files/Page_1.jpg';
import Page_2 from '../files/Page_2.jpg';

const Home = () => {
    return (
        <div style={{marginTop: "50px"}}>
            <img src={Page_1} className="App-logo" alt="logo" width="100%" height="100%"/>
            <img src={Page_2} className="App-logo" alt="logo" width="100%" height="100%"/>
        </div>
    )
}

export default Home;