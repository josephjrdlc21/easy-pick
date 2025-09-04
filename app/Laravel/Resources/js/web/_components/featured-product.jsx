import ProductImg from "@web/_assets/team-1-800x800.jpg";

export default function BlogCard() {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm text-center">
            <a href="#">
                <img
                    className="rounded-t-lg"
                    src={`${ProductImg}`}
                    alt="Blog Thumbnail"
                />
            </a>
            <div className="p-5">
                <h2 className="text-2xl font-normal leading-normal mt-0 mb-2">Nike Hoodie</h2>
                <a href="#">
                    <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900">
                        Code - ZDASD199
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                    ₱ 1,000.00
                </p>
            </div>
        </div>
    );
}