import React, {useState} from "react";
const Header = () => {
  
    const [navShow, setNavShow] = useState(false);

    const toggle = (e) => {
      setNavShow(!navShow);
    }


    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Out Cold</a>
            <button class="navbar-toggler" type="button" onClick={toggle}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className={navShow? "navBtnsContainer navbar-collapse" : "navBtnsContainer collapse navbar-collapse "} id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/add">Add Snowboard</a>
                    </li>
                </ul>
            </div>
        </nav>

    )

}

export default Header;