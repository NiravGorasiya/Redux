import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { bycyleAll, bycyleAdd, bycyleDelete } from '../../redux/action/Bycyleaction'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Bycylelist = () => {
    const dispatch = useDispatch()
    const history = useNavigate()
    const data = useSelector(state => state.bycyle)
    const [bycyleData, setBycyleData] = useState({
        owner: "",
        price: "",
        description: ""
    })

    const bycyle = async () => {
        const res = await axios.get("http://localhost:5000/bycyle/all")
        dispatch(bycyleAll(res.data.result))
    }

    const handleChange = (e) => {
        setBycyleData({ ...bycyleData, [e.target.name]: e.target.value })
    }

    const addBycyle = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/bycyle/add", bycyleData)
            .then((response) => {
                setBycyleData({ owner: "", price: "", description: "" })
                dispatch(bycyleAdd(bycyleData))
            })
            .catch((err) => {
                console.log(err, "dfads");
            })
    }

    const deleteBycyle = async (id) => {
        await axios.delete(`http://localhost:5000/bycyle/delete/${id}`)
            .then((response) => {
                dispatch(bycyleDelete(id))
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const updateBycyle = async (id) => {
        history(`/bycyle/${id}`)
    }

    useEffect(() => {
        bycyle()
    }, [])

    return (
        <div>
            <form>
                <input type="text" name="owner" value={bycyleData.owner} onChange={handleChange} /><br />
                <input type="text" name="price" value={bycyleData.price} onChange={handleChange} /><br />
                <input type="text" name="description" value={bycyleData.description} onChange={handleChange} /><br />
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
                                <td onClick={() => deleteBycyle(item._id)}>delete</td>
                                <td onClick={() => updateBycyle(item._id)}>update</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Bycylelist
