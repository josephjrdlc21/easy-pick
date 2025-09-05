export default function PageFooter() {
    return (
        <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-indigo-500 text-white">
            <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
                <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
                    Discover the Best Deals for Your Lifestyle.
                <br />
                    Explore the Latest Trends Now.
                </h2>
                <a
                    className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blueGray-600 active:bg-blueGray-700 rounded-md shadow-md hover:bg-sky-700"
                    href="#"
                >
                    Get started
                </a>
                <div className="mt-14 xl:mt-20">
                    <nav className="flex flex-wrap justify-center text-lg font-medium">
                        <div className="px-5 py-2">
                            <a href="#">Contact</a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#">Pricing</a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#">Privacy</a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#">Terms</a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#">Twitter</a>
                        </div>
                    </nav>
                    <p className="mt-7 text-base">Copyright © {new Date().getFullYear()} Easy Pick | Distributed by JosephDev</p>
                </div>
            </div>
        </footer>
    );
}