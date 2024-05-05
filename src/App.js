import logo from "./logo.svg";
import "./App.css";
import Filter from "./Component/Filter/index";
import TodoList from "./Component/TodoList/index";
import Demo5 from "./demo5";
import Miniproject from "./Component/miniproject/component/trangchu/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchTodo } from "./Component/TodoList/TodoListSlide";
import { SetupServer } from "./Component/fakeapi";
import { Priority } from "./redux/selector";
// if (process.env.NODE_ENV === "development") {
//   SetupServer();
// }
function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(FetchTodo());
  //   // fetch('api/todos',{
  //   //   method:'POST',
  //   //   body: JSON.stringify({
  //   //     id:1,
  //   //     name:'Dai',
  //   //     completed:false,
  //   //     priority:'High',
  //   //   }),
  //   // }).then((res)=>{
  //   //     fetch('api/todos')
  //   //     .then((res)=>res.json())
  //   //     .then((res)=>console.log(res))

  //   //   });
  // }, []);
  return (
    <div className="App">
      {/* <Filter />
      <TodoList /> */}
      <Miniproject />,
    </div>
  );
}

export default App;
