// action
export const addTodo = (todo) => {
    return { 'type' : 'ADD_TODO', 'todo': todo}
}
export const deleteTodo = (todo) => {
    return { 'type' : 'DELETE_TODO', 'todo': todo}
}
export const updateTodo = (todo) => {
    return { type: 'UPDATE_TODO', 'todo': todo}
    }

