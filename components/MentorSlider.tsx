import { ReactNode, useEffect, useState } from "react";
import { Flex, useBreakpointValue, AspectRatio, Progress, calc } from '@chakra-ui/react';
import MentorSliderItem from "../types/MentorSliderItem";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import styles from '../styles/components/MentorSlider.module.css';

interface MentorSliderProps {
    key : string;
    title? : string;
    source : JSX.Element[];
    bgColor? : string;
}

const MentorSlider = ({key, title, source, bgColor} : MentorSliderProps) => {

    const [ sliderPadding, setSliderPadding ] = useState('5rem');
    const [ handleSize, setHandleSize ] = useState('calc(5% - .5rem)');
    const [ imgGap, setImgGap ] = useState('.25rem');
    const [ sliderIndex, setSliderIndex ] = useState(0);
    const [ totalItemCount, setTotalItemCount ] = useState<number>(source.length);
    const [ hover, setHover ] = useState<boolean>(false);
    const itemSpan : number = useBreakpointValue({base:2, sm:3, md:4, lg:5, xl:6, '2xl':6 }) as number;
    const [ progressBarItemCount, setProgressBarItemCount ] = useState<number>(1);
    useEffect(() => {
        if(!itemSpan){
            return;
        }
        setProgressBarItemCount(Math.ceil(totalItemCount / itemSpan));
    }, [totalItemCount, itemSpan])

    const onClickRightButton = () => {
        if (sliderIndex + 1 >= progressBarItemCount) {
            setSliderIndex(0);
        } else {
            setSliderIndex(sliderIndex + 1);
        }
    }

    const onClickLeftButton = () => {
        if (sliderIndex - 1 < 0) {
            setSliderIndex(progressBarItemCount - 1);
        } else {
            setSliderIndex(sliderIndex - 1);
        }
    }

    const getProgressBar = () : JSX.Element => {
        const subItems : JSX.Element[] = [];
        for(var i = 0; i < progressBarItemCount; i++){
            subItems.push(
                <div 
                    key={`progressBar${i}`}
                    className={`${styles['progress-item']} ${i === sliderIndex ? styles['active'] : ' '}`}
                    style={{visibility:hover ? 'visible' : 'hidden'}}></div>
            );
        }

        return (
            <div className={styles['progress-bar']}>
                {subItems}
            </div>
        );
    }

    const getTransformFunction = () => {
        const left = source.length - (itemSpan * sliderIndex);
        if(left > itemSpan){
            return `translateX(calc(${sliderIndex} * -100%))`;
        }else{
            const strings = `translateX(calc(calc(${sliderIndex - 1} * -100%) - ${left/itemSpan*100}%))`;
            return strings;
        }
    }

    return (
    <div key={key}>
        <div 
            className={styles['header']}
            style={{padding: `".5rem calc(${imgGap} * 2 + ${handleSize}"`, backgroundColor: !bgColor ? 'transparent' : bgColor }}
        >
            <div style={{width:'90%', display:'flex', alignItems:'center'}}>
                <h3 className={styles['title']}>{title}</h3>
                {getProgressBar()}
            </div>
        </div>
        <div 
            className={styles['container']}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{backgroundColor: !bgColor ? 'transparent' : bgColor}}    
        >   
            <div 
                className={`${styles['handle']} ${styles['leftHandle']}`}
                style={{margin: `${imgGap} 0`, width: `${handleSize}`, visibility:hover && sliderIndex > 0 ? 'visible' : 'hidden'}}
                onClick = {onClickLeftButton}
            >
                <ChevronLeftIcon w='6vmin' h='6vmin' color='white'/>
            </div>
            <div 
                className={styles['slider']}
                style={{margin: `0 ${imgGap}`, transform: getTransformFunction() }}
            >
                {source}
            </div>
            <div 
                className={`${styles['handle']} ${styles['rightHandle']}`}
                style={{margin: `${imgGap} 0`, width: `${handleSize}`, visibility:hover ? 'visible' : 'hidden'}}
                onClick = {onClickRightButton}
            >
                <ChevronRightIcon w='6vmin' h='6vmin' color='white'/>
            </div>
        </div>
    </div>);
}

export default MentorSlider;
