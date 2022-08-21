interface BrProps {
    key : string;
    color : string;
}

const Br = ({ key, color } : BrProps) => {
    return (
        <div
            key={key} 
            style={{borderBottom : `1px solid ${color}`, height : '0px'}} 
        />
    );
}

export default Br;