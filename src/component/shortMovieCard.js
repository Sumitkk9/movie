import React from "react";
import '../Style.css'
const shortMovieCard = ({imgurl,title,onclick})=>{
    return <div onClick={onclick} className="shortMovieCard" style={{backgroundColor:"transparent"}}>
        <div className="moviePoster">
            <img src={imgurl} alt="posterImg"/>
        </div>
        <div className="movieDetails">
            <h5>Released</h5>
            <h3>{title}</h3>
        </div>
    </div>
}
export default shortMovieCard;