import { useState } from "react";
import styles from '../styles/components/Dropdown.module.css';
import { MenuDownIcon } from '../components/Icon';
import Br from '../components/Br';

interface DropdownItem {
    icon : JSX.Element;
    title : string;
    href : string;
    hasBrUp? : boolean;
    brColor? : string;
    onClick? : any;
}

interface DropdownProps {
    title : string;
    items : DropdownItem[];
    avatar? : JSX.Element;
    direction: 'left' | 'right';
}

const Dropdown = ({title, items, avatar, direction} : DropdownProps) => {

    const [hover, setHover] = useState<boolean>(false);
    const [dropdownHover, setDropdownHover] = useState(false);

    const onMouseOver = () => { setHover(true); }
    const onMouseLeave = () => { setHover(false);}
    const onMouseOverDropdown = () => { setDropdownHover(true); }
    const onMouseLeaveDropdown = () => { setDropdownHover(false); }

    const getDropdownItems = () => {
        const dropdownItems : JSX.Element[] = [];
        items.forEach((item) => {
            if(item.hasBrUp){
                dropdownItems.push(<Br color={!item.brColor ? 'white' : item.brColor}/>);
            }
            dropdownItems.push(
                <div className = {styles['dropdown-button']} onClick = {()=>item.onClick}>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
            );
        })
        return dropdownItems;
    }

    const getHoverDropdown = () => {
        return (
            <div
                className={`${(dropdownHover || hover) && styles['dropdown-visible']}  ${direction === 'left' ? styles['outer-dropdown-left'] : styles['outer-dropdown-right']}`}
                onMouseOver={onMouseOverDropdown}
                onMouseLeave={onMouseLeaveDropdown}
            >
                <div 
                    className={`${(dropdownHover || hover) && styles['dropdown-visible']} ${styles['hover-dropdown-container']}`}>   
                    {getDropdownItems()}
                </div>
            </div>
        );
    }

    return (
        <div 
            className={styles['dropdown-button-container']}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            {getHoverDropdown()}
            {avatar && <div className={styles['avatar']}>{avatar}</div>}
            <div className={`${styles['name']} ${(hover || dropdownHover) && styles['hovered-name']}`}>{title}</div>
            <div className={`${styles['icon']} ${(hover || dropdownHover) && styles['hovered-icon']}`}>
                <MenuDownIcon
                    size='24' 
                    color ='white'
                />
            </div>
        </div>
    );
}

export default Dropdown;