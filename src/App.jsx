import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Reusable/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import Header from "./components/Reusable/Header";
import Footer from "./components/Reusable/Footer";
import { useState } from "react";
import RoomsPage from "./pages/RoomsPage";
import BookingsPage from "./pages/BookingsPage";
import RoomDetails from "./components/Rooms/RoomDetails";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar isOpen={isOpen} />
        <div className="flex flex-col flex-1 ml-1 overflow-y-auto">
          <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/bookings" element={<BookingsPage />} />
            {/*
            <Route path="/reports" element={<div>Reports Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} /> */}
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
