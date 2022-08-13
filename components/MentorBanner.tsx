import { Grid, GridItem } from '@chakra-ui/react';
import Button from '../components/Button';
import Image, { ImageLoader } from 'next/image';

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


const MentorBanner = ({ name, description, imagePath } : MentorBannerProps) => {

    const getNameArea = () => {
        return (
            <GridItem 
                pl='2' 
                bg='orange.300' 
                area={'name'}
                fontSize='3vw'
                color='white'
                display='flex'
                alignItems='center'
                alignContent='center'
            >
                {name}
            </GridItem>
        );
    }

    const getDescriptionArea = () => {
        return (
            <GridItem 
                pl='2' 
                bg='pink.300' 
                area={'description'}
                fontSize='calc(2vw)'
                color='white'
                display='flex'
                alignItems='center'
                alignContent='center'
            >
                {description}
            </GridItem>
        );
    }

    const getButtonArea = () => {
        return (
            <GridItem pl='2' bg='black' area={'buttons'}>
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
            </GridItem>
        );
    }

    const getImage = () => {
        return (
            <GridItem pl='2' bg='blue.300' area={'image'}>
                <Image
                    src="/../public/img.png"
                    alt="Picture of the author"
                    width="100%"
                    height="100%"
                />
            </GridItem>
        );
    }

    return (
        <Grid
            templateAreas={`"name image"
                            "description image"
                            "buttons image"`}
            gridTemplateRows={'minmax(45px, 6vw) minmax(150px, 40vw) minmax(25px, 3vw)'}
            gridTemplateColumns={'28vw 57vw'}
            h='400px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            {getNameArea()}
            {getDescriptionArea()}
            {getButtonArea()}
            {getImage()}
        </Grid>
    );
}

export default MentorBanner;