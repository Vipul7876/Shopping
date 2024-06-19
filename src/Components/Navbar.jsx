import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Context from './Context/Context';

export default function Navbar () {

  const { itemProducts, username } = useContext( Context );

  const [ showHam, setShowHam ] = useState( false );

  return (
    <div className='bg-pink-100 flex py-3 sm:py-6 sm:px-8 justify-between shadow-pink-300 shadow-lg relative' >
      <div className='flex-1 flex justify-start sm:justify-center items-center px-4'>
        <NavLink to='/'>
          <img
            className='w-10 sm:w-14 md:w-16 lg:w-20'
            src="/Icons/logo-cropped.svg"
            alt=""
          /></NavLink>
      </div>
      <div className={ `flex-1 md:flex justify-center items-center ${ showHam ? 'absolute flex top-[100%] bg-pink-300 bg-opacity-70 w-full z-10 pb-4 pt-2' : 'hidden' }` }>
        <ul className={ `flex gap-10 text-xl font-medium ${ showHam ? 'flex-col gap-6' : '' }` } >
          <li className='hover:scale-110 transition duration-500 ease-in-out relative active:scale-110'  >
            <NavLink
              onClick={ () => setShowHam( false ) }
              className='after:block after:opacity-0 after:w-1/2 after:h-[2px] after:bg-red-400 after:absolute after:content-[""]  transition-all duration-500 ease-in-out hover:after:opacity-100 hover:after:w-[100%] hover:after:animate-[underline_0.5s_ease-in-out_1]'
              to='/'>Home</NavLink>
          </li>
          <li className='hover:scale-110 transition duration-500 ease-in-out'>
            <NavLink
              onClick={ () => setShowHam( false ) }
              className='after:block after:opacity-0 after:w-1/2 after:h-[2px] after:bg-red-400 after:absolute after:content-[""]  transition-all duration-500 ease-in-out hover:after:opacity-100 hover:after:w-[100%] hover:after:animate-[underline_0.5s_ease-in-out_1]'
              to='/men'>Men</NavLink>
          </li>
          <li
            className='hover:scale-110 transition duration-500 ease-in-out'>
            <NavLink
              onClick={ () => setShowHam( false ) }
              className='after:block after:opacity-0 after:w-1/2 after:h-[2px] after:bg-red-400 after:absolute after:content-[""]  transition-all duration-500 ease-in-out hover:after:opacity-100 hover:after:w-[100%] hover:after:animate-[underline_0.5s_ease-in-out_1]'
              to='/women'>Women</NavLink>
          </li>
          <li
            className='hover:scale-110 transition duration-500 ease-in-out'>
            <NavLink
              onClick={ () => setShowHam( false ) }
              className='after:block after:opacity-0 after:w-1/2 after:h-[2px] after:bg-red-400 after:absolute after:content-[""]  transition-all duration-500 ease-in-out hover:after:opacity-100 hover:after:w-[100%] hover:after:animate-[underline_0.5s_ease-in-out_1]'
              to='/kids'>Kids</NavLink>
          </li>
        </ul>
      </div>
      <div className='flex flex-1 items-center justify-end sm:justify-center gap-6' >
        <div className='flex border-gray-400 border-[1px] rounded-full px-2 py-1 gap-1' >
          <img className='w-[13px] sm:w-[18px]' src="/Icons/profile.svg" alt="" /><span className='text-xs sm:text-lg font-medium'>{ username }</span>
        </div>
        <NavLink className='relative' to='/cart'>
          <img
            className='w-5 sm:w-10 md:w-8 hover:scale-110 transition duration-500 ease-in-out'
            src="/Icons/cart.svg"
            alt="" />
          <div
            className='absolute w-5 h-5 font-medium text-pink-600 p-2 rounded-xl flex justify-center items-center sm:top-[42%] sm:right-[22%] sm:text-base text-[0.5rem]  top-[20%] right-[0%]'>
            { itemProducts.length == 0 ? <></> : itemProducts.length }
          </div>
        </NavLink>
        <div className='flex justify-center items-center md:hidden pr-4'>
          <img onClick={ () => setShowHam( !showHam ) } className='w-[15px] h-[15px]' src="/Icons/hamburger.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
