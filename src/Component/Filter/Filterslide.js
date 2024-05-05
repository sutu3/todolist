// const init={
//         search:'',
//         status:'ALL',
//         priority:[],
//     }
// const FileterSlice=(state=init,action)=>{
//     console.log({state,action})
//     switch(action.type)
//     {
//         case 'filters/searchFilterChange':
//             return {
//                     ...state,
//                     search:action.payload
//             }
//         case 'filters/statusFilterChange':
//             return {
//                     ...state,
//                     status:action.payload
//             }
//          case 'filters/priorityFilterChange':
//             return {
//                     ...state,
//                     priority:action.payload
                    
//             }           
//         default:
//             return state;
//     }
// }
// export default FileterSlice
import {createSlice} from '@reduxjs/toolkit'
const FilterSlice=createSlice({
    name:'filters',
    initialState:{
        search:'',
        status:'ALL',
        priority:[],
        },
    reducers:{
        searchFilterChange:(state,action)=>{
            state.search=action.payload;
        },//=>type={name+tên hàm =>filters/searchFilterChange}
            statusFilterChange:(state,action)=>{
            state.status=action.payload;
        },
        priorityFilterChange:(state,action)=>{
            state.priority=action.payload;
        },
    }
})
export default FilterSlice