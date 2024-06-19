import { useContext } from 'react';
import Context from './Context/Context';
import Item from './Item';
import Breadcrums from './Breadcrums';

export default function WOmen () {
  
  const {products} = useContext( Context );
  const Women = products[ 0 ]?.Women;

  return (
    <div className="flex px-[5%] 2xl:px-[15%] lg:px-[10%] flex-col bg-pink-100 bg-opacity-50 gap-8">
      <div className='mt-4'>
        <Breadcrums category={ 'Women' } />
      </div>
      <div className="flex flex-wrap justify-evenly gap-6 md:gap-y-10 xl:gap-y-14 xl:gap-x-8 2xl:gap-y-20 ">
        {
          Women.map( ( item, id ) => {
            return <Item key={ id } id={ item.id } name={ item.product_name } type={ item.product_type } price={ item.product_price } discount={ item.product_discount } category={ 'Women' } />;
          } )
        }
      </div>
    </div>
  )
}
