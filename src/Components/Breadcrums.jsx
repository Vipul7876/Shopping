/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";


export default function Breadcrums ( props ) {

  const categoryLink = props?.category.toLowerCase();

  return (
    <div className="text-base sm:text-xl flex gap-2 font-medium">
      <NavLink to='/'>Home </NavLink><img className="w-3 md:w-4" src="/Icons/right-arrow.svg" alt="" /><NavLink to={ `/${ categoryLink }` }>{ props?.category }</NavLink><img className="w-3 md:w-4" src="/Icons/right-arrow.svg" alt="" />{ props?.name }
    </div>
  );
}
