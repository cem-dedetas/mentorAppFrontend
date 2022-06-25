import React from "react";
import { Center, Flex, Text, Box, transition } from '@chakra-ui/react'

interface ButtonProps {
   type : 'primary' | 'secondary';
   label : string;
   onClick : any;
   icon? : React.ReactNode;
}

const Button = ({type, label, onClick, icon} : ButtonProps) => {

   return (
      <Box 
         as='button' 
         p={4} 
         paddingY={0}
         paddingX={5}  
         borderRadius={5}
         border='1px'
         borderColor={type === 'secondary' ? '#DBFF00' : 'none'}
         fontWeight={500}
         height='40px'
         onClick={onClick}
         backgroundColor={type === 'primary' ? '#DBFF00' : 'inherit'}
         color={type === 'primary' ? 'inherit' : '#DBFF00'}
         opacity='1'
         _hover={{
            transition : 'background-color .2s' ,
            backgroundColor: type === 'primary' ? 'rgba(219, 255, 0, .7)' : 'rgba(0, 0, 0, .1)'
         }}
      >
         <Flex 
            columnGap={'10px'}
         >
            {icon}
            {label}
         </Flex>
      </Box>
   );
}

export default Button;