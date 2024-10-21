import React from 'react';
import './Home.css'

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container">
  <a><i className="fa-solid  text-warning  fa-xl fa-mobile"></i></a>
    <a className="navbar-brand text-white" href="#">Mobile Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
      </ul>
        
            {/* <span className='cart-count'>0</span> */}
      <span className='cart-count'>{props.data.length}</span>
          <a><i className="fa-solid  text-white  fa-xl fa-cart-shopping"></i></a>

    </div>
  </div>
</nav>
        </div>
    );
}

export default Header;