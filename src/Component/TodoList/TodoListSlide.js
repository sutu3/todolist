// const init=[
//         {id:1,name:'Learnn Yoga',completed:false,priority:'Medium'},
//         {id:2,name:'Learnn Redux',completed:true,priority:'Low'},
//         {id:3,name:'Learnn React',completed:false,priority:'Hight'},
//     ]

// const TodoListSlice=(state=init,action)=>{
//     switch(action.type)
//     {
//         case 'todoList/addTodo':
//             return [
//                     ...state,
//                     action.payload
//                 ]
//         case 'todoList/changeCompleted':
//             return state.map((el)=>el.id===action.payload ?{...el,completed:!el.completed}:el)
//         default:
//             return state;
//     }
// }
// export default TodoListSlice
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const TodoListSlice1 = createSlice({
  name: "todoList",
  initialState: { status: "idle", todos: [] },
  reducers: {
    addTodo: (state, action) => {
      console.log(state)
      state.todos.push(action.payload);
    },
    changeCompleted: (state, action) => {
      console.log(state.todos)
      return state.todos.map((el) =>
        el.id === action.payload ? { ...el, completed: !el.completed } : el
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchTodo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(FetchTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(addNewTodo.fulfilled,(state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled,(state, action) => {
         state.todos.map((el) =>
        el.id === action.payload ? { ...el, completed: !el.completed } : el
      );
      })
  },
});
export const FetchTodo = createAsyncThunk("todos/FetchTodo", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  
  console.log({ data });
  return data.todos;
});
export const addNewTodo = createAsyncThunk("todos/addNewTodo",async (NewTodo) => {
    const res= await fetch("/api/todos" ,{
      method: "post",
      body:JSON.stringify(NewTodo)
    })
    
    const data = await res.json();
    console.log( {data} );
    return data.todos;
  }
);
export const updateTodo=createAsyncThunk('todos/updateToDo',async(upDateTodo)=>{
  const res=await fetch("/api/updateTodo",{
    method: "post",
    body: JSON.stringify(upDateTodo),
  })
  const data=await res.json();
  return data.todos;
})
export default TodoListSlice1;

// export function addToDos(todo){
//     return function addTodoThunk(dispatch,getState){
//         console.log(getState())
//         console.log(todo)
//         todo.name='Đại đã Update dữ liệu'
//         dispatch(TodoListSlice1.actions.addTodo(todo))
//         console.log('Update', getState())
//     }
// }
