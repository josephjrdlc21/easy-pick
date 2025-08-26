import Profile from "@merchant/_components/profile";

import { usePage } from "@inertiajs/react";

export default function Topbar() {
    const { auth } = usePage().props;

    return(
        <>
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent lg:bg-indigo-500 md:flex-row md:flex-nowrap md:justify-start md:bg-transparent flex items-center p-4">
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <a
                        className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                        href="#pablo"
                    >
                        Dashboard
                    </a>
                    {/* Form */}
                    <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <span className="text-white font-semibold text-sm uppercase">{ auth.merchant?.name }</span>
                        </div>
                    </form>
                    {/* User */}
                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                        <Profile/>
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
        </>
    );
}