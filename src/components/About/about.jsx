import { motion } from "framer-motion";
import { UtensilsCrossed, Award, Users } from "lucide-react";

function About() {
  const stats = [
    {
      icon: <UtensilsCrossed size={35} />,
      number: "500+",
      title: "Events Catered",
    },
    {
      icon: <Award size={35} />,
      number: "10+",
      title: "Years Experience",
    },
    {
      icon: <Users size={35} />,
      number: "100%",
      title: "Customer Satisfaction",
    },
  ];

  return (
    <section id="about" className="bg-[#FFF8F0] py-24 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity:0, x:-60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
        >
          <p className="text-yellow-600 uppercase tracking-[4px] font-semibold">
            About Us
          </p>

          <p className="mt-8 text-gray-600 leading-8">
            Nalan Catering delivers premium catering services for weddings,
            birthdays, corporate events and family celebrations. We combine
            authentic flavours, elegant presentation and exceptional service to
            create unforgettable experiences for every guest.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full transition">
            Learn More
          </button>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity:0, x:60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {stats.map((item,index)=>(
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-3 transition duration-300"
            >

              <div className="text-yellow-500 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-gray-900">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.title}
              </p>

            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}

export default About;