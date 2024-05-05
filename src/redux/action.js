export const addtodoList=(payload)=>{
    return {
        type:'todoList/addTodo',
        payload: payload
    }
} 
export const changeCompleted=(payload)=>{
    return {
        type:'todoList/changeCompleted',
        payload: payload
    }
}
export const searchFilterchange=(payload)=>{
    return {
        type:'filters/searchFilterChange',
        payload: payload
    }
}
export const statusFilterchange=(payload)=>{
    return {
        type:'filters/statusFilterChange',
        payload: payload
    }
}  
export const priorityFilterchange=(priority)=>{
    return {
        type:'filters/priorityFilterChange',
         payload: priority
    }
}