import "../styles/bookings.css";
// import "../styles/settings.css";
import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
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
                <label className="form-label">Publication Type</label>
                <input  className="form-input" type="text" placeholder=" Publication" />
                <label className="form-label">Title</label>
                <input className="form-input" type="text" placeholder="Title"/>
                <label className="form-label">Journal</label>
                <input  className="form-input" type="text" placeholder="Journal"/>
                <label className="form-label">Author</label>
                <input className="form-input" type="text" placeholder="Author"/>
                <label className="form-label">Add. Authors</label>
                <input className="form-input" type="text" placeholder="Add. Authors"/>
              </div>
            </div>
            </form>  
            <button className="form-button">Delete</button>
        </div> 
  

  );
};

export default Bookings;
