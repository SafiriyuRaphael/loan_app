import { Calendar, CreditCard, TrendingUp, FileText } from 'lucide-react'
import { board } from "../Loan-dashboard/board"
import { useState } from 'react'


const NairaIcon = () => (
  <span className="text-xl font-bold">₦</span>
)

export default function LoanDashboard() {

  const tabs = ['Active Loans', 'Repayment Schedule']
  const [activeTab, setActiveTab] = useState(tabs[0])

  const summary = [
    {
      title: 'Total Loans',
      value: '3',
      subtitle: 'Active loan accounts',
      icon: CreditCard,
    },
    {
      title: 'Total Outstanding',
      value: '245,000',
      subtitle: 'Remaining principal amount',
      icon: NairaIcon,
    },
    {
      title: 'Loan Progress',
      value: '126/384',
      subtitle: '32.8% completed',
      icon: TrendingUp,
      progress: 32.8,
    },
    {
      title: 'Next Loan',
      value: '₦250,495',
      subtitle: 'Due: 25 May 2026',
      icon: Calendar,
      badge: 'Upcoming',
    },
  ]

  return (
    <div className="min-h-screen bg-white px-8 py-7 text-slate-900">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">
              Loan Dashboard
            </h1>
            <p className="mt-1 text-lg text-slate-500">
              Track your monthly payments and loan progress
            </p>
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-4 gap-5">
          {summary.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="rounded-3xl border border-slate-200 px-6 py-6">

                <div className="mb-8 flex justify-between">
                  <p className="text-[15px] font-medium text-slate-700">
                    {item.title}
                  </p>
                  <Icon className="h-5 w-5 text-slate-500" />
                </div>

                <div className="text-5xl font-semibold">
                  {item.value}
                </div>

                {item.progress !== undefined && (
                  <div className="mt-4 h-2 w-full rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-green-600"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                )}

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <span>{item.subtitle}</span>

                  {item.badge && (
                    <span className="rounded-full border px-2 py-0.5 text-xs">
                      {item.badge}
                    </span>
                  )}
                </div>

              </div>
            )
          })}
        </div>

        {/* TABS */}

      <div className="mt-5 rounded-2xl bg-slate-100 p-1">
       <div className="mx-auto flex w-fit gap-9 text-sm font-medium">
         {tabs.map((tab) => (

         <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`w-40 whitespace-nowrap rounded-xl px-6 py-2.5 text-center transition-colors  duration-300 hover:bg-green-600 hover:text-white ${
           activeTab === tab
            ? ' text-slate-950'
            : 'text-slate-700'
        }`}
      >
        {tab}
      </button>
       ))}
      </div>
      </div>
    

        {/* CONTENT AREA */}

        <div className="mt-4 rounded-3xl border border-slate-200 px-6 py-6">

          <h2 className="mb-6 text-3xl font-semibold">
            {activeTab}
          </h2>

          {/* ACTIVE LOANS */}

          {activeTab === 'Active Loans' && (
            <div className="space-y-5">

              {board.map((board) => (
                <div
                  key={board.bank}
                  className="rounded-3xl border border-slate-200 px-5 py-5"
                >

                  {/* HEADER */}

                  <div className="mb-6 flex justify-between">

                    <div className="flex items-start gap-3">
                      <FileText className="mt-1 h-5 w-5 text-slate-400" />

                      <div>
                        <h3 className="text-2xl font-semibold">
                          {board.bank}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {board.type}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-green-600 px-2 py-4 text-bold text-white">
                      active
                    </span>

                  </div>

                  {/* DETAILS */}

                  <div className="grid grid-cols-4 gap-6">

                    <div>
                      <p className="text-sm text-slate-500">Outstanding</p>
                      <p className="mt-2 text-3xl font-semibold">
                        {board.outstanding}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Monthly</p>
                      <p className="mt-2 text-3xl font-semibold">
                        {board.loanAmount}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Interest Rate</p>
                      <p className="mt-2 text-3xl font-semibold">
                        {board.interestRate}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">Next Due</p>
                      <p className="mt-2 text-3xl font-semibold">
                        {board.nextDue}
                      </p>
                    </div>

                  </div>

                  {/* PROGRESS */}

                  <div className="mt-6">

                    <div className="mb-2 flex justify-end text-sm text-slate-500">
                      {board.completed}
                    </div>

                    <div className="h-2 w-full rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-green-600"
                        style={{ width: `${board.progress}%` }}
                      />
                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

          {/* REPAYMENT TAB */}

          {activeTab === 'Repayment Schedule' && (
            <p className="text-slate-500">
              Repayment schedule coming soon.
            </p>
          )}

        </div>

      </div>
    </div>
  )
}