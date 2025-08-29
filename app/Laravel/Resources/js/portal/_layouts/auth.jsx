import { useState } from "react";

export default function Auth({ children }) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const svgBackground = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,218.7C840,213,960,171,1080,144C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>`;
    const encodedSvg = encodeURIComponent(svgBackground);
    const backgroundImage = `url("data:image/svg+xml,${encodedSvg}")`;

    return (
        <>
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-blueGray-600 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            href="#"
                            >
                            Easy Pick
                        </a>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="text-blueGray-600 fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? " block rounded shadow-lg" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="flex items-center">
                                <a
                                    className="lg:text-blueGray-600 lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    <i className="lg:text-blueGray-600 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                                    DOCS
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <a
                                    className="lg:text-blueGray-600 lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    <i className="lg:text-blueGray-600 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                                    <span className="lg:hidden inline-block ml-2">Share</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="lg:text-blueGray-600 lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    <i className="lg:text-blueGray-600 text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                                    <span className="lg:hidden inline-block ml-2">Tweet</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"                                
                                >
                                    <i className="lg:text-blueGray-600 text-blueGray-400 fab fa-github text-lg leading-lg " />
                                    <span className="lg:hidden inline-block ml-2">Star</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full bg-indigo-500 bg-no-repeat bg-full"
                        style={{ backgroundImage }}
                    >
                        {children}
                    </div>
                    <footer
                        className="absolute w-full bottom-0 bg-indigo-500 p5 mb-5"
                    >
                        <div className="container mx-auto px-4">
                        <hr className="mb-6 border-b-1 border-blueGray-600" />
                            <div className="text-sm text-white font-semibold py-1 text-center">
                                <p className="text-center">Copyright © {new Date().getFullYear()} Easy Pick | Distributed by JosephDev</p>
                            </div>
                        </div>
                    </footer>
                </section>
            </main>
        </>
    );
}