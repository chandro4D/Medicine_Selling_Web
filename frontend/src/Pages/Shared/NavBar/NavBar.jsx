import { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { CiLogout } from "react-icons/ci";
import useCart from "../../../Hook/useCart";

const NavBar = () => {
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  const [imgError, setImgError] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        Swal.fire({
          icon: "success",
          text: "LogOut successfully!",
        });
        console.log(result.user);
      })
      .catch();
  };

  const getInitials = () => {
    const source = user?.displayName || user?.email || "";
    if (!source) return "U";

    if (user?.displayName) {
      const parts = user.displayName.trim().split(/\s+/);
      if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
      }
      return (parts[0][0] + parts[1][0] + (parts[2]?.[0] || "")).toUpperCase();
    }

    return source.slice(0, 2).toUpperCase();
  };

  const showImage = user?.photoURL && !imgError;

  const Links = (
    <>
      <li className="text-xl mt-3">
        <Link
          to="/"
          className="relative font-medium text-white/90 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>
      </li>
      <li className="text-xl mt-3">
        <Link
          to="/shop"
          className="relative font-medium text-white/90 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Our Shop
        </Link>
      </li>

      {!user && (
        <>
          <li className="text-xl mt-3">
            <Link
              to="/login"
              className="relative font-medium text-white/90 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              LogIn
            </Link>
          </li>
          <Link to="/register">
            <li>
              <a className="btn btn-secondary mt-3 text-lg text-white border-none shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
                Join Us
              </a>
            </li>
          </Link>
        </>
      )}

      <li className="text-xl align-top mt-[6px]">
        <Link to="cart">
          <button className="btn btn-ghost hover:bg-white/10 relative">
            <FaCartPlus className="text-xl" />
            <div className="badge badge-secondary badge-sm absolute -top-1 -right-1 animate-pulse">
              {cart.length}
            </div>
          </button>
        </Link>
      </li>
    </>
  );

  const ProfileMenu = user ? (
    <div
      className="tooltip tooltip-bottom"
      data-tip={user.displayName || user.email}
    >
      <div className="dropdown dropdown-end dropdown-bottom">
        <div
          tabIndex={0}
          className="m-1 cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          {showImage ? (
            <img
              className="rounded-full mt-2 w-14 h-14 object-cover ring-2 ring-white/50 hover:ring-white transition-all duration-200"
              src={user.photoURL}
              onError={() => setImgError(true)}
              alt="profile"
            />
          ) : (
            <div className="mt-2 w-14 h-14 rounded-full bg-white text-sky-600 font-bold text-lg flex items-center justify-center select-none ring-2 ring-white/50 hover:ring-white transition-all duration-200 shadow-md">
              {getInitials()}
            </div>
          )}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content text-white z-[1] menu p-5 gap-1 shadow-xl bg-gradient-to-br from-cyan-500 to-blue-600 rounded-box w-72 mt-3"
        >
          <li className="px-2 pb-3 mb-1 border-b border-white/20">
            <p className="font-semibold text-sm truncate">
              {user.displayName || "Welcome back"}
            </p>
            <p className="text-xs text-white/70 truncate">{user.email}</p>
          </li>
          <Link to="/updateProfile">
            <li className="font-semibold">
              <a className="hover:bg-white/15 rounded-lg transition-colors duration-200">
                Update Profile
              </a>
            </li>
          </Link>
          <Link to="dashboard/cart">
            <li className="font-semibold">
              <a className="hover:bg-white/15 rounded-lg transition-colors duration-200">
                Dashboard
              </a>
            </li>
          </Link>
          <li className="mt-2">
            <a>
              <button
                onClick={handleSignOut}
                className="btn bg-white w-[120px] font-bold text-red-600 text-base hover:bg-red-50 hover:scale-105 transition-all duration-200 border-none"
              >
                Logout
                <CiLogout className="text-2xl" />
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  ) : null;

  return (
    <div className="navbar fixed z-10 bg-gradient-to-r from-sky-500 to-blue-500 shadow-lg w-full text-white lg:h-32 relative">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hover:bg-white/10 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 gap-1 shadow-xl bg-white text-gray-700 rounded-box w-56"
          >
            {Links}
          </ul>
        </div>
        <div className="flex lg:ml-[130px] mr-[650px] items-center">
          <img
            className="mr-2 w-[60px] h-[60px] rounded-full ring-2 ring-white/40 hover:ring-white transition-all duration-300 hover:rotate-6"
            src="/default.png"
            alt=""
          />
          <a className="text-white text-2xl font-bold mr-[300px] pt-3 tracking-wide drop-shadow-sm">
            HealthHaven
          </a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex mr-[350px]">
        <ul className="menu menu-horizontal items-center gap-3">{Links}</ul>
      </div>

      {/* Profile avatar - pinned at a fixed offset from the right, mirroring the logo's left offset */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-[130px]">
        {ProfileMenu}
      </div>
    </div>
  );
};

export default NavBar;
