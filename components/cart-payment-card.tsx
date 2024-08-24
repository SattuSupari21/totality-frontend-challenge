import { cartState } from "@/state/atoms/cart";
import { useRecoilValue } from "recoil";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function PaymentCard() {
  const cartItems = useRecoilValue(cartState);

  return (
    <div className="space-y-4">
      <form>
        <h2 className="text-2xl font-extrabold">Payment Details</h2>
        <div className="grid gap-4 mt-8">
          <div>
            <label className="block text-base font-semibold mb-2">
              Contact Number
            </label>
            <Input
              type="number"
              className="px-4 py-3 bg-transparent w-full text-sm outline-none"
            />
            <label className="block text-base font-semibold mb-2">
              Card Holder Name
            </label>
            <Input
              type="text"
              placeholder="John Doe"
              className="px-4 py-3 bg-transparent w-full text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-base font-semibold mb-2">
              Card Number
            </label>
            <div className="flex bg-transparent border rounded-md focus-within:border-blue-500 overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 ml-3"
                viewBox="0 0 32 20"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="10"
                  fill="#f93232"
                  data-original="#f93232"
                />
                <path
                  fill="#fed049"
                  d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                  className="hovered-path"
                  data-original="#fed049"
                />
              </svg>
              <input
                type="number"
                placeholder="xxxx xxxx xxxx"
                className="px-4 py-3 bg-transparent w-full text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-base font-semibold mb-2">
                Expiry Date
              </label>
              <input
                type="number"
                placeholder="08/27"
                className="px-4 py-3 bg-transparent w-full text-sm border rounded-md outline-none"
              />
            </div>

            <div>
              <label className="block text-base font-semibold mb-2">CVV</label>
              <input
                type="number"
                placeholder="XXX"
                className="px-4 py-3 bg-transparent w-full text-sm border rounded-md outline-none"
              />
            </div>
          </div>
        </div>

        <ul className=" mt-8 space-y-4">
          <li className="flex flex-wrap gap-4 text-sm">
            Subtotal{" "}
            <span className="ml-auto font-bold">₹{cartItems.totalAmount}</span>
          </li>
          <li className="flex flex-wrap gap-4 text-sm">
            Discount <span className="ml-auto font-bold">₹0.00</span>
          </li>
          <hr className="border-gray-300" />
          <li className="flex flex-wrap gap-4 text-sm font-bold">
            Total <span className="ml-auto">₹{cartItems.totalAmount}</span>
          </li>
        </ul>

        <Button className="mt-8 text-sm px-4 py-3 w-full font-semibold tracking-wide">
          Make Payment{" "}
        </Button>
      </form>
    </div>
  );
}
