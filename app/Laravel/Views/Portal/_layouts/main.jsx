import Sidebar from "../_components/SideBar";

export default function Main({ children }) {
    return(
       <>
        <Sidebar/>
        {children}
       </>
    );
}