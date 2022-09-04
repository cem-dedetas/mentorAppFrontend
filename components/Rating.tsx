import { HalfStarIcon, StarIcon } from "./Icon";

interface RatingProps {
    rating : number;
}

const Rating = ({ rating } : RatingProps) => {

    const getRating = (rating : number) : JSX.Element[] => {
        const ratingOverFive = rating / 20;
        const fullStarCount = Math.floor(ratingOverFive);
        const stars : JSX.Element[] = [];
        for(var i = 0; i < fullStarCount; i++){
            stars.push(<StarIcon  color = '#DBFF00' size = '20'/>);
        }
        if(ratingOverFive !== Math.floor(ratingOverFive)){
            stars.push(<HalfStarIcon color = '#DBFF00' size = '20'/>);
        }
        return stars;
    }

    return (
        <div style={{ display : 'flex' }}>
            {getRating(rating)}
        </div>
    );
}

export default Rating;