import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id,name,img,description} = props.detail;
    return (
        <div>
        <div className='col' style={{ marginTop: '100px' }}>
        <div className="card"style={{ width: '', height:'500px'}} 
        >
          {/* style={{ width: '20rem', height: '30rem' }} */}
          {/* {style={{height:'300px',width:'430px'} */}
      <img src={img}  className="card-img-top img-fluid" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/detail/${_id}`}><button>Booking Now</button></Link>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Service;
