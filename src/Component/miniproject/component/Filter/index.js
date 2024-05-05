import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import FilterSlice from './FilterSlice'
const Filter = ({name}) => {
  const dispatch=useDispatch()
  const [search,setsearch]=useState('')
  const handlechange=(e)=>{
    setsearch(e.target.value)
  }
  const handlelistenchange=()=>{
    dispatch(FilterSlice.actions.addchangesearch(search))
    setsearch('')
  }
  return (
    <div style={{margin:'20px'}}>
      <input type="text" value={search} onChange={handlechange} placeholder={name} style={{padding:'10px',textAlign:'center'}}/>
      <button onClick={handlelistenchange}>Searh</button>
    </div>
  )
}

export default Filter
