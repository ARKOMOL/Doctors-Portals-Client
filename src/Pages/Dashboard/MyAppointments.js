import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const MyAppointments = () => {
    const [appointments,setAppointments]= useState([]);
    const [user] = useAuthState(auth)
    const url = `http://localhost:5000/booking?patient=${user.email}`;
    useEffect(()=>{
        if (user) {
            fetch(url)
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                setAppointments(data)
            })
        }
      
    },[]);
    return (
        <div>
            <h2 className='text-3xl text-primary text-center py-4'>My Appointments: {appointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td>{a?.phone}</td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;