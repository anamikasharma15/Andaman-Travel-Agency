// import React, { useState } from 'react';
// // import SingleOrder from './SingleOrder';
// import ManageOrders from '../ManageOrders/ManageOrders';

// const ControlOrders = () => {
//    const [approval, setApproval] = useState(true);
//    const [orders, setOrders] = useState([]);


//    useState(() => {
//       if (approval) {
//          fetch('https://quiet-sea-18994.herokuapp.com/services/')
//             .then(res => res.json())
//             .then(data => {
//                setOrders(data);
//             })
//       }
//    }, [approval]);

//    const handleAccept = (dicition, _id) => {
//       const confirmation = dicition;
//       const id = _id;
//       const data = { stutus: confirmation }
//       fetch(`https://quiet-sea-18994.herokuapp.com/services/${id}`, {
//          method: "PUT",
//          headers: {
//             "content-type": "application/json"
//          },
//          body: JSON.stringify(data)
//       })
//          .then(res => res.json())
//          .then(data => {
//             // console.log(data.modifiedCount);
//             if (data.modifiedCount > 0) {
//                alert('Stutus Changed Successfully.. Please reload for Display')
//                setApproval(true)
//             }
//             else {
//                setApproval(false)
//             }

//          })
//    };

//    return (
//       <div className='my-4'>
//          <h1>Orders</h1>
//          {
//             orders.map(order => <ManageOrders key={order._id} order={order}>
//                <button className='btn btn-success' onClick={() => handleAccept('Approved', order._id)}>Accept</button>
//                <button className='btn btn-danger' onClick={() => handleAccept('Declined', order._id)}>Decline</button>
//             </ManageOrders>)
//          }
//       </div>
//    );
// };

// export default ControlOrders;