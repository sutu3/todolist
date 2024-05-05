import React, { useState } from 'react'
import TodoListSlice, { updateTodo } from '../TodoList/TodoListSlide'
//import {changeCompleted} from '../../redux/action'

import {useDispatch} from 'react-redux'
const Index = ({id,name,completed,priority}) => {
    const dispatch = useDispatch()
   const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    //dispatch(TodoListSlice.actions.changeCompleted(id))
    dispatch(updateTodo(id))
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ marginRight: '50px' }}
      />
      <label htmlFor="name" style={{ marginRight: '50px' }}>
        {name}
      </label>
      <label htmlFor="" style={{ marginRight: '0px'}}>
        {priority}
      </label>
    </div>
  );
}

export default Index
