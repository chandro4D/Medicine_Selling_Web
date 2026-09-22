import { FaRegEye } from "react-icons/fa";

const ProductsTable = () => {
    
    return (
        <div className="ml-[60px] mb-6">
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
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
                    <tbody>
                        
                        <tr className="text-xs">
                            <th>
                                {"index + 1"}
                            </th>
                            <td>

                                <h3><img src={"product_image"}  /> </h3>

                            </td>
                            <td>
                                <h3>{"product_name"}</h3>

                            </td>
                            <td>
                            <h3> {"Category"}</h3>
                            </td>
                            <td>
                                <h3>{"product_company"}</h3>
                            </td>
                            <td>
                                <h3> {"price"}</h3>
                            </td>
                            <td>
                                <h3> {"weight"}</h3>
                            </td>
                            <td className="btn h-10 btn-secondary mr-3">
                                <button>select</button>
                            </td>
                            <td className="text-pink-600 text-xl btn btn-outline">
                                <button><FaRegEye /></button>
                            </td>




                        </tr>

                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default ProductsTable;