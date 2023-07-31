import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowDropDown } from 'react-icons/md';
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";
import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import Bookings from "./Bookings";
import Grants from "./Grant";
import Thesis from "./Thesis";
import IPR from "./IPR";

// import RecommendCarCard from "../components/UI/RecommendCarCard";
// import recommendCarsData from "../assets/dummy-data/recommendCars";

// const carObj = {
//   title: "Total Students",
//   totalNumber: 750,
//   icon: "ri-police-car-line",
// };

// const tripObj = {
//   title: "Total Institutes",
//   totalNumber: 37,
//   icon: "ri-steering-2-line",
// };

const Dashboard = () => {
  const [isOpen0, setIsOpen0] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown0 = (PageUrl) => {
    setIsOpen0(!isOpen0);
    // navigate('/Bookings'); 
    navigate(PageUrl);
  };

  const toggleDropdown1 = (PageUrl) => {
    setIsOpen1(!isOpen1);
    navigate(PageUrl);
  };

  const toggleDropdown2 = (PageUrl) => {
    setIsOpen2(!isOpen2);
    navigate(PageUrl);
  };

  const toggleDropdown3 = (PageUrl) => {
    setIsOpen3(!isOpen3);
    navigate(PageUrl);
  };

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleOptionClick = (option, path) => {
    console.log(`Option "${option}" clicked.`);
    // history.push(path); // Redirect to the specified path

};

  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          
          <div className="dropdown" onClick={() => setIsOpen0(!isOpen0)}>
            Publication            
            {isOpen0 && (
            <div className="dropdown-content">
            <button onClick={()=>toggleDropdown0("/Bookings")}>Journal Entry</button>
            <button onClick={toggleDropdown0}>Conference Entry</button>
            <button onClick={toggleDropdown0}>Publication View</button>
            </div>
            )}
          </div>

          <div className="dropdown" onClick={() => setIsOpen1(!isOpen1)}>
            Grants
            {isOpen1 && (
            <div className="dropdown-content">
            <button onClick={()=>toggleDropdown1("/Grants")}>Grant Entry</button>
            <button onClick={()=>toggleDropdown1("/Grants")}>Edit</button>
            <button onClick={toggleDropdown1}>Grant View</button>
            </div>
            )}
          </div>


          <div className="dropdown" onClick={() => setIsOpen2(!isOpen2)}>
            Thesis
            {isOpen2 && (
            <div className="dropdown-content">
            <button onClick={()=>toggleDropdown2("/Thesis")}>Thesis Entry</button>
            <button onClick={()=>toggleDropdown2("/Thesis")}>Edit</button>
            <button onClick={toggleDropdown2}>Thesis Search</button>
            </div>
            )}
          </div>

          <div className="dropdown" onClick={() => setIsOpen3(!isOpen3)}>
            IPR
            {isOpen3 && (
            <div className="dropdown-content">
            <button onClick={()=>toggleDropdown3("/IPR")}>Entry</button>
            <button onClick={()=>toggleDropdown3("/IPR")}>Edit</button>
            <button onClick={toggleDropdown3}>Search</button>
            </div>
            )}
          </div>

          <div className="dropdown" onClick={() => setIsOpen4(!isOpen4)}>
            Report
            {isOpen0 && (
            <div className="dropdown-content">
            <button onClick={toggleDropdown0}>Publication</button>
            <button onClick={toggleDropdown1}>Grant</button>
            <button onClick={toggleDropdown2}>Thesis</button>
            <button onClick={toggleDropdown3}>IPR</button>
            </div>
            )}
          </div> 
      
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Institute Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Department Statistics</h3>
            <CarStatsChart />
          </div>
        </div>
        {/*
        <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
          */}
      </div>
    </div>
  );
};

export default Dashboard;
