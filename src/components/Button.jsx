import React from "react";

function Button({ children }) {
  return (
    <button className="bg-green_primary hover:bg-green_secondary text-white_primary font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 hover:shadow-lg">
      {children}
    </button>
  );
}

export default Button;
