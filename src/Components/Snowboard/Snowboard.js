import { Fragment } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { useData, useRefreshData } from '../../Context/DataContext'
import axios from 'axios'
const Snowboard = (props) => {
    const location = useLocation();
    // console.log(location.state.sb)
    const refreshData = useRefreshData();
    const history = useHistory();
    


    
    const thisSnowboard = useData().snowboard.filter(snowboard => snowboard.id === location.state.sb.id);
  
    return (
        <Fragment>
            <div className="mt-2 container-fluid snowboardView">
            
            {thisSnowboard.map((snowboard, i) => {
              return (
                <div key={i} className="card main box-shadow" style={{width: "55vw", height: "65vh"}}>
                    <img src={snowboard.url} alt={snowboard.name} className="card-img-top "/>
                    <div className="card-body cBody">
                        <h1 className="card-title">{snowboard.company} {snowboard.name}</h1>
                        <p className="card-text">{snowboard.description}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: ${snowboard.price}</li>
                            <li className="list-group-item mt-1">Quantity: {snowboard.quantity}</li>                       
                        </ul>
                        <Link className="btn mt-2 card-link btn-warning editBtn float-end" to={{
                                pathname: '/edit/' + snowboard.id ,
                                state: {sb: snowboard}
                        }}>Edit</Link>
                    </div>
                </div>
              )
            })}
            </div>
        </Fragment>
    )
}

export default Snowboard;