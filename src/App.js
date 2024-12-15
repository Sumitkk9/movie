import logo from './logo.svg';
import './App.css';
import MovieCard from './component/movieCard';
import Carousel from './component/Carousel';
import { useSelector,useDispatch } from 'react-redux';
import { fetchuri } from './store/features/fetcher';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShortMovieCard from './component/shortMovieCard';
import Header from './component/header';
import { Fetecher } from './fetcher';
import { useNavigate } from "react-router-dom";

function App() {
  const dta = {
    uri:"products"
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    // dispatch(fetchuri(dta))
  },[])

  const data=useSelector(state => state.apiData)
 
  const upcomingMovies=["tt11976134","tt16539454","tt15428134","tt8790086","tt13186482","tt13927994"]

  const posters = [
    {
      imgurl: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
      name: "Wonder Woman Poster",
      id: 1
    },
    {
      imgurl: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
      name: "Justice League Poster",
      id: 2
    },
    {
      imgurl: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
      name: "Avengers Endgame ",
      id: 3
    },
    {
      imgurl: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
      name: "Thor Ragnarok Poster",
      id: 4
    },
    {
      imgurl: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
      name: "Iron Man Poster",
      id: 5
    },
    {
      imgurl: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
      name: "Captain Marvel Poster",
      id: 6
    },
    {
      imgurl: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
      name: "Black Panther Poster",
      id: 7
    },
    {
      imgurl: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
      name: "Spider-Man Poster",
      id: 8
    },
    {
      imgurl: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
      name: "Superman Poster",
      id: 9
    },
    {
      imgurl: "https://rukminim2.flixcart.com/image/850/1000/jt8yxe80/poster/e/w/k/medium-wonder-wom11-woman-movie-poster-original-imafem3hvgkhfvuj.jpeg?q=20&crop=false",
      name: "Batman Poster",
      id: 10
    }
  ];


  const [currentIndex,setcurrentIndex]=useState(0)

  const [releasedMovies,setreleasedMovies] = useState([])

  const fetchdata = ()=>{
    upcomingMovies.map(async(movieI)=>{
      const response = await Fetecher("https://www.omdbapi.com/?i=" + movieI + "&plot=short&apikey=4bc9a2c4")
     
      setreleasedMovies((prev)=> [...prev,response])
     
    })
    
    
  }
  
 useEffect(()=>{
  fetchdata()
  const interval = setInterval(()=>{
    setcurrentIndex((prevIndex)=> (prevIndex+3)% posters.length )
  },3000)



  return ()=> clearInterval(interval);
 },[currentIndex])


 const getCurrentMovies = ()=>{
  return releasedMovies.slice(currentIndex, currentIndex+3   )
 }

 const shortMovieClick = (id)=>{

  navigate(`/title/${id}`)

 }
   
  return (
    <> 
    
    <div className='featureDiv'>
      <div className='featureDiv1'>
      {/* {more[1] && more.map(ids=>(<h1>{ids.Plot}</h1>))}  */}
      <Carousel
      onclickCarousel={(imdbId)=>shortMovieClick(imdbId)}
      />
      </div>
      <div>
      <h2 className='heading' style={{color:"yellow",margin:"5px",marginLeft:"12px"}}>Released Movies</h2>
      <div className='featureDiv2'>
        
      {getCurrentMovies().map(movie=>(
        <ShortMovieCard
              key={movie.imdbID}
              onclick={()=>shortMovieClick(movie.imdbID)}
              title={movie.Title}
              imgurl={movie.Poster}
        />
      ))}
      </div>
      </div>
     
    </div>
   
    
    </>
  );
}

export default App;
