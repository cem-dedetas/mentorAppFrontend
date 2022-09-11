interface BrProps {
    key : string;
    color : string;
}

const Br = ({ key, color } : BrProps) => {
    return (
        <div
            key={key} 
            className={`border border-${color} h-0`}
        />
    );
}

export default Br;