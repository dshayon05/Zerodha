import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios, { all } from "axios";


const Orders = () => {

     const [allOrders, setAllOrders] = useState([]);

   useEffect(() => {
     axios.get("http://localhost:3002/allOrders").then((res) => {
       console.log(res.data);
       setAllOrders(res.data);
     });
   }, []);

   return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>TP</th>
            <th>Cur. val</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  )};

//     return (
//         <div className="orders">
//             <div className="no-orders">
//                 <p>You haven't placed any orders today</p>

//                 <Link to={"/"} className="btn">
//                 Get started
//                 </Link>
//             </div>
//         </div>
//     );
// };

export default Orders;