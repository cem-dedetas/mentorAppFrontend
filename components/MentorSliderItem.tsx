import { SyntheticEvent, useCallback, useRef, useState } from 'react';
import { useBreakpointValue } from "@chakra-ui/react";

import styles from '../styles/components/MentorSliderItem.module.css';
import React from 'react';

interface MentorSliderItemProps {
    key : string;
    src : string;
    callback : any;
    index : number;
}

interface MentorData {
    src : string;
}

export interface HoverBox {
    x : number,
    y : number,
    width : number,
    height : number,
    mentorData : MentorData,
    position : 'left' | 'center' | 'right',
    isOpen : boolean,
}

const MentorSliderItem = ({ key, src, callback, index } : MentorSliderItemProps) => {

    const myRef = useRef<any>();
    const [ imgGap, setImgGap ] = useState('.25rem');
    const [ isHover, setIsHover ] = useState<boolean>(false);
    const [ hoverBox, setHoverBox ] = useState<HoverBox>();
    const [ mentorData, setHoverData] =useState<MentorData>({src : src});
    const itemSpan : number = useBreakpointValue({base:2,sm:3, md:4, lg:5, xl:6, '2xl':6 }) as number;

    const getRelativePosition = (index : number) =>{
        if(index%itemSpan === 0){ return 'left';}
        if((index+1)%(itemSpan) === 0){ return 'right'}
        return 'center';
    }

    const onMouseEnter = (val: any) => {
        const rect = val.target.getBoundingClientRect();
        const canBeSeenFull : boolean = (rect.right < window.innerWidth) && (rect.left > 0);
        console.log('Mouse entered, will call callback in 2seconds');
        //console.log('innerWidth:', window.innerWidth);
        //console.log(val.target.getBoundingClientRect());
        const hoverBox : HoverBox = {
            x : rect.left,
            y : rect.top + window.scrollY,
            width : rect.width,
            height : rect.height,
            isOpen : canBeSeenFull,
            position: getRelativePosition(index),
            mentorData : mentorData
        }
        callback(hoverBox);
        /*
        setTimeout(() => {
            callback(hoverBox);
            console.log('Callback is getting called.');
        },250)
        */
        //setIsHover(true);
    }
    const onMouseLeave = (val: any) => { 
        console.log('Mouse left.');
        //console.log(val.target.getBoundingClientRect());
        const rect = val.target.getBoundingClientRect();
        const hoverBox : HoverBox = {
            x : rect.left,
            y : rect.top + window.scrollY,
            width : rect.width,
            height : rect.height,
            isOpen : false,
            position: getRelativePosition(index),
            mentorData : mentorData
        }
        //callback(hoverBox);
        //setIsHover(true);
        //callback(hoverBox);
    }

    return (
        <div
            key={key}
            className={`${styles['container']} ${getRelativePosition(index)} ${isHover ? styles['hover'] : ' '}` } 
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
}

export default MentorSliderItem;