import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import FilterSlice from './Filterslide'
//import {searchFilterchange,statusFilterchange,priorityFilterchange} from '../../redux/action'
const Index = () => {
    const dispatch = useDispatch();
    const [select,setselect]=useState([])
    const [search,setsearch] = useState('')
    const [status,setstatus] = useState('ALL')
    const handleselectchange=(e)=>{
        // const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        // setselect(selectedOptions);
        // console.log(e.target.selectedOptions[0].innerHTML)
        // dispatch(priorityFilterchange(selectedOptions));
         let arr=[]
        if(!select.includes(e.target.value)){
           arr =[...select,e.target.value]
            console.log(arr)
            setselect(arr)
            dispatch(FilterSlice.actions.priorityFilterChange(arr))
        }
    }
    const handledeleteselectchange=(value)=>{
        const arr=select.filter(el=>el!==value.target.value)
        setselect(arr)
        dispatch(FilterSlice.actions.priorityFilterChange(arr))
    }
    const handlebuttonsearch=()=>{
        dispatch(FilterSlice.actions.searchFilterChange(search))
    }
    const handlesearchchange=(e)=>{
        setsearch(e.target.value)
    }
    const handlestatuschange=(e)=>{
        setstatus(e.target.value)
        dispatch(FilterSlice.actions.statusFilterChange(e.target.value))
    }
  return (
    <div>
      <p>TODO APP with REDUX</p>
      <strong>Search</strong>
      <div>
        <input type="text" name="search" onChange={handlesearchchange}/>
        <button onClick={handlebuttonsearch}>search</button>
      </div>
      <strong>Filter By Status</strong>
      <div
        
      >
        <>
            <input type="radio" defaultChecked={'ALL'} name="filter" onClick={handlestatuschange} value={'ALL'} />
            <label htmlFor="">ALL</label>
        </>
        <>
            <input type="radio" name="filter" onClick={handlestatuschange} value={'Completed'} />
            <label htmlFor="">Completed</label>
        </>
        <>  
            <input type="radio" name="filter" onClick={handlestatuschange} value={'ToDO'} />
            <label htmlFor="">ToDo</label>
        </>
      </div>
      <strong>Filter By Priority</strong>
      <div style={{display:'grid', gridTemplateColumns:'50% 20%',gridTemplateRows:'100%',height:'100px'}}>
      <ul>{
        select.map((el,index)=>(<li key={index}>{el} <button value={el} onClick={(el)=>handledeleteselectchange(el)}>X</button></li>))
            }
      </ul>
      
        <select name="" id="" multiple size={3} onChange={handleselectchange}>
            <option value="Hight" style=
            {{height:'33px',display:'flex',color:'red',fontWeight:'bolder',justifyContent:'center',alignItems:'center'}}>Hight</option>
            <option value="Medium"style=
            {{height:'33px',display:'flex',color:'aqua',fontWeight:'bolder',justifyContent:'center',alignItems:'center'}}>Medium</option>
            <option value="Low"style=
            {{height:'33px',display:'flex',color:'gray',fontWeight:'bolder',justifyContent:'center',alignItems:'center'}}>Low</option>
        </select>
      </div>
    </div>
  )
}

export default Index
