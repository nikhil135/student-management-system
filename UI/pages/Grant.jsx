import "../styles/bookings.css";
// import "../styles/settings.css";
import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Grants = () => {
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
                <label className="form-label">Grant Type</label>
                <input  className="form-input" type="text" placeholder="Grant Type" />
                <label className="form-label">Title</label>
                <input className="form-input" type="text" placeholder="Title"/>
                <label className="form-label">Agency</label>
                <input  className="form-input" type="text" placeholder="Agency"/>
                <label className="form-label">Amount</label>
                <input className="form-input" type="text" placeholder="Amount applied for"/>
                <label className="form-label">Year</label>
                <input className="form-input" type="text" placeholder="Year"/>
                <label className="form-label">PI</label>
                <input className="form-input" type="text" placeholder="PI"/>
                <label className="form-label">Co</label>
                <input className="form-input" type="text" placeholder="Co-PI"/>
              </div>
            </div>
            </form>  
            <button className="form-button">Delete</button>
        </div> 
  

  );
};

export default Grants;
