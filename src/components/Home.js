import React, { useState } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { MdOutlineArrowRightAlt, MdKeyboardArrowLeft } from "react-icons/md";
import Bio_Alpine from "../assets/img/Bio-Alpine.jpg"
import WebBlock1 from "../assets/img/WebBlock1.jpg"
import WebBlock2 from "../assets/img/WebBlock2.jpg"
import WebBlock3 from "../assets/img/WebBlock3.jpg"
import WebBlock4 from "../assets/img/WebBlock4.jpg"

function Home() {
    const [openAccordion, setOpenAccordion] = useState(null);
    const [activeFeature, setActiveFeature] = useState(0);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const accordionData = [
        {
            question: "What does BioAlpine® stand for?",
            answer: (
                <>
                    The word <span className="font-bold">BIO</span> means organic and <span className="font-bold">ALPINE</span> refers to the origin of our whey protein which is exclusively in the alpine region of Germany and Austria. We source our pure and organic whey protein concentrate from the Alpine region which has the cleanest air, water, and soil available, where every cow has a name. Animal Welfare and caring for the cows are the primary concerns. Nearly 90% of cows enjoy regular access to the pasture and feed on perennial grasses, sedges, forbs, cushion plants, mosses, lichens, and other medicinal plants or spend an entire day in an exercise yard, ensuring that the protein you receive from the milk has the greatest possible combination of all the components.
                </>
            )
        },
        {
            question: "What is BioAlpine® organic whey protein?",
            answer: "BioAlpine® organic whey protein is a very high-quality whey protein concentrate with 80% protein content extracted from organic cow milk through cross-flow microfiltration (CFM). It has four macro fractions known as beta-lactoglobulin (β-LG), alpha-lactalbumin (α-LA), bovine serum albumin (BSA), and immunoglobulins (IGs), and micro-fractions known as lactoferrin, protease peptone 3 (PP3), osteopontin, glycomacropeptide (GMP), lactoperoxidase, and lysozyme. Each macro and micro fraction has its biological significance in human health. It is a valuable source of all the 9 essential (EAA) with 23-25% of branched-chain amino acids (BCAAs) and 11 non-essential amino acids making it a complete protein with a high Protein Digestibility Corrected Amino Acid Score (PDCAAS) of 0.99-1.00 (Highest among all the proteins). This makes BioAlpine’s Organic whey protein an excellent choice for athletes, bodybuilders, and people in all walks of life."
        }
    ];

    const featureContent = [
        {
            title: "Gesundheit zuerst",
            description: "Hören Sie auf, Ihren Körper zu vergiften, denn er ist der einzige Ort, an dem Sie leben können.",
            image: WebBlock1,
            overlayTitle: "Gesundheit zuerst",
            overlayText: "Keine giftigen Schwermetalle, GVO, exogenen Hormone, Antibiotika, synthetischen Süßstoffe, Aromen, Farbstoffe und Konservierungsmittel, die mit zahlreichen Krankheiten in Verbindung gebracht werden, darunter (aber nicht beschränkt auf) Magen-Darm- und Nierenfunktionsstörungen, Wachstumsstörungen, Diabetes, Krebs, Herz-Kreislauf-Erkrankungen, Erkrankungen des Nervensystems, Hautläsionen, Gefäßschäden, Funktionsstörungen des Immunsystems und Geburtsfehler."
        },
        {
            title: "Erleben Sie Perfektion",
            description: "Wann traf Totalität zuletzt auf Wirksamkeit und Reinheit?",
            image: WebBlock2,
            overlayTitle: "Erleben Sie Perfektion",
            overlayText: "Mittels Niedertemperatur-Mikrofiltration und Ultrafiltration wird hochwertiges organisches Molkenprotein in voll funktionsfähiger Form isoliert, das auf natürliche Weise ein vollständiges Profil an essentiellen Aminosäuren und wichtigen Fraktionen wie β-Lactoglobulin (β-Lg), α-Lactalbumin (α-La), Immunglobulinen (Igs), Lactoferrin (LF), Rinderserumalbumin (BSA) und Lactoperoxidase (LP) in perfekten Verhältnissen enthält, um Ihr Muskelwachstum, Ihren Fettabbau oder einfach eine gesündere Lebensweise zu unterstützen."
        },
        {
            title: "Köstliche Bio-Aromen",
            description: "Die köstlichste Geschmacksvielfalt aller Bio-Molkeproteine – Punkt!",
            image: WebBlock3,
            overlayTitle: "Köstliche Bio-Aromen",
            overlayText: "BioAlpine® lädt Sie zu einem ganz eigenen Geschmackserlebnis ein, indem es das jahrhundertealte Geschmackserbe des biologischen Kaffees, Kakaos, der Vanille und der Superfrüchte dieser Welt nachbildet."
        },
        {
            title: "Funktionale Dominanz",
            description: "Wenn Nahrung Medizin ist, ist dies die einzige Molke, die Sie jemals brauchen werden!",
            image: WebBlock4,
            overlayTitle: "Funktionale Dominanz",
            overlayText: "Durch die Zugabe von Bio-Kaffee, Kakao, Vanilleextrakten und gefriergetrockneten Fruchtpulvern als Geschmacksstoffe sind unsere Proteinpulver auf natürliche Weise mit den wirksamsten der Menschheit bekannten Phytochemikalien und Antioxidantien angereichert, sodass Sie Ihre Gesundheit voll und ganz kontrollieren können."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow">
                {/* Hero Section */}
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center flex flex-col justify-center items-center">
                            <p className="text-8xl md:text-5xl font-bold text-gray-800 mb-6">
                                Der Bioalpine-Unterschied
                            </p>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                Umgeben von hohen Bergen, kristallklaren Seen, Flüssen und frischer, sauberer Luft grasen Kühe auf saftigen Almenwiesen inmitten von Hunderten verschiedener Kräuter und Gräser, die anderswo nur selten zu finden sind. Dies ist ein hervorragendes Futter für gesunde Kühe und die Grundlage für die außergewöhnliche Qualität und den legendären Geschmack unserer Molkenproteine.
                            </p>
                            <div className="bg-[#ec4755] flex justify-center items-center text-white font-semibold rounded-full px-6 py-3 space-x-2 my-6">
                                <button>MEHR ERFAHREN</button>
                                <MdOutlineArrowRightAlt />
                            </div>
                            <div>
                                <img src={Bio_Alpine} alt="Not Found" className="mt-6" />
                            </div>
                            <p className="text-8xl md:text-5xl font-bold text-gray-800 my-14">
                                Steigen Sie auf Bio um.
                            </p>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                Suchen Sie verzweifelt nach einem vollständigen Molkenprotein, das absolut frei von chemischen Cocktails ist, die buchstäblich giftig für Ihren Körper sind, dennoch köstlich schmeckt und mit den wirksamsten Phytochemikalien und Antioxidantien angereichert ist, die der Menschheit bekannt sind? Suchen Sie nicht weiter.
                            </p>
                            <div className="bg-[#ec4755] flex justify-center items-center text-white font-semibold rounded-full px-6 py-3 space-x-2 my-6">
                                <button>MEHR ERFAHREN</button>
                                <MdOutlineArrowRightAlt />
                            </div>

                            <div className="flex gap-8 p-12 max-w-[1400px] mx-auto lg:flex-row flex-col">
                                <div className="lg:w-[400px] w-full flex flex-col gap-5">
                                    {featureContent.map((feature, index) => (
                                        <div
                                            key={index}
                                            className={`p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 cursor-pointer ${activeFeature === index
                                                    ? 'bg-gradient-to-r from-[#ec4755] to-[#f27c86] text-white'
                                                    : 'bg-white text-gray-800'
                                                }`}
                                            onClick={() => setActiveFeature(index)}
                                        >
                                            <h2 className={`text-2xl mb-3 font-medium ${activeFeature === index
                                                ? 'text-white'
                                                : 'text-gray-800'
                                                }`}>
                                                {feature?.title}
                                            </h2>
                                            <p className={`text-base leading-relaxed ${activeFeature === index
                                                ? 'text-white opacity-90'
                                                : 'text-gray-600'
                                                }`}>
                                                {feature?.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Features Right */}
                                <div className="flex-1 relative">
                                    <div className="relative h-full rounded-lg overflow-hidden">
                                        <img
                                            src={featureContent[activeFeature]?.image}
                                            alt={featureContent[activeFeature]?.title}
                                            className="w-full h-full object-cover md:h-auto h-[400px] sm:h-[300px]"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-10 sm:p-8 xs:p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white text-start">
                                            <h2 className="text-3xl sm:text-2xl mb-4 font-medium">
                                                {featureContent[activeFeature]?.overlayTitle}
                                            </h2>
                                            <p className="text-base leading-relaxed max-w-3xl sm:text-sm">
                                                {featureContent[activeFeature]?.overlayText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-6xl mx-auto mt-24">
                                <div className="space-y-4">
                                    {accordionData.map((item, index) => (
                                        <div key={index} className={`bg-[#f4f4f4] border border-gray-200 rounded-lg`}>
                                            <button
                                                className="w-full p-4 text-left flex justify-between items-center xyz"
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                <span className="text-lg font-medium">{item.question}</span>
                                                <span className={`transform transition-transform duration-200 w-8 h-8 flex items-center justify-center border-2 border-gray-200 rounded-full ${openAccordion === index ? 'rotate-180' : ''}`}>
                                                    <MdKeyboardArrowLeft className="rotate-90 text-xl text-gray-600" />
                                                </span>
                                            </button>
                                            {openAccordion === index && (
                                                <div className="p-4 border-t border-gray-200">
                                                    <p className="text-gray-600">{item.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;