import { createSlice } from "@reduxjs/toolkit";
const EmployeeSlice = createSlice({
    name: "employee",
    initialState: { 
        status: "idle", 
        employee: [] 
    },
    reducers: {
        addEmployee:(state,action)=>{
            state.employee.push(action.payload)
        },
        removeEmployee:(state,action)=>{
            const arr=state.employee.filter((el)=>el.id!==action.payload)
            state.employee=arr
        },
        fixEmployee:(state,action)=>{
            console.log(2)
            console.log(state.employee.map((el)=>el.id===action.payload?
            {...el,name:action.payload.name,idDepartment:action.payload.idDepartment}:el))
            const arr=state.employee.map((el)=>el.id===action.payload.id?
            {...el,name:action.payload.name,idDepartment:action.payload.idDepartment}:el)
            state.employee=arr
        }
    },
});
export default EmployeeSlice;
export function addemployee(newemployee){
    return function addemployeeThunk(dispatch,getState){
        console.log(newemployee)
        console.log()
        getState().department.department.map(
            (el)=>el.id===newemployee.idDepartment?
            dispatch(EmployeeSlice.actions.addEmployee(newemployee)):'')
    }
}
export function fixEmployeemiddleware(newemployee){
    return function fixemployeeThunk(dispatch,getState){
        console.log(newemployee)
        console.log(getState())
        getState().department.department.map(
            (el)=>el.id===newemployee.idDepartment?
            dispatch(EmployeeSlice.actions.fixEmployee(newemployee)):'')
    }
}
