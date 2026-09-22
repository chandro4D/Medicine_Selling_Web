import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import {
  FaCartPlus,
  FaHistory,
  FaShoppingBag,
  FaUserCircle,
} from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

const UserHome = () => {
  const { user } = useContext(AuthContext);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const quickLinks = [
    {
      to: "/dashboard/dashboardCart",
      icon: <FaCartPlus className="text-2xl" />,
      title: "My Cart",
      desc: "Review items you've added",
      color: "from-sky-500 to-cyan-400",
    },
    {
      to: "/dashboard/paymentHistory",
      icon: <FaHistory className="text-2xl" />,
      title: "Payment History",
      desc: "Track your past orders",
      color: "from-purple-500 to-pink-400",
    },
    {
      to: "/shop",
      icon: <MdRestaurantMenu className="text-2xl" />,
      title: "Browse Shop",
      desc: "Discover more products",
      color: "from-emerald-500 to-teal-400",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Welcome hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-500 shadow-xl px-6 sm:px-10 py-10 sm:py-14 mb-10 animate-fade-in">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-14 -left-14 w-56 h-56 bg-white/10 rounded-full blur-2xl"></div>

        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="profile"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-4 ring-white/40 object-cover shadow-lg"
            />
          ) : (
            <FaUserCircle className="w-20 h-20 sm:w-24 sm:h-24 text-white/80" />
          )}

          <div>
            <p className="text-white/80 text-sm sm:text-base font-medium tracking-wide uppercase mb-1">
              {getGreeting()}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Hi, Welcome {user?.displayName ? user.displayName : "Back"}!
            </h1>
            {user?.email && (
              <p className="text-white/70 text-sm mt-2">{user.email}</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {quickLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.to}
            className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 hover:-translate-y-1"
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
            >
              {link.icon}
            </div>
            <h3 className="text-base font-semibold text-gray-800 mb-1">
              {link.title}
            </h3>
            <p className="text-sm text-gray-500">{link.desc}</p>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${link.color} group-hover:w-full transition-all duration-300"></div>
          </Link>
        ))}
      </div>

      {/* Encouragement / status strip */}
      <div className="mt-10 flex items-center gap-3 bg-sky-50 border border-sky-100 rounded-2xl px-5 py-4">
        <FaShoppingBag className="text-sky-500 text-xl shrink-0" />
        <p className="text-sm text-sky-700">
          Everything you need is just a click away — manage your cart, track
          orders, and explore the shop right from here.
        </p>
      </div>
    </div>
  );
};

export default UserHome;
