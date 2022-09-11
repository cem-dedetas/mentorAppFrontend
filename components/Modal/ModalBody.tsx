interface ModalBodyProps {
    className? : string;
}

const ModalBody = ({ children, className } : React.PropsWithChildren<ModalBodyProps>) => {
    return (<div className={`${className ?  className : ''} py-4`}>{children}</div>)
}

export default ModalBody;