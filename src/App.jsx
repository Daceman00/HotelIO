import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar isOpen={isOpen} />
        <div className="flex flex-col flex-1 ml-1">
          <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            {/* <Route path="/rooms" element={<div>Rooms Page</div>} />
            <Route path="/reservations" element={<div>Reservations Page</div>} />
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
