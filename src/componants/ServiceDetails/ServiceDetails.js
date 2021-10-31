import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {detailId } = useParams();
    const [eachDetail, setEachDetail] = useState([])
    useEffect (()=>{
        fetch ('/services.JSON')
        .then (res => res.json())
        .then (data => {setEachDetail(data)})
    },[])

const details = eachDetail.find(td => td.key === detailId)
    return (
    
             <div className='container' style={{ marginTop: '100px' }}>             <div className='d-flex justify-content-center'>
                 <div className="card" style={{ width: "500px" }}>
            <img src={ details?.img} className=" img-fluid" alt="..." />                  <div className="card-body">
                         <h5 className="card-title">{  details?.name}</h5>
                        <p className="card-text text-danger"> <strong>- { details?.designation} -</strong> </p>
                        {/* <p className="card-text">Help-Line: {eachDetails?.help}</p>  */}
                        <p className="card-text">{ details?.description}</p>
            {/* <img src={exact?.img} alt="" />
            <h1>{exact?.name}</h1> */}
            </div>
        </div>
     </div>
    </div>
    );
    
};

export default ServiceDetails;
{/* 
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import './ExpertDetails.css'


// const ExpertDetails = () => { */}
//     const { doctorId } = useParams();

//     const [details, setDetails] = useState([]);

 //     useEffect(() => {
//         fetch('/doctors.json')
//             .then(res => res.json())
//             .then(data => setDetails(data))
//     }, []);


//     const eachDetails = details.find(td => td.id == doctorId)


//     return (
//         <div className='container' style={{ marginTop: '100px' }}>
//             <div className='d-flex justify-content-center'>
//                 <div className="card" style={{ width: "500px" }}>
//                     <img src={eachDetails?.img} className=" img-fluid" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{eachDetails?.name}</h5>
//                         <p className="card-text text-danger"> <strong>- {eachDetails?.designation} -</strong> </p>
//                         <p className="card-text">{eachDetails?.description}</p>
//                         <p className="card-text">Help-Line: {eachDetails?.help}</p>
//                         <div className='icon2'>
//                             <a href="#"><i className="fab fa-instagram"></i></a>
//                             <a href="#"><i className="fab fa-linkedin"></i></a>
//                             <a href="#"><i className="fab fa-youtube"></i></a>
//                             <a href="#"><i className="fab fa-facebook-square"></i></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ExpertDetails;