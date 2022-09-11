import { useState } from "react";
import useBreakpoint from "../../hooks/useBreakpoint";
import AuthControllers from "./AuthControllers";
import OptionsDropdown from "./OptionsDropdown";

const Navbar = () => {

   const currentBreakpoint = useBreakpoint();
   const [ isLoggedIn, setIsLoggedIn ] = useState(false);

   return (
      <div className="fixed z-[5] top-0 py-1 w-screen flex justify-center items-start bg-grey min-h-[60px]">
         <div id="content" className={`flex text-textcolor sm:w-10/12 md:w-10/12 lg:'w-8/12' py-2`}>
            <div id="left" className="mr-auto">
               <div id="logo" className="text-2xl text-white" onClick={() => {setIsLoggedIn(!isLoggedIn)}}>
                  AppLogoHere
               </div>
            </div>
            <div id="right" className="left-0">
               {
                  isLoggedIn
                  ? <OptionsDropdown/>
                  : <AuthControllers/>
               }
            </div>
         </div>
      </div>
   )
}

export default Navbar;
