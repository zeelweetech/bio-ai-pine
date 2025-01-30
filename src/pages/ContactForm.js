import React, { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
        captcha: "",
        subscribe: false,
    });

    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        phone: false,
        message: false,
        captcha: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateForm = () => {
        const errors = {
            name: !formData.name,
            email: !formData.email,
            phone: !formData.phone,
            message: !formData.message,
            captcha: formData.captcha !== "16", // Assuming 12 + 4 = 16
        };
        setFormErrors(errors);
        return !Object.values(errors).includes(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted:", formData);

            setFormData({
                name: "",
                email: "",
                subject: "",
                phone: "",
                message: "",
                captcha: "",
                subscribe: false,
            });
        }
    };

    // const isSubmitDisabled = !formData.name || !formData.email || !formData.phone || !formData.message || formData.captcha !== "16";

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-7xl p-6">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleChange}
                        className={`p-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-100'} rounded-sm w-full bg-[#eee]`}
                    />
                    {/* {formErrors.name && <span className="text-red-500 text-xs">Name is required</span>} */}

                    <input
                        type="email"
                        name="email"
                        placeholder="E-Mail*"
                        value={formData.email}
                        onChange={handleChange}
                        className={`p-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-100'} rounded-sm w-full bg-[#eee]`}
                    />
                    {/* {formErrors.email && <span className="text-red-500 text-xs">Email is required</span>} */}

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subjekt"
                        value={formData.subject}
                        onChange={handleChange}
                        className="p-3 border border-gray-100 rounded-sm w-full bg-[#eee]"
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Telefonnummer*"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`p-3 border ${formErrors.phone ? 'border-red-500' : 'border-gray-100'} rounded-sm w-full bg-[#eee]`}
                    />
                    {/* {formErrors.phone && <span className="text-red-500 text-xs">Phone is required</span>} */}

                    <textarea
                        name="message"
                        placeholder="Nachricht*"
                        value={formData.message}
                        onChange={handleChange}
                        className={`p-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-100'} rounded-sm w-full bg-[#eee] md:col-span-2 h-32`}
                    />
                    {/* {formErrors.message && <span className="text-red-500 text-xs">Message is required</span>} */}

                    <span className="md:col-span-2 flex items-center gap-2 text-gray-400 text-xs sm:text-base font-bold">
                        Aktivieren Sie das Kontrollkästchen unten, um sich in unsere exklusive Premium-Kundenliste einzutragen.
                    </span>
                    <div className="md:col-span-2 flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="subscribe"
                            checked={formData.subscribe}
                            onChange={handleChange}
                            className="w-5 h-5 bg-[#eee]"
                        />
                        <span className="text-gray-400 text-xs sm:text-base font-bold">
                            Ich möchte auf dem Laufenden bleiben! Abonnieren Sie den Newsletter für Neuigkeiten und spezielle Angebote.
                        </span>
                    </div>

                    <div className="md:col-span-2 flex justify-end items-center">
                        <span className="text-gray-700 mr-2">12 + 4 =</span>
                        <input
                            type="text"
                            name="captcha"
                            value={formData.captcha}
                            onChange={handleChange}
                            className={`p-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-100'} border-gray-300 rounded-lg w-16 mr-4`}
                        />
                        {/* {formErrors.captcha && <span className="text-red-500 text-xs">Captcha answer is incorrect</span>} */}
                        <button
                            type="submit"
                            className="bg-[#ec4755] text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-400"
                        // disabled={isSubmitDisabled}
                        >
                            Absenden
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm