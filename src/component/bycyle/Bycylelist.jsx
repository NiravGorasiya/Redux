import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bycyleAll } from '../../redux/action/Bycyleaction'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Bycylelist = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.bycyle)

    const bycyle = async () => {
        const res = await axios.get("http://localhost:5000/bycyle/all")
        dispatch(bycyleAll(res.data))
    }

    useEffect(() => {
        bycyle()
    }, [])

    const addBycyle = () => {

    }

    return (
        <div>
            <form>
                <input type="text" name="owner" /><br />
                <input type="text" name="price" /><br />
                <input type="text" name="descriptin" /><br />
                <button onClick={addBycyle}>submit</button>
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <td>owner</td>
                        <td>price</td>
                        <td>description</td>
                        <td>Delete</td>
                        <td>Update</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item) => (
                            <tr key={item._id}>
                                <td>{item.owner}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>delete</td>
                                <td>update</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Bycylelist
