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
import { useEffect, useState } from 'react';
import Fader from '../../components/Fader';

const Browse : NextPage = () => {

   const { t } = useTranslation();

   const getPowerlifterMentors = () => {
      return [
         <MentorSliderItem src="/image33.png"/>,
         <MentorSliderItem src="/image36.png"/>,
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
   
   return (
      <div onScroll={(lol: any) => {console.log('hey',lol)}}>

         <Navbar/>
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
                  />
               <MentorSlider
                  title="Diet Mentors"
                  source={getDietMentors()}
                  />
               <MentorSlider
                  title="Powerlifting Mentors"
                  source={getPowerlifterMentors()}
                  />
               <MentorSlider
                  title="Bodybuilding Mentors"
                  source={getBodybuilderMentors()}
                  />
               <MentorSlider
                  title="Diet Mentors"
                  source={getDietMentors()}
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