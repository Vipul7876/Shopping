import { useContext, useState } from "react";
import Context from "./Context/Context";
import { useNavigate } from "react-router-dom";

export default function AddressForm () {

  const navigate = useNavigate();

  const { addAddress } = useContext( Context );
  const [ name, setName ] = useState( '' );
  const [ number, setNumber ] = useState( '' );
  const [ pincode, setPincode ] = useState( '' );
  const [ street, setStreet ] = useState( '' );
  const [ locality, setLocality ] = useState( '' );
  const [ city, setCity ] = useState( '' );
  const [ state, setState ] = useState( '' );
  const [ type, setType ] = useState( 'Home' );

  const handleSubmit = ( e ) => {
    e.preventDefault();

    if ( name.length !== 10 && pincode.length !== 6 ) {
      if ( number.length < 10 && pincode.length < 6 ) {
        alert( 'Number and Pincode is not 10 and 6 digits long!' );
      }
      else if ( pincode.length < 6 ) {
        alert( 'Pincode must be of 6 digits' );
      }
      else if ( number.length < 10 ) {
        alert( 'Number must 0f 10 digits' );
      }
    }
    else {

      addAddress( { Name: name, Number: number, Pincode: pincode, Street: street, Locality: locality, City: city, State: state, Type: type } );
      setName( '' );
      setNumber( '' );
      setPincode( '' );
      setStreet( '' );
      setLocality( '' );
      setCity( '' );
      setState( '' );
      setType( 'Home' );
      navigate( '/cart/address' );
    }

  };

  return (
    <div className="flex px-[20%] pt-12 justify-center bg-pink-100 bg-opacity-50">
      <form className="flex flex-col gap-10" action="/cart/address" onSubmit={ handleSubmit }>
        <div className="flex flex-col gap-4">
          <h1 className="sm:text-xl text-lg font-semibold ">Contact Details</h1>
          <input
            className="outline-gray-400 outline outline-[1px] sm:p-2 p-1 sm:w-auto sm:text-base text-sm focus:outline-pink-400 focus:outline focus:border-none" type="text" placeholder='Name' required value={ name } onChange={ ( e ) => setName( e.target.value ) } />
          <input
            className="outline-gray-400 outline outline-[1px] sm:p-2 p-1 sm:w-auto sm:text-base text-sm focus:outline-pink-400 focus:outline focus:border-none" type="number" placeholder="Number" required value={ number } onChange={ ( e ) => setNumber( e.target.value ) } />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="sm:text-xl text-lg font-semibold ">Address</h1>
          <input
            className="outline-gray-400 outline outline-[1px] sm:p-2 p-1 sm:text-base text-sm sm:w-auto focus:outline-pink-400 focus:outline focus:border-none" type="number" placeholder="Pincode" required value={ pincode } onChange={ ( e ) => setPincode( e.target.value ) } />
          <input
            className="outline-gray-400 outline outline-[1px] sm:p-2 p-1 sm:w-auto focus:outline-pink-400 focus:outline focus:border-none sm:text-base text-sm" type="text" placeholder="Address(House No.,Building,Street,Area)" required value={ street } onChange={ ( e ) => setStreet( e.target.value ) } />
          <input
            className="outline-gray-400 outline outline-[1px] sm:p-2  sm:text-base text-sm p-1 sm:w-auto focus:outline-pink-400 focus:outline focus:border-none" type="text" placeholder="Locality / Town" required value={ locality } onChange={ ( e ) => setLocality( e.target.value ) } />
          <div className="flex gap-4 sm:w-auto">
            <input
              className="outline-gray-400 outline outline-[1px]  sm:p-2 p-1 sm:text-base text-sm sm:w-auto w-[90%] focus:outline-pink-400 focus:outline focus:border-none" type="text" placeholder="City / District" required value={ city } onChange={ ( e ) => setCity( e.target.value ) } />
            <input
              className="outline-gray-400 outline outline-[1px]  sm:p-2 p-1 sm:text-base text-sm sm:w-auto w-[90%] focus:outline-pink-400 focus:outline focus:border-none" type="text" placeholder="State" required value={ state } onChange={ ( e ) => setState( e.target.value ) } />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-2">
            <input type="radio"
              id="Home"
              name="Address for"
              value="Home"
              checked={ type === 'Home' }
              onChange={ ( e ) => setType( e.target.value ) }
            />
            <label htmlFor="Home">Home</label>
          </div>
          <div className="flex gap-2">
            <input type="radio"
              id="Work"
              name="Address for"
              value="Work"
              checked={ type === 'Work' }
              onChange={ ( e ) => setType( e.target.value ) }
            />
            <label htmlFor="Work">Work</label>
          </div>
        </div>

        <button type="submit" className=" w-full bg-[#ff527b] text-white py-3 text-lg flex justify-center items-center">Add Address</button>

      </form>
    </div>
  );
}
