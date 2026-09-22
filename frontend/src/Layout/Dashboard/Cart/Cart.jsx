import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useCart from "../../../Hook/useCart";
import { RiDeleteBin6Line, RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "YOU WANT TO DELETE!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Cart Item Has Been Deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] pt-30 pb-10 px-4 text-center">
        <div className="w-24 h-24 rounded-full bg-pink-50 flex items-center justify-center mb-6">
          <RiShoppingCart2Line className="text-pink-400 text-5xl" />
        </div>
        <h3 className="font-semibold text-pink-600 text-2xl sm:text-3xl mb-2">
          You haven&apos;t added anything to the cart yet
        </h3>
        <p className="text-gray-500 text-sm mb-6 max-w-sm">
          Browse the shop and add items you like — they'll show up here.
        </p>
        <Link
          to="/shop"
          className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none px-8"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-32 sm:pb-10 pt-20">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg mb-8 py-8 px-6">
        <h1 className="text-center font-bold text-white text-3xl sm:text-4xl tracking-wide">
          My Cart
        </h1>
        <p className="text-center text-white/80 text-sm mt-2">
          {cart.length} item{cart.length > 1 ? "s" : ""} in your cart
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table className="table">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider">
              <th>#</th>
              <th>Product Name</th>
              <th>Company</th>
              <th>Price</th>
              <th className="text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-cyan-50/50 transition-colors duration-200"
              >
                <th className="text-gray-400">{index + 1}</th>
                <td className="font-medium text-gray-800">{item.product}</td>
                <td className="text-gray-500">{item.company}</td>
                <td className="font-semibold text-gray-700">
                  {parseFloat(item.price).toFixed(2)} BDT
                </td>
                <th className="text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-sm text-red-500 hover:bg-red-50 hover:scale-110 transition-transform duration-200 text-xl"
                    aria-label="Delete item"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {cart.map((item, index) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-cyan-50 text-cyan-600 text-sm font-semibold flex items-center justify-center shrink-0">
                {index + 1}
              </span>
              <div>
                <p className="font-medium text-gray-800">{item.product}</p>
                <p className="text-xs text-gray-500">{item.company}</p>
                <p className="text-sm font-semibold text-cyan-600 mt-1">
                  {parseFloat(item.price).toFixed(2)} BDT
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-ghost btn-sm text-red-500 hover:bg-red-50 text-xl shrink-0"
              aria-label="Delete item"
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        ))}
      </div>

      {/* Summary — sticky on mobile, inline on desktop */}
      <div
        className="
                    fixed bottom-0 left-0 right-0 md:static
                    bg-white md:bg-transparent
                    border-t md:border-t-0 border-gray-100
                    shadow-[0_-4px_12px_rgba(0,0,0,0.06)] md:shadow-none
                    px-4 sm:px-6 md:px-0 py-4 md:py-0 md:mt-10
                    z-20
                "
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-6xl mx-auto">
          <div className="flex sm:flex-col gap-4 sm:gap-1 justify-between sm:justify-start">
            <p className="text-sm sm:text-base font-semibold text-gray-600">
              Total Orders: <span className="text-gray-900">{cart.length}</span>
            </p>
            <p className="text-sm sm:text-base font-semibold text-gray-600">
              Total Price:{" "}
              <span className="text-cyan-600 text-lg">
                {parseFloat(totalPrice).toFixed(2)} BDT
              </span>
            </p>
          </div>

          <Link to="/payment" className="sm:w-auto w-full">
            <button
              disabled={!cart.length}
              className="btn w-full sm:w-[280px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
