import '../_assets/libs/bootstrap/css/bootstrap.min.css';
import '../_assets/libs/fontawesome/css/all.min.css';
import '../_assets/css/style.css';
import '../_assets/css/components.css';

import Sidebar from '../_components/Sidebar';
import Topbar from '../_components/Topbar';
import Footer from '../_components/Footer';

export default function MainLayout({ children }) {
    return(
        <div id="app">
            <div className="main-wrapper main-wrapper-1">
                <>
                    <Sidebar/>
                    <Topbar/>
                </>
                <div className="main-content" style={{ minHeight: '862px' }}>
                    <section className="section">
                        <div className="section-header">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="section-body">
                            {children}
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        </div>
    );
}