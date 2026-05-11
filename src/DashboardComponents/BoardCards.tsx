import { Cards } from "../components/ui/data/Cards";

function BoardCards() {
  return (
    <section className="md:px-20 px-15 mt-5">
      <h1 className="text-3xl font-bold">Loan Dashboard</h1>
      <p className="text-gray-500 font-semibold">
        Track your EMIs, payments, and loan progress
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="border-2 flex gap-20 border-gray-500 rounded-2xl p-4"
          >
            <div>
              <h3 className="text-2xl font-semibold">{card.name}</h3>
              <p className="text-2xl font-bold mt-6">{card.number}</p>

              {card.progress ? (
                <>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${card.progress.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-500 mt-2">{card.text}</p>
                </>
              ) : (
                <p className="text-gray-500">{card.text}</p>
              )}

              {card.badge && (
                <div className="mt-3">
                  <span className="border-2 border-gray-400 px-2 py-1 text-sm rounded-full">
                    {card.badge}
                  </span>
                </div>
              )}
            </div>

            <div className="text-2xl">{card.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BoardCards;
