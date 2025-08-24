import Topbar from "@merchant/_components/topbar";
import Sidebar from "@merchant/_components/sidebar";
import Footer from "@merchant/_components/footer";

export default function Main({ children }) {
    return(
        <>
            <Sidebar />
            <div className="relative md:ml-64">
                <Topbar />
                <div className="md:pt-20 px-[24px] md:px-[56px] mx-auto w-full">
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}