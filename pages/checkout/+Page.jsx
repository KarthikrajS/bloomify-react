import { Fragment, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useInitialRender } from '../../utils/useInitialRender.js'
// import CheckoutForm from "@/components/CheckoutForm";
// import CheckoutCart from "@/components/CheckoutCart";
import { CheckoutForm } from "../../renderer/components/CheckoutForm/CheckoutForm.jsx";
import CheckoutCart from "../../renderer/components/CheckoutCart/CheckoutCart.jsx";
import { useAuthContext } from "../../renderer/components/AuthProvider/AuthProvider.jsx";
const stripePromise = loadStripe("pk_test_N6JD5LA4Func5qhgqEMIvzzy");

export { Page }

function Page(pageContext) {
    const { cart } = useAuthContext();
    const total = cart.total;
    const displayTotal = Math.abs(total);

    const initialRender = useInitialRender();
    if (!initialRender) return null;
    return (<section className="container mx-auto py-24">
        <div className="lg:grid lg:grid-cols-5 gap-4 flex flex-col">
            <div className="col-span-2">
                <CheckoutCart displayTotal={displayTotal} />
            </div>
            <div className="col-span-3">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    </section>)

}