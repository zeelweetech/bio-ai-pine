import React, { useState } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { MdOutlineArrowRightAlt, MdKeyboardArrowLeft } from "react-icons/md";
import Bio_Alpine from "../assets/img/Bio-Alpine.jpg"
import WebBlock1 from "../assets/img/WebBlock1.jpg"
import WebBlock2 from "../assets/img/WebBlock2.jpg"
import WebBlock3 from "../assets/img/WebBlock3.jpg"
import WebBlock4 from "../assets/img/WebBlock4.jpg"
import waves from "../assets/img/waves.png"
import waves1 from "../assets/img/waves1.png"

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
            answer: "BioAlpine® organic whey protein is a very high-quality whey protein concentrate with 80% protein content extracted from organic cow milk through cross-flow microfiltration (CFM). It has four macro fractions known as beta-lactoglobulin (β-LG), alpha-lactalbumin (α-LA), bovine serum albumin (BSA), and immunoglobulins (IGs), and micro-fractions known as lactoferrin, protease peptone 3 (PP3), osteopontin, glycomacropeptide (GMP), lactoperoxidase, and lysozyme. Each macro and micro fraction has its biological significance in human health. It is a valuable source of all the 9 essential (EAA) with 23-25% of branched-chain amino acids (BCAAs) and 11 non-essential amino acids making it a complete protein with a high Protein Digestibility Corrected Amino Acid Score (PDCAAS) of 0.99-1.00 (Highest among all the proteins). This makes BioAlpine's Organic whey protein an excellent choice for athletes, bodybuilders, and people in all walks of life."
        },
        {
            question: "How do you identify the organic whey protein?",
            answer: "Our Organic whey proteins are identified by the green EU Organic label. For further information on the same, please visit the official website of the European Commission – Agriculture and Rural Development. You can also find our company's organic certificate on the website under the 'Quality' page."
        },
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
            <div className="abc">
                {/* Hero Section */}
                <div className="bg-gray-50 py-8 md:py-16 lg:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
                                {/* Left Content */}
                                <div className="space-y-6 md:space-y-8 text-start">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                        Der Bioalpine-Unterschied
                                    </h1>
                                    <p className="text-base sm:text-lg text-gray-600 max-w-xl">
                                        Umgeben von hohen Bergen, kristallklaren Seen, Flüssen und frischer, sauberer Luft grasen Kühe auf saftigen Almenwiesen inmitten von Hunderten verschiedener Kräuter und Gräser.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <button className="bg-[#ec4755] hover:bg-[#f27c86] text-white px-6 sm:px-8 py-3 rounded-md transition-colors flex items-center gap-2 text-sm sm:text-base">
                                            Get Started
                                            <MdOutlineArrowRightAlt className="text-xl" />
                                        </button>
                                        <button className="text-[#b91c1c] font-semibold px-6 sm:px-8 py-3 rounded-full transition-colors text-sm sm:text-base">
                                            Email us
                                        </button>
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="relative mt-8 lg:mt-0">
                                    <img
                                        src={Bio_Alpine}
                                        alt="BioAlpine"
                                        className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[36rem] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={waves} alt="Not Found" className="w-full" />

                <div>
                    {/* Features Section */}
                    <div className="py-12 md:py-16 lg:py-24">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12 md:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                                    Steigen <span className="text-[#ec4755] relative">
                                        Sie auf Bio
                                        <span className="absolute bottom-1 left-0 w-full h-1 bg-[#ec4755] opacity-20"></span>
                                    </span> um.
                                </h2>
                            </div>

                            {/* Features Grid */}
                            <div className="max-w-6xl mx-auto">
                                {/* Feature 1 */}
                                <div className="mt-16 md:mt-28 mb-16 md:mb-32">
                                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 text-start">
                                        <div className="space-y-4 md:space-y-6 lg:pr-8">
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                                                A plug n play template
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                                Just edit the config.json file with details about your company and voila your beautiful state of the art landing page is ready to go live!
                                            </p>
                                        </div>
                                        <div className="relative mt-6 lg:mt-0">
                                            <img
                                                src={WebBlock1}
                                                alt="Feature 1"
                                                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div>
                                    <div className="grid lg:grid-cols-2 gap-16 text-start">
                                        <div className="relative order-2 lg:order-1">
                                            <img
                                                src={WebBlock2}
                                                alt="Feature 2"
                                                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                                            />
                                        </div>
                                        <div className="space-y-6 lg:pl-8 order-1 lg:order-2">
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                                Make it your own!
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Play around with the theme.ts file and configure the color palette to match the branding of your company! If you're feeling wild, maybe change some tailwind css as well!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={waves} alt="Not Found" />

                <div className="bg-gray-50 py-16 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <p className="text-[#ec4755] font-semibold mb-4">LATEST & GREATEST</p>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    All the best technologies out there!
                                </h2>
                                <p className="text-gray-600 max-w-3xl mx-auto">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                </p>
                            </div>

                            {/* Technology Cards Grid */}
                            <div className="grid md:grid-cols-2 gap-8 mt-16">
                                {/* React.js Card */}
                                <div className="flex gap-6 items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-lg border-2 border-[#ec4755] flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#ec4755]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                                                <path d="M12 22.5c-1.9 0-3.6-.3-4.9-.9-1.5-.7-2.6-1.7-3.2-2.9-.6-1.2-.7-2.5-.3-3.7.4-1.2 1.3-2.4 2.6-3.4-.3-.5-.5-.9-.7-1.4-.4-1.2-.5-2.4-.1-3.5.4-1.1 1.2-2 2.4-2.6 2.4-1.2 6.5-.9 10.3.8-.3.5-.6 1-.8 1.5-3.2-1.4-6.5-1.7-8.3-.8-.8.4-1.3.9-1.5 1.5-.2.7-.2 1.4.1 2.2.1.4.3.7.5 1.1 1.8-1.2 4-2.2 6.3-2.7 2.3-.5 4.5-.6 6.3-.1 1.5.4 2.6 1.2 3.2 2.3.6 1.2.7 2.5.3 3.7-.4 1.2-1.3 2.4-2.6 3.4.3.5.5.9.7 1.4.4 1.2.5 2.4.1 3.5-.4 1.1-1.2 2-2.4 2.6-1.2.6-2.7.9-4.4.9Zm-7-6.4c-.3.9-.2 1.7.2 2.5.5.8 1.3 1.5 2.4 2 2.4 1.1 6.5.8 10.3-.8.8-.4 1.3-.9 1.5-1.5.2-.7.2-1.4-.1-2.2-.1-.4-.3-.7-.5-1.1-1.8 1.2-4 2.2-6.3 2.7-2.3.5-4.5.6-6.3.1-.4-.1-.8-.3-1.2-.5Zm14-6.2c.3-.9.2-1.7-.2-2.5-.5-.8-1.3-1.5-2.4-2-1.8-.8-4.3-.9-6.8-.4-2 .5-3.9 1.3-5.4 2.2 1.1.9 2.5 1.8 4.1 2.4 2.3.9 4.6 1.2 6.5.9.4-.1.8-.3 1.2-.5.9.4 1.8.6 2.7.8.1 0 .2-.3.3-.9.9Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-start">
                                        <h3 className="text-xl font-bold mb-2">React.js</h3>
                                        <p className="text-gray-600">
                                            React is a free and open-source front-end JavaScript library for building user interfaces or UI components.
                                        </p>
                                    </div>
                                </div>

                                {/* Tailwind Card */}
                                <div className="flex gap-6 items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-lg border-2 border-[#ec4755] flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#ec4755]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.19 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6M7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.81 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.19 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-start">
                                        <h3 className="text-xl font-bold mb-2">Tailwind</h3>
                                        <p className="text-gray-600">
                                            Tailwind CSS is a highly customizable, low-level CSS framework for quickly creating beautiful designs without any annoying opinionated stylesheet nonsense.
                                        </p>
                                    </div>
                                </div>

                                {/* Next.js Card */}
                                <div className="flex gap-6 items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-lg border-2 border-[#ec4755] flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#ec4755]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-start">
                                        <h3 className="text-xl font-bold mb-2">Next.js</h3>
                                        <p className="text-gray-600">
                                            Next.js is a framework for server-rendered React applications using Next.js.
                                        </p>
                                    </div>
                                </div>

                                {/* TypeScript Card */}
                                <div className="flex gap-6 items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-lg border-2 border-[#ec4755] flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#ec4755]" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="text-start">
                                        <h3 className="text-xl font-bold mb-2">Typescript</h3>
                                        <p className="text-gray-600">
                                            TypeScript is a programming language developed and maintained by Microsoft.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={waves1} alt="Not Found" />

                <div className="xyz bg-white py-16 md:py-16">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            {/* Section Header */}
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                    <span className="text-[#ec4755] relative">
                                        Pricing
                                        <span className="absolute bottom-1 left-0 w-full h-1 bg-[#ec4755] opacity-20"></span>
                                    </span>
                                </h2>
                            </div>

                            {/* Pricing Cards */}
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Free Plan */}
                                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Free</h3>
                                    <div className="space-y-4 mb-8">
                                        <div className="text-gray-600">1 user</div>
                                        <div className="text-gray-600">Basic Support</div>
                                        <div className="text-gray-600">1 GB of storage</div>
                                        <div className="text-gray-600">Email support</div>
                                    </div>
                                    <div className="flex items-end mb-8">
                                        <span className="text-4xl font-bold text-gray-800">$0</span>
                                        <span className="text-gray-600 ml-2 mb-1">for one user</span>
                                    </div>
                                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
                                        Get Started
                                    </button>
                                </div>

                                {/* Pro Plan */}
                                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative">
                                    <div className="absolute -top-4 left-0 right-0 h-1 bg-[#ec4755]"></div>
                                    <h3 className="text-2xl font-bold text-[#ec4755] mb-6">Pro</h3>
                                    <div className="space-y-4 mb-8">
                                        <div className="text-[#ec4755]">5 users</div>
                                        <div className="text-[#ec4755]">Priority Support</div>
                                        <div className="text-[#ec4755]">10 GB of storage</div>
                                        <div className="text-[#ec4755]">Phone and Email support</div>
                                    </div>
                                    <div className="flex items-end mb-8">
                                        <span className="text-4xl font-bold text-[#ec4755]">$15</span>
                                        <span className="text-gray-600 ml-2 mb-1">per user</span>
                                    </div>
                                    <button className="w-full bg-[#ec4755] hover:bg-[#f27c86] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                                        Get Started
                                    </button>
                                </div>

                                {/* Enterprise Plan */}
                                <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Enterprise</h3>
                                    <div className="space-y-4 mb-8">
                                        <div className="text-gray-600">50 users</div>
                                        <div className="text-gray-600">24/7 Support</div>
                                        <div className="text-gray-600">100 GB of storage</div>
                                        <div className="text-gray-600">Phone and Email support</div>
                                    </div>
                                    <div className="flex items-end mb-8">
                                        <span className="text-4xl font-bold text-gray-800">$29</span>
                                        <span className="text-gray-600 ml-2 mb-1">per user</span>
                                    </div>
                                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={waves} alt="Not Found" />
            </div>
            <Footer />
        </div>
    )
}

export default Home;