import React, { useState, useEffect } from 'react'
import "./SingleData.css"
import { Container, Row, Col } from 'reactstrap';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Poster from "../../components/Poster/poster";
import { wk_ttv_url, dataByID } from "../../Urls/Urls"
import { imageUrl, API_KEY } from "../../Constant/constant"
import { useParams } from 'react-router-dom';
import Axios from "../../Axios/axios"
import { fontWeight } from '@material-ui/system';
import YouTube from "react-youtube";
import Fade from '@material-ui/core/Fade';

function Single(props) {

    const [contentData, setContentData] = useState("");
    const [genres, setGenres] = useState([]);
    const [review, setReview] = useState([]);
    const [seemore, setSeemore] = useState(false);
    const [videokey0, setvideokey0] = useState("")
    const [videokey1, setVideoKey1] = useState("");

    const seeMoreTrigger = () => setSeemore(!seemore);

    console.log(props.id)
    const { id } = useParams();
    const { select } = useParams();
    console.log(id)
    console.log(select);
    useEffect(() => {
        Axios.get(`${select}/${id}${dataByID}`).then((response) => {
            console.log(response.data);
            setContentData(response.data);
            setGenres(response.data.genres);
        }).catch((error) => {
            alert(error);
        });

        Axios.get(`${select}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`).then((res) => {
            console.log(res.data.results);
            setReview(res.data.results);
        }).catch((err) => {
            console.log(err);
            alert(err);
        }).catch((err) => {
            console.log(err);
            alert(err);
        });

        Axios.get(`${select}/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
            console.log(res.data.results);
            if (res.data.results.length !== 0) {
                console.log(res.data.results);
                setvideokey0(res.data.results[0]);
                setVideoKey1(res.data.results[1]);
            } else {
                alert("Trailer not available")
            }
        })
    }, [])

    const opts = {
        height: '450px',
        width: '550px',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }

    return (
        <div className="sin-z">
            <div className="sin-root">
                <Container>
                    <Row>
                        <Col lg="3" sm="1">
                            <div className="sin-img">
                                <img src={`${imageUrl + contentData.poster_path}`} alt="" />
                            </div>
                        </Col>
                        <Col lg="9" sm="1">
                            <Row>
                                <Col>
                                    <div className="sin-content">
                                        <h2 style={{ color: "yellow", fontWeight: "bold" }}>{contentData.name || contentData.title}</h2>
                                        <hr />
                                        <div>
                                            <h5 style={{ display: "inline" }}>{contentData.first_air_date || contentData.release_date} ({contentData.original_language})</h5>
                                            {genres.map((object) => {

                                                <h6 style={{ display: "inline", marginLeft: "10px" }}>{object.name}</h6>
                                            })}
                                        </div>

                                        <div className="sin-rat">
                                            <h3>Rating: {contentData.vote_average}</h3>
                                            <button>
                                                <YouTubeIcon style={{ margin: "0px 5px 0px 5px" }} />
                                                Play trailer</button>
                                        </div>
                                        <div className="sin-content-over">
                                            <h5>Overview</h5>
                                            <p style={{ color: "yellow" }}>{contentData.tagline}</p>
                                            <p>{contentData.overview}</p>
                                        </div>
                                        <div >
                                            <Row className="sin-credits">
                                                <Col lg="6" sm="12">
                                                    <h6>Vote Count</h6>
                                                    <p>{contentData.vote_count}</p>
                                                </Col>
                                                <Col lg="6" sm="12">
                                                    <h6>Popularity</h6>
                                                    <p>{contentData.popularity}</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Row>
                            <div className="review">
                                <h4>Review</h4>
                                <hr />
                                {review.map((obj) => {
                                    const content = obj.content
                                    return <div >
                                        <p>{seemore ? content : content.substring(0, 500)}</p>
                                        <p style={{ color: "yellow" }}> {seemore ? "Author :" + obj.author : ""}</p>
                                        <p onClick={seeMoreTrigger} className="seemore">{seemore ? "See Less" : "See More"} </p>
                                        <hr style={{ color: "yellow" }} />
                                    </div>
                                })}
                            </div>
                        </Row>
                        {/* <Row>
                            <div className="youtube">
                                {<YouTube videoId={videokey.key} />}
                            </div>

                        </Row> */}
                    </Row>
                    <Row>
                        <iframe style={{borderRadius:"30px", margin:"40px 0 10px 0"}} width="560" height="600" src={`https://www.youtube.com/embed/${videokey0.key || videokey1.key}`}
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        
                    </Row>
                    <Row>
                        <Poster url={wk_ttv_url} title="Netflix Orginals" />
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Single
