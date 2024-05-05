import React,{useState} from 'react'
import Filter from '../Filter'
import {useDispatch,useSelector} from 'react-redux'
import {addemployee,fixEmployeemiddleware} from './EmployeeSlice'
import EmployeeSlice from './EmployeeSlice'
import { v4 as uuidv4 } from 'uuid'
import {Employee1} from '../../redux/selection' 
import Data from '../Data/data'
const Employee = () => {
  const ListEmloyee=useSelector(Employee1)
  console.log(ListEmloyee)
  const dispatch=useDispatch()
  const [name,setname]=useState('')
  const [id,setid]=useState('')
  const [iddelete,setiddelete]=useState('')
  const handleChangeName=(e)=>{
    setname(e.target.value)
  }
  const handleChangeID=(e)=>{
    setid(e.target.value)
  }
  const handleListenAdd=()=>{
    dispatch(addemployee({
      id:uuidv4(),
      name:name,
      idDepartment:id,
    }))
    setname('')
    setid('')
  }
  const handleListenRemove=()=>{
    console.log(iddelete)
    dispatch(EmployeeSlice.actions.removeEmployee(iddelete))
  }
  const handleListenFix=()=>{
    dispatch(fixEmployeemiddleware({
      id:iddelete,
      name:name,
      idDepartment:id
    }))
    console.log(1)
  }
  return (
    <div className='element'>
    <h1>Employee</h1>
    {
      ListEmloyee.map((el)=><Data id={el.id} name={el.name} key={el.id} setid={setiddelete}/>)
    }
    <Filter name={'Employee'}/>
    <div style={{display:'flex',flexDirection:"column",width:'30%',margin:'auto'}}>
      <input type="text" value={name} onChange={handleChangeName} placeholder='name employee' style={{padding:'5px',textAlign:'center'}}/>
      <input type="text" value={id} onChange={handleChangeID} placeholder='id Department' style={{padding:'5px',textAlign:'center'}}/>
    </div>
      <>
        <button onClick={handleListenAdd}>Thêm</button>
        <button onClick={handleListenRemove}>Xóa</button>
        <button onClick={handleListenFix}>Sửa</button>
      </>
    </div>
  )
}

export default Employee
