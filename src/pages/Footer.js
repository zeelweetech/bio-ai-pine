import React from "react";
import logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl mb-4">Melden Sie sich für den Erfolg an!</h2>
          <p className="text-[#B8B8B8] mb-6 max-w-lg mx-auto">
            Melden Sie sich für Rabatte „Nur für Abonnenten“, kostenlose Proben
            und ständige Kommunikation an, die Ihnen dabei helfen, die volle
            Kontrolle über Ihre Gesundheit zu übernehmen!
          </p>
          <div className="flex flex-col  gap-2 max-w-lg mx-auto mb-8">
            <a href="/" className="logo mx-10">
              <img src={logo} alt="BioAlpine" className="h-20 w-48" />
            </a>
            <input
              type="email"
              placeholder="Email"
              className="flex-1 py-3 px-5 border-1 text-white  placeholder-[#B8B8B8]"
            />
            <button className="py-3 w-full  px-8 bg-[#C9F7FF] text-black  transition-colors">
              Abonnieren
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="mb-4">Follow us</h3>
            <div className="flex gap-4 justify-center">
              {/* <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
              >
                f
              </a> */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
              >
                f
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
              >
                𝕏
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
              >
                i
              </a>
              <a
                href="https://in.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[#FF6B00] text-white rounded-md hover:bg-[#FF8533] transition-colors"
              >
                p
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 py-12 border-t border-[#ffffff1A]">
          <div className="col-span-1 sm:col-span-1 mx-5">
            <h3 className="text-white text-xl mb-5">We 🧡 Bio</h3>
            <p className="text-black text-xs leading-relaxed">
              Melden Sie sich für den Erfolg an! Melden Sie sich für Rabatte
              „Nur für Abonnenten“, kostenlose Proben und ständige Kommunikation
              an, die Ihnen dabei helfen, die volle Kontrolle über Ihre
              Gesundheit zu übernehmen! Email Abonnieren Folgen Sie uns Wir ♥
              Bio Wir bieten nur das Allerbeste, damit Sie die volle Kontrolle
              über Ihre Gesundheit haben. Bio-Molkeproteine ​​höchster Qualität
              aus dem Herzen der deutschen Alpen, hergestellt aus Milch mit der
              geringstmöglichen somatischen Zellzahl, perfekt gewürzt mit
              Bio-Kakao, Bio-Kaffee, Bio-Vanille und Bio-Fruchtpulver. Absolut
              null (rBGH/rBST), (GVOs), synthetische Süßstoffe, Aromen, Gummis
              oder schädliche Chemikalien, die Ihr Körper sowieso nicht braucht!
              Willkommen in unserer Welt.
            </p>
          </div>
          <div>
            <h3 className="text-white text-xl mb-5">BioAlpine®</h3>
            <ul>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Startseite
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Qualität
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Schmecken
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Gesundheit
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Rezepte
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl mb-5">Latest News</h3>
            <ul>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Ausstellungen
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Messen
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Fitnessstudio-Events
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Ernährungsberater
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Ernährungswissenschaftlerinnen
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl mb-5">Kundendienst</h3>
            <ul>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Versand
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Rückgaben
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-white text-sm">
                  Kostenlose Proben
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl mb-5">
              Werden Sie unser Partner
            </h3>
            <ul>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Fitnessstudios
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Einzelhändler
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-white text-sm">
                  Distributoren
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-t border-[#ffffff1A] text-sm text-[#B8B8B8]">
          <p>2025 © Musclestädt Sporternährung GmbH - All Rights Reserved.</p>
          <div className="flex gap-5 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">
              Imprint
            </a>
            <a href="#" className="hover:text-white">
              TERMS
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Withdrawal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
