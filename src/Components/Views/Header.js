import React, {useState} from "react";
const Header = () => {
  
    const [navShow, setNavShow] = useState(false);

    const toggle = (e) => {
      setNavShow(!navShow);
    }


    return(
        <div className="container-fluid header">
            <nav className="navbar shadow p-3 navbar-expand-lg navbar-light bg-light headerNav">
                <a className="navbar-brand brand" href="/">Out Cold</a>
                <button className="navbar-toggler" type="button" onClick={toggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={navShow? "navBtnsContainer navbar-collapse" : "navBtnsContainer collapse navbar-collapse "} id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item active ">
                            <a className="nav-link homeBtn" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link addBtn" href="/add">Add Snowboard</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )

}

export default Header;