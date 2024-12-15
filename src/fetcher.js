import React from "react";

export const Fetecher = async(mainurl)=>{
    try {
        const fetchUrl = await fetch(mainurl)
        const response =  await fetchUrl.json()
      
        return response
    } catch (error) {
        console.log(error)
    }
}