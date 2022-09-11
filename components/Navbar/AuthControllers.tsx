import React, { useState } from 'react'
import Button from '../Button';
import AuthModalNew from './AuthModal';

const AuthControllers = () => {

   const [ isLogin, setIsLogin ] = useState<boolean>(false);
   const [ isAuthModalOpen, setIsAuthModalOpen ] = useState<boolean>(false);


   const onCloseAuthModal = () => { 
      setIsAuthModalOpen(false);
   }

   return (
      <>
         <AuthModalNew
            isOpen={isAuthModalOpen}
            onClose={onCloseAuthModal}
            isLogin={isLogin}
         />
         <div id="buttons" className="flex gap-x-2">
            <Button
               type={"primary"}
               label={"Login"}
               onClick={() => setIsAuthModalOpen(true)}
            />
            <Button
               type={"secondary"}
               label={"Sign Up"}
               onClick={() => {}}
            />
         </div>
      </>
   )
}

export default AuthControllers;
