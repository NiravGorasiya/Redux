import { ADD_TODO } from "../Type/Type"

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}
