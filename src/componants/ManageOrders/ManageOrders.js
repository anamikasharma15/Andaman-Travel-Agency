import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://quiet-sea-18994.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);

    const handleDelete = id =>{
        const url = `https://quiet-sea-18994.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted');
        const remaining = orders.filter(service => service._id !== id);
        setOrders(remaining);
            }
        })
    }
    return (
        <div>
            <h2 className="text-center">Manage Orders</h2>
    {
        orders.map(service => <div key={service._id}>
            <h3>{service.name}</h3>
    <button onClick={() => handleDelete(service._id)}>Delete</button>

                </div>)
            }
        </div>
    );
};

export default ManageOrders;