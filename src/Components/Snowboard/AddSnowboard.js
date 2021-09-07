import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import axios from 'axios'
import { useRefreshData } from '../../Context/DataContext'

const AddSnowboard = (props) => {
    let emptySnowboard = { 
        company: ' ',
        name: ' ',
        price: ' ',
        description: ' ',
        url: ' ',
        quantity: ' '
     }
    let [snowboard, setSnowboard] = useState(emptySnowboard)
    let refreshData = useRefreshData();
    let history = useHistory();

    const handleChange = (event) => {
        setSnowboard({...snowboard, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        handleCreate(snowboard)
        history.push('/');
    }

    const handleCreate = (addSnowboard) => {
        axios
        .post('https://out-cold.herokuapp.com/snowboards', addSnowboard)
        .then((response) => {
            console.log(response)
            refreshData()
        })
    }

    return (
        <div className='container-fluid'>

            <form onSubmit={handleSubmit}>

                <label htmlFor="company">Company: </label><br/>
                <input
                    type="text"
                    name="company"
                    className="form-control"
                    onChange={handleChange}
                />

                <br/>
                <br/>

                <label htmlFor="name">Name: </label><br/>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                />

                <br/>
                <br/>

                <label htmlFor="price">Price: </label><br/>
                <input
                    type="text"
                    name="price"
                    className="form-control"
                    onChange={handleChange}
                />

                <br/>
                <br/>

                <label htmlFor="description">Description: </label><br/>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={handleChange}
                />

                <br/>
                <br/>

                <label htmlFor="url">Image: </label><br/>
                <input
                    type="text"
                    name="url"
                    className="form-control"
                    onChange={handleChange}
                />

                <br/>
                <br/>

                <label htmlFor="quantity">Quantity: </label><br/>
                <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    onChange={handleChange}
                />

                <br/>
                <br/>

                <input 
                    type="submit"
                    className="btn btn-primary " />
                <a class="btn btn-secondary " href="/">Home <span class="sr-only"></span></a>  
            </form>
        </div>
    )
}

export default AddSnowboard
