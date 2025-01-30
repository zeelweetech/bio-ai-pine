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

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const accordionData = [
        {
            question: "What does BioAlpine® stand for?",
            answer: (
                <div className="text-start">
                    The word <span className="font-bold">BIO</span> means organic and <span className="font-bold">ALPINE</span> refers to the origin of our whey protein which is exclusively in the alpine region of Germany and Austria. We source our pure and organic whey protein concentrate from the Alpine region which has the cleanest air, water, and soil available, where every cow has a name. Animal Welfare and caring for the cows are the primary concerns. Nearly 90% of cows enjoy regular access to the pasture and feed on perennial grasses, sedges, forbs, cushion plants, mosses, lichens, and other medicinal plants or spend an entire day in an exercise yard, ensuring that the protein you receive from the milk has the greatest possible combination of all the components.
                </div>
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
        {
            question: "What does it mean to be Organic?",
            answer: (
                <div className="text-start">
                    <p>In the case of whey protein, for the product to be called ORGANIC, certain parameters are established which start right from the cellular level. They are as follows:</p>
                    <p className="py-3"><span className="font-semibold">Non-GMO feed:</span>The cows are raised on 100% organic feeds that have been grown without the use of synthetic pesticides, chemical fertilizers, and genetically modified organisms (GMOs). At least 60% of the feed should consist of roughage: Hay or silage in winter and green forage in summer. During the summer season, cows are provided unrestricted access to pasture vegetation, predominantly comprising low grasses (50%), tall grasses (30%), and legumes (10–20%).</p>
                    <p ><span className="font-semibold">Free-Range:</span>Cows are often pasture-fed for more than 180 days during which they have access to outdoor spaces where they can roam freely and engage in natural behaviors, rather than being confined to a barn or feedlot.</p>
                    <p className="py-3"><span className="font-semibold">No Growth Hormones:</span>It restricts the use of synthetic medications including hormones like recombinant bovine growth hormone (rBGH) and recombinant bovine somatotropin (rBST). No Antibiotics: Excessive use of antibiotics and steroids to treat the sick animal is prohibited.</p>
                    <p ><span className="font-semibold">Animal welfare:</span>Cows on organic farms spend at least 120 days per year on pasture, where they graze on nutritious pasture plants, exercise, and socialize. When inside, organic cows enjoy clean, dry bedding and appropriate temperatures and breathe well-ventilated and circulated air. This reduces the stress levels in animals and improves the milk quality.</p>
                    <p className="py-3"><span className="font-semibold">Ecological:</span>Pasture-based systems in organic farming have been shown to produce lower greenhouse gas emissions, including methane (CH4) and carbon dioxide (CO2).</p>
                    <p ><span className="font-semibold">Sustainable:</span>In Organic milk farming, the number of cows per farm is limited so less amount of land, water, and food resources are used as compared to conventional farming and as a result lower carbon footprint. This makes Organic protein more sustainable.</p>
                </div>
            )
        },
        {
            question: "What makes Organic whey protein expensive as compared to the conventional proteins?",
            answer: (
                <div>
                    The expensive nature of Organic whey proteins is due to the <span className="font-semibold">high production and operational costs</span> incurred for feed, labor, animal welfare, and maintenance because it must adhere to strict organic standards. Because organic milk farming prohibits the use of artificial growth hormones and antibiotics, the <span className="font-semibold">milk yield is low</span> as compared to conventional milk farming, leading to high costs. While emphasizing environmentally <span className="font-semibold">sustainable practices</span> for protecting biodiversity in organic milk farming, more resources in terms of time and money are required. The companies that produce organic milk spend a lot of money on <span className="font-semibold">organic certification</span> fees, inspections, and compliance with regulations. Since the supply is limited and <span className="font-semibold">consumer demand</span> is increasing due to the increased awareness about organic products and health, this hypes up the organic whey protein prices.
                </div>
            )
        },
        {
            question: "What makes Organic different in terms of quality?",
            answer: (
                <div className="text-start">
                    <p className="py-3"><span className="font-semibold">Low SCC:</span>Somatic cell count (SCC) is the most significant parameter of cow health. SCC surpassing 4,00,000 cells per ml signifies gland inflammation and thus the low quality of milk and a high chance of infections. Organic milk typically has an <span className="font-semibold">SCC of 1,00,000</span> cells per ml or even less.</p>
                    <p ><span className="font-semibold">Better nutritional profile:</span>Organic milk contains high levels of retinol and beta-carotene acting as a precursor for <span className="font-semibold">vitamin A.</span> It also has a higher concentration of <span className="font-semibold">vitamin E</span> essential to prevent oxidative damage in cells and conjugated linoleic acid (<span className="font-semibold">CLA</span>), a heart-healthy fatty acid for cardiovascular health. Additionally, spending more time at pastures induces the synthesis of <span className="font-semibold">vitamin D3</span> from 7-dehydrosterol by UV rays which is essential for calcium and phosphorus metabolism for teeth and bone mineralization.</p>
                    <p className="py-3"><span className="font-semibold">No Heavy metals:</span>The heavy metals (lead, chromium, mercury, cadmium) that cause toxic effects even at lower concentrations are absent in organic milk due to the prohibited use of fertilizers and antibiotics.</p>
                    <p ><span className="font-semibold">Better taste profile:</span>Organic protein has a better, unique, and clean taste profile due to the green agricultural practices followed during production and processing. It has a creamier texture and greater ‘grass’ flavour notes.</p>
                </div>
            )
        },
        {
            question: "Why GMOs are bad?",
            answer: "GMOs are responsible for Antibiotic Resistance (AR). The antibacterial resistance genes of the GMOs are resistant to antibiotics which could pass on to humans making them antibiotic-resistant and thus becoming more prone to infections. Also, if these genes are taken up by the disease-causing microbes in the human intestine, cause diseases that cannot be treated with existing antibiotics. GMOs have the potential to trigger allergic reactions as they contain genes from an allergen. Glyphosate is a major GMO that impairs the cytochrome P450 enzymes and as a result, causes celiac disease. GMOs have also given rise to pesticide-resistant superweeds which require even more toxic pesticides to kill and even then, they survive the new pesticides and pass their resistant genes to the next generation."
        },
        {
            question: "What is SCC or Somatic cell count and how it affects the milk quality?",
            answer: (
                <div>
                    <p>Somatic cell count is the ultimate milk quality parameter. Somatic cells are milk-secreting epithelial cells that have been shed from the lining of the gland and white blood cells that have entered the mammary gland in response to injury or infection. SCC consists of 75% leucocytes (neutrophils, macrophages, erythrocytes) and 25% epithelial cells.</p>
                    <p className="py-3">For healthy udder, SCC is less than 1 Lakh. More than that, it indicates infection. High infection and thus SCC of milk increases the risk of spread of diseases such as tuberculosis, sore throat, Q-fever, brucellosis, and leptospirosis. The endotoxins produced by pathogenic bacteria can cause poisoning cases in humans when transferred through milk. These also produce a variety of inflammatory mediators such as cytokines and chemokine.</p>
                    <p>Organic milk from the European Union, especially the Alpine region (Germany, Austria, and Switzerland) has a low SCC (1,50,000 to 4,00,000) as compared to milk from other countries where the SCC levels are 7,50,000 or more.</p>
                </div>
            )
        },
        {
            question: "What are artificial growth hormones?",
            answer: "rBGH and rBST are synthetic (man-made) hormones that are marketed to increase milk production in cows. These hormones stimulate the cow’s milk production by increasing levels of IGF-1. Due to the increased IGF-1 levels in milk, the following health concerns arise such as acne, endocrine disorders (PCOS/PCOD), obesity, cancer, cardiovascular diseases, neurodegenerative diseases, allergies, and autoimmune disorders."
        },
        {
            question: "Does BioAlpine’s Organic whey protein contain additives?",
            answer: "BioAlpine’s Organic whey protein contains 100% organic ingredients with the highest quality parameters and does not contain anything that is not needed by your body. Unlike other whey proteins in the market, we stand apart for not using any artificial or even natural colors, flavours, sweeteners, thickeners, anti-caking agents, acidity regulators, emulsifiers, and digestive enzymes."
        },
        {
            question: "Does BioAlpine’s Organic whey protein contain allergens?",
            answer: "Since whey proteins are made from cow’s milk, they will come under the category of allergens. The major allergens present in all the variants of BioAlpine’s Organic whey protein are milk and lactose. In addition to this, our Italian Hazelnut Chocolate contains hazelnut powder which also comes under the category of allergen. The three major allergens – milk, lactose, and nuts are specified on the label under the ‘allergen statement’ heading followed by the word ‘contains’."
        },
        {
            question: "Does BioAlpine’s Organic whey protein contain added sugars?",
            answer: "BioAlpine’s Organic whey protein has a maximum of 11 grams of total carbohydrates which 100% constitutes the milk sugar, lactose which is naturally present in milk. So, it contains zero added sugars in the form of sucrose or cane sugar."
        },
        {
            question: "Is BioAlpine’s Organic whey protein safe for diabetic people?",
            answer: "BioAlpine’s Organic whey protein contains zero added sugar in the form of sucrose or cane sugar which generally spikes the blood glucose levels and is not good for diabetic people. However, our products contain lactose which is a disaccharide compound and has a low glycemic index and hence completely safe to be consumed by diabetic people."
        },
        {
            question: "What sets BioAlpine’s Organic whey protein apart from the competition?",
            answer: (
                <div>
                    <p>Many factors set us apart from the competition but the most unique point would be the use of <span className="font-semibold">organic flavours</span>, organic freeze-dried fruit powders and coffee, and organic cocoa powder to bring out the taste as close to the real food as possible while maintaining the protein content of the product. Since all flavours are not created equal, they range from artificial to natural to organic. Our organic flavours are extracted from real foods such as organic vanilla pods, cocoa beans, strawberries, blueberries, coconut, wild berries, and mango without the use of GMOs, and harsh chemicals and are vegan. In addition to this, we only use organic 100% freeze-dried fruit powders without any base material such as silica, generally used in spray-dried fruit powders, which are processed at lower temperatures to protect the nutritional, bioactive, and taste profile of the real fruit.</p>
                </div>
            )
        },
        {
            question: "How does BioAlpine’s Organic whey protein help in muscle-building and prevent sarcopenia?",
            answer: "Protein is made up of several single units known as amino acids. When protein is ingested, it is broken down into individual units of amino acids which are collected in the amino acid pool. From the amino acid pool, the amino acids are again taken into the ribosomes where new chains of proteins are formed that are used to build new muscle which is bigger and stronger. The whey proteins contain an amino acid, leucine, which triggers muscle protein synthesis through mTOR. Protein also stimulates the release of IGF-1 and growth hormone which are the major anabolic hormones leading to muscle gain."
        },
        {
            question: "How does BioAlpine’s Organic whey protein help to burn fat?",
            answer: "Whey protein helps to burn fat by several mechanisms: It helps to build lean muscle mass which increases the BMR and burns fat as the muscle cells contain mitochondria and while producing energy it burns calories. With more muscle, the body burns more calories even at rest so BMR goes high. When we ingest protein, the body burns 25-30% calories to digest and absorb which is much higher than that of carbohydrates (10-15%) and fat (0-5%). Protein has a thermogenic effect which again leads to increased BMR and fat burn. Protein also suppresses the hunger hormone, ghrelin, which leads to a decreased appetite and lesser consumption of overall calories. This leads to improved weight management."
        },
        {
            question: "How does BioAlpine’s Organic whey protein support bone health?",
            answer: "As opposed to the common myth that taking more protein weakens your bones. It helps in bone strengthening and increasing bone density. This is because proteins make up 1/3 of your bone mass (the amount of protein your bones contain) and 1⁄2 of the bone volume (the amount of space protein takes). During bone remodeling, the protein is continuously made and broken down. This is why you need daily protein to maintain the bone density to make up for the protein that is degraded daily. Also, the bones contain an extracellular bone matrix made up of collagen which is a protein. Protein stimulates the release of IGF-1 which supports bone growth. Together with calcium, protein improves bone mineral density."
        },
        {
            question: "How does BioAlpine’s Organic whey protein help in recovery?",
            answer: "Recovery is the most important aspect for an athlete or a competing bodybuilder as it allows them to compete at the highest level and gives them an edge over the competition. Protein helps to recover the damaged muscle fibers after a hard workout session. After the workout, the muscle fibers develop small cracks, and also there is an accumulation of lactic acid in the muscles due to prolonged physical activity and lack of oxygen. This causes the body to go into a catabolic stage where tissues are continuously undergoing breakage. To stop the catabolic state and move it into an anabolic state, you require protein. The amino acids in whey protein help in the recovery of the cracks and the amino acid glutamine helps to buffer the lactic acid in the muscles thereby reducing cramps. So, you can hit the gym sooner!"
        },
        {
            question: "How much protein can be consumed per day?",
            answer: "The protein requirement varies according to the body weight and activity levels. For sedentary adults, the protein requirement is 0.8-1g per Kg body weight per day. For bodybuilders and training athletes, the protein requirement is 1-1.5g per Kg body weight per day."
        },
        {
            question: "How much protein can be consumed per serving?",
            answer: "Our bodies can absorb a maximum of 30g of protein at one time and any extra protein will be oxidized and removed from the body by the kidneys. Also, studies have shown that on increasing the protein to 40 g and 60 g per serving, the rate of muscle protein synthesis remained the same. So, divide your total protein requirement into 5-6 meals to use its full potential, and consuming 100g of protein at once will only be a waste of money. It is recommended to consume a total of 2-3 servings of protein daily with 30g of protein per serving."
        },
        {
            question: "What is the best time to take BioAlpine’s Organic whey protein?",
            answer: "The best time to take protein is after the workout (post-workout) when your body is in a catabolic stage from the hard session of strength training. You also need to take protein before sleeping as during sleep the body builds muscle so to supply a steady chain of amino acids, protein in the dinner is important. However, it can also be consumed at any time of the day in combination with your meals."
        }, {
            question: "How to take BioAlpine’s Organic whey protein?",
            answer: "Take 30g of BioAlpine’s Organic whey protein and mix it in 200 ml of water or organic milk or any liquid of your choice and shake it in a shaker bottle vigorously for 15-20 seconds. For the best taste, drink it cold and within 30-60 seconds of mixing. This is the easiest and the most common way of consuming the product. However, the versatile nature of our product allows you to consume it in combination with other recipes such as cookies, cakes, muffins, pancakes, breads, smoothies, ice-creams, protein bars, breakfast bowls, and also juices. Our protein is quite flexible with baking and even freezing techniques. For the exact recipes, please visit our ‘Recipes’ page."
        }, {
            question: "Who can use BioAlpine’s Organic whey protein?",
            answer: (
                <div>
                    <p>Protein is a fundamental element of any athlete or training enthusiast’s nutritional protocol. Put simply, protein is essential for the growth and repair of all cells, including muscle cells, and it is, therefore, necessary to experience training adaptations. However, if you are not a gym enthusiast or do not want to build a big and muscular body, you still need protein in your diet. So, whether you are a hard-core gym freak, just a fitness lover, a homemaker, a CEO who hardly gets time to go to the gym or a growing teen, our product can be consumed by a wide variety of consumers right from a 2-year-old kid to an 80-year-old adult. To find your perfect flavour, consider your personal preferences.</p>
                    <p>Our product comes in 11 delightful options, ranging from the sweet and gentle essence of vanilla and coconut to the vibrant and fresh notes of berries and tropical fruits. You can also enjoy the invigorating taste of 100% Arabica coffee or indulge in the rich, chocolatey flavour of cocoa beans. Explore and discover your favourite!</p>
                </div>
            )
        },
        {
            question: "Is organic whey protein worth the money?",
            answer: "After thoroughly examining the drawbacks of conventional protein and the myriad benefits of organic proteins, it is quite evident that choosing organic is worth your money. The satisfaction that comes from knowing you are consuming not only a cleaner and more natural product but also rich in nutrients and free from harmful chemicals makes the extra cost worthwhile. As someone rightly stated, ‘Investing in your health now will save you from spending on healthcare later’."
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div>
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
                                        Umgeben von hohen Bergen, kristallklaren Seen, Flüssen und frischer, sauberer Luft grasen Kühe auf saftigen Almenwiesen inmitten von Hunderten verschiedener Kräuter und Gräser, die anderswo nur selten zu finden sind. Dies ist ein hervorragendes Futter für gesunde Kühe und die Grundlage für die außergewöhnliche Qualität und den legendären Geschmack unserer Molkenproteine.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <button className="bg-[#ec4755] hover:bg-[#f27c86] text-white px-6 sm:px-8 py-3 rounded-md transition-colors flex items-center gap-2 text-sm sm:text-base">
                                            Mehr erfahren
                                            <MdOutlineArrowRightAlt className="text-xl" />
                                        </button>
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="relative mt-8 lg:mt-0 overflow-hidden">
                                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[36rem] transform -skew-x-12 translate-x-16">
                                        <div className="transform skew-x-12 -translate-x-16 h-full">
                                            <img
                                                src={Bio_Alpine}
                                                alt="BioAlpine"
                                                className="w-full h-full object-cover rounded-2xl shadow-xl"
                                            />
                                            {/* Optional overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#ec475522] to-transparent rounded-2xl"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-800 mt-12">
                        Steigen Sie auf Bio um.
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4 my-4">
                        Umgeben von hohen Bergen, kristallklaren Seen, Flüssen und frischer, sauberer Luft grasen Kühe auf saftigen Almenwiesen inmitten von Hunderten verschiedener Kräuter und Gräser, die anderswo nur selten zu finden sind. Dies ist ein hervorragendes Futter für gesunde Kühe und die Grundlage für die außergewöhnliche Qualität und den legendären Geschmack unserer Molkenproteine.
                    </p>
                    <div className="flex justify-center items-center">
                        <div className="bg-[#ec4755] flex justify-center items-center text-white font-semibold rounded-full px-4 sm:px-6 py-2 sm:py-3 space-x-2 my-4 sm:my-6 hover:bg-[#f27c86] transition-colors">
                            <button className="text-sm sm:text-base">MEHR ERFAHREN</button>
                            <MdOutlineArrowRightAlt className="text-xl sm:text-2xl" />
                        </div>
                    </div>
                </div>

                <div>
                    {/* Features Section */}
                    <div className="py-12 md:py-16 lg:py-2">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                            <div className="max-w-6xl mx-auto">
                                <div className="mt-16 md:mt-28 mb-16 md:mb-32">
                                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 text-start">
                                        <div className="space-y-4 md:space-y-4 lg:pr-8">
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                                                Gesundheit zuerst
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">Hören Sie auf, Ihren Körper zu vergiften, denn er ist der einzige Ort, an dem Sie leben können.</p>
                                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                                Keine giftigen Schwermetalle, GVO, exogenen Hormone, Antibiotika, synthetischen Süßstoffe, Aromen, Farbstoffe und Konservierungsmittel, die mit zahlreichen Krankheiten in Verbindung gebracht werden, darunter (aber nicht beschränkt auf) Magen-Darm- und Nierenfunktionsstörungen, Wachstumsstörungen, Diabetes, Krebs, Herz-Kreislauf-Erkrankungen, Erkrankungen des Nervensystems, Hautläsionen, Gefäßschäden, Funktionsstörungen des Immunsystems und Geburtsfehler.
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

                                <div>
                                    <div className="grid lg:grid-cols-2 gap-16 text-start">
                                        <div className="relative order-2 lg:order-1">
                                            <img
                                                src={WebBlock2}
                                                alt="Feature 2"
                                                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                                            />
                                        </div>
                                        <div className="space-y-4 lg:pl-8 order-1 lg:order-2">
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                                Erleben Sie Perfektion
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">Wann traf Totalität zuletzt auf Wirksamkeit und Reinheit?</p>
                                            <p className="text-gray-600 leading-relaxed">
                                                Mittels Niedertemperatur-Mikrofiltration und Ultrafiltration wird hochwertiges organisches Molkenprotein in voll funktionsfähiger Form isoliert, das auf natürliche Weise ein vollständiges Profil an essentiellen Aminosäuren und wichtigen Fraktionen wie β-Lactoglobulin (β-Lg), α-Lactalbumin (α-La), Immunglobulinen (Igs), Lactoferrin (LF), Rinderserumalbumin (BSA) und Lactoperoxidase (LP) in perfekten Verhältnissen enthält, um Ihr Muskelwachstum, Ihren Fettabbau oder einfach eine gesündere Lebensweise zu unterstützen.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 md:mt-28 mb-16 md:mb-32">
                                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 text-start">
                                        <div className="space-y-4 md:space-y-4 lg:pr-8">
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                                                Köstliche Bio-Aromen
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">Die köstlichste Geschmacksvielfalt aller Bio-Molkeproteine – Punkt!</p>
                                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                                BioAlpine® lädt Sie zu einem ganz eigenen Geschmackserlebnis ein, indem es das jahrhundertealte Geschmackserbe des biologischen Kaffees, Kakaos, der Vanille und der Superfrüchte dieser Welt nachbildet.
                                            </p>
                                        </div>
                                        <div className="relative mt-6 lg:mt-0">
                                            <img
                                                src={WebBlock3}
                                                alt="Feature 1"
                                                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="grid lg:grid-cols-2 gap-16 text-start">
                                        <div className="relative order-2 lg:order-1">
                                            <img
                                                src={WebBlock4}
                                                alt="Feature 2"
                                                className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                                            />
                                        </div>
                                        <div className="space-y-4 lg:pl-8 order-1 lg:order-2">
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                                Funktionale Dominanz
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">Wenn Nahrung Medizin ist, ist dies die einzige Molke, die Sie jemals brauchen werden!</p>
                                            <p className="text-gray-600 leading-relaxed">
                                                Durch die Zugabe von Bio-Kaffee, Kakao, Vanilleextrakten und gefriergetrockneten Fruchtpulvern als Geschmacksstoffe sind unsere Proteinpulver auf natürliche Weise mit den wirksamsten der Menschheit bekannten Phytochemikalien und Antioxidantien angereichert, sodass Sie Ihre Gesundheit voll und ganz kontrollieren können.                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accordion Section  */}
                <div className="w-full max-w-6xl mx-auto mt-12 sm:mt-24 px-4">
                    <div className="space-y-3 sm:space-y-4 text-[#666]">
                        {accordionData.map((item, index) => (
                            <div key={index} className="bg-[#f4f4f4] border border-gray-200 rounded-lg my-7">
                                <button
                                    className="w-full p-3 sm:p-4 text-left flex justify-between items-center"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="text-base sm:text-lg font-medium font-bold pr-4">{item.question}</span>
                                    <span className={`transform transition-transform duration-200 w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center border-2 border-gray-200 rounded-full ${openAccordion === index ? 'rotate-180' : ''
                                        }`}>
                                        <MdKeyboardArrowLeft className="rotate-90 text-lg sm:text-xl text-gray-600" />
                                    </span>
                                </button>
                                {openAccordion === index && (
                                    <div className="p-3 sm:p-4 border-t border-gray-200 text-start">
                                        <p className="text-sm sm:text-base text-gray-600">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Home;