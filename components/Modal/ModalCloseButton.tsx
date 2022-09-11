import { CloseIcon } from "../Icon";

interface ModalCloseButtonProps {
    className? : string;
    color? : string;
    onClose : any;
}

export const ModalCloseButton = ({ className, color, onClose } : ModalCloseButtonProps) => {
    return (
        <div 
            className={`${className} absolute top-6 right-6 cursor-pointer`}
            onClick={onClose}
        >
            <CloseIcon color="white" size="24"/>
        </div>
    )
}

export default ModalCloseButton;
