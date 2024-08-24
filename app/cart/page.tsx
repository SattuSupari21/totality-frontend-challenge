"use client";

import Header from "@/components/header";
import { cartState } from "@/state/atoms/cart";
import { useRecoilValue } from "recoil";
import CartComponent from "@/components/cart-component";
export default function Cart() {
  const cartItems = useRecoilValue(cartState);

  if (cartItems.properties.length < 1)
    return (
      <>
        <Header />
        <div className="container text-center text-lg">
          You have not booked any property.
        </div>
      </>
    );

  return (
    <>
      <Header />
      <div className="container">
        <section className="container px-0 md:px-6 py-4 space-y-6">
          <span className="text-xl font-medium">Booked Properties</span>
          <CartComponent />
        </section>
      </div>
    </>
  );
}
