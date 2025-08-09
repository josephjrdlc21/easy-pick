import backgroundImage from '../_assets/register_bg_2.png';

import { useState } from "react";

export default function Auth({ children }) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            href="#"
                            >
                            Easy Pick
                        </a>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="text-white fas fa-bars"></i>
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
                                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    <i className="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                                    DOCS
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                                    <span className="lg:hidden inline-block ml-2">Share</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                                    <span className="lg:hidden inline-block ml-2">Tweet</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"                                
                                >
                                    <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg " />
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
                        className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    >
                        {children}
                    </div>
                    <footer
                        className="absolute w-full bottom-0 bg-blueGray-800 p5 mb-5"
                    >
                        <div className="container mx-auto px-4">
                        <hr className="mb-6 border-b-1 border-blueGray-600" />
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-4/12">
                                    <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                                        Copyright © {new Date().getFullYear()}{" "}
                                            <a
                                            href="#"
                                            className="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                                        >
                                            Easy Pick
                                        </a>
                                            {" | "}Distributed by
                                        <a
                                            href="#"
                                            className="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                                        >
                                        {" "}ThemeWagon
                                        </a>
                                    </div>
                                </div>
                                <div className="w-full md:w-8/12 px-4">
                                    <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                                            >
                                                Easy Pick
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href=""
                                                className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href=""
                                                className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href=""
                                                className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                                            >
                                                MIT License
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </main>
        </>
    );
}