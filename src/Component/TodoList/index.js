import React, { useState } from 'react'
import ToDo from '../Todo/index'
import {useDispatch,useSelector} from 'react-redux'
//import {addtodoList} from '../../redux/action'
import {v4 as uuidv4} from 'uuid'
import { Remaining } from '../../redux/selector'
import TodoListSlice1, { addNewTodo, addToDos } from './TodoListSlide'
const Index = () => {
    const [name,setname]=useState('')
    const [priority,setpriority]=useState('Medium')
    const dispatch=useDispatch();
    const todoList=useSelector(Remaining)
    const handlenamechange=(e)=>{
        setname(e.target.value)
    }
    const handlebuttonclick=()=>{
        // dispatch(TodoListSlice1.actions.addTodo({
        //     id:uuidv4(),
        //     name:name,
        //     priority:priority,
        //     completed:false,
        // }))
        dispatch(
        addNewTodo({
            id:uuidv4(),
            name:name,
            priority:priority,
            completed:false,
        }))
        // dispatch(addToDos({
        //     id:uuidv4(),
        //     name:name,
        //     priority:priority,
        //     completed:false,
        // }))
        setname('')
        setpriority('Medium')

    }
    const handleprioritychange=(e)=>{
        console.log(e.target.value)
        setpriority(e.target.value)
    }
  return (
    <div>
      {/* <ToDo name='hello'/> */}
      {todoList.map((el)=>
      <ToDo key={el.id} id={el.id} name={el.name} 
            completed={el.completed}
            priority={el.priority}
            />)}
      <div>

      </div>
      <input type="text" name="" id="" value={name} onChange={handlenamechange} />
      <select name="" id="" value={priority} onChange={handleprioritychange}>
            <option value="Hight">Hight</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
        <button onClick={handlebuttonclick}>ADD</button>
    </div>
  )
}

export default Index
