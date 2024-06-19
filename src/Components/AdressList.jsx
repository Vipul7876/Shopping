/* eslint-disable react/prop-types */

import { useContext } from "react";
import Context from "./Context/Context";


export default function AdressList ( props ) {
  const { finalAddress, setFinalAddress } = useContext( Context );

  const { item } = props;


  return (
    <div className="flex justify-start items-start gap-4 hover:shadow-md hover:shadow-pink-300 pb-4 w-full" >
      <div className="py-1">
        <input
          type="radio"
          name="Address"
          value={ item }
          checked={ item.index == finalAddress }
          onChange={()=>setFinalAddress(item.index)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium flex gap-6">{ item.Name }<span className="text-base text-pink-600 ">{ item.Type }</span></h1>
        <p>
          { item.Street }, { item.Locality }, { item.City }, { item.State } - { item.Pincode }
        </p>
        <p>Mobile: <span className="font-medium">{ item.Number }</span></p>
      </div>
    </div>
  );
}
