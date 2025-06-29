import { createContext, useEffect, useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";

const initialState = {
    todos: [
        {
            id: 1,
            todo: "Dummy Todo",
            isComplete: false,
            editFlag: false,
            editID: '',
            textToEdit: ''
        }
    ],
}
export const TodoContext = createContext();


// eslint-disable-next-line react/prop-types
export const TodoProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState, () => {
        const storedTodos = localStorage.getItem('todos')
        return {
            ...initialState,
            todos: storedTodos ? JSON.parse(storedTodos) : initialState.todos
        }
    })

    useEffect( () => {
        localStorage.setItem("todos", JSON.stringify(state.todos))
    }, [state.todos])


    return (
        <TodoContext.Provider value = {{
            todos: state.todos,
            editFlag: state.editFlag,
            editID: state.editID,
            textToEdit: state.textToEdit,

            dispatch
        }}
        >
            {children}
        </TodoContext.Provider>
    )
}