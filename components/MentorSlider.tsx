import { ReactNode, useEffect, useState } from "react";
import { Flex, useBreakpointValue, AspectRatio, Progress, calc } from '@chakra-ui/react';
import MentorSliderItem from "../types/MentorSliderItem";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import styles from '../styles/components/MentorSlider.module.css';

interface MentorSliderProps {
    title? : string;
    source : ReactNode[];
    isFirstItem? : boolean;
}

const MentorSlider = ({title, source} : MentorSliderProps) => {

    const itemSpan = useBreakpointValue({ base:3, sm:4, md:5, lg:6, xl:7, '2xl':8 });
    if(!itemSpan) return <></>;
    const [ sliderPadding, setSliderPadding ] = useState('5rem');
    const [ handleSize, setHandleSize ] = useState('2.5rem');
    const [ imgGap, setImgGap ] = useState('.25rem');
    const [ sliderIndex, setSliderIndex ] = useState(0);
    const [ totalItemCount, setTotalItemCount ] = useState<number>(source.length);
    const [ progressBarItemCount, setProgressBarItemCount ] = useState(Math.ceil(totalItemCount / itemSpan));
    const [ hover, setHover ] = useState<boolean>(false);

    useEffect(() => {
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

    const getProgressBar = () : ReactNode => {
        const subItems : ReactNode[] = [];
        for(var i = 0; i < progressBarItemCount; i++){
            subItems.push(
                <div 
                    className={`${styles['progress-item']} ${i === sliderIndex ? styles['active'] : ' '}`}
                    style={{visibility:hover ? 'visible' : 'hidden'}}/>
            );
        }

        console.log(subItems);

        return (
            <div className={styles['progress-bar']}>
                {subItems}
            </div>
        );
    }

    const getSlider = () => {
        return (<>
            <div 
                className={styles['header']}
                style={{padding: `.5rem calc(${imgGap} * 2 + ${handleSize}`}}
            >
                <h3 className={styles['title']}>{title}</h3>
                {getProgressBar()}
            </div>
            <div 
                className={styles['container']}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}    
            >   
                <div 
                    className={`${styles['handle']} ${styles['leftHandle']}`}
                    style={{margin: `${imgGap} 0`, width: `${handleSize}`, visibility:hover ? 'visible' : 'hidden'}}
                    onClick = {onClickLeftButton}
                >
                    <ChevronLeftIcon w='6vmin' h='6vmin' color='white'/>
                </div>
                <div 
                    className={styles['slider']}
                    style={{margin: `0 ${imgGap}`, transform: `translateX(calc(${sliderIndex} * -100%))` }}
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
        </>);
    }

    return (<>
        <div 
            className={styles['header']}
            style={{padding: `.5rem calc(${imgGap} * 2 + ${handleSize}`}}
        >
            <h3 className={styles['title']}>{title}</h3>
            {getProgressBar()}
        </div>
        <div 
            className={styles['container']}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}    
        >   
            <div 
                className={`${styles['handle']} ${styles['leftHandle']}`}
                style={{margin: `${imgGap} 0`, width: `${handleSize}`, visibility:hover ? 'visible' : 'hidden'}}
                onClick = {onClickLeftButton}
            >
                <ChevronLeftIcon w='6vmin' h='6vmin' color='white'/>
            </div>
            <div 
                className={styles['slider']}
                style={{margin: `0 ${imgGap}`, transform: `translateX(calc(${sliderIndex} * -100%))` }}
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
    </>);
}

export default MentorSlider;