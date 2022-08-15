import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Fader from '../components/Fader';
import Navbar from '../components/Navbar';
import MentorSlider from '../components/MentorSlider';
import MentorSliderItem from '../components/MentorSliderItem';
import Image from 'next/image';

const Home: NextPage = () => {

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

   return (
      <div style={{height:'100%', maxWidth:'100vw', overflowX:'hidden', backgroundColor:'#101511'}}>
         <Navbar/>
         <Image style={{position:'relative', aspectRatio:'16/9', top:'0', width:'100%'}} src="/img4.jpg" alt="me" layout='fill'/> 
         <div style={{
            position: "absolute",
            top: "75%",
            zIndex: "5",
            backgroundColor:'transparent'
         }} >
            <Fader fadeTo="#101511">
               <MentorSlider
                  title="Powerlifting Mentors"
                  source={getPowerlifterMentors()}
               />
            </Fader>
            <MentorSlider
               title="Boddsasadsad Mentors"
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
            />
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

export default Home