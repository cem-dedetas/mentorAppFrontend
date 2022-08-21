import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Fader from '../components/Fader';
import Navbar from '../components/Navbar';
import MentorSlider from '../components/MentorSlider';
import MentorSliderItem from '../components/MentorSliderItem';
import Image from 'next/image';

const Home: NextPage = () => {
   return (
      <div 
         onMouseOver={()=>{console.log('here.')}}
         style={{visibility:'visible', width:'200px', height:'200px', backgroundColor:'red'}}
      >
         Henlo
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