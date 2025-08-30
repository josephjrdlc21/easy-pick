import { useState } from "react";
import { Link } from "@inertiajs/react";
import { useRoute } from "@ziggy";

import Profile from "./profile";

export default function Sidebar() {
    const route = useRoute();

    const [collapseShow, setCollapseShow] = useState('hidden');

    return(
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link
                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        href={route('portal.index')}
                    >
                        Easy Pick
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <Profile />
                        </li>
                    </ul>
                    <div
                        className={
                        "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                        collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        href={route('portal.index')}
                                    >
                                        Easy Pick
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Heading */}
                        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Handy Tools
                        </h6>
                        {/* Navigation */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href={route('portal.index')}
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Dashboard
                                </Link>
                            </li>
                        </ul>

                        <hr className="my-4 md:min-w-full" />
                        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Navigation
                        </h6>
                        {/* Navigation */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href={route('portal.users.index')}
                                >
                                    <i
                                        className={
                                            "fas fa-users mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Users Account
                                </Link>
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href={route('portal.merchants.index')}
                                >
                                    <i
                                        className={
                                            "fas fa-store mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Merchants
                                </Link>
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href="#"
                                >
                                    <i
                                        className={
                                            "fas fa-user-friends mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Customers
                                </Link>
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href="#"
                                >
                                    <i
                                        className={
                                            "fas fa-box mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Order History
                                </Link>
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href={route('portal.products.index')}
                                >
                                    <i
                                        className={
                                            "fas fa-cubes mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Products
                                </Link>
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href={route('portal.categories.index')}
                                >
                                    <i
                                        className={
                                            "fas fa-sitemap mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Categories
                                </Link>
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href={route('portal.coupons.index')}
                                >
                                    <i
                                        className={
                                            "fas fa-tags mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Coupons
                                </Link>
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href="#"
                                >
                                    <i
                                        className={
                                            "fas fa-credit-card mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Payment Reports
                                </Link>
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href="#"
                                >
                                    <i
                                        className={
                                            "fas fa-warehouse mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Stocks
                                </Link>
                            </li>
                        </ul>

                        <hr className="my-4 md:min-w-full" />
                        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Content Control
                        </h6>
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href="#"
                                >
                                    <i
                                        className={
                                            "fas fa-images mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Pages
                                </Link>
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href="#"
                                >
                                    <i
                                        className={
                                            "fas fa-users-cog mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Roles
                                </Link>
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block text-blueGray-700 hover:text-blueGray-500"
                                    }
                                    href="#"
                                >
                                    <i
                                        className={
                                            "fas fa-user-shield mr-2 text-sm text-blueGray-300"
                                        }
                                    ></i>{" "}
                                        Permissions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}