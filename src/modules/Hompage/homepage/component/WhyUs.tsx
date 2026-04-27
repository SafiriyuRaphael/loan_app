import { motion } from "framer-motion";
import { benefits } from "../../../../components/ui/data/Benefits";

function WhyChooseUs() {
  return (
    <section className="relative py-15 px-6 md:px-20 overflow-hidden bg-gray-50">
      <div className="absolute -top-25 -left-25 w-75 h-75 bg-green-400 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute -bottom-30 -right-30 w-87.5 h-87.5 bg-emerald-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute inset-0 bg-linear-to-tr from-green-50 via-white to-emerald-50 opacity-80"></div>

      <div className="relative grid md:grid-cols-2 gap-16 items-center">
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="relative p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 blur-2xl transition"></div>

                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-600 transition">
                  <Icon className="text-green-600 group-hover:text-white transition" />
                </div>

                <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="flex flex-col items-center justify-center text-center h-full relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Us
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed max-w-md">
            We provide fast, secure, and flexible loan solutions designed to
            meet your financial needs. Our platform ensures a smooth borrowing
            experience with transparency, trust, and speed at every step.
          </p>

          <div className="mt-6 w-24 h-1 bg-green-500 rounded-full shadow-lg shadow-green-400/50"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
