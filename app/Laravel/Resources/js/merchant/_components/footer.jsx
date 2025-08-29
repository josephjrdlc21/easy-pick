export default function Footer() {
    return(
        <>
            <footer className="block py-4">
                <hr className="mb-4 border-b-1 border-blueGray-200" />
                <div className="text-sm text-blueGray-500 font-semibold py-1 text-center">
                    <p className="text-center">Copyright © {new Date().getFullYear()} Easy Pick | Distributed by JosephDev</p>
                </div>
            </footer>          
        </>
    );
}