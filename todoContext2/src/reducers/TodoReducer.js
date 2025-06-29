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

            case "EDIT_CONFIG":
                return {
                    ...state,
                    editFlag: !state.editFlag,
                    textToEdit: action.payload.text,
                    editID: action.payload.id
                }
    
        default:
            return state
    }   
}

export default TodoReducer