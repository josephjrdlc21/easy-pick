export default function AuthLayout ({ children }) {
    return (
        <div id="app">
            <section className="section">
                <div className="container mt-5">
                    {children}
                </div>
            </section>
        </div>
    );
}