import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";


function Home() {
    return (
        <div>
            <Header />
            <p className="bg-red-500 text-6xl">Hello Home</p>
            <Footer />
        </div>
    )
}
export default Home;