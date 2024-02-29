import React, { useEffect, useState } from "react";
import axios from "axios";
const Cart = () => {
  const [cart, setCart] = useState([]);

  const getCart = async () => {
    const result = await axios.get("http://localhost:8015/website/get-cart");
    setCart(result.data.cart);
  };

  useEffect(() => {
    getCart();
  }, [setCart]);
  console.log(cart);

  const deleteFromCart = async (id) => {
    await axios.delete(`http://localhost:8015/website/delete-from-cart/${id}`);
    await getCart();
  };
  return (
    <div className="mt-10">
    
      <div className="flex flex-wrap -mb-10 -mt-4">
        {cart.map((item) => (
          <div key={item._id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-auto w-auto"
                src={item.product.image}
              />
            </div>
            <div className="flex justify-between items-center p-2 md:p-3 lg:p-4 xl:p-5">
              <div className="">
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  {item.product.name}
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Rs .{item.product.price}
                </p>
              </div>
              <button
                type="button"
                onClick={() => deleteFromCart(item._id)}
                className="text-lg bg-red-600 hover:bg-red-700 transition-colors duration-300 px-4 py-2 rounded-full"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
