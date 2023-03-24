import 'react-calendar/dist/Calendar.css';
import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import SideMenu from '../dashboard/SideMenu';
import './Appointment.css';


//  create my own elelemnts 

function Appointment() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <main className="appointment">
        <div><SideMenu /></div>
        <div>
          <Calendar onChange={onChange} value={value} />
        </div>
      </main>
    </>
  );
}

export default Appointment;

