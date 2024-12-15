import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Header(){

  const navigate = useNavigate();
  const [value,setValue] = useState()
  
   const onclickbtn = (e)=>{
    e.preventDefault()
    navigate(`/search/${value}` )
   }

  const onChnageValue = (e)=>{
    
    setValue(e.target.value)
    
  }
  
    return   <div className='serchOption'>
    <h2> <a 
    style={{
      backgroundColor:"transparent",
      textDecoration:"none",
      color:"black",
    }} href='/'>IMDB</a> </h2>

  

    <form className='searchForm' onSubmit = {onclickbtn}>
      <input style={{backgroundColor:"white"}} value={value} onChange={onChnageValue} type='text' placeholder='Search Movie'/>
      <button>search</button>
      
    </form>

    </div>
}
export default Header