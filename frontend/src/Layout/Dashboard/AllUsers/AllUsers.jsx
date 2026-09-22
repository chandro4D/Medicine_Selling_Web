import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    const handleDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `He Is An Admin Now`,
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })

    }
    return (
        <div className="ml-36">
            <div>

            </div>
            <div className="text-center text-sky-600 font-semibold ">
                <div className=" justify-evenly my-4">
                    <h2 className="text-3xl">ALL USERS</h2>

                </div>
                <div className=" justify-evenly my-4">

                    <h2 className="text-3xl">TOTAL USERS : {users.length}</h2>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className="text-xl text-sky-600">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>
                                    {user.role === 'admin' ? 'Admin' : user.role === 'seller' ? 'Seller' :
                                        <button
                                            onClick={() => handleMakeAdmin(user._id)}
                                            className="btn bg-orange-400 btn-xl text-white text-2xl"><FaUsers></FaUsers>
                                        </button>
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn btn-ghost btn-xl bg-red-500 text-xl"><RiDeleteBin6Line />
                                    </button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;