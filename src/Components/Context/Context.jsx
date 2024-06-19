/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import products from '../../assets/mock_data';
import toast from "react-hot-toast";
export const Context = createContext();

export const ContextProvider = ( { children } ) => {

  const [ loggedin, setLoggedin ] = useState( false );

  const [ username, setUsername ] = useState('');

  const [ cartItems, setCartItems ] = useState( [] );

  const [ itemProducts, setItemProducts ] = useState( [] );

  const [ address, setAddress ] = useState( [] );

  const [ finalAddress, setFinalAddress ] = useState( 0 );

  const [ totalAmount, setTotalAmount ] = useState( 0 );

  useEffect( () => {
    const CartItemProducts = cartItems.map( ( item, index ) => ( {
      index: index,
      qty: item.qty,
      thisItemData: item.thisItemData,
      size: item.size,
      ItemCategory: item.ItemCategory
    } ) );
    setItemProducts( CartItemProducts );
  }, [ cartItems ] );

  const addToCart = ( props ) => {

    const IdExists = cartItems.some( item => item.thisItemData.id === props.thisItemData.id );
    const CategoryExists = cartItems.some( item => item.ItemCategory === props.ItemCategory );
    const SizeExists = cartItems.some( item => item.size === props.size );
    if ( IdExists && CategoryExists && SizeExists ) {
      toast.error( "Item already exists" );
      return
    }

    const newItem = { ...props, index: cartItems.length };

    setCartItems( ( prev ) => [ ...prev, newItem ] );
  };


  const removeFromCart = ( props ) => {
    const updatedItemProducts = itemProducts.filter( item => item.index !== props.single_Product_index );
    setItemProducts( updatedItemProducts );

  };

  const updateQuantity = ( newQty, index ) => {
    const updatedItemProducts = itemProducts.map( ( item ) => item.index === index ? { ...item, qty: Number( newQty ) } : item );
    setItemProducts( updatedItemProducts );

  };

  const addAddress = ( props ) => {
    const newItem = { ...props, index: address.length };
    setAddress( ( prev ) => [ ...prev, newItem ] );
  };

  useEffect( () => {
    console.log( address );
  }, [ address ] );

  return (
    <Context.Provider value={ { loggedin, setLoggedin, username, setUsername, products, cartItems, setCartItems, addToCart, removeFromCart, itemProducts, updateQuantity, address, setAddress, addAddress, finalAddress, setFinalAddress, totalAmount, setTotalAmount } }>
      { children }
    </Context.Provider>
  );
};

export default Context;
