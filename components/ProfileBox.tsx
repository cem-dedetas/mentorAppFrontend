import { Avatar } from '@chakra-ui/react';
import Image from 'next/image';

const ProfileBox = () => {
  return (
    <div id="container" className="bg-transparent">
        <Image 
            src="/img4.jpg" 
            alt="me" 
            width={'100%'}
            height={'56.25%'}
            layout="responsive"
            className='rounded-t-2xl aspect-video w-full relative'
        />
        <div id="profile-image" className="z-10 w-1/2 absolute top-[56.25%]">
            <Avatar size='full' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' className=''/>
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis dolor veniam deserunt voluptates, quas cum nobis dolores quidem. A fugit nulla voluptates impedit at animi officiis culpa nam doloribus eos, autem sequi dicta velit voluptatibus totam error deserunt nesciunt fugiat saepe architecto quibusdam eaque quod! Tempora asperiores animi quis? Laudantium ullam, sit quae nemo dolores impedit eius voluptatum maiores vitae dolorem culpa, saepe, deleniti enim unde nisi officia eligendi voluptates amet natus non facilis adipisci omnis iure temporibus. Facere, explicabo earum fuga molestiae perferendis modi! Tempore magnam modi minus corporis harum, pariatur est suscipit culpa, dolore voluptate itaque, obcaecati recusandae!
    </div>
  )
}

export default ProfileBox;
