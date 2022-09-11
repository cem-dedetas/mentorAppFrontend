interface ContentBoxProps {
   //If label is provided it appears on top of the ContentBox
   label?: string;
   //Left aligned ContentBoxes should have 'start' and right aligned ContentBoxes
   //Should have 'end' positions.
   alignment?: 'start' | 'end' | 'full' | undefined;
   
}

const ContentBox =  ({children, label, alignment} : React.PropsWithChildren<ContentBoxProps>) => {

   const getPadding = (alignment : 'start' | 'end' | 'full' | undefined)  => {

      const basePadding = 'py-[20px]';

      if (!alignment){
         return `${basePadding} px-[20px]`;
      }

      switch(alignment){
         case 'start' : return `${basePadding} pr-[20px]`;
         case 'end' : return `${basePadding} pl-[20px]`;
         case 'full' : return `${basePadding}`;
         default : `${basePadding}`;
      }
   }

   return (
      <div id="outerBox" className={`${getPadding(alignment)} h-min`}>
         {label &&
               <span className="text-lg font-semibold">{label}</span>
         }
         <div id="content" className={`${label && 'mt-[10px]'} bg-grey rounded-2xl drop-shadow-2xl`}>
               {children}
         </div>
      </div>
   )
}

export default ContentBox;
