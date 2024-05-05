import {createSlice} from '@reduxjs/toolkit'
const FilterSlice=createSlice({
    name:'filter',
    initialState:{
        search:'',
        
    },
    reducers:{
        addchangesearch:(state,action) =>{
            state.search=action.payload
        }
    }
})
export default FilterSlice;