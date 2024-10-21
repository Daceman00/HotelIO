import React from "react";

function Header({ toggleSidebar, isOpen }) {
  return (
    <header className="bg-white_primary p-4 shadow-md flex items-center">
      <button onClick={toggleSidebar} className="text-green_primary">
        {/* Change Icon based on isOpen state */}
        {isOpen ? (
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-green_primary transform rotate-45 translate-y-2"></span>
            <span className="block w-8 h-1 bg-green_primary opacity-0"></span>
            <span className="block w-8 h-1 bg-green_primary transform -rotate-45 -translate-y-2"></span>
          </div>
        ) : (
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-green_primary"></span>
            <span className="block w-8 h-1 bg-green_primary"></span>
            <span className="block w-8 h-1 bg-green_primary"></span>
          </div>
        )}
      </button>
      <h1 className="ml-4 text-lg font-bold">Hotel Management System</h1>
    </header>
  );
}

export default Header;
