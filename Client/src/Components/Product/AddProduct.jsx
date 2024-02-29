import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';


import axios from "axios"
axios.defaults.withCredentials = true;

const AddProduct = () => {
    const [item, setItem] = useState({
        name: "",
        image: "",
        price: "",
        
      });
      console.log(item);
    
      const navigate = useNavigate("");
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .post("http://localhost:8015/website/addproduct", item)
          .then((res) => {
            console.log(res);
            navigate("");
          })
          .catch((err) => console.log(err));
      };
    
      return (
        <div className="py-5">
        <div className="bg-white p-20  rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
          <form onSubmit={handleSubmit} className="">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm leading-5">
                <span className="px-2 text-gray-500 bg-white">Products</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full space-y-6">
                
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter Name"
                      onChange={(e) => setItem({ ...item, name: e.target.value })}
                      name="name"
                      type="name"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                  <input className=' rounded-lg mt-2 p-2 focus:border-blue-400 focus:bg-gray-50 focus:outline-none'
                  placeholder="image" onChange={(e=>setItem({...item,image:e.target.value}))} name='image' type="imageurl" /> 
    
                  </div>
                </div>
                <div className="w-full">
                  <div className=" relative ">
                    <input
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Price"
                      onChange={(e) => setItem({ ...item, price: e.target.value })}
                      name="price"
                      type="price"
                    />
                  </div>
                </div>
                <div>
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Add Product
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
        </div>
  )
}

export default AddProduct
