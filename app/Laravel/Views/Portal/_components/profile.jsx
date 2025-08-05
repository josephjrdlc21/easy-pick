import DefaultImage from '../_assets/team-1-800x800.jpg';

import { useState } from 'react';

export default function Profile() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsOpen((prev) => !prev);
    }

    return(
        <>
            <div className="relative inline-block">
                <a 
                    href="#" 
                    className="text-blueGray-500 block"
                    onClick={toggleDropdown}
                >
                    <div className="flex items-center">
                        <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full overflow-hidden">
                            <img
                                alt="..."
                                className="w-full h-full object-cover rounded-full align-middle border-none shadow-lg"
                                src={DefaultImage}
                            />
                        </span>
                    </div>
                </a>

                <div className={`absolute right-0 mt-2 w-48 bg-white text-base z-50 py-2 list-none text-left rounded shadow-lg ${
                        isOpen ? "" : "hidden"
                    }`}>
                    <a
                        href="#pablo"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    >
                        Action
                    </a>
                    <a
                        href="#pablo"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    >
                        Another action
                    </a>
                    <a
                        href="#pablo"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    >
                        Something else here
                    </a>
                    <div className="h-0 my-2 border border-solid border-blueGray-100" />
                    <a
                        href="#pablo"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    >
                        Separated link
                    </a>
                </div>
            </div>
        </>
    );
}