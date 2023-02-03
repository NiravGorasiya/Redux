import { BYCYLE_ALL, ADD_BYCYLE, DELETE_BYCYLE, BYCYLE_SINGLE } from "../Type/Type"

export const bycyleAll = (data) => {
    return {
        type: BYCYLE_ALL,
        payload: data
    }
}

export const bycyleAdd = (data) => {
    return {
        type: ADD_BYCYLE,
        payload: data
    }
}

export const bycyleDelete = (id) => {
    return {
        type: DELETE_BYCYLE,
        payload: id
    }
}

export const bycyleSingle = (data) => {
    return {
        type: BYCYLE_SINGLE,
        payload: data
    }
}