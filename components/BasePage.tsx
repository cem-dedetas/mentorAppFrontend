import useBreakpoint from "../hooks/useBreakpoint";
import Navbar from "./Navbar/Navbar";

const BasePage = ({children} : React.PropsWithChildren<any>) => {

    const currentBreakpoint = useBreakpoint();

    return (
        <div className="w-full bg-darkgrey flex justify-center items-center">
            <Navbar/>
            <div id="content" className={`flex text-textcolor sm:w-11/12 md:w-10/12 lg:w-10/12 xl:w-8/12 2xl:w-6/12 pt-20 flex-wrap`}>
                {children}
            </div>
        </div>
    );
}

export default BasePage;