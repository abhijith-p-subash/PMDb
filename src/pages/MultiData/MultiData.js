import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import "./MultiData.css";
import { Container, Row, Col } from "reactstrap";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Axios from "../../Axios/axios";
import { API_KEY, imageUrl_w500 } from "../../Constant/constant";
import Movie from '../../pages/SingleData/SingleData';


function MultiData(props) {

    const [data, setData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        Axios.get(`${props.type}/${props.para}?api_key=${API_KEY}&language=en-US`).then((res) => {
            console.log(res.data.results);
            setData(res.data.results);
        }).catch((err)=>{
            alert(err);
            
        })


    }, []);

    return (
        <div>
            <div className="multi-root">
                <Container>
                    <Row>
                        <div className="multi-sub">
                            <div className="multi-head">
                                <h1>{props.name}</h1>
                                <hr />
                            </div>
                        </div>
                    </Row>
                    <Row>
                        {data.map((obj) => {
                            return (

                                <Col lg='3' md="3" sm='6'>
                                    <div className="colo">
                                        <div className="posters-multi">
                                            <div className="image">
                                                <img className="poster" src={`${imageUrl_w500 + obj.poster_path}`} alt="image" alt="image" />
                                                <div className="img-tag" >
                                                    <h4>{obj.name || obj.title}</h4>
                                                    <h6 style={{ fontSize: "blod" }}>Rating : {obj.vote_average}</h6>
                                                    <br />
                                                    <button onClick={() => {
                                                        history.push(`/movieInfo/${props.type}/${obj.id}`);
                                                        <Movie id={obj.id}/>
                                                    }} className="btn-2">See More</button>
                                                </div>
                                                <div className="static-data">
                                                    <h5>{obj.name || obj.title}</h5>
                                                    <VisibilityIcon style={{ display: "inline", color: "yellow" }} /> <p style={{ display: "inline" }}>
                                                        {obj.vote_count}<span style={{ marginLeft: "10px" }}>Date : 2020-06-21</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                            )
                        })}
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default MultiData;
