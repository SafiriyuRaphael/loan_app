import { Star } from "lucide-react";
import { Testifies } from "../../../../components/ui/data/Testifies";

function Testimony() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Users Say
        </h2>

        <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
          Thousands of users trust our platform for fast, secure and reliable
          loan services. Here’s what some of them have to say.
        </p>
      </div>

      <div className="flex items-stretch justify-center gap-3 flex-wrap">
        {Testifies.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 max-w-md"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
            />

            <div className="space-y-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-green-500 fill-green-500"
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>

              <p className="text-sm font-semibold text-gray-900">{item.role}</p>

              <p className="text-xs text-gray-500">— {item.name}</p>
            </div>

            {index !== Testifies.length - 1 && (
              <div className="hidden md:block w-px h-30 bg-green-500 opacity-30 ml-6" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimony;
