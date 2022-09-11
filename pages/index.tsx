import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Home: NextPage = () => {
   return (
      <></>
   );
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