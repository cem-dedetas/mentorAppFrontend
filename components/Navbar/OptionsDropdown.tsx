import { Avatar } from "@chakra-ui/react";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from '../Dropdown/DropdownItem';
import { HelpIcon, LogoutIcon } from "../Icon";

const OptionsDropdown = () => {

   const onLogout = () => {
      console.log('Logout.');
   }

   return (
   <div>
      <Dropdown
         avatar={
            <Avatar
               size='sm'
               name='Doruk ERGÜN'
               src={/*Check if profile picture is choosen*/true ? "/image36.png" : "/blank-profile-picture.png"}
            />
         }
         title="Doruk"
         direction="left"
      >
         <DropdownItem
            key="1"
            icon={<LogoutIcon size='24' color='white' />}
            title="Upgrade"
            href="#"
         />
         <DropdownItem
            key="1"
            icon={<HelpIcon size='24' color='white' />}
            title="Help"
            href="#"
         />
         <DropdownItem
            key="1"
            icon={<HelpIcon size='24' color='white' />}
            title="Settings"
            href="#"
         />
         <DropdownItem
            key="1"
            icon={<LogoutIcon size='24' color='white' />}
            title="Sign out"
            href="#"
            hasBrUp = {true} 
            brColor= 'lightgrey'
            onClick={()=>onLogout()}
         />
      </Dropdown>
   </div>
   )
}

export default OptionsDropdown;