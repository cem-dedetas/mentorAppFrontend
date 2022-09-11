import { PropsWithChildren, useState } from "react";
import { MenuDownIcon } from "../Icon";

interface DropdownProps {
   title : string;
   avatar? : JSX.Element;
   direction: 'left' | 'right';
}

const Dropdown = ({children, title, avatar, direction} : PropsWithChildren<DropdownProps>) => {

   const [hover, setHover] = useState<boolean>(false);
   const [dropdownHover, setDropdownHover] = useState(false);

   const onMouseOver = () => { setHover(true); }
   const onMouseLeave = () => { setHover(false);}
   const onMouseOverDropdown = () => { setDropdownHover(true); }
   const onMouseLeaveDropdown = () => { setDropdownHover(false); }

   return (
      <div 
         id="outerDropdown"
         className="flex items-center text-textcolor cursor-pointer transition-colors relative min-h-[32px]"
         onMouseOver={onMouseOver}
         onMouseLeave={onMouseLeave}
      >
         <div
            id="innerDropdown"
            className={`${(dropdownHover || hover) ? 'flex' : 'hidden'} ${direction === 'left' ? 'right-0' : 'left-0'} absolute cursor-default top-[32px]`}
            onMouseOver={onMouseOverDropdown}
            onMouseLeave={onMouseLeaveDropdown}
         >
            <div  
               className={`${(dropdownHover || hover) ? 'flex' : 'hidden'} mt-[20px] bg-grey min-w-[175px] py-[15px] rounded-2xl transition-[display] flex-col gap-y-[5px] border border-lightgrey shadow-2xl`}
            >
               {children}
            </div>
         </div>
         {avatar && 
            <div 
               className="mr-[7px]"
            >
               {avatar}
            </div>
         }
         <div 
            className={`${(dropdownHover || hover) ? 'text-white' : 'text-textcolor'} text- z-5 cursor-pointer`}
         >
            {title}
         </div>
         <div 
            className={`${(dropdownHover || hover) ? 'rotate-180' : ''} transition-[transform]`}   
         >
            <MenuDownIcon
               size='24' 
               color ='white'
            />
         </div>
      </div>
   );
}

export default Dropdown;
