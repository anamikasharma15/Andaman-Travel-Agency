// import React from 'react';
//  import banner1 from '../../images/banner1.jpg';

// // import banner from '../../images/banner.jpg';
// import banner2 from '../../images/banner2.jpg';
// import ladytraveller from '../../images/ladytraveller.jpg';

// // import sideImg1 from '../../images/side-img/side-img-1.jpg'
// // import sideImg2 from '../../images/side-img/side-img-2.jpg'

// import './Banner.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
// import banner1 from '../../../images/banner/banner1.jpg';
  import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
 import ladytraveller2 from "../../images/ladytraveller2.jpg";
// import banner2 from '../../../images/banner/banner2.jpg';
// import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="lighter" style={{ animationDelay:'1s' }}>Andaman Hotels & Resort</h3>
                        <p className="sub-title">Travelling  make your mind better and bright!!.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="lighter">Travel Places</h3>
                        <p className="sub-title">17 places you cannot ignore in Paris</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ladytraveller2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="lighter ">Choose your travel Place </h3>
                        <p className="sub-title">A travel website is a website that provides travel reviews.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;

// const Banner = () => {
//     return (
//         <div>
//             <section>
//                 <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//                       <div className="carousel-indicators">
//                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                     </div>  
//                     <div className="carousel-inner">
//                         <div className="arousel-item active">
 
//                             <img src={banner1} className="d-block w-100" alt="First slide" />

//                             <div className="carousel-caption d-none d-md-block">
//                                 <h5 className=' title' style={{ animationDelay: '1s' }}><span className='lighter'>Andaman Hotels & Resort</span> <br />
//                                     Andaman Travel Agency</h5>
//                                 <p className='sub-title'> Travelling  make your mind better and bright!!</p>
//                             </div>
//                         </div>
//                         <div className="carousel-item  ">

//                             <img src={banner2} className="d-block w-100" alt="Second slide" />

//                             <div className="carousel-caption d-none d-md-block">
//                                 <h5 className='title'> <span className='lighter'> <br /> Travel Places </span>
//                                 </h5>
//                                 <p className='sub-title'>17 places you cannot ignore in Paris</p>
//                             </div>
//                         </div>
//                         <div className="carousel-item  ">

//                             <img src={ladytraveller} className="d-block w-100"    alt="Third slide" />


//                             <div className="carousel-caption d-none d-md-block">
//                                 <h5 className='title'>Booking<span className='lighter'>Now  <br /> Your Choose </span>
//                                  travel Place Choose Your </h5>
//                                 <p className='sub-title'>A travel website is a website that provides travel reviews</p>
//                             </div>
//                         </div>
//                     </div>
//                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Previous</span>
//                     </button>
//                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Next</span>
//                     </button>
//                 </div>
//             </section>


//             {/* <section className=' container my-5'>
//                 <div className="row">
//                     <div className="col-md-5 col-12">
//                         <h1><span className='fw-lighter'> We Value Your Family's Health and Your Time </span></h1>
//                     </div>
//                     <div className="col-md-7 col-12">
//                         <p>Welcome to Medicenter a full-service diagnostic center and medical care clinic located on the north side of Chicago in the historic neighborhood. We provide fast effective and affordable treatment for non-life threatening illnesses and injuries that need attention right away by certified specialists.</p>
//                     </div>
//                 </div>
//             </section> */}

//             {/* <section className='container'>
//                 <h4 className='mt-5 mb-4 text-center'>Special Services</h4>
//                 <div className="row g-4 d-flex justify-content-center align-items-center">
//                     <div className="col-md-6 col-12 side-img">
//                         <img className='img-fluid' src={sideImg1} alt="" />
//                     </div>
//                     <div className="col-md-6 col-12 side-text">
//                         <div>
//                             <p>Family Birth Center</p>
//                             <div>
//                                 <br />
//                                 <h3>Leading Edge Care for Mom and Baby</h3>
//                                 <p>The Family Birth Center at Medicenter is a unique, full-service facility offering moms-to-be leading edge care in a comfortable, nurturing setting. We offer care through delivery and post-natal treatment to ensure you a happy and the best possible birthing experience.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <br /> */}

//             {/* <section className='container'>
//                 <div className="row g-4 d-flex justify-content-center align-items-center">

//                     <div className="col-md-6 col-12">
//                         <p></p>
//                         <div>
//                             <br />
//                             <h3></h3>
//                             <p>.</p>
//                         </div>
//                     </div>

//                     <div className="col-md-6 col-12">
//                         <img className='img-fluid' src={sideImg2} alt="" />
//                     </div>
//                 </div>
//             </section> */}

//             {/* <br />
//             <section className='mt-5'>
//                 <div>
//                     <div className="fixedImg">
//                         <div className="overlay">
//                             <div className='d-flex align-items-center'>
//                                 <h1 className='mx-5 text-white margin-text'>"."</h1>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}
//         </div>
//     );
// };

// export default Banner;



// // import { useState } from 'react';
// // import { Carousel } from 'react-bootstrap';
// // import img from '../images/music banner.jpg'
// // import img1 from '../images/music2.jpg'
// // import img2 from '../images/music.jpg'
// // import GetCourse from '../../javascript/getCourses';
// // import Programs from '../Programs/Programs';
// // import './Home.css'

// // const Home = () => {
// //    const [index, setIndex] = useState(0);

// //    const handleSelect = (selectedIndex, e) => {
// //       setIndex(selectedIndex);
// //    };

// //    const allPrograms = GetCourse()
// //    return (
// //       <div>
// //          <div>
// //             <Carousel activeIndex={index} onSelect={handleSelect}>
// //                <Carousel.Item>
// //                   <img
// //                      className="d-block w-100"
// //                      src={img}
// //                      alt="First slide"
// //                   />
// //                </Carousel.Item>
// //                <Carousel.Item>
// //                   <img
// //                      className="d-block w-100"
// //                      src={img1}
// //                      alt="Second slide"
// //                   />
// //                </Carousel.Item>
// //                <Carousel.Item>
// //                   <img
// //                      className="d-block w-100"
// //                      src={img2}
// //                      alt="Third slide"
// //                   />
// //                </Carousel.Item>
// //             </Carousel>
// //          </div>
// //          <div>
// //             <h1 className="heading py-2 text-light"> Here Popular Programs</h1>
// //             <div className="row row-cols-lg-4 row-cols-1 mt-4 ms-1">
// //                {
// //                   allPrograms.slice(0, 4).map(programs => <Programs key={programs.key} programs={programs}></Programs>)
// //                }
// //             </div> 
// //           </div>
// //       </div>
// //    );
// // };

// // export default Home;