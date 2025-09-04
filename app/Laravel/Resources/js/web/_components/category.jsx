import ProductImg from "@web/_assets/team-1-800x800.jpg";

export default function Category() {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
            <a href="#">
                <img
                className="p-8 rounded-t-lg"
                src={`${ProductImg}`}
                alt="product image"
                />
            </a>
            <div className="px-5 pb-5">
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">Technology</span>
                    <a
                        href="#"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Visit
                    </a>
                </div>
            </div>
        </div>
    );
}
