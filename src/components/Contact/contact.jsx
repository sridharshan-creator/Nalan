import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("நன்றி! விரைவில் உங்களை தொடர்பு கொள்கிறோம்.");
  };

  return (
    <section id="contact" className="py-20 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-yellow-600 uppercase tracking-[4px] font-semibold">
            தொடர்புக்கு
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            உங்கள் நிகழ்வை இன்று திட்டமிடுங்கள்
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
            திருமணம், பிறந்தநாள் விழா, நிறுவன நிகழ்வுகள் மற்றும் அனைத்து
            விசேஷ நிகழ்வுகளுக்கும் எங்களை தொடர்பு கொள்ளுங்கள்.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mt-16">

          {/* Contact Info */}
          <div className="space-y-5 md:space-y-8">

            <div className="flex items-center gap-4 bg-[#FFF8F0] p-4 md:p-6 rounded-2xl">
              <Phone className="text-yellow-600" size={26} />
              <div>
                <h3 className="font-bold text-lg md:text-xl">
                  தொலைபேசி
                </h3>
                <p className="text-gray-600">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#FFF8F0] p-4 md:p-6 rounded-2xl">
              <Mail className="text-yellow-600" size={26} />
              <div>
                <h3 className="font-bold text-lg md:text-xl">
                  மின்னஞ்சல்
                </h3>
                <p className="text-gray-600 break-all">
                  info@nalancatering.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#FFF8F0] p-4 md:p-6 rounded-2xl">
              <MapPin className="text-yellow-600" size={26} />
              <div>
                <h3 className="font-bold text-lg md:text-xl">
                  முகவரி
                </h3>
                <p className="text-gray-600">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#FFF8F0] p-5 md:p-8 rounded-3xl shadow-lg"
          >
            <input
              type="text"
              placeholder="உங்கள் பெயர்"
              className="w-full p-3 md:p-4 rounded-xl border mb-4"
            />

            <input
              type="tel"
              placeholder="மொபைல் எண்"
              className="w-full p-3 md:p-4 rounded-xl border mb-4"
            />

            <input
              type="text"
              placeholder="நிகழ்வு வகை"
              className="w-full p-3 md:p-4 rounded-xl border mb-4"
            />

            <input
              type="date"
              className="w-full p-3 md:p-4 rounded-xl border mb-4"
            />

            <input
              type="number"
              placeholder="எதிர்பார்க்கப்படும் விருந்தினர்கள்"
              className="w-full p-3 md:p-4 rounded-xl border mb-4"
            />

            <textarea
              rows="5"
              placeholder="உங்கள் தேவைகளை எழுதுங்கள்"
              className="w-full p-3 md:p-4 rounded-xl border mb-4"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 md:py-4 rounded-xl font-semibold transition"
            >
              📞 Enquire Now
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;