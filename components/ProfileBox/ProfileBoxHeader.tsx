import React from 'react'

interface ProfileBoxHeaderProps {
    name : string;
    firstTitle: string; 
    secondTitle: string;
    rating: number;
}

const ProfileBoxHeader = ({name, firstTitle, secondTitle, rating} : ProfileBoxHeaderProps) => {
  return (
    <div className='w-full flex items-center text-white'>
        <div id="left" className="mr-auto">
            <div className="text-2xl">
                {name}
            </div>
            <div className="italic font-thin">
                {firstTitle} / {secondTitle}
            </div>
        </div>
        <div id="right" className="left-0">
            <div className="text-5xl text-yellow">
                {rating}/5
            </div>
        </div>
    </div>
  )
}

export default ProfileBoxHeader;
