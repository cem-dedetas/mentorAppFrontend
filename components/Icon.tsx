import { PropsWithChildren } from 'react';

interface IconProps {
    color : string
    size : string
}

const BaseIcon = ({children, color, size} : PropsWithChildren<IconProps>) => {
    return (<svg style={{width:`${size}px`, height:`${size}px`}} viewBox={`0 0 24 24`}>{children}</svg>);
}

const LeftArrowIcon = ({color, size} : IconProps) => {
    return (
        <BaseIcon color={color} size={size}>
            <path fill={color} d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </BaseIcon>
    ); 
}

const RightArrowIcon = ({color, size} : IconProps) => {
    return (
        <BaseIcon color={color} size={size}>
            <path fill={color} d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </BaseIcon>
    ); 
}

const ProfileIcon = ({color, size} : IconProps) => {
    return (
        <BaseIcon color={color} size={size}>
            <path fill={color} d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
        </BaseIcon>
    ); 
}

const MenuDownIcon = ({color, size} : IconProps) => {
    return (
        <BaseIcon color={color} size={size}>
            <path fill={color} d="M7,10L12,15L17,10H7Z" />
        </BaseIcon>
    ); 
}

const LogoutIcon = ({color, size} : IconProps) => {
    return (
        <BaseIcon color={color} size={size}>
             <path fill={color} d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
        </BaseIcon>
    ); 
}

const HelpIcon = ({color, size} : IconProps) => {
    return (
        <BaseIcon color={color} size={size}>
             <path fill={color} d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
        </BaseIcon>
    ); 
}

const PlusIcon = ({color, size} : IconProps) => {
    return (
        <BaseIcon color={color} size={size}>
            <path fill={color} d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </BaseIcon>
    ); 
}

export { LeftArrowIcon, RightArrowIcon, ProfileIcon, MenuDownIcon, LogoutIcon, HelpIcon, PlusIcon };