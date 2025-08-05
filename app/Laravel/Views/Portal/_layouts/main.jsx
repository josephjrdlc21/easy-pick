import Topbar from "../_components/topbar";
import Sidebar from "../_components/sidebar";
//import Footer from "../_components/footer";

export default function Main({ children }) {
    return(
        <>
            <Sidebar />
            <div className="relative md:ml-64">
                <Topbar />
                <div className="md:pt-20 px-[24px] md:px-[56px] mx-auto w-full">
                    {children}
                </div>
            </div>
        </>
    );
}