import { useState } from 'react';
import { FaBars, FaTachometerAlt, FaShoppingCart } from 'react-icons/fa';
import { RiArrowDownSFill } from 'react-icons/ri';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className="bg-cover bg-center bg-fixed h-screen"
        style={{ backgroundImage: "url('/g-2.jpg')" }} >
       
       <h1>THis will be the dashboard</h1>
      
      </div> 
       
    </>
  );
};
export default Dashboard