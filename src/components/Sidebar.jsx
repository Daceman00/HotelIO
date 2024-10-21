import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <div
      className={`bg-green_primary h-full transition-all duration-300 ${
        isOpen ? "w-64" : "hidden"
      } `}
    >
      <div className="p-4">
        <h1 className="text-white_primary text-2xl font-bold mb-6">Hotel.IO</h1>
        <ul className="p-4 space-y-4 text-white_primary">
          <li className="hover:bg-green_secondary p-2 rounded">Dashboard</li>
          <li className="hover:bg-green_secondary p-2 rounded">Rooms</li>
          <li className="hover:bg-green_secondary p-2 rounded">Reservations</li>
          <li className="hover:bg-green_secondary p-2 rounded">Stats</li>
          <li className="hover:bg-green_secondary p-2 rounded">Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
