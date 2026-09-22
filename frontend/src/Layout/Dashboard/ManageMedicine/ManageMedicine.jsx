import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import { Helmet } from "react-helmet-async";


const ManageMedicine = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const secure = useAxiosSecure();
    const { data: shop = [], refetch } = useQuery({
        queryKey: ['shop'],
        queryFn: async () => {
            const res = await secure.get(`/shop/${user.email}`);
            return res.data;
        }
    })


    const handleAddItem = e => {
        e.preventDefault();
        const product_name = e.target.product_name.value;
        const Category = e.target.Category.value;
        const product_image = e.target.product_image.value;
        const product_company = e.target.product_company.value;
        const price = e.target.price.value;
        const weight = e.target.weight.value;
        const email = user.email
        const item = {
            product_name,
            Category,
            product_image,
            product_company,
            price,
            weight,
            email
        }
        console.log(item);
        axiosPublic.post('/shop', item)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        text: "ADDED NEW ITEM SUCCESSFULLY!",

                    });
                    refetch();
                }
            })






    }
    return (
        <div>


            <div className="ml-[100px]">
                <div className="mx-10">
                    <Helmet>
                        <title>HealthHaven | manage medicine</title>
                    </Helmet>
                    <h3 className="pt-14 text-center font-semibold text-3xl text-indigo-500  mb-10">ALL OF YOUR ADDED ITEM HERE</h3>
                    <div className="ml-[320px] mb-10 ">
                        <button className="ml-[48 0px]">{/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn text-white  bg-gradient-to-r from-indigo-500  to-pink-500 " onClick={() => document.getElementById('my_modal_5').showModal()}>ADD NEW CATEGORY</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                                <div className="modal-box w-[900px] h-[500px] bg-gradient-to-r from-indigo-500  to-pink-500">
                                    <h3 className="font-bold text-2xl">ADD NEW CATEGORY!</h3>
                                    <form onSubmit={handleAddItem} className=" ">
                                        <div className="flex mt-10">
                                            <div className=" lg:w-[400px]  mr-5 sm:w-[250px] h-[50px]">
                                                <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Product Name" required name="product_name" />
                                            </div>
                                            <br />
                                            <div className=" lg:w-[400px] sm:w-[250px] h-[50px] ">
                                                <input className="w-full h-full text-center rounded-lg" type="text" placeholder="Category" required name="Category" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="flex ">
                                            <div className=" lg:w-[400px]  mr-5 sm:w-[250px] h-[50px]">
                                                <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Product Image URL" required name="product_image" />
                                            </div>
                                            <br />
                                            <div className=" lg:w-[400px] sm:w-[250px] h-[50px] ">
                                                <input className="w-full h-full text-center rounded-lg" type="text" placeholder="Product Company" required name="product_company" />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="flex ">
                                            <div className=" lg:w-[400px]  mr-5 sm:w-[250px] h-[50px]">
                                                <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Price" required name="price" />
                                            </div>
                                            <br />
                                            <div className=" lg:w-[400px] sm:w-[250px] h-[50px] ">
                                                <input className="w-full h-full text-center rounded-lg" type="text" placeholder="weight" required name="weight" />
                                            </div>
                                        </div>

                                        <br />

                                        <div className=" lg:w-[400px] sm:w-[250px] ml-8  h-[50px] rounded-2xl">
                                            <button className=" btn btn-outline btn-secondary w-full h-full "> ADD CATEGORY</button>
                                        </div>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">CANCEL</button>

                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </button>
                    </div>



                    <div>
                        {
                            shop.length > 0 ?
                                <>
                                    <div className="  ">
                                        <table className="table ">
                                            {/* head */}
                                            <thead className="text-xl text-indigo-500" >
                                                <tr>
                                                    <th>
                                                    </th>
                                                    <th>Image</th>
                                                    <th>Product Name</th>
                                                    <th>Category</th>
                                                    <th>Product Company</th>
                                                    <th>Price</th>
                                                    <th>weight</th>
                                                </tr>
                                            </thead>
                                            <tbody >

                                                {
                                                    shop.map((item, index) =>
                                                        <tr
                                                            className="h-24"
                                                            key={item._id}


                                                        >

                                                            <th >
                                                                {index + 1}
                                                            </th>
                                                            <td>

                                                                <h3><img src={item.product_image} /> </h3>

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






                                                        </tr>



                                                    )
                                                }




                                            </tbody>


                                        </table>
                                    </div>

                                </>

                                :
                                <>
                                    <div className=" ml-[140px]">
                                        <h3 className="text-center font-semibold text-pink-600 text-3xl">YOU  HAVEN`T  ADDED  ANYTHING  YET !!!</h3>
                                        <br />
                                        <h3 className="text-center font-semibold text-pink-600 text-3xl">YOU  CAN ADD NOW!!!</h3>
                                        

                                    </div>
                                </>
                        }
                    </div>
                </div >
            </div>
        </div>
    );
};

export default ManageMedicine;