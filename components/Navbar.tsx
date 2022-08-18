import { SetStateAction, useEffect, useState } from 'react';
import styles from '../styles/components/Navbar.module.css';
import { HelpIcon, MenuDownIcon, LogoutIcon } from '../components/Icon';
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import Dropdown from './Dropdown';
import { Avatar } from '@chakra-ui/react'
import Button from './Button';
import { useTranslation } from "next-i18next";
import authService from '../services/auth-service';

const Navbar = () => {

   const { t } = useTranslation();

   const mobile = useBreakpointValue({ base: true, md: false });
   const [top, setTop] = useState(false);
   const [loggedIn, setLogin] = useState(false);
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [emailInput, setEmailInput] = useState('')
   const [passwordInput, setPWInput] = useState('')

   useEffect(() => {
      // Define a function that is called when the scroll event fires
      const handleScroll = (e: any) => {
         const scrollTop = e.target.documentElement.scrollTop;
         scrollTop != 0 ? setTop(true) : setTop(true);
      };
      if (document) {
         document.addEventListener("scroll", handleScroll);
      }
      return () => {
         if (document) {
            document.removeEventListener("scroll", handleScroll);
         }
      };
   }, [top]);

   const getMoreDropdownItems = () => {
      const moreDropdownItems = [
         { icon: <HelpIcon size='24' color='white' />, title: 'Another', href: '#' },
         { icon: <HelpIcon size='24' color='white' />, title: 'Help', href: '#' },
         { icon: <HelpIcon size='24' color='white' />, title: 'Help', href: '#' },
         { icon: <HelpIcon size='24' color='white' />, title: 'Help', href: '#' }
      ]
      return moreDropdownItems;
   }

   const getButtons = () => {
      if (mobile) {
         return (
            <Dropdown
               title="More"
               items={getMoreDropdownItems()}
               direction='right'
            />
         );
      }

      return (
         <div className={styles['buttons']}>
            {getButton(<HelpIcon size='24' color='white' />, 'Browse', '#')}
            {getButton(<HelpIcon size='24' color='white' />, 'Another', '#')}
            {getButton(<HelpIcon size='24' color='white' />, 'Another', '#')}
         </div>
      );
   }

   const getButton = (icon: JSX.Element, title: string, href: string) => {
      return (
         <div className={styles['button']}>
            {icon}
            <span>{title}</span>
         </div>
      );
   }

   const getProfileDropdownItems = () => {
      const profileDropdownItems = [
         { icon: <LogoutIcon size='24' color='white' />, title: 'Something', href: '#' },
         { icon: <HelpIcon size='24' color='white' />, title: 'Another', href: '#' },
         { icon: <HelpIcon size='24' color='white' />, title: 'Help', href: '#' },
         { icon: <LogoutIcon size='24' color='white' />, title: 'Log out', href: '#', hasBrUp: true, brColor: 'white' }
      ]
      return profileDropdownItems;
   }

   const getLoginOrProfile = () => {
      if (loggedIn === true) {
         return (<div className={styles['right']}>
            <Dropdown
               avatar={
                  <Avatar
                     className={styles['avatar']}
                     size='sm'
                     name='Doruk ERGÜN'
                     src={/*Check if profile picture is choosen*/true ? "/image36.png" : "/blank-profile-picture.png"}
                  />}
               title="Doruk"
               items={getProfileDropdownItems()}
               direction='left'
            />
         </div>)
      }
      return (<div className={styles['right']}>

         <div className={`${styles['buttons']} ${styles['login']}`}>
            {loginModal(false)}
            {loginModal(true)}
         </div>
      </div>)
   }

   const loginModal = (isLogin: boolean) => {
      let isError: boolean = false;
      const handleEmailInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
         setEmailInput(e.target.value);
      }
      const handlePassInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
         setPWInput(e.target.value);
      }
      return (
         <>
            <Button
               type={isLogin ? "secondary" : "primary"}
               label={isLogin ? t("Login") : t("SignUp")}
               onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose} isCentered>

               <ModalOverlay />
               <ModalContent bg="#111015" border='1px' borderColor='#DBFF00' borderTopRadius="md">
                  <ModalHeader textColor="whiteAlpha.900" >{isLogin ? t("Login") : t("SignUp")}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                     <div>
                     <FormControl isInvalid={isError}>
                        <Input
                           className={styles['input']}
                           type='email'
                           value={emailInput}
                           onChange={handleEmailInputChange}
                           placeholder={t("Email")}
                           backgroundColor='#555555'
                           border='hidden'
                           focusBorderColor='#DBFF00'
                           textColor='#D9D9D9'

                        />
                        {!isError ? (
                           <FormHelperText>

                           </FormHelperText>
                        ) : (
                           <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                     </FormControl>
                     <FormControl isInvalid={isError}>
                        <div>
                        <Input
                           className={styles['input']}
                           type='password'
                           value={passwordInput}
                           onChange={handlePassInputChange}
                           placeholder={t("Password")}
                           backgroundColor='#555555'
                           border='hidden'
                           focusBorderColor='#DBFF00'
                           textColor='#D9D9D9'

                        /></div>
                        {!isError ? (
                           <FormHelperText>

                           </FormHelperText>
                        ) : (
                           <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                     </FormControl>
                     </div>
                     <div className={styles['bottom']}>
                     <div >
                           <Button
                              className={styles['modal-buttons']}
                              type="primary"
                              label={t("Login")}
                              onClick={() => { onLogin(emailInput,passwordInput) }}
                           />
                           <Button
                              className={styles['modal-buttons']}
                              type="secondary"
                              label={t("ForgotPassword")}
                              onClick={() => { console.log('clicked') }}
                           />
                     </div>
                     </div>
                     
                  </ModalBody>

                  <ModalFooter>
                           <button className={`${styles['modal-buttons']} ${styles['text-on-dark']}`}>Don't have an account? Sign up</button>
                  </ModalFooter>
               </ModalContent>
            </Modal></>
      )
   }


   const onLogin = async (email:string,password:string) =>{
      let response = await authService.login(email,password);
      
      console.log(response);
      if(response){
         setLogin(true);
      }
   }
   return (
      <><div className={`${styles['container']} ${top && styles['top']}`}>
         <div className={styles['content']}>
            <div className={styles['left']}>
               <div className={styles['logo']}>
                  Menttee
               </div>
               {getButtons()}
            </div>
            {getLoginOrProfile()}
         </div>
      </div>
      </>
   );
}

export default Navbar;