import { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import ModalBody from "./ModalBody";
import ModalCloseButton from "./ModalCloseButton";
import ModalHeader from "./ModalHeader";

interface ModalProps {
    isOpen : boolean;
    onClose : any;
    className? : string;
}

const Modal = ({ children, className, isOpen, onClose } : React.PropsWithChildren<ModalProps>) => {

    return (
        <>
            <Backdrop isOpen={isOpen} onClose={onClose}/>
            <div id="modal-container" className={`${className ? className : ''} ${isOpen ? 'block' : 'hidden'} fixed  bg-black left-1/2 top-1/2 z-[99999] -translate-y-1/2 -translate-x-1/2 rounded-2xl p-6 animate-fade_in_show`}>
                {children}
            </div>
        </>
    )
}

export default Modal;