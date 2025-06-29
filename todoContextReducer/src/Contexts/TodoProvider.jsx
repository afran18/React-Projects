import { createContext, useReducer } from "react";
import TodoReducer from "../Reducers/TodoReducer";

export const TodoContext = createContext();

const initialState = {
    todos:[],
    editFlag: false,
    editID: '',
    textToEdit:''
}

// eslint-disable-next-line react/prop-types
export const TodoProvider = ( {children} ) => {

    const [state, dispatch] = useReducer(TodoReducer, initialState)
    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            editFlag: state.editFlag,
            editID: state.editID,
            textToEdit:state.textToEdit,
            dispatch
        }}>
            {children}
        </TodoContext.Provider>
    )
}