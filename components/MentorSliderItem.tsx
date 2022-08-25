import React from 'react';
import { useState } from 'react';
import { useBreakpointValue } from "@chakra-ui/react";

import styles from '../styles/components/MentorSliderItem.module.css';

interface MentorSliderItemProps {
    key : string;
    src : string;
    index : number;
    onClick : any;
}

const MentorSliderItem = ({ key, src, index, onClick } : MentorSliderItemProps) => {

    const [ imgGap ] = useState<string>('.25rem');
    const itemSpan : number = useBreakpointValue({base:2,sm:3, md:4, lg:5, xl:6, '2xl':6 }) as number;

    const getTransformOriginClass = () : string => {
        const hoverPosition : string = (index % itemSpan) === 0 ? 'left' : ((index+1) % itemSpan === 0 ? 'right' : 'center'); 
        switch(hoverPosition){
           case 'left' : return styles['tol'];
           case 'center' : return styles['toc'];
           case 'right' : return styles['tor'];
           default : return '';
        }
    }

    return (
        <div
            key={key}
            className={`${styles['container']}`} 
            style={{flex: `0 0 calc(100% / ${itemSpan})`, 
            maxWidth: `calc(100% / ${itemSpan})`, 
            padding: imgGap}} 
            onClick={() => onClick('Any thing')}
        >
            <img 
                style={{width:'100%'}}
                src={src}
                className={`${styles['image']} ${getTransformOriginClass()}`}
            />
        </div>
    );
}

export default MentorSliderItem;