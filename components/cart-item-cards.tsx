import { cartState } from "@/state/atoms/cart";
import { CartType } from "@/types/cart-type";
import { format } from "date-fns";
import { Trash } from "lucide-react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button } from "./ui/button";

export default function ItemCard() {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  function handleDeleteItemFromCart(item: CartType, amount: number) {
    const newAmount = cartItems.totalAmount - amount;
    const filteredCart = cartItems.properties.filter(
      (val: CartType) => val.id !== item.id
    );
    setCartItems({ properties: filteredCart, totalAmount: newAmount });
  }

  return (
    <div className="col-span-2 flex flex-col gap-4">
      {cartItems.properties.map((item: CartType) => (
        <div
          key={item.id}
          className="flex max-[768px]:flex-col gap-4 p-4 bg-accent rounded-xl shadow-lg"
        >
          <img
            src={item.image}
            alt="property_image"
            className="rounded-xl min-[768px]:w-3/12"
          />
          <div className="flex flex-1 flex-col gap-1">
            <span className="text-lg font-medium">{item.title}</span>
            <span>
              Booking Date:{" "}
              <span className="text-primary">
                {format(item.dateFrom, "PPP")}{" "}
              </span>
              to{" "}
              <span className="text-primary">{format(item.dateTo, "PPP")}</span>
            </span>
            <span>Guests: {item.guests}</span>
            <span>Total Price: ₹{item.totalPrice}</span>
            <Button
              variant={"destructive"}
              size="icon"
              className="mt-2 ml-auto"
              onClick={() => handleDeleteItemFromCart(item, item.totalPrice)}
            >
              <Trash className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
