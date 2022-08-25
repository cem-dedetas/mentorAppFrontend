import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Fader from '../components/Fader';
import Navbar from '../components/Navbar';
import MentorSlider from '../components/MentorSlider';
import MentorSliderItem from '../components/MentorSliderItem';
import Image from 'next/image';
import { Button, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';


const Home: NextPage = () => {

   interface HoverBoxProps {
      x : number;
      y : number;
      width : number;
      height : number;
      position : 'left' | 'center' | 'right';
      isOpen : boolean;
   }

   const [ data, setData ] = useState<HoverBoxProps>({
      x : 0,
      y : 0,
      width : 0,
      height : 0,
      position : 'left',
      isOpen : false
   });
   const [open, setOpen] = useState<boolean>(false);

   useEffect(() => {
      console.log(data);
      setOpen(true);
   }, [data.isOpen])

   return (
      <div style={{position:'relative'}}>
         <Popover
            isOpen={data.isOpen}
            
         >
            <PopoverTrigger>
               <Button 
                  onMouseEnter={(val : any) => {
                     console.log('Clicked the button getting the info..');
                     const rect = val.target.getBoundingClientRect();
                     //console.log('info:',rect);
                     setData({
                        x : rect.left,
                        y : rect.top + window.scrollY,
                        width : rect.width,
                        height : rect.height,
                        position : 'left',
                        isOpen : true
                     });
                  }}
                  onMouseLeave={() => {
                     setData({
                        ...data,
                        isOpen:false
                     });
                  }}
               >Trigger</Button>
            </PopoverTrigger>
            <Portal>
            <PopoverContent 
               position={'absolute'}
               style={{position:'absolute', left:`${data.x}px`,top:`${data.y}px`}}
            >
               <PopoverArrow />
               <PopoverCloseButton />
               <PopoverHeader>Confirmation!</PopoverHeader>
               <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
            </Portal>
         </Popover>
      </div>
   );
}

export const getStaticProps = async ({ locale } : any) => {
   return {
      props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
      },
   };
}

export default Home