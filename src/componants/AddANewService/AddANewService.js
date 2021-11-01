import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const AddANewService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    axios.post('https://quiet-sea-18994.herokuapp.com/services',data)
    .then(res =>{
        if (res.data.inserteId){
            alert('added successfully');
           reset();
        }
        // console.log(res);
    })

}
    return (
        <div className="text-center">
            <h2>Add a new service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className=' justify-content-center border border-secodary p-3 border-3 rounded'>

            <input className='form-control mb-2 border border-info' {...register('name')} placeholder='Servive Name' />
            <input className='form-control mb-2 border borer-info' {...register('img')} type='text' placeholder='image Url' />
            <textarea className='form-control mb-2 border borer-info' {...register('description')} type='text' placeholder='Describe about the Tour' />
            <input className='form-control mb-2 border border-info' {...register('Price')} type='number' placeholder='price' />

            <input className='btn btn-info' type="submit" />
            </div>

      {/* <input {...register("name", { required: true, maxLength: 20 })} /> */}
      {/* <input {...register("description")} /> */}
      {/* <input {...register("img")} /> */}
      {/* <input type="number" {...register("age", { min: 18, max: 99 })} /> */}
      {/* <input type="submit" /> */}
    </form>
        </div>
    );
};

export default AddANewService;
