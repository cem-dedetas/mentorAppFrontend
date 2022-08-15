import { useState } from 'react';
import { useBreakpointValue } from "@chakra-ui/react";

import styles from '../styles/components/MentorSliderItem.module.css';
import React from 'react';

interface MentorSliderItemProps {
    src? : string;
    callback? : any;
}

const MentorSliderItem = React.forwardRef(({ src, callback } : MentorSliderItemProps, ref : any) => {
    const itemSpan = useBreakpointValue({ base:2, sm:3, md:4, lg:5, xl:6, '2xl':6 });
    if(!itemSpan) return <></>;
    const [ imgGap, setImgGap ] = useState('.25rem');
    const [ isHover, setIsHover ] = useState<boolean>(false);

    const onMouseEnter = () => { setIsHover(true); callback(true);}
    const onMouseLeave = () => { setIsHover(false); callback(false);}

    return (
        <div
            ref={ref}
            className={`${styles['container']} ${isHover ? styles['hover'] : ' '}` } 
            style={{flex: `0 0 calc(100% / ${itemSpan})`, 
            maxWidth: `calc(100% / ${itemSpan})`, 
            padding: imgGap}} 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img 
                style={{width:'100%'}}
                src={src}
            />
        </div>
    );
})

export default MentorSliderItem;