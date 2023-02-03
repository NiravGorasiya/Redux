import { ADD_BYCYLE, BYCYLE_ALL, DELETE_BYCYLE, BYCYLE_SINGLE } from "../Type/Type";

export const bycyleReducer = (state = [], action) => {
    switch (action.type) {
        case BYCYLE_ALL:
            return [
                ...action.payload
            ]
        case ADD_BYCYLE:
            return [
                ...state, action.payload
            ]
        case DELETE_BYCYLE:
            const bycyleDelete = state.filter((item) => item._id !== action.payload)
            return [
                ...bycyleDelete
            ]
        case BYCYLE_SINGLE:
            return {
                dfdas: []
            }
        default:
            return state;
    }
}