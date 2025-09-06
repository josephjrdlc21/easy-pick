import HomeImg from "@web/_assets/bg-home-1.jpg";
import Typography from "@web/_components/typography";
import Button from "@web/_components/button";
import FeaturedProduct from "@web/_components/featured-product";
import Service from "@web/_components/service";
import Contact from "@web/_components/contact";
import Footer from "@web/_components/page-footer";
 
import { useState } from "react";
import { Link } from "@inertiajs/react";
import { useRoute } from "@ziggy";
import { Head } from "@inertiajs/react";

export default function PagesHome({ data }){
    const route = useRoute();
    
    const { page_title } = data;
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
                                    href="#"
                                >
                                    Apply as Rider
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href={route('merchant.auth.login')}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href = route('merchant.auth.login');
                                    }}
                                >
                                    Apply as Merchant
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href={route('web.index')}
                                >
                                    Shop
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href={route('web.home')}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Link
                                    className="lg:text-white lg:hover:text-blueGray-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    href={route('web.auth.login')}
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="pt-15">
                <div
                    className="relative w-full min-h-[550px] lg:h-[550px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${HomeImg})` }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-indigo-500 opacity-50"></div>

                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="m-3 text-center container">
                            <Typography tag="h4" variant="white">Best Collections for Your Castle</Typography>
                            <Typography tag="h1" variant="white">
                                Elevate Your Lifestyle in 2025
                            </Typography>
                            <Typography tag="p" variant="white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/>
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Typography>
                            <Button variant="secondary">
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-15 w-full">
                    <div className="mx-auto container">
                        <div className="text-center">
                            <Typography tag="h2" variant="primary">
                                Latest Products
                            </Typography>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 justify-items-center">
                            <FeaturedProduct/>
                            <FeaturedProduct/>
                            <FeaturedProduct/>
                            <FeaturedProduct/>
                            <FeaturedProduct/>
                            <FeaturedProduct/>    
                        </div>
                    </div>
                </div>

                <div className="mt-40 w-full">
                    <div className="mx-auto container">
                        <div className="text-center">
                            <Typography tag="h2" variant="primary">
                                Our Impact
                            </Typography>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                                <dd className="text-blueGray-500">Products</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                                <dd className="text-blueGray-500">Customers</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">100+</dt>
                                <dd className="text-blueGray-500">Orders</dd>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-40 w-full">
                    <div className="mx-auto container">
                        <div className="text-center">
                            <Typography tag="h2" variant="primary">
                                What Easy Pick Offer!
                            </Typography>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5 justify-items-center">
                            <Service/>
                            <Service/>
                            <Service/>
                            <Service/>
                        </div>
                    </div>
                </div>

                <div className="mt-40 w-full">
                    <div className="mx-auto container">
                        <div className="text-center">
                            <Typography tag="h2" variant="primary">
                                Contact Us
                            </Typography>
                        </div>
                        <Contact />
                    </div>
                </div>

                <div className="mt-40 w-full">
                    <Footer />
                </div>
            </main>
        </>
    );
}