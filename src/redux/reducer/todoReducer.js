import { ADD_TODO } from "../Type/Type"
const initialState = {
    list: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                list: [...state.list, { id: new Date().getTime().toString(), data: action.payload }]
            }
        default:
            return state;
    }
}