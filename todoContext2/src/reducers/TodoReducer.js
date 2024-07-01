const TodoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]  // or action.newTo
            }
        
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todos: state.todos.map( todo => {
                    if(todo.id === action.payload){
                        return {
                            ...todo,
                            isComplete : !todo.isComplete
                        }
                    }
                    return todo
                })
            }
            
            case "DELETE_TODO":
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.payload)
                }
    
        default:
            return state
    }   
}

export default TodoReducer