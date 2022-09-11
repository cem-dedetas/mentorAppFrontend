import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Button from '../../components/Button';
import HoverBox from '../../components/HoverBox';
import styles from '../../styles/pages/Browse.module.css';
import MentorSlider from '../../components/MentorSlider';
import MentorSliderItem from '../../components/MentorSliderItem';
import Navbar from '../../components/Navbar/Navbar';
import Fader from '../../components/Fader';
import useIsSsr from '../../hooks/useIsSsr';
import { DUMMY_CATEGORIES, DUMMY_CATEGORY_DATA } from '../../services/dummy-data';

interface CategoryData {
   category : string;
   data : string[]
}

const Browse : NextPage = () => {

   const [ categories, setCategories ] = useState<string[]>();
   const [ categoryData, setCategoryData ] = useState<CategoryData[]>();
   const [ isSliderItemClicked, setIsSliderItemClicked ] = useState<boolean>(false);

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
                  src={src}
                  index={sliderItemId}
                  onClick={
                     (val : any) => {
                        console.log(val);
                        setIsSliderItemClicked(true);
                     }
                  }
               />
            );
         })
         if(categoryId == 0){
            sliders.push(
               <Fader 
                  key={`faded${categoryId.toString()}`} 
                  direction='bottom'
                  color='#101511'
               >
                  <MentorSlider
                     key={categoryId.toString()}
                     title="Powerlifting Mentors"
                     source={sliderItems}
                     className={styles['sliders-first-item']}
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

   return (
      <>  
         <Navbar/>
         <HoverBox
            isOpen = {isSliderItemClicked}
            onClose = {() => {setIsSliderItemClicked(false);}}
         />
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
      </>
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