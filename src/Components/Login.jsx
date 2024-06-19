import { useContext } from "react";
import Context from "./Context/Context";
import toast from "react-hot-toast";

export default function Login () {

  const notify = () => toast.error( "Please Enter Username" );
  
  const { setLoggedin, username, setUsername } = useContext( Context );

  return (
    <div className="flex px-[15%] flex-col gap-20 bg-pink-100 bg-opacity-50 justify-center items-center h-[80vh]">
      <div>
        <img className="w-48" src="/Icons/logo-cropped.svg" alt="" />
      </div>
      <form className="flex flex-col gap-14 items-center" onSubmit={ ( e ) => e.preventDefault() }>
        <h1 className="text-5xl">Log In</h1>
        <div className="flex flex-col gap-8">
          <input
            className="border-gray-500 border-[1px] w-72 p-2 focus:outline-none focus:border-pink-500"
            onChange={( e ) => setUsername( e.target.value ) }
            type="text"
            value={ username }
            placeholder="Username" />
          <input
            className="border-gray-500 border-[1px] w-72 p-2 focus:outline-none focus:border-pink-500"
            type="text"
            placeholder="Password" />
        </div>
        <button
          type="submit"
          onClick={username ?  () => setLoggedin( true ): notify }
          className="w-72 flex justify-center items-center py-3 font-medium text-lg gap-2 bg-[#ff527b] text-white">Log In</button>
      </form>
      <div>
        <p className="sm:text-base text-xs">Note: Please put Username and Password as your wish</p>
      </div>
    </div>
  );
}
