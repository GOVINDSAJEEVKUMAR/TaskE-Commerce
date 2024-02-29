import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      
<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 gap-40 ">
    <ul className="flex flex-wrap -mb-px">
        
        
        <li className="mr-2">
            <Link to="/" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                PRODUCT
            </Link>
        </li>

        <li className="mr-2">
            <Link to="/add" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                ADD PRODUCT
            </Link>
        </li>

        <li className="mr-2">
            <Link to="/cart" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                CART
            </Link>
        </li>
        
    </ul>
</div>
<Outlet/>
    </div>
  )
}

export default NavBar
