import { useState, useEffect } from "react";
import resolveConfig from 'tailwindcss/resolveConfig'
import { Config } from "tailwindcss/types/config.js";
import tailwindConfig, { theme } from '../tailwind.config.js'

const useBreakpoint = () => {

    const fullConfig : any = resolveConfig(tailwindConfig);
    const [currentBreakpoint, setCurrentBreakpoint] = useState<string>();


    const getBreakpointPxNumber = (value : string) : number => {
        var x = value.replace(/\D/g,'');
        var y : number = Number(x);
        return y;
    }

    useEffect(() => {
        const handleResize = () => {
            if(!fullConfig?.theme?.screen){
                return;
            }
            var crbp = 'sm';
            if(window.innerWidth >= 0 &&  window.innerWidth < getBreakpointPxNumber(fullConfig.theme.screens.md)){
                crbp='sm';
            }else if(window.innerWidth >= getBreakpointPxNumber(fullConfig.theme.screens.md) &&  window.innerWidth < getBreakpointPxNumber(fullConfig.theme.screens.lg)){
                crbp='md';
            }else if(window.innerWidth >= getBreakpointPxNumber(fullConfig.theme.screens.lg) &&  window.innerWidth < getBreakpointPxNumber(fullConfig.theme.screens.xl)){
                crbp='lg';
            }else if(window.innerWidth >= getBreakpointPxNumber(fullConfig.theme.screens.xl) &&  window.innerWidth < getBreakpointPxNumber(fullConfig.theme.screens['2xl'])){
                crbp='xl';
            }else{
                crbp='2xl';
            }
            setCurrentBreakpoint(crbp);
        }
        window.addEventListener('resize', handleResize);
    }, [])

    return currentBreakpoint;
}

export default useBreakpoint;