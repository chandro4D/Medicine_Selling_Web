import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useSeller = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isSeller,isPending: isSellerLoading} = useQuery({
        queryKey: [user?.email, 'isSeller'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/seller/${user.email}`)
            console.log(res.data);
            return res.data?.seller;
        }
    })
    return[isSeller,isSellerLoading]
};

export default useSeller;