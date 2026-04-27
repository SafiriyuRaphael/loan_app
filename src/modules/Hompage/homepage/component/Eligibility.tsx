import { motion } from "framer-motion";
import { rules } from "../../../../components/ui/data/Rules";

export default function Eligibility() {
  return (
    <section className="relative px-6 md:px-20 py-15 bg-green-50 overflow-hidden">
      <div className="absolute -top-30 -left-30 w-[320px] h-80 bg-green-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-35 -right-35 w-95 h-95 bg-emerald-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="relative grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Eligibility Criteria
          </h2>

          <p className="text-gray-700 mt-5 leading-relaxed max-w-md">
            Before applying for a loan, make sure you meet the basic
            requirements. This helps us process your application faster and
            ensures a smooth approval experience without delays.
          </p>

          <div className="mt-6 w-24 h-1 bg-green-600 rounded-full shadow-lg shadow-green-400/50"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {rules.map((item, index) => {
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
      </div>
    </section>
  );
}
