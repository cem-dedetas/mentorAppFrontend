import Navbar from "./Navbar";

const BasePage = (props : React.PropsWithChildren<any>) => {
    return (
        <div className="w-1/1 bg-darkgrey flex justify-center alignItems: 'center'">
            <Navbar/>
            <div id="content" className="flex text-textcolor w-10/12 pt-[90px]">
                {props.children}
            </div>
        </div>
    );
}

export default BasePage;