import React,{useState,useEffect} from "react";
import { Fetecher } from "../fetcher";
import { useParams,useNavigate } from "react-router-dom";
import MovieCard from "./movieCard";
import '../Style.css'

const Searchpage = ()=>{

    const params = useParams()
    const navigate = useNavigate()
    let value = params.value || null

    const [more,setMore] = useState([])
    

    useEffect(()=>{
        setMore([])
        funct()
    },[value])

    const funct = async()=>{
      try {
      const response = await Fetecher("https://www.omdbapi.com/?s="+ value.trim() + "&plot=full&apikey=4bc9a2c4")
    
      const mainData = response.Search
      console.log(response)
      mainData && mainData.map(async(resu) =>{
        const mored = await Fetecher("https://www.omdbapi.com/?i=" + resu.imdbID + "&plot=short&apikey=4bc9a2c4")
           setMore((prev)=> [...prev,mored])
    
        // setImdbIds((prev)=> [...prev,resu.imdbID ])
      })
     
     
    } catch (error) {
        console.log(error)  
    }
}

    const desc = more.sort((a,b)=> b.Year-a.Year)

    const onViewMoreClick = (id)=>{
      navigate(`/title/${id}`)
    }

    const redMovie = ()=>{
        return  desc.map((res,index)=>{
      
         return <MovieCard
          key={res.imdbID}
          viewMoreClicked={()=>onViewMoreClick(res.imdbID)}
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
      
    
    
    return <div className='productsDiv' >

    

    {more[0]? redMovie() : value? !more[1] && <h1 style={{color:"white",backgroundColor:"transparent"}}>Searching</h1> : ""  }
    
    </div>
}
export default Searchpage