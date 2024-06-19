/* eslint-disable react/prop-types */

import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Item ( props ) {

  const [ opacity, setOpacity ] = useState( false );

  const actual_price = ( props.price - ( props.price * ( props.discount ? props.discount : 0 ) ) / 100 ).toFixed( 0 );

  return (
    <div
      className="hover:cursor-pointer hover:border-pink-50 hover:shadow-lg hover:shadow-pink-200 hover:outline-pink-500 hover:outline-1 hover:outline"
      onMouseEnter={ () => setOpacity( !opacity ) }
      onMouseLeave={ () => setOpacity( !opacity ) }>
      <NavLink to={ `/Product/${ props.category.toLowerCase() }/${ props.id }`}><div className="h-[200px] w-[150px] md:h-[330px] md:w-[250px] xl:h-[250px] xl:w-[180px] 2xl:h-[350px] 2xl:w-[250px] relative flex justify-center">
        <img className="" src={ `/Images/${ props.category }/${ props.id }.png` } alt="" />
      </div>
      <div className="flex flex-col gap-1">
          <p className="font-semibold text-[0.7rem] md:text-[0.8rem] xl:text-[0.9rem]">{ props.name }</p>
        <p className= "text-[0.7rem] md:text-[0.8rem] xl:text-[0.9rem]">{ props.type }</p>
        <div className="flex gap-2 items-end">
            <p className="font-semibold text-[0.7rem] md:text-[0.8rem] xl:text-[0.9rem]"><span>Rs.</span> { actual_price }</p>
            { props.discount ? <p className="text-[0.7rem] xl:text-[0.8rem] md:text-[0.7rem]"><del><span className="font-semibold">Rs.</span> { props.price }</del></p> : <></> }
            { props.discount ? <p className="text-[0.7rem] xl:text-[0.8rem] md:text-[0.7rem] text-pink-600">{ props.discount }% OFF</p> : <></> }
        </div>
        </div>
      </NavLink>
    </div>
  );
}
