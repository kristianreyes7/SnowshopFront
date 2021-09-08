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
            <div className="container-fluid snowboardView">
            
            {thisSnowboard.map((snowboard, i) => {
              return (
                <div key={i} className="card" style={{width: "75vw", height: "65vh"}}>
                    <img src={snowboard.url} alt={snowboard.name} className="card-img-top"/>
                    <div className="card-body">
                        <h1 className="card-title">{snowboard.company} {snowboard.name}</h1>
                        <p className="card-text">{snowboard.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price: ${snowboard.price}</li>
                        <li className="list-group-item">Quantity: {snowboard.quantity}</li>
                    
                    
                    </ul>
                     <Link className="btn card-link btn-warning" to={{
                            pathname: '/edit/' + snowboard.id ,
                            state: {sb: snowboard}
                    }}>Edit</Link>

                </div>
              )
            })}
            </div>
        </Fragment>
    )
}

export default Snowboard;