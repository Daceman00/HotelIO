import React from "react";
import Button from "../Reusable/Button";
import SingleRoom from "./SingleRoom";

function Rooms() {
  const rooms = [
    { number: 101, type: "Single", status: "Available" },
    { number: 102, type: "Double", status: "Occupied" },
    { number: 103, type: "Suite", status: "Available" },
    { number: 104, type: "Double", status: "Maintenance" },
    { number: 105, type: "Single", status: "Occupied" },
    { number: 106, type: "Single", status: "Occupied" },
  ];
  return (
    <div className="flex-1 p-6 bg-white_secondary">
      <h1 className="text-green_primary text-3xl font-bold mb-6">Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <SingleRoom room={room} key={room.number} />
        ))}
      </div>
    </div>
  );
}

export default Rooms;