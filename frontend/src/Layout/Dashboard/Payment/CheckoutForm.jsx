import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useCart from "../../../Hook/useCart";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [intentLoading, setIntentLoading] = useState(true);
  const [intentError, setIntentError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [cart, refetch, cartLoading] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // wait until we actually know what's in the cart
    if (cartLoading) {
      setIntentLoading(true);
      setIntentError("");
      return;
    }

    if (totalPrice <= 0) {
      setIntentLoading(false);
      setIntentError(cart.length === 0 ? "Your cart is empty." : "");
      return;
    }

    setIntentLoading(true);
    setIntentError("");

    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        if (!res?.data?.clientSecret) {
          setIntentError("Could not initialize payment. Please try again.");
          setIntentLoading(false);
          return;
        }
        setClientSecret(res.data.clientSecret);
        setIntentLoading(false);
      })
      .catch((err) => {
        console.error("create-payment-intent error", err);
        setIntentError(
          err?.response?.data?.message ||
            "Failed to connect to payment server. Please refresh and try again.",
        );
        setIntentLoading(false);
      });
  }, [axiosSecure, totalPrice, cart.length, cartLoading]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      setError("Payment is not ready yet. Please wait a moment and try again.");
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) return;

    setProcessing(true);
    setError("");

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
      return;
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setError(
        confirmError.message ||
          "Payment confirmation failed. Please try again.",
      );
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      try {
        // save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          data: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res);
        refetch();

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank You, For Your Payment",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/dashboard/paymentHistory");
      } catch (saveErr) {
        console.error("payment save error", saveErr);
        setError(
          "Payment succeeded, but saving the record failed. Please contact support with your transaction ID below.",
        );
      }
    }

    setProcessing(false);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0 pb-10">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
        <div className="mb-6">
          <h1 className="text-center text-sky-500 text-3xl font-bold">
            {" "}
            Please Complete Your Payment
          </h1>
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 mb-6">
          <span className="text-sm text-gray-500">Total Amount</span>
          <span className="text-lg font-bold text-gray-800">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        {intentLoading && (
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="loading loading-spinner loading-sm"></span>
            Setting up secure payment...
          </div>
        )}

        {!intentLoading && intentError && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-4">
            {intentError}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Card Information
            </label>
            <div className="border border-gray-200 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#374151",
                      fontFamily: "inherit",
                      "::placeholder": {
                        color: "#9ca3af",
                      },
                    },
                    invalid: {
                      color: "#dc2626",
                    },
                  },
                }}
              />
            </div>
          </div>

          <button
            className="btn btn-primary w-full rounded-xl text-base disabled:opacity-60"
            type="submit"
            disabled={!stripe || !clientSecret || processing || intentLoading}
          >
            {processing ? (
              <span className="flex items-center justify-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                Processing...
              </span>
            ) : (
              `Pay $${totalPrice.toFixed(2)}`
            )}
          </button>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          {transactionId && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-lg px-3 py-2 break-all">
              Your Transaction ID: {transactionId}
            </p>
          )}
        </form>
        <p className="text-sm text-gray-500 mt-3 text-center">
          Secure checkout powered by Stripe
        </p>
      </div>
    </div>
  );
};

export default CheckoutForm;
