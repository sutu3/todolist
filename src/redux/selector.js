import { createSelector } from "@reduxjs/toolkit";
export const TodoList = (state) => state.todoList.todos;
export const Search = (state) => state.filters.search;
export const Status = (state) => state.filters.status;
export const Priority = (state) => state.filters.priority;
export const Remaining = createSelector(
  TodoList,
  Search,
  Status,
  Priority,
  (todo, search, Status, priority) => {
    console.log(todo);
    return todo.filter((el) => {
      if (Status === "ALL") {
        return priority.length
          ? el.name.includes(search) && priority.includes(el.priority)
          : el.name.includes(search);
      }
      return (
        el.name.includes(search) &&
        (Status !== "ALL" && Status === "Completed"
          ? el.completed
          : !el.completed) &&
        (priority.length ? priority.includes(el.priority) : true)
      );
    });
  }
);
