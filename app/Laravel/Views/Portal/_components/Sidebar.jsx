export default function Sidebar() {
    return(
        <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <a href="#">EASY PICK</a>
                </div>
                <div className="sidebar-brand sidebar-brand-sm">
                    <a href="#">EP</a>
                </div>
                <ul className="sidebar-menu">
                    <li className="menu-header">Quick Access</li>
                    <li className="dropdown">
                        <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></a>
                        <ul className="dropdown-menu">
                            <li><a className="nav-link" href="#">General Dashboard</a></li>
                            <li><a className="nav-link" href="#">Ecommerce Dashboard</a></li>
                        </ul>
                    </li>

                    <li className="menu-header">Main Menu</li>
                    <li className="active">
                        <a className="nav-link" href="#"><i className="far fa-square"></i> <span>Items</span></a>
                    </li>
                </ul>
            </aside>
        </div>
    );
}