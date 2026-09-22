
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const PaymentManagement = () => {
    

    
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', ],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments')
            return res.data;
        }
    })
    return (
        <div className="ml-[100px] pt-20">
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
                                
                                <th>Email</th>

                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                payments.map((payment, index) => <tr className=" h-24 text-base"

                                    key={payment._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    
                                    <td>
                                        <h3>{payment.email}</h3>

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
        </div>
    );
};

export default PaymentManagement;