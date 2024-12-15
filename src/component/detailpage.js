import React, {useState,useEffect} from "react";
import '../Style.css'
import { Fetecher } from "../fetcher";
import { useParams } from "react-router-dom";

const Detailpage = ()=>{
    const prams = useParams()
    const [result,setResult]= useState([])
    const [results,setResults]= useState([])
    const[loading,setLoading] = useState(true)
    const movieid = prams.imdbid || "tt2911666"

    useEffect(()=>{
        dataFetch()
    },[movieid])

    const dataFetch = async()=>{
    const data = await Fetecher("https://www.omdbapi.com/?i=" + movieid + "&plot=short&apikey=4bc9a2c4")
    const more = await Fetecher("https://www.omdbapi.com/?i=" + movieid + "&plot=full&apikey=4bc9a2c4")
    setResults(more)
    setResult(data)
    setLoading(false)
    }
    const smallScreenSize = ()=> window.innerWidth<=900
   
    return <div>
        {/* top panel */}

        {loading?  <h1 style={{textAlign:"center"}}>loading...</h1> :
        <div className="proThumbDiv">
            <div className="proThumbDivLft">
                <img  className="proThumbDivLftBefore"src={result.Poster} alt="backgroundPoster"/>
            
                <div className="pImg">
                    <div className="movieDetails">
                        <div className="movieDetailss">
                        <h2 style={{display:"inline"}}>{result.Title}</h2> <span style={{color:"orange",fontWeight:"bold"}} >({result.Year})</span> <br/>
                        <span style={{color:"wheat"}}>R. {result.Runtime}</span> <span style={{color:"white", fontWeight:"bolder" }}>·</span>
                         <span style={{color:"white"}}> {result.Genre}</span>  <span style={{marginLeft:"15px",color:"white"}}> {result.Released} ({result.Country})</span>
                         </div>
                        <div className="ratingDiv">
                            <div></div>
                            <div className="ratings">
                                <p style={{color:"white",marginBottom:"0px"}}>Your Rating</p>
                                <span style={{color:"wheat"}}>Rating:</span> <span  style={{color:"white",fontWeight:"bold"}} >{result.imdbRating}</span> <span  style={{color:"wheat",marginRight:"10px"}}>/10 From</span> <span  style={{color:"white", fontWeight:"bold",marginRight:"10px"}} > {result.imdbVotes} Votes</span> <span  style={{color:"wheat"}}>From</span> <span  style={{color:"white",fontWeight:"bold"}}>Internet Movie Database</span> <br/>

                            </div>
                        </div>

                        <h3 style={{ display:smallScreenSize()? "none" : "block",color:"wheat",marginBottom:"-10px",fontWeight:"bold"}}>Summary</h3>
                        <p style={{display:smallScreenSize()? "none" : "block",color:"wheat"}}>{result.Plot}</p>
                        
                        <span style={{color:"wheat"}}>Director:</span> <span style={{color:"orange",fontWeight:"bold"}}>{result.Director}</span>  <span style={{color:"white", fontWeight:"bolder" }}>·</span> <span style={{color:"wheat"}}>Writers:</span> <span style={{color:"orange",fontWeight:"bold"}}>{result.Writer}</span>

                    </div>
                 <img src={result.Poster&& result.Poster} alt="poster"/>

                </div>
              
            </div>
            <div className="proThumbDivRt">
                <div>
                <div >
                <div className="storyLineDiv" style={{display:"flex",alignItems:"center"}}>
                <div style={{width:"5px",height:"40px",backgroundColor:"yellow",color:"yellow"}} >.</div>
                <h2 >Storyline</h2>
                </div>
                <p style={{marginTop:"0px",color:"white"}}>
                   { results.Plot}
                </p>
                </div>

                <div >
                <div className="storyLineDiv" style={{display:"flex",alignItems:"center"}}>
                <div style={{width:"5px",height:"40px",backgroundColor:"yellow",color:"yellow"}} >.</div>
                <h2 >Did you know</h2>
                </div>
               <div className="moreInfoDiv">
                 <hr />
                <h3>Actors: <span style={{color:"skyblue"}}>{results.Actors}</span> </h3>
                <hr />
                <h3>Awards: <span style={{color:"skyblue"}}>{results.Awards}</span></h3>
                <hr/>
                <h3>BoxOffice: <span style={{color:"skyblue"}}>{results.BoxOffice}</span></h3>
                <hr />
                <h3>Language: <span style={{color:"skyblue"}}>{results.Language}</span></h3>
                <hr />
                <h3>Rated: <span style={{color:"skyblue"}}>{results.Rated}</span></h3>
                <hr />
                <h3>Production: <span style={{color:"skyblue"}}>{results.Production}</span></h3>
                <hr />
                
               </div>
                </div>

                </div>
               
                

                <div>
                   
                </div>
              
            </div>
        </div>

        }
    </div>


}
export default Detailpage