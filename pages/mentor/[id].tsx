import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BasePage from "../../components/BasePage";
import ContentBox from "../../components/ContentBox";
import Navbar from "../../components/Navbar";
import ProfileBox from "../../components/ProfileBox";
import Mentor from "../../dto/mentor/Mentor";
import mentorService from "../../services/mentor-service";
import styles from '../../styles/pages/Mentor.module.css';


const MentorPage : NextPage = () => {
    const router = useRouter();

    const [mentor, setMentor] = useState<Mentor>();
    const [isDataReady, setIsDataReady] = useState<boolean>(false);

    const fetchMentor = async () => {
        const result: Mentor = await mentorService.getMentor(router.query.id as string);
        if (result) {
            setMentor(result);
            console.log(result);
        }
    }

    useEffect(() => {
        setIsDataReady(false);
        if (router.isReady) {
            fetchMentor();
            setIsDataReady(true);
        }
    }, [router.isReady])

    if(!isDataReady || !mentor){
        return <>Still fetching.</>
    }
        
    return (
        <BasePage>
            <div id="leftPart" className="w-[30%]">
                <ContentBox >
                    <ProfileBox/>
                </ContentBox>
            </div>
            <div id="rightPart" className="w-[70%]">
                <ContentBox label="Showcase of John">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est, inventore provident, tenetur voluptatum rerum esse perspiciatis accusantium odit optio officiis minus, itaque voluptates. Reiciendis quasi fuga non! Quasi quaerat dolorem quas explicabo blanditiis veniam atque, repudiandae dolor delectus, sequi recusandae? Aliquid earum esse eum architecto reprehenderit iure maxime veritatis vero error tempore possimus odio aliquam, nam unde perferendis dolorum culpa voluptas, repellat repudiandae hic ut neque nisi. Distinctio excepturi inventore, quo numquam quibusdam quasi. Eligendi tempora sapiente eaque officia deserunt aperiam molestias illum dignissimos ad aliquam praesentium unde saepe ullam labore quae voluptas, explicabo amet omnis cum sint ipsam. Eveniet nulla reprehenderit ex delectus temporibus exercitationem doloremque officiis nesciunt atque. Ea maiores esse voluptatibus libero! Mollitia, dicta. Quae sapiente possimus voluptate exercitationem hic, quis nulla eius aspernatur? Officiis eos neque est libero debitis ut nostrum enim repellat laborum soluta natus dolor cumque reiciendis, modi totam quo hic animi commodi ex deserunt! Magni dignissimos recusandae iusto incidunt facere quos harum dolor? Aspernatur recusandae porro exercitationem consequatur adipisci. Omnis temporibus, explicabo dicta consectetur voluptas fugit vitae blanditiis amet dolore deserunt tenetur molestias, ducimus perspiciatis quisquam! Doloremque itaque consequuntur, repellendus accusantium ea officia commodi voluptates est facere. Ab, libero voluptate asperiores, laudantium itaque a deleniti ratione dicta commodi tenetur delectus, iusto quia consequuntur rem natus reprehenderit. Fugiat dolorum adipisci veritatis consequuntur, itaque obcaecati nemo vitae odio iste aliquam nesciunt perferendis autem repellendus qui quae? Ad quia, saepe tempora fuga ipsa libero minima eligendi! Cumque explicabo vitae asperiores voluptatum ipsam distinctio magnam ullam!
                </ContentBox>
                <ContentBox label="Products of John">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est, inventore provident, tenetur voluptatum rerum esse perspiciatis accusantium odit optio officiis minus, itaque voluptates. Reiciendis quasi fuga non! Quasi quaerat dolorem quas explicabo blanditiis veniam atque, repudiandae dolor delectus, sequi recusandae? Aliquid earum esse eum architecto reprehenderit iure maxime veritatis vero error tempore possimus odio aliquam, nam unde perferendis dolorum culpa voluptas, repellat repudiandae hic ut neque nisi. Distinctio excepturi inventore, quo numquam quibusdam quasi. Eligendi tempora sapiente eaque officia deserunt aperiam molestias illum dignissimos ad aliquam praesentium unde saepe ullam labore quae voluptas, explicabo amet omnis cum sint ipsam. Eveniet nulla reprehenderit ex delectus temporibus exercitationem doloremque officiis nesciunt atque. Ea maiores esse voluptatibus libero! Mollitia, dicta. Quae sapiente possimus voluptate exercitationem hic, quis nulla eius aspernatur? Officiis eos neque est libero debitis ut nostrum enim repellat laborum soluta natus dolor cumque reiciendis, modi totam quo hic animi commodi ex deserunt! Magni dignissimos recusandae iusto incidunt facere quos harum dolor? Aspernatur recusandae porro exercitationem consequatur adipisci. Omnis temporibus, explicabo dicta consectetur voluptas fugit vitae blanditiis amet dolore deserunt tenetur molestias, ducimus perspiciatis quisquam! Doloremque itaque consequuntur, repellendus accusantium ea officia commodi voluptates est facere. Ab, libero voluptate asperiores, laudantium itaque a deleniti ratione dicta commodi tenetur delectus, iusto quia consequuntur rem natus reprehenderit. Fugiat dolorum adipisci veritatis consequuntur, itaque obcaecati nemo vitae odio iste aliquam nesciunt perferendis autem repellendus qui quae? Ad quia, saepe tempora fuga ipsa libero minima eligendi! Cumque explicabo vitae asperiores voluptatum ipsam distinctio magnam ullam!
                </ContentBox>
            </div>
        </BasePage>
    );
}

export default MentorPage;