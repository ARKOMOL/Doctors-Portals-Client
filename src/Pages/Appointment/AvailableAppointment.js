import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    // const [services,setServices] = useState([])
    const [treatment,setTreatment] = useState(null);

    const formattedDate = format(date, "PP");
    const {data : services,isLoading,refetch} = useQuery(['available',formattedDate], ()=>
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
           .then(res =>res.json()))

           if (isLoading) {
            return <Loading/>
           }
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     // fetch('service.json')
    //     .then(res =>res.json())
    //     .then(data => {
    //         setServices(data)
    //         // console.log(data)
    //     })
    // },[formattedDate])
    return (
        <div >
            <h4 className='text-secondary text-2xl text-center '>Available Appointment:{format(date, 'PP')} </h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service =><Service key={service._id} service={service} setTreatment ={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal key={treatment._id} treatment={treatment} date={date} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;