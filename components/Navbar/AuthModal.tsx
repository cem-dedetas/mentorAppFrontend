import { FormControl, FormErrorMessage, FormHelperText, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import React, { SetStateAction, useContext, useState } from 'react'
import AuthContext from '../../context/AuthProvider';
import authService from '../../services/auth-service';
import Br from '../Br';
import Button from '../Button';
import { AtIcon, EyeCloseIcon, EyeIcon, LockIcon } from '../Icon';
import Modal from '../Modal/Modal';
import ModalBody from '../Modal/ModalBody';
import ModalCloseButton from '../Modal/ModalCloseButton';
import ModalHeader from '../Modal/ModalHeader';

interface AuthModalNewProps {
   isOpen : boolean;
   onClose : any;
   isLogin : boolean;
}

const AuthModalNew = ({ isOpen, onClose } : AuthModalNewProps) => {

   const { setAuth } : any = useContext(AuthContext);
   const [emailInput, setEmailInput] = useState('');
   const [passwordInput, setPWInput] = useState('');
   const [loggedIn, setLogin] = useState(false);
   const [showPassword, setShowPassword] = useState(false);

   let isError: boolean = false;
   const handleEmailInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setEmailInput(e.target.value);
   }
   const handlePassInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setPWInput(e.target.value);
   }

   const onLogin = async (email:string,password:string) =>{
      let response = await authService.login(email, password);
      console.log(response);
      setAuth({ email, password, response});
      if(response){
         setLogin(true);
         //router.push('/browse');
      }
   }

   const onCloseModal = () => {
      onClose();
   }

   return (
      <Modal
         isOpen={isOpen}
         onClose={onClose}
         className="border-yellow border-2 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-4/12"
      >
         <ModalHeader>Login</ModalHeader>
         <ModalCloseButton onClose={onClose}/>
         <ModalBody>
            <FormControl isInvalid={isError}>
               <div className="py-2">Email</div>
               <InputGroup>
                  <InputLeftElement
                     pointerEvents='none'
                     children={<AtIcon color='grey' size="20"/>}
                  />
                  <Input
                     className={""}
                     type='email'
                     value={emailInput}
                     onChange={handleEmailInputChange}
                     placeholder={"user@mentee.com"}
                     backgroundColor='#555555'
                     border='hidden'
                     focusBorderColor='#DBFF00'
                     textColor='#D9D9D9'
                  />
               </InputGroup>
               {!isError ? (
                  <FormHelperText>

                  </FormHelperText>
               ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
               )}
            </FormControl>
            <FormControl isInvalid={isError}>
               <div className="py-2">Password</div>
               <InputGroup>
                  <InputLeftElement
                     pointerEvents='none'
                     children={<LockIcon color='gray' size="20"/>}
                  />
                  <Input
                     className={""}
                     type={showPassword ? 'text' : 'password'}
                     value={passwordInput}
                     onChange={handlePassInputChange}
                     placeholder="••••••••••"
                     backgroundColor='#555555'
                     border='hidden'
                     focusBorderColor='#DBFF00'
                     textColor='#D9D9D9'
                  />
                  <InputRightElement className="cursor-pointer" width='4.5rem' onClick={() => setShowPassword(!showPassword)}>
                     {
                        showPassword 
                        ? <EyeIcon color='lightgrey' size="20"/>
                        : <EyeCloseIcon color='lightgrey' size="20"/>
                     }
                  </InputRightElement>
               </InputGroup>
               {!isError ? (
                  <FormHelperText>

                  </FormHelperText>
               ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
               )}
            </FormControl>
         <div className="flex justify-end py-5">
            <Button
               className="w-full flex justify-center rounded-md"
               type="primary"
               label={"Login"}
               onClick={() => { onLogin(emailInput,passwordInput) }}
            />
         </div>
         <div className="flex flex-col items-center gap-y-2">
            <div>Don't have an account? <span className="cursor-pointer hover:text-white font-semibold">Sign up</span></div>
            <div className="cursor-pointer hover:text-white font-semibold">Forgot Password?</div>
         </div>
         </ModalBody>
      </Modal>
   )
}

export default AuthModalNew;
