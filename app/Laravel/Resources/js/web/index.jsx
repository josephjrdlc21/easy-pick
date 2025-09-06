import Profile from "@web/_components/profile";

import { useState } from "react";
import { Link } from "@inertiajs/react";
import { useRoute } from "@ziggy";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function Index({ data }) {
    const route = useRoute();
    
    const { page_title } = data;
    const { auth } = usePage().props;
    const [navbarOpen, setNavbarOpen] = useState(false);

    return(
        <>
            <Head title={page_title} />
            <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-500">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            href={route('web.home')}
                            >
                            Easy Pick
                        </Link>
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
                                    className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <Link
                                    className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href={route('web.index')}
                                >
                                    Shop
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <a
                                    className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    Cart
                                </a>
                            </li>
                            <li className="flex items-center">
                                <div className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                                    { auth.web?.name }
                                </div>
                            </li>
                            <li className="hidden md:flex md:items-center">
                                <Profile/>
                            </li>
                             <li className="md:hidden flex items-center">
                                <Link
                                    className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    Profile
                                </Link>
                            </li>
                            <li className="md:hidden flex items-center">
                                <Link
                                    className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href="#"
                                >
                                    Change Password
                                </Link>
                            </li>
                            <li className="md:hidden flex items-center">
                                <Link
                                    className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href={route('web.auth.logout')}
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}