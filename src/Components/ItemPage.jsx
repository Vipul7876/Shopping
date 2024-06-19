import { useParams } from "react-router-dom";
import Context from "./Context/Context";
import { useContext, useState } from "react";
import Item from './Item';
import Breadcrums from "./Breadcrums";
import toast from 'react-hot-toast';

export default function ItemPage () {

  const qty = 1;
  const [ size, setSize ] = useState();
  const { products, addToCart } = useContext( Context );
  const { category, id } = useParams();
  const ItemCategory = category.charAt( 0 ).toUpperCase() + category.slice( 1, category.length );
  const thisItemData = products[ 0 ][ ItemCategory ][ id - 1 ];
  const actual_price = ( thisItemData.product_price - ( thisItemData.product_price * ( thisItemData.product_discount ? thisItemData.product_discount : 0 ) ) / 100 ).toFixed( 0 );

  // for cart
  const handleAddButton = () => {
    addToCart( { ItemCategory, size, thisItemData, qty } );
    setSize();
  };


  const alert = () => toast.error( "Please Select Size");

  // For Related Products
  const RelatedproductCategoryArr = products[ 0 ][ ItemCategory ];
  const RelatedproductsArr = RelatedproductCategoryArr.filter( ( i ) => {
    if ( i.id != id ) return i;
  } );
  const ShowRelatedProducts = RelatedproductsArr.slice( 0, 4 );


  return (
    <div className="flex xl:px-[15%] lg:px-[10%] px-[5%] pt-4 bg-pink-100 bg-opacity-50 flex-col gap-10 relative">
      <div><Breadcrums category={ ItemCategory } name={ thisItemData.product_name } /></div>
      <div className="flex xl:gap-20 md:gap-8 md:flex-row flex-col">
        <div className="flex justify-center items-center">
          <img className="2xl:h-[700px] xl:h-[550px] md:h-[400px] h-[400px] xl:px-10 md:px-6" src={ `/Images/${ ItemCategory }/${ id }.png` } alt="" />
        </div>
        <div className="flex flex-col xl:gap-3 md:gap-2 gap-1 justify-center">
          <h3 className="font-semibold 2xl:text-3xl xl:text-2xl md:text-xl text-lg">
            { thisItemData.product_name }
          </h3>
          <p className="xl:text-lg md:text-base text-sm">
            <span className="font-medium">Description: </span>{ thisItemData.product_type }
          </p>
          <p className="flex gap-1 xl:text-lg md:text-base text-sm">
            { thisItemData.product_rating }<img className="w-5 " src="/Icons/star.svg" alt="" /> </p>
          <hr className="border-pink-400 border-[1px] 2xl:w-[600px]" />
          <p className="font-semibold 2xl:text-2xl xl:text-xl md:text-lg">
            Rs. { actual_price }
            <span className="xl:mx-2 md:mx-1 mx-1 xl:text-lg md:text-base text-sm font-normal"><del>{ thisItemData.product_price }</del></span>
            <span className="font-normal xl:text-lg md:text-base text-sm text-pink-500">{ thisItemData.product_discount }% OFF</span></p>
          <p className="md:text-sm text-xs font-medium text-emerald-600">Inclusive of all Taxes</p>
          <div className="flex flex-col 2xl:gap-10 gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Select Size</p>
              <ul className="flex xl:gap-4 md:gap-3 gap-2">
                <li>
                  <button
                    onClick={ () => setSize( 'S' ) }
                    className={ `flex justify-center items-start w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full border-[1px] border-opacity-50 border-black 2xl:p-[0.8rem] xl:p-[0.6rem] md:p-[0.3rem] p-[0.45rem] font-medium md:text-lg  hover:border-pink-500 hover:text-pink-500 ${ size == 'S' ? 'text-pink-500 border-pink-500 border-opacity-100' : '' }` }>S</button>
                </li>
                <li>
                  <button
                    onClick={ () => setSize( 'M' ) }
                    className={ `flex justify-center items-start w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full border-[1px] border-opacity-50 border-black 2xl:p-[0.8rem] xl:p-[0.6rem] md:p-[0.3rem] p-[0.45rem] font-medium md:text-lg  hover:border-pink-500 hover:text-pink-500 ${ size == 'M' ? 'text-pink-500 border-pink-500 border-opacity-100' : '' }` }>M</button>
                </li>
                <li>
                  <button
                    onClick={ () => setSize( 'L' ) }
                    className={ `flex justify-center items-start w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full border-[1px] border-opacity-50 border-black 2xl:p-[0.8rem] xl:p-[0.6rem] md:p-[0.3rem] p-[0.45rem] font-medium md:text-lg  hover:border-pink-500 hover:text-pink-500 ${ size == 'L' ? 'text-pink-500 border-pink-500 border-opacity-100' : '' }` }>L</button>
                </li>
                <li>
                  <button
                    onClick={ () => setSize( 'XL' ) }
                    className={ `flex justify-center items-start w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full border-[1px] border-opacity-50 border-black 2xl:p-[0.8rem] xl:p-[0.6rem] md:p-[0.3rem] p-[0.45rem] font-medium md:text-lg  hover:border-pink-500 hover:text-pink-500 ${ size == 'XL' ? 'text-pink-500 border-pink-500 border-opacity-100' : '' }` }>XL</button>
                </li>
                <li>
                  <button
                    onClick={ () => setSize( 'XXL' ) }
                    className={ `flex justify-center items-start w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full border-[1px] border-opacity-50 border-black 2xl:p-[0.8rem] xl:p-[0.6rem] md:p-[0.3rem] p-[0.45rem] font-medium md:text-lg hover:border-pink-500 hover:text-pink-500 ${ size == 'XXL' ? 'text-pink-500 border-pink-500 border-opacity-100' : '' }` }>XXL</button>
                </li>
                <li>
                  <button
                    onClick={ () => setSize( '3XL' ) }
                    className={ `flex justify-center items-start w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full border-[1px] border-opacity-50 border-black 2xl:p-[0.8rem] xl:p-[0.6rem] md:p-[0.3rem] p-[0.45rem] font-medium md:text-lg hover:border-pink-500 hover:text-pink-500 ${ size == '3XL' ? 'text-pink-500 border-pink-500 border-opacity-100' : '' }` }>3XL</button>
                </li>
              </ul>
            </div>
            <button
              onClick={ size ? () => handleAddButton() : alert }
              className="xl:w-64 w-44 flex justify-center items-center xl:py-4 md:py-3 py-2 font-medium md:text-lg gap-2 bg-[#ff527b] text-white">Add To Bag <span><img className="xl:w-6 w-4" src="/Icons/cart(1).svg" alt="" /></span></button>

          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <h1 className="text-center font-medium xl:text-5xl md:text-3xl text-2xl">Related Products</h1>
        <div className="flex flex-wrap justify-evenly gap-y-16">
          {
            ShowRelatedProducts.map( ( item, id ) => {
              return <Item key={ id } id={ item.id } name={ item.product_name } type={ item.product_type } price={ item.product_price } discount={ item.product_discount } category={ ItemCategory } />;
            } )
          }
        </div>
      </div>
    </div>
  );
}
