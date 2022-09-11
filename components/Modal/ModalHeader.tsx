interface ModalHeaderProps {
    className? : any;
}

const ModalHeader = ({ children , className } : React.PropsWithChildren<ModalHeaderProps>) => {
    return (
        <div className={`${className ?  className : ''} text-2xl`}>{children}</div>
    )
}

export default ModalHeader;
