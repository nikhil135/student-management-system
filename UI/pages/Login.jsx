import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";

const carObj = {
  title: "Total Students",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Total Institutes",
  totalNumber: 37,
  icon: "ri-steering-2-line",
};

const Login = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />  
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

export default Login;
