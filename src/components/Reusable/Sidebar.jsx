import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <div
      className={`bg-green_primary h-screen transition-all duration-300 ${
        isOpen ? "w-64" : "hidden"
      } min-h-full`}
    >
      <div className="p-4">
        <h1 className="text-white_primary text-2xl font-bold mb-6">Hotel.IO</h1>
        <ul className="space-y-4 text-white_primary border-t-2 border-light_gray">
          <li className="font-bold hover:bg-green_secondary p-2 rounded">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="font-bold hover:bg-green_secondary p-2 rounded">
            <Link to="/rooms">Rooms</Link>
          </li>
          <li className="font-bold hover:bg-green_secondary p-2 rounded">
            <Link to="/bookings">Bookings</Link>
          </li>
          <li className="font-bold hover:bg-green_secondary p-2 rounded">
            <Link to="/stats">Stats</Link>
          </li>
          <li className="font-bold hover:bg-green_secondary p-2 rounded">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
