import Auth from "@merchant/_layouts/auth";
import Alert from "@merchant/_components/alert";

import { Head } from "@inertiajs/react";
import { useRoute } from "@ziggy";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import formData from "@merchant/_utils/form-data";


export default function AuthRegister({ data }) {
    const route = useRoute();

    const { page_title } = data;
    const { errors, flash} = usePage().props;
    const [processing, setProcessing] = useState(false);
    const [values, setValues] = useState({
        merchant_name: '',
        business_name: '',
        business_line: '',
        business_scope: '',
        email: '',
        contact_number: '',
        tel_number: '',
        address: '',
        business_logo: null,
        valid_id: null,
        business_permit: null,
        supporting_documents: []
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);

        router.post(route('merchant.auth.register'), formData(values), {
            forceFormData: true,
            onFinish: () => setProcessing(false),
        });
    }

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
                                        Merchant
                                    </h6>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    <small>Merchant Application</small>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Merchant Name
                                            </label>
                                            <input
                                                type="text"
                                                name="merchant_name"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Enter your name"
                                                value={values.merchant_name}
                                                onChange={(e) => setValues({ ...values, merchant_name: e.target.value })}
                                            />
                                            {errors.merchant_name && <small className="text-red-500">{errors.merchant_name}</small>}
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Store/Business Name
                                            </label>
                                            <input
                                                type="text"
                                                name="business_name"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Enter your store/Business name"
                                                value={values.business_name}
                                                onChange={(e) => setValues({ ...values, business_name: e.target.value })}
                                            />
                                            {errors.business_name && <small className="text-red-500">{errors.business_name}</small>}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Business Line
                                            </label>
                                            <input
                                                type="text"
                                                name="business_line"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Enter business line"
                                                value={values.business_line}
                                                onChange={(e) => setValues({ ...values, business_line: e.target.value })}
                                            />
                                            {errors.business_line && <small className="text-red-500">{errors.business_line}</small>}
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Business Scope
                                            </label>
                                            <input
                                                type="text"
                                                name="business_scope"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Enter business scope"
                                                value={values.business_scope}
                                                onChange={(e) => setValues({ ...values, business_scope: e.target.value })}
                                            />
                                            {errors.business_scope && <small className="text-red-500">{errors.business_scope}</small>}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Enter Email"
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
                                                Contact Number
                                            </label>
                                            <input
                                                type="text"
                                                name="contact_number"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="+63XXXXXXXXXX"
                                                value={values.contact_number}
                                                onChange={(e) => setValues({ ...values, contact_number: e.target.value })}
                                            />
                                            {errors.contact_number && <small className="text-red-500">{errors.contact_number}</small>}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Telephone Number
                                            </label>
                                            <input
                                                type="text"
                                                name="tel_number"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Enter tel no."
                                                value={values.tel_number}
                                                onChange={(e) => setValues({ ...values, tel_number: e.target.value })}
                                            />
                                            {errors.tel_number && <small className="text-red-500">{errors.tel_number}</small>}
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Full Address
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Enter address"
                                                value={values.address}
                                                onChange={(e) => setValues({ ...values, address: e.target.value })}
                                            />
                                            {errors.address && <small className="text-red-500">{errors.address}</small>}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Business Logo
                                            </label>
                                            <input
                                                type="file"
                                                name="business_logo"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                onChange={(e) => setValues({ ...values, business_logo: e.target.files[0] })}
                                            />
                                            {errors.business_logo && <small className="text-red-500">{errors.business_logo}</small>}
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Owner or Authorized Rep. Valid ID
                                            </label>
                                            <input
                                                type="file"
                                                name="valid_id"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                onChange={(e) => setValues({ ...values, valid_id: e.target.files[0] })}
                                            />
                                            {errors.valid_id && <small className="text-red-500">{errors.valid_id}</small>}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4"> 
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                DTI / Business Permit
                                            </label>
                                            <input
                                                type="file"
                                                name="business_permit"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                onChange={(e) => setValues({ ...values, business_permit: e.target.files[0] })}
                                            />
                                            {errors.business_permit && <small className="text-red-500">{errors.business_permit}</small>}
                                        </div>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Other supporting documents
                                            </label>
                                            <input
                                                type="file"
                                                name="supporting_documents"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                onChange={(e) => setValues({ ...values, supporting_documents: Array.from(e.target.files) })}
                                                multiple   
                                            />
                                            {errors.supporting_documents && <small className="text-red-500">{errors.supporting_documents}</small>}
                                        </div>
                                    </div>
                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                            disabled={processing}
                                        >
                                            {processing ? 'Processing...' : 'Submit Application'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-full text-center">
                                <Link
                                    href={route('merchant.auth.login')}
                                    className="text-blueGray-200"
                                >
                                    <small>Already have an existing merchant?</small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Auth>
    );
}