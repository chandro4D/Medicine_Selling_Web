import { Helmet } from "react-helmet-async";
import useProducts from "../../Hook/useProducts";
import { FaRegEye } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../src/Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useCart from "../../Hook/useCart";

const Shop = () => {
  const [shop] = useProducts();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetchCart] = useCart(); // <-- pulls the SAME cached query NavBar reads from

  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (item) => {
    if (user && user.email) {
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name: user.displayName,
        image: item.product_image,
        price: item.price,
        company: item.product_company,
        Category: item.Category,
        weight: item.weight,
        product: item.product_name,
      };
      console.log(cartItem);
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${item.product_name} `,
            text: "ADDED TO YOUR CART SUCCESSFULLY",
            showConfirmButton: false,
            timer: 2000,
          });
          refetchCart(); // <-- updates the shared cart cache, so NavBar's badge updates instantly
        }
      });
    } else {
      Swal.fire({
        title: "YOU ARE NOT LOGGED IN",
        text: "PLEASE LOGIN TO ADD TO CART",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "YES, LOGIN!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="mx-28 mb-10">
      <Helmet>
        <title>HealthHaven | Shop</title>
      </Helmet>
      <div>
        <h1 className="text-center text-sky-500 text-4xl font-bold pt-16 mb-10">
          SEE ALL MEDICINE HERE
        </h1>
      </div>

      <div className=" ">
        <table className="table ">
          <thead>
            <tr className="text-xl text-sky-600">
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Product Company</th>
              <th>Price</th>
              <th>weight</th>
            </tr>
          </thead>
          <tbody>
            {shop.map((item, index) => (
              <tr className="h-24" key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <h3>
                    <img
                      className="w-20 h-16 rounded-lg"
                      src={item.product_image}
                    />
                  </h3>
                </td>
                <td>
                  <h3>{item.product_name}</h3>
                </td>
                <td>
                  <h3> {item.Category}</h3>
                </td>
                <td>
                  <h3>{item.product_company}</h3>
                </td>
                <td>
                  <h3> {item.price}</h3>
                </td>
                <td>
                  <h3> {item.weight}</h3>
                </td>
                <td className="btn h-10 btn-secondary mr-3 mt-6 ">
                  <button onClick={() => handleAddToCart(item)}>select</button>
                </td>
                <div className="dropdown dropdown-end ">
                  <div tabIndex={0} className=" m-1">
                    <td className="text-pink-600 mt-6   text-xl btn btn-outline">
                      <button>
                        <FaRegEye />
                      </button>
                    </td>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content text-black z-[1] menu p-6 shadow bg-gradient-to-r from-cyan-500 to-blue-500 rounded-box w-72"
                  >
                    <li className="font-semibold">
                      <a>
                        <img
                          className="w-60 h-28 rounded-lg"
                          src={item.product_image}
                        />{" "}
                      </a>
                    </li>
                    <li className="font-semibold">
                      <a>Name:{item.product_name}</a>
                    </li>
                    <li className="font-semibold">
                      <a>Company:{item.product_company}</a>
                    </li>
                    <li className="font-semibold">
                      <a>Price:{item.price}</a>
                    </li>
                    <li className="font-semibold">
                      <a>{item.weight}ML</a>
                    </li>
                  </ul>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shop;
