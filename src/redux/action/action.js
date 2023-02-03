import { ADD_TODO,DELETE_TODO ,ALL_TODO_DELETE,UPDATETO_LIST} from "../Type/Type"

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}

export const todoRemove = (id)=>{
    return {
        type:DELETE_TODO,
        payload:id
    }
}

export const removeAllTo =()=>{
    return {
        type:ALL_TODO_DELETE
    }
}

export const updateTodo =({data,id})=>{
    return {
        type:UPDATETO_LIST,
        data,
        id,
    }
}