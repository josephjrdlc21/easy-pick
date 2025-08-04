import Sidebar from "../_components/SideBar";

import '../_assets/modules/bootstrap/css/bootstrap.min.css';
import '../_assets/modules/fontawesome/fontawesome/all.min.css';
import '../_assets/css/style.css';
import '../_assets/css/components.css';

export default function Main({ children }) {
    return(
       <>
        <Sidebar/>
        {children}
       </>
    );
}