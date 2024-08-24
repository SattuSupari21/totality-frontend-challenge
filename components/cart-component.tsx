import ItemCard from "./cart-item-cards";
import PaymentCard from "./cart-payment-card";

export default function CartComponent() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4">
      <ItemCard />
      <PaymentCard />
    </div>
  );
}
