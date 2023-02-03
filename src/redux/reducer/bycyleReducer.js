import { BYCYLE_ALL } from "../Type/Type";

export const bycyleReducer = (state = [], action) => {
    switch (action.type) {
        case BYCYLE_ALL:
            return [
                ...action.payload
            ]
        default:
            return state;
    }
}