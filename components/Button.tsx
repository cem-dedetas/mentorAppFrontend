import React from "react";
import { Flex, Box } from '@chakra-ui/react'

interface ButtonProps {
   type : 'primary' | 'secondary';
   label : string;
   onClick : any;
   icon? : React.ReactNode;
   className? : string;
   style? : any;
}

const Button = ({type, label, onClick, icon, className, style} : ButtonProps) => {

   return (
      <Box 
         as='button' 
         p={4} 
         paddingY = {'5px'} 
         border='1px'
         borderRadius="5px"
         borderColor={type === 'secondary' ? '#DBFF00' : '#DBFF00'}
         fontWeight={500}
         onClick={onClick}
         backgroundColor={type === 'primary' ? '#DBFF00' : 'inherit'}
         color={type === 'primary' ? 'black' : '#DBFF00'}
         opacity={type === 'secondary' ? '1' : '1'}
         _hover={{
            transition : 'background-color .2s' ,
            backgroundColor: type === 'primary' ? 'rgba(219, 255, 0, .8)' : 'rgba(219, 255, 0, .2)'
         }}
         className={className}
         style={style}
      >
         <Flex 
            columnGap='10px'
         >
            {icon}
            {label}
         </Flex>
      </Box>
   );
}

export default Button;