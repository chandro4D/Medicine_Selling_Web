import { useEffect, useState } from "react";


const AdminManageBanner = () => {
    const [adds, setadds] = useState([]);
    const [sliders, setSliders] = useState([]);
    useEffect(() => {
        fetch('https://medicine-selling-server.vercel.app/adds')
            .then(res => res.json())
            .then(data => setadds(data))
    },)
    useEffect(() => {
        fetch('https://medicine-selling-server.vercel.app/sliders')
            .then(res => res.json())
            .then(data => setSliders(data))
    },)

    return (
        <div>
            <div>
                <h1 className='text-sky-500 text-4xl font-bold ml-[300px] mt-10'>ASK ADVERTISEMENT BY SELLER</h1>
                {
                    adds.map(add => <div
                        className="flex ml-36 mt-10"
                        key={add._id}
                    >
                        <div>

                            <img className="w-[300px] h-[200px] rounded-lg  mr-10 mt-10" src={add.product_image} alt="" />
                        </div>

                        <div className="text-2xl mr-10 mt-20">
                            <h2>Medicine Name:{add.product_name}</h2>
                            <h2>Product Company:{add.product_company}</h2>
                            <h2>price:{add.price}</h2>
                            <h3>Seller Email:{add.email}</h3>
                        </div>
                        <div>
                            <button className="btn mt-28 btn-secondary">ADD TO SLIDE</button>
                        </div>

                    </div>)
                }

            </div>
            <div>
                <h1 className='text-sky-500 text-4xl mb-10 font-bold ml-[380px] mt-12'>ALL SLIDER IMAGE</h1>
                <div className="">
                    {
                        sliders.map(slider => <div className="mb-10"
                        key={slider._id}
                        >
                        <img className="w-[800px] mb-5 ml-[150px] h-[400px] rounded-xl" src={slider.image} alt="" />
                        <button className="btn ml-[480px] btn-secondary">Remove From Slider</button>
                    </div> )
                    }

                    
                    
                </div>
            </div>
        </div>
    );
};

export default AdminManageBanner;