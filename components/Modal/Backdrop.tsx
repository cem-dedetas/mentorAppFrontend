interface BackdropProps {
    isOpen : boolean;
    onClose : any;
}

const Backdrop = ({ isOpen, onClose } : BackdropProps) => {

    return (
        <div 
            id="backdrop" 
            className={`${isOpen ? 'block opacity-0' : 'hidden opacity-50'} fixed left-0 top-0 w-screen h-full opacity-50 bg-[black] animate-fade_in_show_backdrop`}
            onClick={onClose}
        />
    )
}

export default Backdrop;
