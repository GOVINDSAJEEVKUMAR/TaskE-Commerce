import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  const [Site, SetSite] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8015/website/get")
      .then((result) => {
        console.log(result.data.GetProduct);
        SetSite(result.data.GetProduct);
      })
      .catch((error) => console.log(error));
  }, []);

  const addToCart = async (id) => {
    await axios.post("http://localhost:8015/website/add-to-cart", {
      productID: id,
    });
  };

  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col"></div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {Site.map((Site, index) => (
                <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-auto w-auto"
                      src={Site.image}
                    />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                    {Site.name}
                  </h2>
                  <p className="text-base leading-relaxed mt-2">
                    Rs .{Site.price}
                  </p>

                  <button
                    onClick={() => addToCart(Site._id)}
                    className=" bg-blue-600 rounded-2xl w-40 h-10 text-white"
                  >
                    ADD TO CART
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Product;
