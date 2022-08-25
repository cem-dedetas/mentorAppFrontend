import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import { PlusIcon } from '../components/Icon';

import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import styles from '../styles/components/Hoverbox.module.css';
import Fader from './Fader';

interface MentorData {
   src : string;
}

export interface HoverBoxProps {
   isOpen : boolean;
   onClose : any;
}

const HoverBox = ({ isOpen, onClose } : HoverBoxProps) => {

   const getHoverBox = () : JSX.Element => {
      return (
         <Modal isOpen={isOpen} onClose={() => onClose()}>
            <ModalOverlay />
            <ModalContent bg="#111015" border='1px' borderColor='#DBFF00' borderTopRadius="5px">
               <div className={styles['bg-img']}>
                  <Image 
                     src="/img4.jpg" 
                     alt="me" 
                     width="100%"
                     height="56.25%"
                     layout="responsive"
                     style={{borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}
                  />
               <Fader 
                  key={`faded`} 
                  fadeTo="#111015"
                  className={styles['content']}
               >
                  annen
               </Fader>
               </div>
               <ModalHeader textColor="whiteAlpha.900">Modal Title</ModalHeader>
               <ModalCloseButton />
               <ModalBody className={styles['content']}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat eveniet eaque porro distinctio eum dolore natus? Adipisci, sit.
               </ModalBody>

               <ModalFooter>
                  <Button type='primary' label='close' onClick={() => {}}/>
                  <Button type='primary' label='secodnary' onClick={() => {}}/>
               </ModalFooter>
            </ModalContent>
         </Modal>
      );
   }

   return (
      <>
         {getHoverBox()}
      </>
   );

}

export default HoverBox;