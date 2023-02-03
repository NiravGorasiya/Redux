import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoRemove ,removeAllTo} from '../../redux/action/action'
import TodoItem from './TodoItem'
const TodoList = () => {

    const data = useSelector((state) => state.todo.list)
    return (
        <>
            {  
                data?.map((item) => (
                    <>
                        <TodoItem props={item}/>
                    </>
                ))
            }
        </>
    )
}

export default TodoList
