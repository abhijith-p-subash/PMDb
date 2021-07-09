import React from 'react';
import Navbar from "../components/Navbar/navbar";
import Banner from '../components/Banner/Banner';
import Poster from '../components/Poster/poster';
import Footer from "../components/Footer/footer"

import {wk_tmovie_url, wk_ttv_url} from "../Urls/Urls"


function Home() {
    return (
        <div>
            
            <Banner />
            <Poster url={wk_tmovie_url} radio="true" title="Trending" />
            <Poster url={wk_ttv_url} title="Netflix Orginals" />
            
        </div>
    )
}

export default Home
