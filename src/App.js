import logo from './logo.svg';
import './App.css';
import MovieCard from './component/movieCard';
import Carousel from './component/Carousel';
import { useSelector,useDispatch } from 'react-redux';
import { fetchuri } from './store/features/fetcher';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShortMovieCard from './component/shortMovieCard';



function App() {
  const dta = {
    uri:"products"
  }

  const dispatch = useDispatch()
  useEffect(()=>{
    // dispatch(fetchuri(dta))
  },[])

  const data=useSelector(state => state.apiData)
  console.log()

  const [value, setValue] = useState("")
  const [result, setResult] = useState()

 
  const upcomingMoview=["tt27540784",]

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
  
 useEffect(()=>{

  const interval = setInterval(()=>{
    setcurrentIndex((prevIndex)=> (prevIndex+3)% posters.length )
  },3000)



  return ()=> clearInterval(interval);
 },[setcurrentIndex])

 const funct = async()=>{
  try {
  const response = await fetch("https://www.omdbapi.com/?s="+ value.trim() + "&plot=full&apikey=4bc9a2c4")
  const data = await response.json()
  const mainData = data.Search
  mainData && mainData.map(async(resu) =>{
    const mored = await fetch("https://www.omdbapi.com/?i=" + resu.imdbID + "&plot=short&apikey=4bc9a2c4")
    const res = await mored.json()
       setMore((prev)=> [...prev,res])

    setImdbIds((prev)=> [...prev,resu.imdbID ])
  })
  setResult(mainData)
 
} catch (error) {
    console.log(error)  
}
}

 const getCurrentMovies = ()=>{
  return posters.slice(currentIndex, currentIndex+3)
 }
 const [showState,setShowState] = useState(false)

   const [imdbIds,setImdbIds] = useState([])
   const [more,setMore] = useState([])
   const moreData = ()=>{
    imdbIds.map(async(ids) =>{
      try {
        const mored = await fetch("https://www.omdbapi.com/?i=" + ids + "&plot=short&apikey=4bc9a2c4")
        const res = await mored.json()
           setMore((prev)=> [...prev,res])
      } catch (error) {
        console.log(error)
      }
    })
    
  }



  const submitBtn = (e)=>{
    e.preventDefault()
    setMore([])
    setShowState(true)
    funct(value)
   
 
   
  }

  const onChnageValue = (e)=>{
    
    setValue(e.target.value)
    
  }
  

  const desc = more.sort((a,b)=> b.Year-a.Year)

 
  
  const redMovie = ()=>{
   
  
    return  desc.map((res,index)=>{
  
     return <MovieCard
      key={res.imdbID}
      img= {more[index]? more[index].Poster :"NaN"}
      title={more[index]? more[index].Title:"nAn"}
      dis={more[index]? more[index].Plot : "nan"}
      released={more[index]? more[index].Runtime  : "nan"}
      imdbrating= {more[index]? more[index].imdbRating : "nan"}
      actors={more[index]? more[index].Actors : "nan"}
      year={more[index]? more[index].Year : "nan"}
      mtype={more[index]? more[index].Type :"nan"}
      />
  })
  }
  
  return (
    <> 
     
   
    <div className='serchOption'>
    <h2> <a 
    style={{
      backgroundColor:"transparent",
      textDecoration:"none",
      color:"black",
    }} href='/'>IMDB</a> </h2>

  

    <form className='searchForm' onSubmit={submitBtn}>
      <input style={{backgroundColor:"white"}} value={value} onChange={onChnageValue} type='text' placeholder='Search Movie'/>
      <button>search</button>
      
    </form>

    </div>

    {showState? <div className='productsDiv' >

    

{more[1]?redMovie() : value? !more[1] && <h1 style={{color:"white",backgroundColor:"transparent"}}>Searching</h1> : ""  }

</div> : 
    <div className='featureDiv'>
      <div className='featureDiv1'>
      {/* {more[1] && more.map(ids=>(<h1>{ids.Plot}</h1>))}  */}
      <Carousel/>
      </div>
      <div>
      <h2 className='heading' style={{color:"yellow",margin:"5px",marginLeft:"12px"}}>Upcoming Movies</h2>
      <div className='featureDiv2'>
        
      {getCurrentMovies().map(movie=>(
        <ShortMovieCard
              key={movie.id}
              id={movie.id}
              title={movie.name}
              imgurl={movie.imgurl}
        />
      ))}
      </div>
      </div>
     
    </div>
   }
    
    </>
  );
}

export default App;
