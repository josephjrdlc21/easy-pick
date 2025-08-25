export default function Footer() {
    return(
        <>
            <footer className="block py-4">
                <div className="container mx-auto px-4">
                    <hr className="mb-4 border-b-1 border-blueGray-200" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-6/12">
                            <div className="text-sm text-blueGray-500 w-fit font-semibold py-1 text-center md:text-left">
                                Copyright © 2025 <span> </span> 
                                <a
                                    href="#"
                                    className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                                >
                                     Easy Pick 
                                </a>
                                    {" | "}Distributed by{" "}
                                <a
                                    href="#"
                                    className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                                >
                                    JosephDev
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 px-4">
                            <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                <li>
                                    <a
                                        href="#"
                                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                    >
                                         Easy Pick
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a  href="#"
                                        className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                    >
                                        MIT Licensee
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>          
        </>
    );
}