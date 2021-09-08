import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import axios from 'axios'
import {useRefreshData, useData} from '../../Context/DataContext'


const EditSnowboard = (props) => {
    const history = useHistory();
    const refreshData = useRefreshData()
    const location = useLocation();
    let thisSnowboard = useData().snowboard.filter(snowboard => snowboard.id === location.state.sb.id)
    // console.log("this is the snowboard id " + location.state.sb.id)
    let [snowboard, setSnowboard] = useState(...thisSnowboard);


    const handleChange = (event) => {
        setSnowboard({...snowboard, [event.target.name]: event.target.value})
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        handleUpdate(snowboard)
    }
    
    const handleUpdate = (editSnowboard) => {
        console.log(editSnowboard)
        axios
        .put('https://out-cold.herokuapp.com/snowboards/'+ editSnowboard.id, editSnowboard)
        .then((response) => {
            // console.log(response)
            refreshData()
        })
        history.push('/')
    }

    const handleDelete = (e, id) => {
        axios
            .delete('https://out-cold.herokuapp.com/snowboards/' + id)
            .then(() => {
                refreshData()
            })
        history.push('/')
    }

 


    return (
        <div className="container-fluid mt-3 editPage">
            <form onSubmit={handleSubmit}>

            <label htmlFor="company">Company: </label><br/>
            <input
                type="text"
                name="company"
                value={snowboard.company}
                className="form-control mt-1 inputBox box-shadow"
                onChange={handleChange}
            />

            <br/>
            <br/>

            <label htmlFor="name">Name: </label><br/>
            <input
                type="text"
                name="name"
                value={snowboard.name}
                className="form-control mt-1 inputBox box-shadow"
                onChange={handleChange}
            />

            <br/>
            <br/>

            <label htmlFor="price">Price: </label><br/>
            <input
                type="text"
                name="price"
                value={snowboard.price}
                className="form-control mt-1 inputBox box-shadow"
                onChange={handleChange}
            />

            <br/>
            <br/>

            <label htmlFor="description">Description: </label><br/>
            <input
                type="text"
                name="description"
                value={snowboard.description}
                className="form-control mt-1 inputBox descriptionbox-shadow"
                onChange={handleChange}
            />

            <br/>
            <br/>

            <label htmlFor="url">Image: </label><br/>
            <input
                type="text"
                name="url"
                value={snowboard.url}
                className="form-control mt-1 inputBox box-shadow"
                onChange={handleChange}
            />

            <br/>
            <br/>

            <label htmlFor="quantity">Quantity: </label><br/>
            <input
                type="text"
                name="quantity"
                value={snowboard.quantity}
                className="form-control mt-1 inputBox box-shadow"
                onChange={handleChange}
            />

            <br/>
            <br/>

            <input 
                type="submit"
                className="btn mr-4 btn-primary"
                value='Edit' />
            
            <button className='btn btn-danger' onClick={e => handleDelete(e, snowboard.id)}>Delete</button>                                             

            </form>


        </div>
    )
}

export default EditSnowboard
