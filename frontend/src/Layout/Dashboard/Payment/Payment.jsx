import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);
const Payment = () => {
    return (
        <div className="pt-40 ">
            <br />
            <br />
            <div className="mx-[500px]">
                <Elements stripe={stripePromise} >
                   <CheckoutForm></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;
