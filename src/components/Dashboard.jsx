import React from "react";
import Button from "./Reusable/Button";

function Dashboard() {
  return (
    <div className="flex-1 p-6 bg-white_secondary">
      <h1 className="text-green_primary text-3xl font-bold mb-4">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-green_primary text-white_primary p-6 rounded-lg shadow-lg">
          <h3>Total Rooms</h3>
          <p className="text-xl">50</p>
        </div>
        <div className="bg-green_secondary text-white_primary p-6 rounded-lg shadow-lg">
          <h3>Total Reservations</h3>
          <p className="text-xl">120</p>
        </div>
        <div className="bg-green_primary text-white_primary p-6 rounded-lg shadow-lg">
          <h3>Total Revenue</h3>
          <p className="text-xl">$12,000</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
