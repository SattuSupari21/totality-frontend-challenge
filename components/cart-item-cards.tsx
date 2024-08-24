import { cartState } from "@/state/atoms/cart";
import { CartType } from "@/types/cart-type";
import { format } from "date-fns";
import { useRecoilValue } from "recoil";

export default function ItemCard() {
  const cartItems = useRecoilValue(cartState);
  return (
    <div className="col-span-2 flex flex-col gap-4">
      {cartItems.properties.map((item: CartType) => (
        <div className="flex max-[768px]:flex-col gap-2 p-2 bg-accent rounded-xl shadow-lg">
          <img
            src="https://rapidapi.com/blog/wp-content/uploads/2018/10/architecture-1836070_640.jpg"
            alt="property_image"
            className="rounded-xl min-[768px]:w-3/12"
          />
          <div className="flex flex-col gap-1">
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
          </div>
        </div>
      ))}
    </div>
  );
}
