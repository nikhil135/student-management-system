import "../styles/bookings.css";
// import "../styles/settings.css";
import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IPR = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted.');
    console.log('Name:', name);
    navigate('/'); 
  };
  return (
    <div className="form-container">
          <form>
            <div className="form-field">
              <div>
                <label className="form-label">IPR</label>
                <input  className="form-input" type="text" placeholder="Type of IPR" />
                <label className="form-label">Investigator</label>
                <input className="form-input" type="text" placeholder="Investigators Name"/>
                <label className="form-label">Department</label>
                <input  className="form-input" type="text" placeholder="Department"/>
                <label className="form-label">Institution</label>
                <input className="form-input" type="text" placeholder="Institution"/>
                <label className="form-label">Additional</label>
                <input className="form-input" type="text" placeholder="Additional Investigators"/>
                <label className="form-label">Year</label>
                <input className="form-input" type="text" placeholder="Year"/>
                <label className="form-label">Information</label>
                <input className="form-input" type="text" placeholder="Additional Information"/>
              </div>
            </div>
            </form>  
            <button className="form-button">Delete</button>
        </div> 
  

  );
};

export default IPR;
