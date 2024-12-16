import React from "react";
import loadingImg from "../img/load.webp"

const smallScreenSize = ()=> window.innerWidth <=900;
const Loading = ()=>{
    return<div style={{ 
        position:"absolute",
        top:"50%",
        justifyItems:"center",
        right:smallScreenSize()? "37%" :"45%"}}>
            <img style={{
                width:"100px",
                borderRadius:"50px",
            }} src={loadingImg} alt="loading" />
        <h1 style={{textAlign:"center",color:"white",fontSize:"0.7rem"}}>loading...</h1>
        </div> 
}
export default Loading