import { format } from 'date-fns';
import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({treatment,setTreatment,date,refetch}) => {
    const {_id,name,slots} = treatment;
    const [user] = useAuthState(auth);
    const formatteDate =format(date,'PP')

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
   
        const booking ={
            treatmentId: _id,
            treatment:name,
            date:formatteDate,
            slot,
            patient:user.email,
            patientName:user.displayName,
            phone:event.target.phone.value
           
        }

        // post 
        const url = 'http://localhost:5000/booking';
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then (res =>res.json())
        .then(data =>{
            console.log(data)
            if (data.success) {
                toast(`Appointment is set, ${formatteDate} at ${slot}`)
            }
            else{
                toast.error(`Already have an appointment, ${data.booking?.date} at ${data.booking?.slot}`)
            }
            refetch()
             // close modal 
        setTreatment(null)
        })

       
    }
    return (
        <div>
             <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg text-primary text-center items-center">Booking for: {name}</h3>

            <form onSubmit={handleBooking} action='' className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
            <input type="text" disabled value={formatteDate} className="input input-bordered w-full max-w-xs" />
            <select name='slot' class="select select-bordered w-full max-w-xs">
            {
                slots.map(slot => <option value={slot}>{slot}</option>)
            }
            <option></option>
            
            </select>

            <input type="text" name='name' disabled  value={user?.displayName || ''} placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
            <input type="email" name='email' disabled  value={user?.email || ''} placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Your Phone Number" class="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit"  class="input font-bold btn-primary input-bordered w-full max-w-xs" />
            </form>
           
  </div>
</div>
        </div>
    );
};

export default BookingModal;