import {combineReducers} from 'redux'
import FileterSlice from "../Component/Filter/Filterslide"
import TodoListSlice from "../Component/TodoList/TodoListSlide"
// const rootreducer=(state={},action)=>{
//     return{
//         filters:FileterSlice(state.filters, action),
//         todoList:TodoListSlice(state.todoList, action),
//     }
// }
const rootreducer=combineReducers({
        filters:FileterSlice,
        todoList:TodoListSlice,
});
export default rootreducer