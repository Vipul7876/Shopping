/* eslint-disable react/prop-types */

import { useContext } from "react";
import Context from "./Context/Context";
import { NavLink } from "react-router-dom";


export default function CartItems ( props ) {

  const { removeFromCart, updateQuantity } = useContext( Context );

  const { item } = props;
  const single_Product_qty = item.qty;
  const single_Product_index = item.index;
  const single_Product = item.thisItemData;
  const single_Product_size = item.size;
  const single_Product_category = item.ItemCategory;
  const single_Product_price = ( single_Product.product_price - ( single_Product.product_price * ( single_Product.product_discount ? single_Product.product_discount : 0 ) ) / 100 ).toFixed( 0 );

  const handleQuantity = ( e ) => {
    updateQuantity( e, item.index );
  };

  return (
    <div className="flex md:gap-10 gap-4 xl:w-[32rem] hover:shadow-md hover:shadow-pink-300 relative" >
      <NavLink to={ `/Product/${ single_Product_category }/${ single_Product.id }` }>
        <img className="md:w-36 w-28" src={ `/Images/${ single_Product_category }/${ single_Product.id }.png` } alt="" />
      </NavLink>
      <div className="flex flex-col gap-2">
        <p className="md:text-base text-xs"><span className="font-medium">Name: </span>{ single_Product.product_name }</p>
        <p className="md:text-base text-xs"><span className="font-medium">Description: </span> { single_Product.product_type }</p>
        <p className="md:text-base text-xs"><span className="font-medium">Size : </span> { single_Product_size }</p>
        <p className="flex gap-2">
          <label htmlFor="quantity" className="font-medium md:text-base text-xs">Quantity: </label>
          <select
            onChange={ ( e ) => handleQuantity( e.target.value ) }
            name="quantity"
            value={ single_Product_qty }
            className="cursor-pointer focus:border-none focus:outline focus:outline-[1px] focus:outline-gray-400 hover:outline-[1px] hover:outline hover:outline-gray-400 md:text-base text-xs" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select> </p>
        <p className="md:text-base text-xs"><span className="font-medium ">Price:</span> ₹ { single_Product_price }</p>
        <p className=" md:text-base text-xs">14 days retrun policy</p>
      </div>
      <div className="absolute right-1 top-1 hover:outline hover:outline-pink-300 hover:outline-1 cursor-pointer">
        <button
          onClick={ () => removeFromCart( { single_Product_index, single_Product, single_Product_category } ) }
          className="w-5 h-5 flex justify-center items-center">
          <img className="w-3" src="/Icons/cross.svg" alt="" />
        </button>
      </div>
    </div >
  );
}
