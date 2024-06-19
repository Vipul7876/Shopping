import { useContext,  useState } from 'react';
import CartItems from './CartItems';
import Context from './Context/Context';
import { NavLink } from 'react-router-dom';

export default function Cart () {

  const { itemProducts, totalAmount, setTotalAmount } = useContext( Context );
  const [ coupondiscount, setCoupondiscount ] = useState( 0 );



  let totalePrice = 0;
  itemProducts.reduce( ( TotalPrice, item ) => {
    totalePrice += Number( item.qty ? item.qty * item.thisItemData.product_price : item.thisItemData.product_price );
    return totalePrice;
  }, [ itemProducts[ 0 ] ] );

  let totaldiscount = 0;
  itemProducts.reduce( ( TotalPrice, item ) => {
    totaldiscount += ( item.qty ? item.qty * ( item.thisItemData.product_price - ( item.thisItemData.product_price - ( item.thisItemData.product_price * ( item.thisItemData.product_discount ? item.thisItemData.product_discount : 0 ) ) / 100 ).toFixed( 0 ) ) : item.thisItemData.product_price - ( item.thisItemData.product_price - ( item.thisItemData.product_price * ( item.thisItemData.product_discount ? item.thisItemData.product_discount : 0 ) )));
    return totaldiscount;

  }, [ itemProducts[ 0 ] ] );

  const handleCoupon = ( e ) => {
    if ( e.toUpperCase() === 'COUPON' ) {
      setCoupondiscount( 199 );
    }
    else {
      setCoupondiscount( 0 );
    }
  };


  setTotalAmount( coupondiscount == 0 ? totalePrice - totaldiscount : totalePrice - totaldiscount - coupondiscount );

  return (
    <div className='flex xl:px-[15%] lg:px-[10%] px-[5%] sm:px-[10%] lg:gap-20 pt-12 bg-pink-100 bg-opacity-50 lg:flex-row flex-col'>
      { itemProducts.length !== 0 ? <> <div className='flex gap-4 flex-col py-4 xl:p-2 '>
        <h1 className='font-medium text-2xl'>Cart Items</h1>
        <div className='xl:px-2 lg:pr-8 px-2 py-4 border-gray-400 border-[1px] border-opacity-50 flex flex-col md:gap-4 gap-6'>
          {
            itemProducts.map( ( item,index ) => {
              return <CartItems key={ index } item={ item } />;
            } )
          }
        </div>
      </div>
        <div className='flex flex-col gap-10 xl:p-4'>
          <div className='flex flex-col gap-6'>
            <h1 className='font-medium text-2xl'>Coupons</h1>
            <div className='flex gap-4 items-center'>
              <input
                onChange={ ( e ) => handleCoupon( e.target.value ) }
                className='border-gray-300 border-[1px] outline-none p-2 h-8 hover:border-pink-400 focus:border-pink-400' type="text" /><span className='font-medium text-pink-600 text-nowrap'>Apply Coupon</span>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-medium text-2xl'>Price Details</h1>
            <div className='flex flex-col gap-2'>
              <p className='flex justify-between'>Total M.R.P : <span>₹ { totalePrice }</span></p>
              <p className='flex justify-between'>Discount: <span>- ₹ { totaldiscount }</span></p>
              <p className='flex justify-between'>Coupon Discount:<span>₹ { coupondiscount }</span></p>
              <p className='flex justify-between'>Shipping Fee : <span>Free</span></p>
            </div>
            <h1 className='flex justify-between'>Total Amount :<span>₹ { totalAmount }</span></h1>
          </div>
          <div>
            <NavLink to='/cart/address'>
              <button className='w-full flex justify-center items-center py-3 font-medium text-lg gap-2 bg-[#ff527b] text-white'>Place Order</button>
            </NavLink>
          </div>
        </div>
      </> : <div className='w-full h-[500px] flex flex-col gap-10 justify-center items-center'>
        <h1 className='font-semibold md:text-4xl text-xl'>Your Cart is Empty</h1>
        <NavLink to='/'><button className='md:w-64 w-40 flex justify-center items-center md:py-4 py-2 font-medium md:text-lg text-base gap-2 bg-[#ff527b] text-white'>Shopping</button></NavLink>
      </div> }

    </div>
  );
}
