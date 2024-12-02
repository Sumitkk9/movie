import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    apiData:[]
}

export const fetcherSlice = createSlice({
    name:'fetchers',
    initialState,
    reducers:{
        fetchuri:(state,action)=>{
            const fetchData = async ()=>{
                try {
                    const response = await fetch("http://localhost:3000/" + action.payload.uri)
                    const data = await response.json()

                    console.log(data)
                    state.apiData.push("data")

                } catch (error) {
                    console.log(error)
                }
             
            }
            fetchData()
        }
    }
})

export const {fetchuri} = fetcherSlice.actions

export default fetcherSlice.reducer