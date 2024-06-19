import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "./Context/Context";
import Item from "./Item";


export default function Home () {
  const { products } = useContext( Context );
  const Men = products[ 0 ]?.Men;
  const homeMen = Men.slice( 0, 4 );
  const Women = products[ 0 ]?.Women;
  const homeWomen = Women.slice( 0, 4 );
  const Kids = products[ 0 ]?.Kids;
  const homeKids = Kids.slice( 0, 4 );


  return (
    <div className="flex flex-col bg-pink-100 bg-opacity-50 gap-8 xl:px-[15%] lg:px-[10%] px-[5%]">
      <div className="p-4">
        <img src="Images/Banners/1.png" alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <NavLink className='inline-block' to='/men'>
            <h2 className="text-base sm:text-xl flex gap-2 font-medium">Mens <img className="w-3 md:w-4" src="./Icons/right-arrow.svg" alt="" /></h2>
          </NavLink>
        </div>
        <div className="flex flex-wrap justify-evenly gap-y-10">
          {
            homeMen.map( ( item, id ) => {
              return <Item key={ id } id={ item.id } name={ item.product_name } type={ item.product_type } price={ item.product_price } discount={ item.product_discount } category={ 'Men' } />;
            } )
          }
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <NavLink className='inline-block' to='/women'>
            <h2 className="text-base sm:text-xl flex gap-2 font-medium">Womens <img className="w-3 md:w-4" src="./Icons/right-arrow.svg" alt="" /></h2>
          </NavLink>
        </div>
        <div className="flex flex-wrap justify-evenly gap-y-10">
          {
            homeWomen.map( ( item, id ) => {
              return <Item key={ id } id={ item.id } name={ item.product_name } type={ item.product_type } price={ item.product_price } discount={ item.product_discount } category={ 'Women' } />;
            } )
          }
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <NavLink className='inline-block' to='/kids'>
            <h2 className="text-base sm:text-xl flex gap-2 font-medium">Kids <img className="w-3 md:w-4" src="./Icons/right-arrow.svg" alt="" /></h2>
          </NavLink>
        </div>
        <div className="flex flex-wrap justify-evenly gap-y-10">
          {
            homeKids.map( ( item, id ) => {
              return <Item key={ id } id={ item.id } name={ item.product_name } type={ item.product_type } price={ item.product_price } discount={ item.product_discount } category={ 'Kids' } />;
            } )
          }
        </div>
      </div>
    </div>
  );
}
