import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const SellerPaymentHistory = () => {

    const { user } = useContext(AuthContext);

    console.log(user.email);
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div className="ml-[100px] pt-20">
            {payments.length > 0 ? <>
                <div>
                    <h1 className='text-center text-sky-500 text-4xl mb-5 font-bold'>ALL PAYMENT INFORMATION </h1>
                </div>
                <div className="ml-[60px] mb-6">
                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead className="text-xl mb-6 text-sky-600">
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>

                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    payments.map((payment, index) => <tr className=" h-24 text-xs"

                                        key={payment._id}
                                    >
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>

                                            <h3>{user.displayName} </h3>

                                        </td>
                                        <td>
                                            <h3>{user.email}</h3>

                                        </td>
                                        <td>
                                            <h3> {payment.price}</h3>
                                        </td>
                                        <td>
                                            <h3>{payment.data}</h3>
                                        </td>
                                        <td>
                                            <h3>{payment.status}</h3>
                                        </td>






                                    </tr>)
                                }



                            </tbody>

                        </table>
                    </div>
                </div>
            </>
                :
                <>
                    <div className="pt-40 ml-[310px] mb-10">
                        <h3 className="text-center font-semibold text-pink-600 text-3xl">NO ONE HAS PAID YET</h3>

                    </div>
                </>
            }
        </div>
    );
};

export default SellerPaymentHistory;