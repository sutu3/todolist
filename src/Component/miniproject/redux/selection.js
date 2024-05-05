import {createSelector} from '@reduxjs/toolkit'
export const Employee1=(state)=>state.employee.employee
export const DepartmentList=(state)=>state.department.department;
export const Filter=(state)=>state.filter.search
export const Remaning=createSelector(
    DepartmentList,
    Filter,
    (department,filters)=>{
        return department.filter((el)=>{
            console.log(filters)
           return filters===''?true:el.name===filters
            }
        )
    }
)