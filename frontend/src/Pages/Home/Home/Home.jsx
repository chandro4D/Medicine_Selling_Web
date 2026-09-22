
import CategoryCard from "../CategoryCard/CategoryCard";
import Discount from "../Discount/Discount";
import Slider from "../Slider/Slider";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HealthHaven | Home</title>
            </Helmet>

            <div className="pt-20 mb-10">
                <h1 className='text-center text-sky-500 mb-2 text-4xl font-bold'>WELCOME TO HEALTH HAVEN</h1>
               
                <h1 className='text-center text-sky-500 text-4xl font-bold'>SEE SOME PRODUCTS</h1>
            </div>


            <div>
                <Slider></Slider>
                <h1 className='text-center text-sky-500 text-4xl mt-207 mb-14 font-bold'>ALL CATEGORY OF PRODUCTS HERE</h1>
                
                <CategoryCard></CategoryCard>
                <div>
                    <h1 className='text-center text-sky-500 text-4xl font-bold'>SEE SOME DISCOUNT PRODUCTS</h1>
                </div>
                <Discount></Discount>

            </div>
            {/* ---------------------------------FAQ-------------------- */}
            <div><h1 className='text-center text-sky-500 text-4xl font-bold'>SOME FREQUENTLY ASKED QUESTION</h1></div>
            <br />
            <div className="join join-vertical ml-[140px]  w-[1200px] mb-[50px]">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How can I make online payments ?
                    </div>
                    <div className="collapse-content text-sky-500 text-xl">
                        <p>HealthHaven provide all kinds of online payment option such as - Stripe , Visa Debit or MasterCard Debit and more. Also HealthHaven have a self HealthHaven wallet. Our all online payment option is 100% secure.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What is the refund policy? ?
                    </div>
                    <div className="collapse-content">
                        <p className='text-sky-500 text-xl'>Refund Policy is the agreement where you inform customers about your policies regarding returns and refunds. HealthHaven have refund policy. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Is it possible to have my order delivered faster?
                    </div>
                    <div className="collapse-content">
                        <p className='text-sky-500 text-xl'>We have urgent delivery options if you are wise. Some fees may apply. Please contact us.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Can I have my order delivered outside Bangladesh?
                    </div>
                    <div className="collapse-content">
                        <p className='text-sky-500 text-xl'>For legal reasons, we cannot receive any orders outside Bangladesh. If you are on vacation and need a refill, please contact us at - 09610-00-11-22.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Are there any hidden charges?
                    </div>
                    <div className="collapse-content">
                        <p className='text-sky-500 text-xl'> No, there are no hidden charges for any activity you are engaged with HealthHaven. We always follow an honest and transparent business policy.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;