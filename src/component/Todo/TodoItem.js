import React,{useState,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { todoRemove,removeAllTo ,updateTodo} from '../../redux/action/action'

const TodoItem = ({props}) => {
     const [isUpdate,setIsUpdated] = useState(false)
    const dispatch = useDispatch()
    const textref =useRef(null)
    const deletetoOne = (id) => {
        dispatch(todoRemove(id))
    }

    const removeAll =()=>{
        dispatch(removeAllTo())
    }

    const editItemToState =(e)=>{
        e.preventDefault();
        dispatch(updateTodo({data:textref.current.value,id:props.id}))
        setIsUpdated(false)
        textref.current=null;
    }
    const renderform =()=>{
        return (
            <form onSubmit={editItemToState}>
                <input type="text" ref={textref} defaultValue={props.data} />
                <button type='submit'>edit</button>
            </form>
        )
    }

    const renderItem = ()=>{
        return (
            <>
                <li>{props.data}</li>
                <button onClick={()=>setIsUpdated(true)}>edit</button>
                <button onClick={(e) => deletetoOne(props.id)}>Delete</button>
                <button onClick={removeAll}>remove all</button>
            </>
         )
     }
    return (
    <>
        {isUpdate ? renderform():renderItem()}
    </>
  )
}

export default TodoItem