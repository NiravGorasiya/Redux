import { ADD_TODO,ALL_TODO_DELETE,DELETE_TODO,UPDATETO_LIST } from "../Type/Type"
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
        case DELETE_TODO:
            const updatedList = state.list.filter((item) =>item.id!==action.payload)
            return {
                ...state,
                list:updatedList
            } 
       
        case ALL_TODO_DELETE:
            return {
                list:[]
            }
        
        case UPDATETO_LIST:
            const updatedLis = state.list.filter((item)=>item.id!==action.id)
                console.log(updatedLis,"dads");
            return {
                ...state,
                list:[...updatedLis,{data:action.data,id:action.id}]
            }
        default:
            return state;
    }
}