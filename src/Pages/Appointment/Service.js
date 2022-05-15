import React from 'react';

const Service = ({service,setTreatment}) => {
  const {slots,name} = service
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
            {
                slots.length > 0
                ? <span>{slots[0]} </span>
                :<span className='text-red-500'>Try another date</span>
                
            }
        </p>
        <p>{slots.length} {slots.length > 1 ?'spaces':'space'} available </p>
        <div className="card-actions justify-end">
        
            <label for="booking-modal" className="btn btn-primary text-center items-center" 
        disabled={slots.length ===0} onClick={()=> setTreatment(service)}>Book Appointment</label>
        </div>
  </div>
</div>
    );
};

export default Service;