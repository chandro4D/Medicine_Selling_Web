
import useAxiosSecure from "./useAxiosSecure";

import { useQuery } from "@tanstack/react-query";


const useProducts = () => {

    const axiosSecure = useAxiosSecure();
    
    const {refetch, data: shop =[]} = useQuery({
        queryKey:['shop'],
        queryFn: async () => {
            const res = await axiosSecure.get("/shop")
            return res.data;
        }
    })
    return [shop,refetch]
    // const [products,setProducts] = useState([]);
    // const [loading,setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('https://medicine-selling-server.vercel.app')
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data);
    //         setLoading(false);
    //     });
    // },[])
    // return [products,loading]
};

export default useProducts;