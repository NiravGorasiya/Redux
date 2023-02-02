import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/action/action'

const Todo = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const onsubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(value))
        setValue("")
    }

    return (
        <div>
            <form>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={onsubmit}>submit</button>
            </form>
        </div>
    )
}

export default Todo
