import React from "react";
import '../Style.css'
const shortMovieCard = ({imgurl,title})=>{
    return <div className="shortMovieCard" style={{backgroundColor:"white"}}>
        <div className="moviePoster">
            <img src={imgurl} alt="posterImg"/>
        </div>
        <div className="movieDetails">
            <h5>Upcoming</h5>
            <h3>{title}</h3>
        </div>
    </div>
}
export default shortMovieCard;