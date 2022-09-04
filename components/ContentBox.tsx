interface ContentBoxProps {
    label?: string;
}

const ContentBox =  ({children, label} : React.PropsWithChildren<ContentBoxProps>) => {
  return (
    <div id="outerBox" className={`p-[20px] h-min`}>
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
