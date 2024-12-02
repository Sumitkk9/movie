import logo from './logo.svg';
import './App.css';
import MovieCard from './component/movieCard';

import { useSelector,useDispatch } from 'react-redux';
import { fetchuri } from './store/features/fetcher';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';


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

  const funct = async(value)=>{
    try {
    const response = await fetch("https://www.omdbapi.com/?t="+ value + "&plot=full&apikey=4bc9a2c4")
    const data = await response.json()
    setResult([data])
   
  } catch (error) {
      console.log(error)
  }
  }

  const submitBtn = (e)=>{
    
    e.preventDefault()
    funct(value)
    console.log(result)

  }


  const onChnageValue = (e)=>{
  
    setValue(e.target.value)
   
  }
  const redMovie = ()=>{
   
  //  if(result[0].Response==="False"){
  //   return <h1>no movies found</h1>
  //  }
    return  result.map((res)=>(
      <MovieCard
      key={res.imdbID}
      img= {res.Poster}
      title={res.Title}
      dis={res.Plot || "nan"}
      released={res.Runtime ||"nan"}
      imdbrating= {res.imdbRating ||"nan"}
      actors={res.Actors ||"nan"}
      year={res.Year ||"nan"}
      mtype={res.Type ||"nan"}
      />
    ))
  }
  return (
    <> 
     
   
    <div className='serchOption'>
    <h2>IMDB</h2>
    <form className='searchForm' onSubmit={submitBtn}>
      <input style={{backgroundColor:"white"}} value={value} onChange={onChnageValue} type='text' placeholder='Search Movie'/>
      <button>search</button>
      
    </form>

    </div>
   
    <div style={{justifyItems:"center"}}>
     
    {result && redMovie()}
    </div>
    </>
  );
}

export default App;
