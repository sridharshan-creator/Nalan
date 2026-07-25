import {Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500">
            Nalan Catering
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            நல்ல சுவை • நல்ல சேவை • நல்ல நினைவுகள்
          </p>

          <p className="mt-3 text-gray-400">
            Serving Happiness Across Tamil Nadu 🍛
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            விரைவு இணைப்புகள்
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>முகப்பு</li>
            <li>எங்களை பற்றி</li>
            <li>சேவைகள்</li>
            <li>உணவு பட்டியல்</li>
            <li>தொடர்பு</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            தொடர்புக்கு
          </h3>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 75488 95467</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>info@nalancatering.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
          </div>
        </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
        © 2026 Nalan Catering. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
