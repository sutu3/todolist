import React, { useState } from 'react'
const Data = ({id,name,setid}) => {
    const hanldlistenchange=()=>{
        setid(id)
    }
  return (
    <div style={{display:'flex', flexDirection:'row',margin:'auto',width:'50%'}}>
      <input type="radio" name='employee' onClick={hanldlistenchange} />
      <div>{name}</div>
    </div>
  )
}

export default Data
