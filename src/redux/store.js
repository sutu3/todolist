// import {createStore} from 'redux'
// import rootreducer from './reducer'
// const store =createStore(rootreducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__&& 
//     window.__REDUX_DEVTOOLS_EXTENSION__())
// export default store
import {configureStore} from '@reduxjs/toolkit'
import FileterSlice from '../Component/Filter/Filterslide'
import TodoListSlice from '../Component/TodoList/TodoListSlide'
const store=configureStore({
    reducer:{
        filters:FileterSlice.reducer,
        todoList:TodoListSlice.reducer,
    }
})
export default store