import { Avatar } from '@chakra-ui/react';
import Image from 'next/image';
import ProfileBoxHeader from './ProfileBoxHeader';
import ProfileBoxStats from './ProfileBoxStats';

interface ProfileBoxProps {
   bannerImgSrc : string;
   profileImgSrc : string;
   firstName : string;
   secondName : string;
   firstTitle : string;
   secondTitle : string;
   rating : number;
   followerCount : number;
   menteeCount : number;
   badgeCount : number;
   message : string;
}

const ProfileBox = ({bannerImgSrc, profileImgSrc, firstName, secondName, firstTitle, secondTitle, rating, followerCount, menteeCount, badgeCount, message} : ProfileBoxProps) => {
   return (
      <div id="container" className="bg-transparent">
         <div id="banner-holder" className="relative">
            <Image 
               id="banner-image"
               src={bannerImgSrc}
               alt="me" 
               width='100%'
               height='33%'
               layout="responsive"
               className="rounded-t-2xl"
            />
            <div id="profile-image" className="absolute left-1/2 top-full w-2/5 -translate-y-1/2 -translate-x-1/2">
               <Avatar id="avatar" size='full' name={`${firstName} ${secondName}`} src={profileImgSrc}/>
            </div>
         </div>
         <div id="content" className="mt-[5vw] p-5 flex flex-col gap-y-4">
            <ProfileBoxHeader
               name={`${firstName} ${secondName}`}
               firstTitle={firstTitle} 
               secondTitle={secondTitle}
               rating={rating}
            />
            <ProfileBoxStats
               followerCount = {followerCount} 
               menteeCount = {menteeCount}
               badgeCount = {badgeCount}
            />
            <div className="text-white text-lg">
               {`${firstName}`} says...
            </div>
            <div className="italic font-thin">
            “{message}...”
            </div>
         </div>
      </div>
   )
}

export default ProfileBox;
