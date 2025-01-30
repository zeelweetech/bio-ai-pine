import React, { useState } from "react";
import Header from "../../pages/Header";
import Footer from "../../pages/Footer";
import wheyProtein from "../../assets/images/wheyProtein.jpeg";
import furnishProtein from "../../assets/images/furnishProtein.jpg";
import landscapimage from "../../assets/images/landscapImage.jpg";
import manwoman from "../../assets/images/manwoman.jpg";
import coffee from "../../assets/images/coffee.jpg";
import honeyspoon from "../../assets/images/honey-spoon.jpg";
import shake from "../../assets/images/shake.jpg";
import lendingcow from "../../assets/images/lendingcow.jpg";
import doctor from "../../assets/images/doctor.jpg";

function Faq() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqItems = [
        {
            question: "Wofür steht BioAlpine®?",
            answer: "Das Wort BIO steht für organisch und ALPIN bezieht sich auf die Herkunft unseres Molkenproteins, das ausschließlich aus der Alpenregion Deutschlands und Österreichs stammt. Wir beziehen unser reines und organisches Molkenproteinkonzentrat aus der Alpenregion, die die sauberste Luft, das sauberste Wasser und den saubersten Boden bietet, und wo jede Kuh einen Namen hat. Tierschutz und Pflege der Kühe stehen bei uns an erster Stelle. Fast 90 % der Kühe haben regelmäßigen Zugang zur Weide und ernähren sich von mehrjährigen Gräsern, Seggen, Kräutern, Polsterpflanzen, Moosen und Flechten sowie anderen Heilpflanzen oder verbringen den ganzen Tag auf einem Laufstall, um sicherzustellen, dass das Protein, das Sie aus der Milch erhalten, die größtmögliche Kombination aller Komponenten aufweist."
        },
        {
            question: "Was ist das Bio-Molkeprotein von BioAlpine®?",
            answer: "Das Bio-Molkeprotein von BioAlpine ist ein sehr hochwertiges Molkeproteinkonzentrat mit 80 % Proteingehalt, das durch Cross-Flow-Mikrofiltration (CFM) aus Bio-Kuhmilch gewonnen wird.Es enthält vier Makrofraktionen, die als Beta-Lactoglobulin (β-LG), Alpha-Lactalbumin (α-LA), Rinderserumalbumin (BSA) und Immunglobuline (IGs) bekannt sind, sowie Mikrofraktionen, die als Lactoferrin, Proteose-Pepton 3 (PP3), Osteopontin, Glykomakropeptid (GMP), Lactoperoxidase und Lysozym bekannt sind. Jede Makro- und Mikrofraktion hat ihre eigene biologische Bedeutung für die menschliche Gesundheit Es ist eine wertvolle Quelle aller 9 essentiellen Aminosäuren (EAA) mit 23-25 ​​% verzweigtkettigen Aminosäuren (BCAAs) und 11 nicht-essentiellen Aminosäuren, was es zu einem vollständigen Protein mit einem hohen Protein Digestibility Corrected Amino Acid Score (PDCAAS) von 0,99-1,00 (höchster Wert aller Proteine) macht. Dies macht das Bio-Molkeprotein von BioAlpine zu einer ausgezeichneten Wahl für Sportler, Bodybuilder und Menschen aus allen Lebensbereichen."        },
        {
            question: "Wie erkennen Sie das Bio Whey Protein von BioAlpine®?",
            answer: "Unsere Bio-Molkeproteine ​​sind mit dem grünen EU-Bio-Label gekennzeichnet. Weitere Informationen hierzu finden Sie auf der offiziellen Website der Europäischen Kommission – Landwirtschaft und ländliche Entwicklung. Auf der Website finden Sie außerdem unter der Seite „Qualität“ das Bio-Zertifikat unseres Unternehmens."
        },
        {
            question: "Woher stammen die Zutaten und wo werden die Produkte hergestellt?",
            answer: "Alle in unseren Produkten verwendeten Zutaten stammen aus Österreich und Deutschland, wenn es um das Bio-Molkeproteinkonzentrat, den Bio-gefriergetrockneten Kaffee und die Bio-gefriergetrockneten Vollfruchtpulver geht. Die anderen Zutaten wie Bio-Kakaopulver und Bio-Aromen beziehen wir aus EU-Ländern wie Frankreich, Italien, Schweden und den Niederlanden. Die Produkte werden in Deutschland unter Einhaltung der höchsten Lebensmittelsicherheitsstandards in biozertifizierten Betrieben hergestellt."
        }
    ];

    const faqItems1 = [
        {
            question: "Was ist besser – „grasgefüttertes“ oder „auf der Weide gehaltenes“ oder „organisches“ Molkenprotein?",
            answer: "Der Begriff „Grasgefüttert“ oder „Grasaufzucht“ wird im Allgemeinen verwendet, um das System zu definieren, bei dem die Kühe 240 bis 300 Tage im Jahr auf der Weide verbringen. Die Nahrung besteht im Durchschnitt zu 95 % aus Gras. Sie dürfen kein Getreide wie Cerealien oder Getreidenebenprodukte fressen oder damit gefüttert werden. Während der Wintermonate oder Dürreperioden können die Kühe in Mastbetrieben gehalten werden, wo sie nur Gras und Grünfutter – kein Getreide – bekommen. Das Gras, das sie während dieser Zeit fressen, kann gentechnisch verändert oder gentechnikfrei oder biologisch sein. Es gibt keine besonderen Bedingungen dafür.„Weideaufzucht“ oder „Weidebasiert“ ähnelt dem Grasfütterungssystem, außer dass die Kühe bei ihrer Fütterung flexibler sind und Getreide und Getreidenebenprodukte enthalten können.Der Begriff „Bio“ bedeutet, dass die Kühe eine Mischung aus Biofutter erhalten, darunter Gras, Grünfutter, Getreide, Mais und frisches Gras durch Weidehaltung, genau wie beim grasgefütterten oder weidebasierten System. Das Futter muss gentechnikfrei und chemikalienfrei sein. Die Kühe werden nicht in überfüllten Räumen und Mastbetrieben gehalten und der Einsatz synthetischer Hormone und Antibiotika ist vollständig verboten.Da „weidebasiert“ oder „grasgefüttert“ kein geschützter Begriff ist, kann er oft irreführend sein. Entscheiden Sie sich daher im Zweifelsfall immer für „Bio“, da es strenge und spezifische Parameter ohne Schlupflöcher enthält."
        },
        {
            question: "Was bedeutet es, Bio zu sein?",
            answer: "Damit ein Produkt im Falle von Molkenprotein als BIO bezeichnet werden kann, müssen bestimmte Parameter festgelegt werden, die bereits auf Zellebene beginnen. Sie lauten wie folgt: GVO-freies Futter: Die Kühe werden mit 100 % biologischem Futter aufgezogen, das ohne den Einsatz von synthetischen Pestiziden, chemischen Düngemitteln und gentechnisch veränderten Organismen (GVO) angebaut wurde. Mindestens 60 % des Futters sollten aus Raufutter bestehen: Heu oder Silage im Winter und Grünfutter im Sommer. Während der Sommersaison haben die Kühe uneingeschränkten Zugang zu Weidevegetation, die hauptsächlich aus niedrigem Gras (50 %), hohem Gras (30 %) und Hülsenfrüchten (10–20 %) besteht.Freilandhaltung: Kühe werden oft mehr als 180 Tage lang auf der Weide gefüttert und haben während dieser Zeit Zugang zu Außenbereichen, in denen sie sich frei bewegen und natürliche Verhaltensweisen ausüben können, anstatt in einem Stall oder einem Mastbetrieb eingesperrt zu sein.Keine Wachstumshormone: Die Verwendung synthetischer Medikamente, einschließlich Hormonen wie rekombinantem Rinderwachstumshormon (rBGH) und rekombinantem Rindersomatotropin (rBST), wird eingeschränkt.Keine Antibiotika: Der übermäßige Einsatz von Antibiotika und Steroiden zur Behandlung kranker Tiere ist verboten.Tierschutz: Kühe auf Biofarmen verbringen mindestens 120 Tage im Jahr auf der Weide, wo sie auf nahrhaften Weidepflanzen grasen, sich bewegen und sozialisieren. Im Stall genießen Biokühe sauberes, trockenes Bett und angemessene Temperaturen und atmen gut belüftete und zirkulierte Luft. Dies reduziert den Stresspegel der Tiere und verbessert die Milchqualität.Ökologisch: Weidebasierte Systeme in der Biolandwirtschaft produzieren nachweislich weniger Treibhausgasemissionen, einschließlich Methan (CH4) und Kohlendioxid (CO2).Nachhaltig: In der Biomilchproduktion ist die Anzahl der Kühe pro Farm begrenzt, sodass im Vergleich zur konventionellen Landwirtschaft weniger Land, Wasser und Nahrungsmittelressourcen verbraucht werden und infolgedessen der CO2-Fußabdruck geringer ist. Dadurch wird Bio-Protein nachhaltiger."        },
        {
            question: "Was macht Bio-Molkenprotein im Vergleich zu herkömmlichen Proteinen teuer?",
            answer: "Unsere Bio-Molkeproteine ​​sind mit dem grünen EU-Bio-Label gekennzeichnet. Weitere Informationen hierzu finden Sie auf der offiziellen Website der Europäischen Kommission – Landwirtschaft und ländliche Entwicklung. Auf der Website finden Sie außerdem unter der Seite „Qualität“ das Bio-Zertifikat unseres Unternehmens."
        },
        {
            question: "Woher stammen die Zutaten und wo werden die Produkte hergestellt?",
            answer: "Alle in unseren Produkten verwendeten Zutaten stammen aus Österreich und Deutschland, wenn es um das Bio-Molkeproteinkonzentrat, den Bio-gefriergetrockneten Kaffee und die Bio-gefriergetrockneten Vollfruchtpulver geht. Die anderen Zutaten wie Bio-Kakaopulver und Bio-Aromen beziehen wir aus EU-Ländern wie Frankreich, Italien, Schweden und den Niederlanden. Die Produkte werden in Deutschland unter Einhaltung der höchsten Lebensmittelsicherheitsstandards in biozertifizierten Betrieben hergestellt."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen px-4 md:px-8 lg:px-16">
            {/* <Header /> */}
            <div className="container mx-auto py-8 space-y-12">
                {/* Top FAQ Section */}
                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Left side - Image */}
                    <div className="flex-shrink-0 w-full md:w-1/2 mb-6 md:mb-0">
                        <img
                            src={wheyProtein}
                            alt="Whey Protein"
                            className="w-[26rem] h-[26rem] shadow-lg object-cover"
                        />
                    </div>

                    {/* Right side - Content and Button */}
                    <div className="flex flex-col space-y-8 w-full md:w-1/2 pl-0 md:pl-12">
                        {/* Orange blob title */}
                        <div className="relative">
                            <div className="bg-[#FF6B00] transform rotate-[-2deg] rounded-[50px] px-6 py-3 w-fit mx-auto md:px-8 md:py-4">
                                <h1 className="text-3xl md:text-4xl font-bold text-white transform rotate-[2deg] text-center">
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
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* FAQ Accordions Section */}
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
                    <div className="border-t-2  border-[#EC4755] border-dashed w-full mb-8"></div>

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
                    {faqItems1.map((item, index) => (
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
                    <div className="border-t-2  border-[#EC4755] border-dashed w-full mb-8"></div>

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
                    <div className="border-t-2  border-[#EC4755] border-dashed w-full mb-8"></div>

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
                    <div className="border-t-2 border-[#EC4755] border-dashed w-full mb-8"></div>

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
                    <div className="border-t-2  border-[#EC4755] border-dashed w-full mb-8"></div>

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
                    <div className="border-t-2  border-[#EC4755] border-dashed w-full mb-8"></div>

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

            {/* <Footer /> */}
        </div>
    )
}

export default Faq;