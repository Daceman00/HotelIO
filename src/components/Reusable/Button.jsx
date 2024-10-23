import React from "react";

function Button({ children, isAccent }) {
  return (
    <button
      className={`${
        isAccent
          ? "bg-blue-500 hover:bg-blue-600 text-white_primary"
          : "bg-green_primary hover:bg-green_secondary text-white_primary"
      } font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 hover:shadow-lg`}
    >
      {children}
    </button>
  );
}

export default Button;
