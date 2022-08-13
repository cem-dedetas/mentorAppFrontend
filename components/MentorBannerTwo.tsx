import { Grid, GridItem, Box, useMediaQuery } from '@chakra-ui/react';
import Button from '../components/Button';
import Image, { ImageLoader } from 'next/image';
import { CSSProperties } from 'react';

interface LoaderProps {
    src : string,
    width : any,
    quality : any
}

interface MentorBannerProps {
    name : string,
    description : string,
    imagePath : string
}


const MentorBannerTwo = ({ name, description, imagePath } : MentorBannerProps) => {

    const [ isLargerThan1280 ] = useMediaQuery('(min-width: 1280px)')

    const getLeftArea = () => {
        return (
            <GridItem 
                pl='2' 
                bg='black' 
                area={'left'}
                fontWeight='400'
            >
                {getName()}
                {isLargerThan1280 &&
                    <Box
                        fontSize='2vw'
                        marginBottom='3vw'
                        color='white'
                    >
                        {description}
                    </Box>
                }
                {isLargerThan1280 && getButtons()}
            </GridItem>
        );
    }

    const getRightArea = () => {

        const imageStyles : CSSProperties = isLargerThan1280 
            ? {
                width: '100%', 
                height: '100%', 
                position: 'relative'
            } 
            : {
                width: '100%', 
                height: '100%', 
                position: 'relative'
            }

        return (
            <GridItem 
                pl='2' 
                bg='black' 
                area={'right'}
                fontSize='3vw'
                color='white'
                style={imageStyles}
                display='flex'
                flexDirection='column'
            >
                <Box>
                    <Image
                        src="/../public/img5.jfif"
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="contain"
                    />
                </Box>
                <Box>
                    {!isLargerThan1280 && getButtons()}
                </Box>
            </GridItem>
        );
    }

    const getName = () => {
        const baseStyles : string = 'text-white'
        const classNames : string = !isLargerThan1280 
            ? "text-[max(35px,3vw)] mb-[max(10px,2vw)]" 
            : "text-[3vw] mb-[2vw]";
        return (
            <Box
                className={`${baseStyles} ${classNames}`}
            >
                {name}
            </Box>
        );
    }

    const getButtons = () => {
        return (
            <Box
                display='flex'
                columnGap='10px'
                fontSize='1vw'
            >
                <Button
                    type='primary'
                    label='Choose Your Plan'
                    onClick={() => {
                        alert('Choose.')
                    }}
                />
                <Button
                    type='secondary'
                    label='More Info'
                    onClick={() => {
                        alert('Get Info.')
                    }}
                />
            </Box>
        );
    }


    return (
        <Grid
            templateAreas={isLargerThan1280 ? `"left right"` : `"left" "right"`}
            gridTemplateRows={isLargerThan1280 ? 'minmax(200px, 25vw)' : 'minmax(50px, 5vw) minmax(200px, 20vw)'}
            gridTemplateColumns={isLargerThan1280 ? '28vw 57vw' : '85vw'}
            color='blackAlpha.700'
            fontWeight='bold'
        >
            {getLeftArea()}
            {getRightArea()}
        </Grid>
    );
}

export default MentorBannerTwo;