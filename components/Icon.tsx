export interface IconProps {
    name : string
    color : string
    size : string
}

//To Add Icon
//First add get{IconName} arrow function to return the svg with the color prop overloaded
//Nest add your get{IconName} function to the swith case, rest is handled.
const Icon = ({name, color, size} : IconProps) => {

    const getTry = () => {
        return (<svg style={{width:size, height:size}} viewBox={`0 0 ${size} ${size}`}>
                    <path fill={color} d="M19 18V14H17V18H15L18 21L21 18H19M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14" />
                </svg>);
    }

    const getIcon = () => {
        switch(name){
            case 'try' : {
                return getTry();
            } 
            default : {
                return getTry();
            }
        }
    }

    return (
        <>
            {getIcon()}
        </>
    );
}

export default Icon;