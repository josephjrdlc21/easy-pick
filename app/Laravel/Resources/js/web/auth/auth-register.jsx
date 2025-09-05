import Auth from "@web/_layouts/auth";
import Alert from "@web/_components/alert";

import { Head } from "@inertiajs/react";
import { useRoute } from "@ziggy";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { useState } from "react";

export default function AuthRegister({ data }) {
    const route = useRoute();

    const { page_title } = data;
    const { flash, errors } = usePage().props;
    const [values, setValues] = useState({
        name: '',
        email: '',
        contact_number: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        router.post(route('web.auth.register'), values);
    };

    return(
        <Auth>
            <Head title={page_title}/>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-8/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="mb-3">
                                    {flash.message && <Alert variant={flash.status}>{flash.message}</Alert>}
                                    <h6 className="text-center text-blueGray-500 text-sm font-bold">
                                        Customer
                                    </h6>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    <small>Registration Form</small>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Name"
                                            value={values.name}
                                            onChange={(e) => setValues({ ...values, name: e.target.value })}
                                        />
                                        {errors.name && <small className="text-red-500">{errors.name}</small>}
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Contact No.
                                        </label>
                                        <input
                                            type="text"
                                            name="contact_number"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Contact No."
                                            value={values.contact_number}
                                            onChange={(e) => setValues({ ...values, contact_number: e.target.value })}
                                        />
                                        {errors.contact_number && <small className="text-red-500">{errors.contact_number}</small>}
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                                        />
                                        {errors.email && <small className="text-red-500">{errors.email}</small>}
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                                        />
                                        {errors.password && <small className="text-red-500">{errors.password}</small>}
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Confirm Password"
                                            value={values.password_confirmation}
                                            onChange={(e) => setValues({ ...values, password_confirmation: e.target.value })}
                                        />
                                        {errors.password_confirmation && <small className="text-red-500">{errors.password_confirmation}</small>}
                                    </div>
                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-full text-center">
                                <Link
                                    href={route('web.auth.login')}
                                    className="text-blueGray-200"
                                >
                                    <small>Already has an account?</small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Auth>
    );
}