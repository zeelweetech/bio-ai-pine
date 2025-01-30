import React, { useState } from "react";
import Header from "../../pages/Header";
import Footer from "../../pages/Footer";
import wheyProtein from "../../assets/images/wheyProtein.jpeg"
import furnishProtein from "../../assets/images/furnishProtein.jpg"
import landscapimage from "../../assets/images/landscapImage.jpg"
import manwoman from "../../assets/images/manwoman.jpg"
import coffee from "../../assets/images/coffee.jpg"
import honeyspoon from "../../assets/images/honey-spoon.jpg"
import shake from "../../assets/images/shake.jpg"
import lendingcow from "../../assets/images/lendingcow.jpg"
import doctor from "../../assets/images/doctor.jpg"
function Faq() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqItems = [
        {
            question: "Was ist das Bio-Molkeprotein von BioAlpine®?",
            answer: "Das Bio-Molkeprotein von BioAlpine® ist ein hochwertiges Proteinkonzentrat, das ausschließlich aus der Alpenregion stammt. Es wird aus der Molke von Bio-Milch gewonnen und zeichnet sich durch seine natürliche Herkunft und nachhaltige Produktion aus."
        },
        {
            question: "Wie erkennen Sie das Bio Whey Protein von BioAlpine®?",
            answer: "Unser Bio Whey Protein erkennen Sie an dem zertifizierten Bio-Siegel und der transparenten Herkunftsangabe aus der Alpenregion. Jede Verpackung trägt unser charakteristisches BioAlpine®-Logo und detaillierte Informationen zur Herkunft und Produktion."
        },
        {
            question: "Wofür steht BioAlpine®?",
            answer: "BioAlpine® steht für hochwertige Bio-Proteinprodukte aus der Alpenregion. Wir verbinden biologische Landwirtschaft mit der reinen Natur der Alpen, um Ihnen Produkte von höchster Qualität anzubieten."
        },
        {
            question: "Woher kommt das Protein?",
            answer: "Unser Protein stammt ausschließlich von Kühen aus der Alpenregion Deutschlands und Österreichs. Die Tiere werden nach strengen Bio-Richtlinien gehalten und ernähren sich von den natürlichen Gräsern und Kräutern der Alpenweiden."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen">
            <Header />
            <div className="container mx-auto px-4 py-8 space-y-12">
                {/* Top FAQ Section */}
                <div className="flex items-start justify-between">
                    {/* Left side - Image */}
                    <div className="flex-shrink-0 w-1/2">
                        <img
                            src={wheyProtein}
                            alt="Whey Protein"
                            className="w-[35rem] h-96 shadow-lg object-cover"
                        />
                    </div>

                    {/* Right side - Content and Button */}
                    <div className="flex flex-col space-y-8 w-1/2 pl-12">
                        {/* Orange blob title */}
                        <div className="relative">
                            <div className="bg-[#FF6B00] transform rotate-[-2deg] rounded-[50px] px-8 py-4 w-fit">
                                <h1 className="text-4xl font-bold text-white transform rotate-[2deg]">
                                    Häufige Fragen!
                                </h1>
                            </div>
                        </div>

                        {/* Question text */}
                        <h2 className="text-3xl font-bold text-gray-600">
                            Haben Sie weitere Fragen?
                        </h2>

                        {/* Contact button */}
                        <button className="hover:bg-gray-600 text-white px-8 py-4 rounded-lg bg-[#EC4755] transition-colors w-fit text-lg">
                            Kontaktiere uns!
                        </button>
                    </div>
                </div>

                {/* BioAlpine section */}
                <div className="w-full p-8 rounded-lg">
                    <div className="flex justify-center mb-4">
                        <h1 className="text-4xl font-bold text-gray-800 tracking-wide drop-shadow-md">
                            Bio<span className="text-gray-700">Alpine</span>®
                        </h1>
                    </div>
                    <div className="p-4">
                        <img
                            src={furnishProtein}
                            alt="Framed Whey Protein"
                            className="w-full h-[450px] object-cover"
                        />
                    </div>
                </div>

                {/* FAQ Accordions bioAlpin Section */}
                <div className="w-full mx-auto mt-8 space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 shadow-sm w-full">
                            {/* FAQ Header with Toggle Button */}
                            <div
                                className="flex justify-between items-center px-8 py-4 cursor-pointer w-full"
                                onClick={() => toggleFaq(index)}
                            >
                                <h2 className="text-lg text-gray-700">
                                    {item.question}
                                </h2>
                                <span className={`text-2xl text-gray-400 transition-transform duration-300 ease-in-out ${openIndex === index ? '-rotate-45' : ''
                                    }`}>
                                    +
                                </span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out origin-top w-full ${openIndex === index
                                    ? 'max-h-[500px] opacity-100 scale-y-100'
                                    : 'max-h-0 opacity-0 scale-y-0'
                                    }`}
                            >
                                <div className="px-8 py-4 bg-white border-t">
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bio Mountain Section */}
                <div className="w-full mt-16">
                    {/* Dotted Line */}
                    <div className="border-t-2 border-orange-500 border-dashed w-full mb-8"></div>

                    {/* Bio Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 drop-shadow-md">
                            Bio
                        </h2>
                    </div>

                    {/* Mountain Image */}
                    <div className="w-full h-[500px]">
                        <img
                            src={landscapimage}
                            alt="Alpine Mountains"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Bio Mountain FAQ Accordions Section */}
                <div className="w-full mx-auto mt-8 space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 shadow-sm w-full">
                            {/* FAQ Header with Toggle Button */}
                            <div
                                className="flex justify-between items-center px-8 py-4 cursor-pointer w-full"
                                onClick={() => toggleFaq(index)}
                            >
                                <h2 className="text-lg text-gray-700">
                                    {item.question}
                                </h2>
                                <span className={`text-2xl text-gray-400 transition-transform duration-300 ease-in-out ${openIndex === index ? '-rotate-45' : ''
                                    }`}>
                                    +
                                </span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out origin-top w-full ${openIndex === index
                                    ? 'max-h-[500px] opacity-100 scale-y-100'
                                    : 'max-h-0 opacity-0 scale-y-0'
                                    }`}
                            >
                                <div className="px-8 py-4 bg-white border-t">
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vorteile ection */}
                <div className="w-full mt-16">
                    {/* Dotted Line */}
                    <div className="border-t-2 border-orange-500 border-dashed w-full mb-8"></div>

                    {/* Bio Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 drop-shadow-md">
                            Vorteile
                        </h2>
                    </div>

                    {/* Mountain Image */}
                    <div className="w-full h-[500px]">
                        <img
                            src={manwoman}
                            alt="Alpine Mountains"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Vorteile FAQ Accordions Section */}
                <div className="w-full mx-auto mt-8 space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 shadow-sm w-full">
                            {/* FAQ Header with Toggle Button */}
                            <div
                                className="flex justify-between items-center px-8 py-4 cursor-pointer w-full"
                                onClick={() => toggleFaq(index)}
                            >
                                <h2 className="text-lg text-gray-700">
                                    {item.question}
                                </h2>
                                <span className={`text-2xl text-gray-400 transition-transform duration-300 ease-in-out ${openIndex === index ? '-rotate-45' : ''
                                    }`}>
                                    +
                                </span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out origin-top w-full ${openIndex === index
                                    ? 'max-h-[500px] opacity-100 scale-y-100'
                                    : 'max-h-0 opacity-0 scale-y-0'
                                    }`}
                            >
                                <div className="px-8 py-4 bg-white border-t">
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Geschmack section */}
                <div className="w-full mt-16">
                    {/* Dotted Line */}
                    <div className="border-t-2 border-orange-500 border-dashed w-full mb-8"></div>

                    {/* Bio Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 drop-shadow-md">
                            Geschmack
                        </h2>
                    </div>

                    {/* Mountain Image */}
                    <div className="w-full h-[500px]">
                        <img
                            src={coffee}
                            alt="Alpine Mountains"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/*  Geschmack FAQ Accordions Section */}
                <div className="w-full mx-auto mt-8 space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 shadow-sm w-full">
                            {/* FAQ Header with Toggle Button */}
                            <div
                                className="flex justify-between items-center px-8 py-4 cursor-pointer w-full"
                                onClick={() => toggleFaq(index)}
                            >
                                <h2 className="text-lg text-gray-700">
                                    {item.question}
                                </h2>
                                <span className={`text-2xl text-gray-400 transition-transform duration-300 ease-in-out ${openIndex === index ? '-rotate-45' : ''
                                    }`}>
                                    +
                                </span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out origin-top w-full ${openIndex === index
                                    ? 'max-h-[500px] opacity-100 scale-y-100'
                                    : 'max-h-0 opacity-0 scale-y-0'
                                    }`}
                            >
                                <div className="px-8 py-4 bg-white border-t">
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Süßungsmittel section */}
                <div className="w-full mt-16">
                    {/* Dotted Line */}
                    <div className="border-t-2 border-orange-500 border-dashed w-full mb-8"></div>

                    {/* Bio Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 drop-shadow-md">
                            Süßungsmittel
                        </h2>
                    </div>

                    {/* Mountain Image */}
                    <div className="w-full h-[500px]">
                        <img
                            src={honeyspoon}
                            alt="Alpine Mountains"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/*Süßungsmittel FAQ Accordions Section */}
                <div className="w-full mx-auto mt-8 space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 shadow-sm w-full">
                            {/* FAQ Header with Toggle Button */}
                            <div
                                className="flex justify-between items-center px-8 py-4 cursor-pointer w-full"
                                onClick={() => toggleFaq(index)}
                            >
                                <h2 className="text-lg text-gray-700">
                                    {item.question}
                                </h2>
                                <span className={`text-2xl text-gray-400 transition-transform duration-300 ease-in-out ${openIndex === index ? '-rotate-45' : ''
                                    }`}>
                                    +
                                </span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out origin-top w-full ${openIndex === index
                                    ? 'max-h-[500px] opacity-100 scale-y-100'
                                    : 'max-h-0 opacity-0 scale-y-0'
                                    }`}
                            >
                                <div className="px-8 py-4 bg-white border-t">
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Produktverwendung section */}
                <div className="w-full mt-16">
                    {/* Dotted Line */}
                    <div className="border-t-2 border-orange-500 border-dashed w-full mb-8"></div>

                    {/* Bio Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 drop-shadow-md">
                            Produktverwendung
                        </h2>
                    </div>

                    {/* Mountain Image */}
                    <div className="w-full h-[500px]">
                        <img
                            src={shake}
                            alt="Alpine Mountains"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Produktverwendung FAQ Accordions Section */}
                <div className="w-full mx-auto mt-8 space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 shadow-sm w-full">
                            {/* FAQ Header with Toggle Button */}
                            <div
                                className="flex justify-between items-center px-8 py-4 cursor-pointer w-full"
                                onClick={() => toggleFaq(index)}
                            >
                                <h2 className="text-lg text-gray-700">
                                    {item.question}
                                </h2>
                                <span className={`text-2xl text-gray-400 transition-transform duration-300 ease-in-out ${openIndex === index ? '-rotate-45' : ''
                                    }`}>
                                    +
                                </span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out origin-top w-full ${openIndex === index
                                    ? 'max-h-[500px] opacity-100 scale-y-100'
                                    : 'max-h-0 opacity-0 scale-y-0'
                                    }`}
                            >
                                <div className="px-8 py-4 bg-white border-t">
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Allergene section */}
                <div className="w-full mt-16">
                    {/* Dotted Line */}
                    <div className="border-t-2 border-orange-500 border-dashed w-full mb-8"></div>

                    {/* Bio Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 drop-shadow-md">
                            Allergene
                        </h2>
                    </div>

                    {/* Mountain Image */}
                    <div className="w-full h-[500px]">
                        <img
                            src={landscapimage}
                            alt="Alpine Mountains"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Allergene FAQ Accordions Section */}
                <div className="w-full mx-auto mt-8 space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 shadow-sm w-full">
                            {/* FAQ Header with Toggle Button */}
                            <div
                                className="flex justify-between items-center px-8 py-4 cursor-pointer w-full"
                                onClick={() => toggleFaq(index)}
                            >
                                <h2 className="text-lg text-gray-700">
                                    {item.question}
                                </h2>
                                <span className={`text-2xl text-gray-400 transition-transform duration-300 ease-in-out ${openIndex === index ? '-rotate-45' : ''
                                    }`}>
                                    +
                                </span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out origin-top w-full ${openIndex === index
                                    ? 'max-h-[500px] opacity-100 scale-y-100'
                                    : 'max-h-0 opacity-0 scale-y-0'
                                    }`}
                            >
                                <div className="px-8 py-4 bg-white border-t">
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Produkt Sicherheit section */}
                <div className="w-full mt-16">
                    {/* Dotted Line */}
                    <div className="border-t-2 border-orange-500 border-dashed w-full mb-8"></div>

                    {/* Bio Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 drop-shadow-md">
                            Produkt Sicherheit
                        </h2>
                    </div>

                    {/* Mountain Image */}
                    <div className="w-full h-[500px]">
                        <img
                            src={doctor}
                            alt="Alpine Mountains"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Produkt Sicherheit FAQ Accordions Section */}
                <div className="w-full mx-auto mt-8 space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 shadow-sm w-full">
                            {/* FAQ Header with Toggle Button */}
                            <div
                                className="flex justify-between items-center px-8 py-4 cursor-pointer w-full"
                                onClick={() => toggleFaq(index)}
                            >
                                <h2 className="text-lg text-gray-700">
                                    {item.question}
                                </h2>
                                <span className={`text-2xl text-gray-400 transition-transform duration-300 ease-in-out ${openIndex === index ? '-rotate-45' : ''
                                    }`}>
                                    +
                                </span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out origin-top w-full ${openIndex === index
                                    ? 'max-h-[500px] opacity-100 scale-y-100'
                                    : 'max-h-0 opacity-0 scale-y-0'
                                    }`}
                            >
                                <div className="px-8 py-4 bg-white border-t">
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Zusatzstoffe section */}
                <div className="w-full mt-16">
                    {/* Dotted Line */}
                    <div className="border-t-2  border-[#EC4755] border-dashed w-full mb-8"></div>

                    {/* Bio Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 drop-shadow-md">
                            Zusatzstoffe
                        </h2>
                    </div>

                    {/* Mountain Image */}
                    <div className="w-full h-[500px]">
                        <img
                            src={landscapimage}
                            alt="Alpine Mountains"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Zusatzstoffe faq section */}
                <div className="w-full mx-auto mt-8 space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 shadow-sm w-full">
                            {/* FAQ Header with Toggle Button */}
                            <div
                                className="flex justify-between items-center px-8 py-4 cursor-pointer w-full"
                                onClick={() => toggleFaq(index)}
                            >
                                <h2 className="text-lg text-gray-700">
                                    {item.question}
                                </h2>
                                <span className={`text-2xl text-gray-400 transition-transform duration-300 ease-in-out ${openIndex === index ? '-rotate-45' : ''
                                    }`}>
                                    +
                                </span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out origin-top w-full ${openIndex === index
                                    ? 'max-h-[500px] opacity-100 scale-y-100'
                                    : 'max-h-0 opacity-0 scale-y-0'
                                    }`}
                            >
                                <div className="px-8 py-4 bg-white border-t">
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BioAlpine vs. Konkurrenz section */}
                <div className="w-full mt-16">
                    {/* Dotted Line */}
                    <div className="border-t-2  border-[#EC4755] border-dashed w-full mb-8"></div>

                    {/* Bio Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-gray-800 drop-shadow-md">
                            BioAlpine vs. Konkurrenz
                        </h2>
                    </div>

                    {/* Mountain Image */}
                    <div className="w-full h-[500px]">
                        <img
                            src={lendingcow}
                            alt="Alpine Mountains"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* BioAlpine vs. Konkurrenz faq section */}
                <div className="w-full mx-auto mt-8 space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="bg-gray-50 shadow-sm w-full">
                            {/* FAQ Header with Toggle Button */}
                            <div
                                className="flex justify-between items-center px-8 py-4 cursor-pointer w-full"
                                onClick={() => toggleFaq(index)}
                            >
                                <h2 className="text-lg text-gray-700">
                                    {item.question}
                                </h2>
                                <span className={`text-2xl text-gray-400 transition-transform duration-300 ease-in-out ${openIndex === index ? '-rotate-45' : ''
                                    }`}>
                                    +
                                </span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                                className={`transition-all duration-300 ease-in-out origin-top w-full ${openIndex === index
                                    ? 'max-h-[500px] opacity-100 scale-y-100'
                                    : 'max-h-0 opacity-0 scale-y-0'
                                    }`}
                            >
                                <div className="px-8 py-4 bg-white border-t">
                                    <p className="text-gray-600">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Dotted Line */}
                <div className="border-t-2 border-[#EC4755] border-dashed w-full mb-8"></div>

                <div>
                    <h2 className="text-3xl font-bold text-[#EC4755]">
                        Haben Sie weitere Fragen?
                    </h2>
                    <p className="text-[#4B5563] font-bold">Gerne helfen wir Ihnen weiter.</p>

                    <button className="hover:bg-gray-600 text-white px-8 py-4 rounded-lg bg-[#EC4755] transition-colors w-fit text-lg">
                            Fragen Sie uns !
                        </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Faq;