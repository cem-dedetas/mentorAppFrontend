import Br from "../Br";

interface DropdownItemProps {
   key : string;
   icon : JSX.Element;
   title : string;
   href? : string;
   hasBrUp? : boolean;
   brColor? : string;
   onClick? : any;
}

export const DropdownItem = ({key, icon, title, href, hasBrUp, brColor, onClick} : DropdownItemProps) => {
   return (
      <>
         {hasBrUp && 
            <Br
               key={`br${key}`}
               color={!brColor ? 'white' : brColor}
            />
         }
         <div className = "flex text-textcolor items-center gap-x-2 transition-colors p-[10px] hover:bg-lightgrey hover:text-white  hover:cursor-pointer" onClick = {()=>onClick}>
            {icon}
            <span>{title}</span>
         </div>
      </>
   )
}

export default DropdownItem;
