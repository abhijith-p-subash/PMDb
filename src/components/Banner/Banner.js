import React, { useState, useEffect } from 'react';
import "./Banner.css";
import { Jumbotron, Button } from 'reactstrap';
import Axios from "../../Axios/axios";
import axios from 'axios';
import { API_KEY, imageUrl } from "../../Constant/constant"
import { useHistory } from "react-router-dom"

function Banner() {
    const [banner, setBanner] = useState("");
    const [overview, setOverview] = useState("");
    const [time, setTime] = useState(1);
    const history = useHistory();
    useEffect(() => {
        const number = Math.floor(Math.random() * 20)
        Axios.get(`trending/all/day?api_key=${API_KEY}&language=en-US`).then((response) => {

            console.log(response.data.results[number]);
            setBanner(response.data.results[number])
            const view = response.data.results[number].overview;
            setOverview(view.substring(0, 230));
        })



    }, [])
    return (
        <div style={{ backgroundImage: `url(${imageUrl + banner.backdrop_path})` }} className="root">
            <div className="bottom-fade">
                <div className="content">
                    <h1 className="head">{banner.title || banner.name}</h1>
                    <p className="para">{overview}</p>
                    <button onClick={() => {
                        history.push(`/movieInfo/${banner.media_type}/${banner.id}`);
                    }} className="btn-2" className="btn-1">Watch Trailer</button>
                    <button onClick={() => {
                        history.push(`/movieInfo/${banner.media_type}/${banner.id}`);
                    }} className="btn-2">Reveiw</button>
                </div>
            </div>     
        </div>
    )
}

export default Banner

