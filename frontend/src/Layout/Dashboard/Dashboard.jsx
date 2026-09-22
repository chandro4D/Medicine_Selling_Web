import { useState } from "react";
import {
  FaBook,
  FaCartPlus,
  FaEnvelope,
  FaHome,
  FaList,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdOutlineManageAccounts, MdRestaurantMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hook/useAdmin";
import useSeller from "../../Hook/useSeller";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller();
  const [isOpen, setIsOpen] = useState(false);
  // const isAdmin = true;
  // const isSeller = true;

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
     ${
       isActive
         ? "bg-white/20 text-white shadow-inner backdrop-blur-sm"
         : "text-white/80 hover:bg-white/10 hover:text-white hover:translate-x-1"
     }`;

  const SidebarContent = () => (
    <>
      <div className="pt-8 pb-6 flex flex-col items-center border-b border-white/10 mb-4">
        <img
          className="w-20 h-20 rounded-full ring-4 ring-white/20 object-cover mb-3 shadow-lg"
          src="/default.png"
          alt="HealthHaven"
        />
        <h1 className="text-xl font-bold text-white tracking-wide">
          HealthHaven
        </h1>
        <span className="text-xs text-white/60 mt-1">
          {isAdmin ? "Admin Panel" : isSeller ? "Seller Panel" : "User Panel"}
        </span>
      </div>

      <ul className="menu px-4 gap-1">
        {isAdmin ? (
          <>
            <li className="text-[11px] uppercase tracking-wider text-white/40 px-4 pt-2 pb-1">
              Administration
            </li>
            <li>
              <NavLink to="/dashboard/adminHome" className={linkClass}>
                <FaHome /> Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allUsers" className={linkClass}>
                <FaUsers /> Manage Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addItems" className={linkClass}>
                <MdOutlineManageAccounts /> Manage Category
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentManagement" className={linkClass}>
                <FaList /> Payment Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/adminSalesReport" className={linkClass}>
                <FaBook /> Sales Report
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/adminManageBanner" className={linkClass}>
                <FaBook /> Manage Banner
              </NavLink>
            </li>
          </>
        ) : isSeller ? (
          <>
            <li className="text-[11px] uppercase tracking-wider text-white/40 px-4 pt-2 pb-1">
              Seller Tools
            </li>
            <li>
              <NavLink to="/dashboard/sellerHome" className={linkClass}>
                <FaHome /> Seller Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageMedicine" className={linkClass}>
                <FaCartPlus /> Manage Medicine
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/sellerPaymentHistory" className={linkClass}>
                <FaCartPlus /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/sellerAd" className={linkClass}>
                <FaCartPlus /> Advertisement
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="text-[11px] uppercase tracking-wider text-white/40 px-4 pt-2 pb-1">
              My Account
            </li>
            <li>
              <NavLink to="/dashboard/userHome" className={linkClass}>
                <FaHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="cart" className={linkClass}>
                <FaCartPlus /> My Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentHistory" className={linkClass}>
                <FaCartPlus /> Payment History
              </NavLink>
            </li>
          </>
        )}

        {/* -------------------- shared items -------------------- */}
        <div className="divider my-3 before:bg-white/10 after:bg-white/10"></div>

        <li className="text-[11px] uppercase tracking-wider text-white/40 px-4 pb-1">
          General
        </li>
        <li>
          <NavLink to="/" className={linkClass}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className={linkClass}>
            <MdRestaurantMenu /> Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            <FaEnvelope /> Contact
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div className="flex min-h-screen ">
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between bg-gradient-to-r from-indigo-500 to-pink-500 px-4 py-3 shadow-md">
        <span className="text-white font-bold text-lg">HealthHaven</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-96 z-30
          bg-gradient-to-b from-indigo-500 to-pink-500
          shadow-xl overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <SidebarContent />
      </div>

      {/* Main content */}
      <div className="flex-1 pt-16 lg:pt-0 px-2 sm:px-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;