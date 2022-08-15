import type { NextPage } from 'next'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from '../../components/Button';
import styles from '../../styles/pages/Browse.module.css';
import bgImage from '../../public/img3.jpg';

import MentorSlider from '../../components/MentorSlider';
import MentorSliderItem from '../../components/MentorSliderItem';
import Navbar from '../../components/Navbar';
import { createRef, useEffect, useRef, useState } from 'react';
import Fader from '../../components/Fader';

const Browse : NextPage = () => {

   const { t } = useTranslation();
   const [hover, setHover] = useState(false);
   const myRef  = createRef<HTMLDivElement>();
   const [x, setX] = useState(myRef?.current?.getBoundingClientRect().left);
   const [y, setY] = useState(myRef?.current?.getBoundingClientRect().top);

   const getPowerlifterMentors = () => {
      return [
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem ref={myRef} callback={(val:any) => {
            if(val){
               setHover(true);
               return;
            }
            setHover(false);
         }
         } src="/image36.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image36.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image36.png"/>,
      ]
   }

   const getBodybuilderMentors = () => {
      return [
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image33.png"/>,
      ]
   }

   const getDietMentors = () => {
      return [
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image22.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image22.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image22.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image22.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image22.png"/>,
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image18.png"/>,
         <MentorSliderItem src="/image22.png"/>
      ]
   }

   useEffect(() => {
      if(!myRef?.current?.getBoundingClientRect().top) return;
      setX(myRef?.current?.getBoundingClientRect().left);
      setY(myRef?.current?.getBoundingClientRect().top - window.scrollY);
      console.log(myRef?.current?.scrollTop);
   }, [myRef?.current?.getBoundingClientRect().top, myRef?.current?.getBoundingClientRect().left, myRef?.current?.scrollTop])

   const getTheBitch = () => {
      console.log(`${x}px`, ',', `${y}px`);
      return (
         <div style={{position:'absolute', zIndex:'50',display:hover ? 'block' : 'none', width:'200px', height:'200px', backgroundColor:'red', left:`${x}px`, top:`${y}px`}}>
            Henlo
         </div>
      );
   }
   
   return (
      <div>
         <Navbar/>
         {getTheBitch()}
         <div className={styles['container']}>
            <div 
               className={styles['content']} 
               >
               <div className={styles['bg-img']}>
                  <Image src="/img4.jpg" alt="me" layout='fill'/>
               </div>
               <div className={styles['info-box']}>
                  <div className={styles['name']}>
                     Neil Patrick Harris
                  </div>
                  <div className={styles['explanation']}>
                     Here are the best mentors from variety of fields you can choose from ariety of fields you can choose from
                  </div>
                  <div className={styles['buttons']}>
                     <Button
                        type = "primary"
                        label = "Choose Your Plan"
                        onClick = {() => {console.log('clicked')}}
                        />
                     <Button
                        type = "secondary"
                        label = "More Info"
                        onClick = {() => {console.log('clicked')}}
                        />
                  </div>
               </div>
            </div>
            <div className = {styles['sliders']}>
               <Fader fadeTo='#101511'>
                  <MentorSlider
                     title="Powerlifting Mentors"
                     source={getPowerlifterMentors()}
                  
               />
               </Fader>
               <MentorSlider
                  title="Bodybuilding Mentors"
                  source={getBodybuilderMentors()}
                  bgColor="#101511"
               />
               <MentorSlider
                  title="Diet Mentors"
                  source={getDietMentors()}
                  bgColor="#101511"
               />
               <MentorSlider
                  title="Powerlifting Mentors"
                  source={getPowerlifterMentors()}
                  bgColor="#101511"
               />
               <MentorSlider
                  title="Bodybuilding Mentors"
                  source={getBodybuilderMentors()}
                  bgColor="#101511"
               />
               <MentorSlider
                  title="Diet Mentors"
                  source={getDietMentors()}
                  bgColor="#101511"
               />
            </div>
         </div>
      </div>
   )
}

export const getStaticProps = async ({ locale } : any) => {
   return {
      props: {
         ...(await serverSideTranslations(locale, ['common'])),
         // Will be passed to the page component as props
   },
};
}

export default Browse