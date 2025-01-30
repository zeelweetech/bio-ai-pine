import React from "react";

function ContactForm() {
    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-7xl p-6">

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input type="text" placeholder="Name*" className="p-3 border border-gray-100 rounded-sm w-full bg-[#eee]" />

                    <input type="email" placeholder="E-Mail*" className="p-3 border border-gray-100 rounded-sm w-full bg-[#eee]" />

                    <input type="text" placeholder="Subjekt" className="p-3 border border-gray-100 rounded-sm w-full bg-[#eee]" />

                    <input type="text" placeholder="Telefonnummer*" className="p-3 border border-gray-100 rounded-sm w-full bg-[#eee]" />

                    <textarea placeholder="Nachricht*" className="p-3 border border-gray-100 rounded-sm w-full bg-[#eee] md:col-span-2 h-32"></textarea>

                    <span className="md:col-span-2 flex items-center gap-2 text-gray-400 text-xs sm:text-base font-bold">Aktivieren Sie das Kontrollkästchen unten, um sich in unsere exklusive Premium-Kundenliste einzutragen.</span>
                    <div className="md:col-span-2 flex items-center gap-2">
                        <input type="checkbox" className="w-5 h-5 bg-[#eee]" />
                        <span className="text-gray-400 text-xs sm:text-base font-bold">
                            Ich möchte auf dem Laufenden bleiben! Abonnieren Sie den Newsletter für Neuigkeiten und spezielle Angebote.
                        </span>
                    </div>

                    <div className="md:col-span-2 flex justify-end items-center">
                        <span className="text-gray-700 mr-2">12 + 4 =</span>
                        <input type="text" className="p-2 border border-gray-300 rounded-lg w-16 mr-4" />
                        <button type="submit" className="bg-[#ec4755] text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-400">
                            Absenden
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm