// import React from 'react';
// import mobile from "../images/mobile.jpg"

// function Home(props) {
    
//     return (
//         <div>
//             <div className="container my-3">
//             <div className="card" style={{"width": "20rem"}}>
//             <img src={mobile} className="card-img-top" alt="..."/>
//             <div className="card-body">
//                 <h5 className="card-title">Xiaomi Redmi Note 13pro</h5>
//                 <p className="card-text fw-bold">$14,999.00</p>
//                 <button onClick={()=>{props.addToCartHandler({price:14999.00,name:'Xiaomi Redmi Note 13pro'})}} className="btn btn-primary">Add to Cart</button>
//                 <button onClick={()=>{props.removeToCartHandler()}} className="btn btn-danger mx-2">Remove From Cart</button>
//             </div>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default Home;

import React, { useEffect } from 'react';
import mobile from "../images/mobile.jpg";

function Home(props) {
    const url = 'https://mobile-phones2.p.rapidapi.com/brands';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c548509db7msh371b19de6721cbap1b78f6jsn9f4d350f9410',
            'x-rapidapi-host': 'mobile-phones2.p.rapidapi.com'
        }
    };

    // Using useEffect to fetch data on component mount
    useEffect(() => {
        const fetchPhones = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            }

        }

        fetchPhones();
    }, []); // Empty dependency array to run only once after initial render

    return (
        <div>
            <div className="container my-3">
                <div className="card" style={{"width": "20rem"}}>
                    <img src={mobile} className="card-img-top" alt="Mobile" />
                    <div className="card-body">
                        <h5 className="card-title">Xiaomi Redmi Note 13 Pro</h5>
                        <p className="card-text fw-bold">$14,999.00</p>
                        <button onClick={() => { props.addToCartHandler({price: 14999.00, name: 'Xiaomi Redmi Note 13 Pro'}) }} className="btn btn-primary">
                            Add to Cart
                        </button>
                        <button onClick={props.removeToCartHandler} className="btn btn-danger mx-2">
                            Remove From Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
