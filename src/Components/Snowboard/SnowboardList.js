import React, {useState, Fragment} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { useData, useRefreshData } from '../../Context/DataContext'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount, reset, shoppingCartSlice} from '../../Redux/shoppingCartReducer'




const SnowboardList = props => {
    const snowboards = [...useData().snowboard];
    // const total = useSelector((state) => state.shoppingCart.total);
    // const shoppingCart = useSelector((state) => state.shoppingCart.cart)
    // const dispatch = useDispatch();
    const refreshData = useRefreshData();
    const history = useHistory();
    // console.log(snowboards);
   

    const showPage = (e, id, sb) => {
        history.push({
            pathname: `/snowboard/` + id,
            state: {sb: sb}
        })
    }

    // const addToCart = (e, sb) => {
    //     console.log(shoppingCart)
    //     shoppingCart.push(sb);
    // }

 


 
    return (
        <Fragment>
            <div className="container-fluid mt-2 showPage">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gx-1 gy-2">
                    {snowboards.map((sb, i) => {
                        return(
                                <div className="col " key={sb.id} >
                                    <div className="card sbcol" style={{width: "18rem"}}>
                                        <img src={sb.url} className="card-img-top sbCard"  alt={sb.name} onClick={e => showPage(e, sb.id, sb)}/>
                                        <div className="card-body" >
                                            <h5 className="card-title">{sb.company}</h5>
                                            <h5 className="card-title">{sb.name}</h5>
                                            <p className="card-text">Price: ${sb.price}</p>
                                            <p className="card-text">In Stock: {sb.quantity}</p>
                                            {/* <input 
                                                className="btn float-end btn-secondary card-link sbCard"
                                                type="button"
                                                value="Buy"
                                                onClick={e => editSnowboard(e, sb)}
                                                />      */}
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default SnowboardList;