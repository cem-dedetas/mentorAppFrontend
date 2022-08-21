import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from '../../components/Button';
import styles from '../../styles/pages/Browse.module.css';
import bgImage from '../../public/img3.jpg';

import MentorSlider from '../../components/MentorSlider';
import MentorSliderItem, { HoverBox } from '../../components/MentorSliderItem';
import Navbar from '../../components/Navbar';
import { createRef, useCallback, useEffect, useRef, useState } from 'react';
import Fader from '../../components/Fader';
import useIsSsr from '../../hooks/useIsSsr';
import { PlusIcon } from '../../components/Icon';
import { DUMMY_CATEGORIES, DUMMY_CATEGORY_DATA } from '../../services/dummy-data';

interface CategoryData {
   category : string;
   data : string[]
}

const Browse : NextPage = () => {

   const { t } = useTranslation();
   const [ categories, setCategories ] = useState<string[]>();
   const [ categoryData, setCategoryData ] = useState<CategoryData[]>();
   const [ hover, setHover ] = useState(false);
   const [ hoverBox, setHoverBox ] = useState<HoverBox>();

   /*
   useEffect(() => {
      if(hoverBox?.isOpen){
         setHover(true);
         return;
      }
      setHover(false);
   }, [hoverBox, hover])
   */

   const getCategories = async () => {
      //Fetch showable categories here.
      //Mock data is used for now.
      const response = DUMMY_CATEGORIES;
      return response;
   }
   
   const getCategoryData = async () => { 
      //Fetch category data here.
      //Mock data is used for now.
      const response = DUMMY_CATEGORY_DATA;
      return response;
   }

   const bootstrapBrowsePage = async () => {
      const categories = await getCategories();
      setCategories(categories);
      const categoryData = await getCategoryData();
      categoryData?.forEach((elem : any) => {
         categoryData?.push(elem);
         const oldategoryData = categoryData;
         oldategoryData?.push(elem);
         setCategoryData(oldategoryData);
      })
   }

   useEffect(() => {
      bootstrapBrowsePage();
   },[])

   const isSsr = useIsSsr();
   if(isSsr) return null;

   const getSliders = () => {
      const sliders : JSX.Element[] = [];
      categories?.forEach((category, categoryId) => {
         const match = categoryData?.find((subEl) => subEl.category === category);
         if(!match){ return; }

         const sliderItems : JSX.Element[] = []; 
         match.data.forEach((src, sliderItemId) => {
            sliderItems.push(
               <MentorSliderItem 
                  key={sliderItemId.toString()}
                  callback={(val:any) => 
                     {
                        
                        console.log('Callback is seen by the browse page.');
                        setHoverBox(val);
                     }
                  }
                  src={src}
                  index={sliderItemId}
               />
            );
         })
         if(categoryId == 0){
            sliders.push(
               <Fader fadeTo='#101511'>
                  <MentorSlider
                     key={categoryId.toString()}
                     title="Powerlifting Mentors"
                     source={sliderItems}
                  />
               </Fader>
            );
         }else{
            sliders.push(
               <MentorSlider
                  key={categoryId.toString()}
                  title={`${category} Mentors`}
                  source={sliderItems}
                  bgColor="#101511"
               />
            );
         }
      })
      return sliders;
   }

   const getHoverBox = () => {
      console.log('Hoverbox getter function will be called again.');

      if(!hoverBox){
         console.log('Hoverbox is empty, yeet!.')
         return;
      };

      var transformOrigin = styles['tol'];
      switch(hoverBox?.position){
         case 'left' : transformOrigin = styles['tol'];
         break;
         case 'center' : transformOrigin = styles['toc'];
         break;
         case 'right' : transformOrigin = styles['tor'];
         break;
      }


      console.log('now we are talking.');
      console.log('Hoverbox updated.',hoverBox);
      return (
         <div
            onMouseEnter={() => {
            }}
            onMouseLeave={() => {
               setHoverBox({
                  ...hoverBox,
                  isOpen:false
               })
            }}
            style={{
               visibility:hoverBox.isOpen? 'visible' : 'hidden',
               width:hoverBox.width, 
               left:`${hoverBox.x}px`, 
               top:`${hoverBox.y}px`,
            }}
            className={`${styles['hover-box']} ${transformOrigin}`}
         >
            <div
               className={styles['hover-box-img-container']}
            >
               <Image 
                  src={hoverBox.mentorData.src} 
                  alt="me" 
                  width={hoverBox.height*2}
                  height={`${hoverBox.height*2/(16/9)}%`}
                  className={styles['hover-box-img']}
               />
            </div>
            <div
               className={styles['hover-box-content-container']}
            >
               <div className={styles['hover-box-header']}>
                  <div className={styles['hover-box-header-left']}>
                     <span className={styles['hover-box-name']}>
                        Doruk Sikişenses
                     </span>
                     <span className={styles['hover-box-titles']}>
                        Powerlifter / Dietetian
                     </span>
                  </div>
                  <div className={styles['hover-box-header-right']}>
                     <span className={styles['hover-box-rating']}>
                        4.7/5
                     </span>
                  </div>
               </div>
               <div
                  className={styles['hover-box-content']}
               >
                  <div className={styles['hover-box-tags']}>
                     Responds Fast - Good Teacher - Educated
                  </div>
                  <div
                     className={styles['hover-box-action']}
                  >                  
                     <Button
                        type = "secondary"
                        label = ""
                        icon={<PlusIcon color='#DBFF00' size='12'/>}
                        onClick = {() => {console.log('clicked')}}
                        style={{padding:'8px', borderRadius:'50%'}}
                     />
                  </div>
               </div>

            </div>
         </div>
      );
   }
   
   return (
      <div>
         <Navbar/>
         {getHoverBox()}
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
               {getSliders()}
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

export default Browse;