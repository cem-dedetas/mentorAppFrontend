interface ProfileBoxStatsProps {
   followerCount : number;
   menteeCount : number;
   badgeCount : number;
}

interface StatProps {
   count : number;
   statName : string;
}

const ProfileBoxStats = ({followerCount, menteeCount, badgeCount} : ProfileBoxStatsProps) => {

   const Stat = ({count, statName}: StatProps) => {
      return (
         <div className="flex flex-col justify-center items-center min-w-max">
            <div className="font-bold text-2xl">
               {count}
            </div>
            <div>
               {statName}
            </div>
         </div>
      ); 
   }

   return (
      <div className="rounded-2xl bg-lightgrey p-5 flex justify-around">
         <Stat
            count={followerCount}
            statName="Followers"
         />
         <Stat
            count={menteeCount}
            statName="Mentees"
         />
         <Stat
            count={badgeCount}
            statName="Badges"
         />
         
      </div>
   )
}

export default ProfileBoxStats;
