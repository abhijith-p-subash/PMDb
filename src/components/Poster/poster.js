import React, { useState, useEffect } from 'react';
import "./poster.css"
import "../Navbar/navbar.css"
import Axios from "../../Axios/axios";
import { API_KEY, imageUrl, imageUrl_w500 } from "../../Constant/constant";
import { useHistory, Link } from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Movie from '../../pages/SingleData/SingleData';


function Poster(props) {
    const [movie, setMovie] = useState([]);
    const history = useHistory();
    useEffect(() => {
        Axios.get(props.url).then((response) => {
            console.log(response.data.results);
            setMovie(response.data.results);
        }).catch((error) => {
            alert(error);
        })
    }, []);

    // const handlePoster = (id) => {
    //     Axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then((response) => {
    //         console.log(response);
    //     }).catch((error) => {
    //         alert(error)
    //     })
    // }

    return (
        <div className="poster-root">
            <h1>{props.title}</h1>
            {/* {props.radio ? <div>
                <input className="radio-in" type="radio" name="mvotv" checked />
                <label className="radio-lab" htmlFor="">Movies</label>
                <input className="radio-in" type="radio" name="mvotv" />
                <label className="radio-lab" htmlFor="">Tv Shows</label>
            </div> : ""} */}
            <div className="poster-fade">
                <div className="posters" > 
                    <h1>{movie.name}</h1>
                    <hr />
                    {
                        movie.map((obj) => {
                            {/* console.log(obj) */ }
                            console.log(obj.media_type)
                            return (
                                <div>
                                    <div className="image">
                                        <img className="poster" src={`${imageUrl_w500 + obj.poster_path}`} alt="image" />
                                        <div className="img-tag" >
                                            <h4>{obj.name || obj.title}</h4>
                                            <h6 style={{ fontSize: "blod" }}>Rating : {obj.vote_average}</h6>
                                            <br />
                                            <button onClick={() => {
                                                history.push(`/movieInfo/${obj.media_type}/${obj.id}`);
                                                // <Movie id={obj.id} />
                                            }} className="btn-2">See More</button>
                                        </div>
                                        <div className="static-data">
                                            <h5>{obj.name || obj.title}</h5>
                                            <VisibilityIcon style={{ display: "inline", color: "yellow" }} /> <p style={{ display: "inline" }}>{obj.vote_count}
                                                <span style={{ marginLeft: "10px" }}>Date : {obj.release_date || obj.first_air_date}</span></p>

                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Poster;
