import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BycycleEdit = () => {
    const { id } = useParams()
    const [owner, setOwner] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const history = useNavigate()

    const bycylelist = async () => {
        const response = await axios.get(`http://localhost:5000/bycyle/${id}`)
            .then((response) => {
                setOwner(response?.data?.result?.owner);
                setPrice(response?.data?.result?.price);
                setDescription(response?.data?.result?.description)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const updateBycyle = async (e) => {
        e.preventDefault();
        const data = { owner: owner, description: description, price: price }
        await axios.put(`http://localhost:5000/bycyle/update/${id}`, data)
            .then((response) => {
                console.log(response);
                history("/")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        bycylelist()
    }, [id])

    return (
        <div>
            <h2>update</h2>
            <form>
                <input type="text" name="owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
                <input type="number" name="owner" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" name="owner" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button onClick={updateBycyle}>submit</button>
            </form>
        </div>
    )
}

export default BycycleEdit
