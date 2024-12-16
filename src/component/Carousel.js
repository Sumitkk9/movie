import React from "react";
import { useEffect,useState } from "react";
import "../Style.css"

const Carousel = ({onclickCarousel})=>{

    const [currentIndex,setCurrentIndex] = useState(0)
    const image = [ {
        thumb:"https://m.economictimes.com/thumb/msid-113607812,width-1200,height-900,resizemode-4,imgsize-17336/the-batman-part-ii-heres-when-robert-pattinson-starrer-sequel-will-release.jpg",
        poster:"https://m.media-amazon.com/images/M/MV5BMTU2NzhiYWUtYThlZi00OWIyLTk3YWEtZjY3NmJjOTZiZDAyXkEyXkFqcGc@._V1_SX300.jpg",
        title: "The Batman Part II",
        desc:"I am vengeance. I am the night. I am Batman.",
        imdbId:  "tt19850008"
    },{
        thumb:"https://www.hindustantimes.com/ht-img/img/2024/04/08/1600x900/Allu_Arjun_Pushpa_look_1712563294862_1712563305669.jpg",
        poster:"https://m.media-amazon.com/images/M/MV5BNWU1ZWFhNGQtZDhlZC00ZWFlLTlmNmEtN2VmYmZiN2Y5ZmQ2XkEyXkFqcGc@._V1_.jpg",
        title: "Pushpa: The Rule - Part 2",
        desc:"Fire Nahi, Wildfire Hai",
        imdbId:  "tt16539454"
    },
    {
        thumb:"https://static01.nyt.com/images/2024/10/04/multimedia/04joker-review-print-bhqj/04joker-review-print-bhqj-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        poster:"https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15c13f1b-334e-48ab-b8ba-7bd6fa7462de_1638x2048.jpeg",
        title: "Joker: Folie à Deux",
        desc:"It's Not About The Money",
        imdbId:  "tt11315808"
    },
    

        
    ]

    useEffect(()=>{

        const interval = setInterval(()=>{
            setCurrentIndex((prev)=> prev === image.length-1?0 :prev +1 )
        },4000)

        return ()=> clearInterval(interval)

    },[image.length])

    const isScreenSmall = ()=>(
        window.innerWidth<=900
    )
    return <>
     <div className="carousel-container-home">
      <div
       id={currentIndex}
        className="carousel"
      
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
         > 
                {image.map((img,index) => {
               return <div className="imgDiv"   onClick={()=>onclickCarousel(img.imdbId)}> <img 
                key={index}
                src= {img.thumb} 
                alt= "images"
                className={ isScreenSmall()?  "carousel-image-home-mobile" : "carousel-image-home"}
                 />
                 <div className="infoDiv">
                    <div className="infoDiv1">
                        <img 
                      
                        src={img.poster}
                        alt="poster"/>
                    </div>
                    <div className="infoDiv2">
                    <h3 >{img.title}</h3> 
                    <h4 >{img.desc}</h4> 



                    </div>
                </div>

                
                 </div> }
                
                )}
                 
                </div>
                </div>
    </>
}
export default Carousel