import { useState } from 'react';
import { useBreakpointValue } from "@chakra-ui/react";

import styles from '../styles/components/MentorSliderItem.module.css';

interface MentorSliderItemProps {
    src? : string;
}

const MentorSliderItem = ({ src } : MentorSliderItemProps) => {
    const itemSpan = useBreakpointValue({ base:3, sm:4, md:5, lg:6, xl:7, '2xl':8 });
    if(!itemSpan) return <></>;
    const [ imgGap, setImgGap ] = useState('.25rem');
    const [ isHover, setIsHover ] = useState<boolean>(false);

    const onMouseEnter = () => { setIsHover(true) }
    const onMouseLeave = () => { setIsHover(false) }

    const getInfoPopover = () => {
        return (
            <div style={{visibility : isHover ? 'visible' : 'hidden'}}>Henlo</div>
        );
    }

    return (
        <>
        <img 
            className={`${styles['container']} ${isHover ? styles['hover'] : ' '}` } 
            style={{flex: `0 0 calc(100% / ${itemSpan})`, 
            maxWidth: `calc(100% / ${itemSpan})`, 
            padding: imgGap}} 
            src={src}
        />
        </>
    );
}

export default MentorSliderItem;