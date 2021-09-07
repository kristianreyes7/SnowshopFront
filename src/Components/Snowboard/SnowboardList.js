import React, {useState, Fragment} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { useData, useRefreshData } from '../../Context/DataContext'

const SnowboardList = props => {
    const snowboards = [...useData().snowboard]
    const refreshData = useRefreshData();
    const history = useHistory();
    // console.log(snowboards);
   

    const showPage = (e, id, sb) => {
        history.push({
            pathname: `/snowboard/` + id,
            state: {sb: sb}
        })
    }
 
    return (
        <Fragment>
            <div className="container-fluid mt-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 gy-2">
                    {snowboards.map((sb, i) => {
                        return(
                                <div className="col sbCard" key={sb.id} onClick={e => showPage(e, sb.id, sb)}>
                                    <div className="card" style={{width: "18rem"}}>
                                        <img src={sb.url} className="card-img-top" alt={sb.name}/>
                                        <div className="card-body" >
                                            <h5 className="card-title">{sb.company}</h5>
                                            <p className="card-text">Price: ${sb.price}</p>
                                            <p className="card-text">In Stock: {sb.quantity}</p>     
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