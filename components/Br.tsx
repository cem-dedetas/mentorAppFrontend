interface BrProps {
    color : string;
}

const Br = ({ color } : BrProps) => {
    return (
        <div style={{borderBottom : `1px solid ${color}`, height : '0px'}} />
    );
}

export default Br;