import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/ShakuntalaDevi/400x39-SWM_With-Disclaimer_np._CB406908440_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your basket is Empty</h2>
            <p>
              The price and availability of items at Amazon.in are subject to
              change. The shopping cart is a temporary place to store a list of
              your items and reflects each item's most recent price. Do you have
              a promotional code? We'll ask you to enter your claim code when
              it's time to pay.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            <FlipMove>
              {basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              ))}
            </FlipMove>
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
