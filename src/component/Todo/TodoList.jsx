import React from 'react'
import { useSelector } from 'react-redux'


const TodoList = () => {
    const data = useSelector((state) => state.todo.list)

    const deletetoOne = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            {
                data?.map((item) => (
                    <>
                        <li>{item?.data}</li>
                        <button onClick={(e) => deletetoOne(item.id)}>Delete</button>
                    </>
                ))
            }
        </div>
    )
}

export default TodoList
