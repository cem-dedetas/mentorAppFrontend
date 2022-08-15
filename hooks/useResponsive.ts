import { useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

const useResponsive = () => {

    const [currentBreakpoint, setcurrentBreakpoint] = useState('sm');
    const [isSmallerThanSm] = useMediaQuery('(max-width: 30em)');
    const [isSmallerThanMd] = useMediaQuery('(max-width: 48em)');
    const [isSmallerThanLg] = useMediaQuery('(max-width: 62em)');
    const [isSmallerThanXl] = useMediaQuery('(max-width: 80em)');
    const [isSmallerThan2Xl] = useMediaQuery('(max-width: 96em)');

    var selectedBreakpoint = 'sm';

    if(isSmallerThanSm)
        selectedBreakpoint = 'sm';
        
    if(isSmallerThanMd)
        selectedBreakpoint = 'md';
    
    if(isSmallerThanLg)
        selectedBreakpoint = 'lg';
        
    if(isSmallerThanXl)
        selectedBreakpoint = 'xl';
    
    if(isSmallerThan2Xl)
        selectedBreakpoint = '2xl';

    setcurrentBreakpoint(selectedBreakpoint);
    return [ currentBreakpoint ] ;
}

export default useResponsive;