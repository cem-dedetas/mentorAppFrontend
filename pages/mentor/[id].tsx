import { NextPage } from "next";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Fader from "../../components/Fader";
import Navbar from "../../components/Navbar";
import Mentor from "../../dto/mentor/Mentor";
import { HalfStarIcon, StarIcon } from "../../components/Icon";
import mentorService from "../../services/mentor-service";
import styles from '../../styles/pages/Mentor.module.css';


const MentorPage : NextPage = () => {
    const router = useRouter();

    const [mentor, setMentor] = useState<Mentor>();
    const [isDataReady, setIsDataReady] = useState<boolean>(false);

    const fetchAccount = async () => {
        const result: Mentor = await mentorService.getMentor(router.query.id as string);
        if (result) {
            setMentor(result);
            console.log(result);
        }
    }

    useEffect(() => {
        setIsDataReady(false);
        if (router.isReady) {
            fetchAccount();
            setIsDataReady(true);
        }
    }, [router.isReady])

    const getRating = (rating : number) : JSX.Element[] => {
        const ratingOverFive = rating / 20;
        const fullStarCount = Math.floor(ratingOverFive);
        const stars : JSX.Element[] = [];
        for(var i = 0; i < fullStarCount; i++){
            stars.push(<StarIcon  color = '#DBFF00' size = '20'/>);
        }
        if(ratingOverFive !== Math.floor(ratingOverFive)){
            stars.push(<HalfStarIcon color = '#DBFF00' size = '20'/>);
        }
        return stars;
    }


    if(!isDataReady || !mentor){
        return <>Still fetching.</>
    }
        
    return (<div style={{width:'100%', height:'100%', margin:'0', padding:'0'}}>
        <Navbar/>
        <div className={styles['img']}>
            <Image 
                src="/img4.jpg" 
                alt="me" 
                width="100%"
                height="56.25%"
                layout="responsive"
                style={{borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}
            />
        </div>
        <Fader key="fader" direction="bottom" color="#101511" className={styles['backdrop']}/>
        <div className={styles['container']}>
            <div className={styles['content']}>
                <div className={styles['header']}>
                    <div className={styles['header-left']}>
                        <div className={styles['name']}>
                            {mentor.name}
                        </div>
                        <div className={styles['titles']}>
                            Powerlifter / Dietetian
                        </div>
                    </div>
                    <div className={styles['header-right']}>
                        <div className={styles['rating']}>
                            {getRating(79)}
                        </div>
                    </div>
                </div>
                <div className={styles['body']}>
                    <div className={styles['showcase']}>
                        <div className={styles['showcase-img']}>
                            <Image 
                                src="/img4.jpg" 
                                alt="me" 
                                width="40%"
                                height="22.5%"
                                layout="responsive"
                                style={{borderTopLeftRadius:'5px', borderBottomLeftRadius:'5px'}}
                            />
                        </div>
                        <Fader key="fader" direction="right" color="#ffffff" className={styles['rightdrop']}/>
                    </div>

                </div>
            </div>
        </div>
    </div>)
}

export default MentorPage;