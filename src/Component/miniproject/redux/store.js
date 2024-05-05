import {configureStore} from '@reduxjs/toolkit'
import EmployeeSlice from '../component/employee/EmployeeSlice'
import DepartmentSlice from '../component/department/DepartmentSlice'
import FilterSlice from '../component/Filter/FilterSlice'
const store=configureStore({
    reducer:{
        employee:EmployeeSlice.reducer,
        department:DepartmentSlice.reducer,
        filter:FilterSlice.reducer,
    }
});
export default store