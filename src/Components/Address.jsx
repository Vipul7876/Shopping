import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "./Context/Context";
import AdressList from "./AdressList";

export default function Address () {

  const { address, totalAmount } = useContext( Context );

  return (
    <div className="flex xl:px-[15%] md:px-[10%] px-[5%] bg-pink-100 bg-opacity-50 gap-20 pt-12 lg:flex-row flex-col">
      <div className=" flex flex-col gap-2">
        <h1 className="font-semibold text-xl ">Select Delivery Address</h1>
        <div className="2xl:min-w-[600px] xl:min-w-[450px] flex flex-col gap-3 " >
          <h1 className="text-sm font-medium">All Address</h1>
          <div className="border-gray-500 border-[1px] border-opacity-50 flex flex-col gap-10 justify-start items-start w-[100%] pt-6 pb-8 pl-5 pr-10">
            {
              address.length > 0 ?
                address.map( ( item ) => {
                return <AdressList key={ item.index } item={ item } />;
                } ) : <h1 className="md:text-2xl text-xl font-medium mx-auto md:px-20 2xl:px-0 my-12 text-nowrap">No saved Address</h1>             
            }

          </div>
          <div className="h-[70px] md:text-base text-sm flex items-center p-8 font-bold text-pink-500 border-gray-500 border-[1px] border-opacity-50">
            <NavLink to='/cart/address/form'>+Add New Address</NavLink>
          </div>
        </div>
      </div>
      <div className="lg:w-[300px] sm:w-[400px]">
        <h1 className="text-xl font-medium">Delivery Estimates</h1>
        <div className="flex flex-col gap-4">
          <h1 className="py-3">Estimated Delivery by 21 June 2024</h1>
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-medium">Price Details</h1>
            <div className="flex flex-col gap-2">
              <p className="flex justify-between">Total Price<span>₹ { totalAmount }</span></p>
              <p className="flex justify-between">Shipping Fee<span>₹ 0</span></p>
            </div>
          </div>
          <div className="flex flex-col text-lg font-medium gap-3">
            <p className="flex justify-between">Total Amount<span>₹ { totalAmount }</span></p>
            <NavLink to='/last'>
              <button className="w-full bg-[#ff527b] text-white py-3 text-lg flex justify-center items-center disabled:bg-white disabled:text-black disabled:outline disabled:outline-[1px] disabled:outline-gray-400"
                disabled={ address.length > 0 ? false : true }>Continue</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
