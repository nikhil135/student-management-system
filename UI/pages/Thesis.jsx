import "../styles/bookings.css";

import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Thesis = () => {
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
                <label className="form-label">Title</label>
                <input  className="form-input" type="text" placeholder="Title of thesis" />
                <label className="form-label">Student</label>
                <input className="form-input" type="text" placeholder="Student Name"/>
                <label className="form-label">Department</label>
                <input  className="form-input" type="text" placeholder="Department"/>
                <label className="form-label">Institution</label>
                <input className="form-input" type="text" placeholder="Institution"/>
                <label className="form-label">Guide Name</label>
                <input className="form-input" type="text" placeholder="Guide Name"/>
                <label className="form-label">Year</label>
                <input className="form-input" type="text" placeholder="Year"/>
                <label className="form-label">Additional Info.</label>
                <input className="form-input" type="text" placeholder="Additional Information"/>
              </div>
            </div>
            </form>  
            <button className="form-button">Submit</button>
        </div> 
  

  );
};

export default Thesis;
