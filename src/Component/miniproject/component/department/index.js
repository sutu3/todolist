import React, { useState } from 'react'
import Filter from '../Filter'
import { v4 as uuidv4 } from 'uuid'
import {useDispatch,useSelector} from 'react-redux'
import {DepartmentList,Remaning} from '../../redux/selection'
import DepartmentSlice from './DepartmentSlice'
import Data from '../Data/data'
const Department = () => {
 
  const ListDepartment=useSelector(Remaning)
  console.log(ListDepartment)
  const dispatch=useDispatch()
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [id1, setId1] = useState('');
const handlelitenaddepartment=()=>{
  alert('conpleted add department')
  dispatch(DepartmentSlice.actions.addDepartment({
    id:id1,
    name:name,
  }))
  setName('')
  setId1('')
}
const handlelistenremoveDepartment=()=>{
    dispatch(DepartmentSlice.actions.removeDepartment(id))
}
const handlefixDepartment=()=>{
    dispatch(DepartmentSlice.actions.fixDepartment({
      id:id,
      name:name
    }))
}
  const handleChangeNameDepartment = (e) => {
    setName(e.target.value);
  }
  const handleChangeIDDepartment = (e) => {
    setId1(e.target.value);
  }
  return (
    <div className='element'>
      <h1>Department</h1>
        {ListDepartment.map((el)=><Data id={el.id} name={el.name} key={el.id} setid={setId}/>)}
      <Filter name={'Employee'}  />
      <div style={{ display: 'flex', flexDirection: "column", width: '30%', margin: 'auto' }}>
        <input type="text" value={id1} onChange={handleChangeIDDepartment} placeholder='ID Department' style={{ padding: '5px', textAlign: 'center' }} />
        <input type="text" value={name} onChange={handleChangeNameDepartment} placeholder='name Department' style={{ padding: '5px', textAlign: 'center' }} />
      </div>
      <>
        <button onClick={handlelitenaddepartment}>Thêm</button>
        <button onClick={handlelistenremoveDepartment}>Xóa</button>
        <button onClick={handlefixDepartment}>Sửa</button>
      </>
    </div>
  )
}

export default Department