import React from "react";

function ContactInfo() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6 bg-white">
            <div className="bg-[#ec4755] text-white text-center p-6 rounded-lg shadow-lg w-full md:w-1/3">
                <h2 className="text-xl font-bold">Kontakt (24*7*365)</h2>
                <p className="mt-2">
                    E-Mail: <a href="mailto:contact@bioalpine.de" className="underline">contact@bioalpine.de</a>
                </p>
                <p className="mt-1">
                    Telefonnummer: <a href="tel:+4915211208524" className="underline">+49 1521 1208524</a> (WhatsApp)
                </p>
            </div>

            <div className="bg-[#ec4755] text-white text-center p-6 rounded-lg shadow-lg w-full md:w-1/3">
                <h2 className="text-xl font-bold">Betriebszeit</h2>
                <p className="mt-2">
                    Montag bis Freitag: <span className="underline">9.00 bis 21.00 Uhr</span>
                </p>
                <p className="mt-1">
                    Samstag bis Sonntag: <span className="underline">9.00 bis 17.00 Uhr</span>
                </p>
            </div>
        </div>
    );
}

export default ContactInfo 