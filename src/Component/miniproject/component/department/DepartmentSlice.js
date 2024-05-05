import {createSlice} from '@reduxjs/toolkit'
const DepartmentSlice=createSlice({
    name:'department',
    initialState:{
        status:'idle',
        department:[]
    },
    reducers:{
        addDepartment:(state, action)=>{
            console.log(state.department)
            state.department.push(action.payload)
        },
        removeDepartment:(state, action)=>{
            const arr=state.department.filter((el)=>el.id!==action.payload)
            state.department=arr
        },
        fixDepartment:(state,action)=>{
            const arr=state.department.map((el)=>el.id===action.payload.id?
            {...el,name:action.payload.name}:el)
            state.department=arr
        }
    }
})
export default DepartmentSlice