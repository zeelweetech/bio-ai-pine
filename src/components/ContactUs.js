import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import ContactForm from "../pages/ContactForm";
import ContactInfo from "../pages/ContactInfo ";
function ContactUs() {
    return (
        <div>
            <Header />
            <h1 className="flex justify-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center mt-10 mb-10">Kontaktieren Sie uns!</h1>
            <span className="text-[#ec4755] text-base sm:text-lg md:text-lg lg:text-lg font-bold mb-10">Wir freuen uns über Ihre Nachricht!</span>
            <ContactForm />
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4">
                <span className="md:col-span-2 text-sm sm:text-base md:text-sm lg:text-sm text-gray-500 text-center md:text-left mb-6 md:mb-10">
                    „Mit dem Absenden bestätigen Sie, dass Sie unsere{" "}
                    <a href="#" className="text-[#ec4755]">Servicebedingungen</a> und{" "}
                    <a href="#" className="text-[#ec4755]">Datenschutzrichtlinie</a> gelesen haben und ihnen zustimmen.“
                </span>
            </div>
            <ContactInfo />
            <Footer />
        </div>
    )
}
export default ContactUs;