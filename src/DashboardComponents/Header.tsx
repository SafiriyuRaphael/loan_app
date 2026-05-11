function Header() {
  return (
    <section className="md:px-20 px-15 mt-10">
      <div className="w-full h-7 bg-gray-200 rounded-full flex justify-between items-center">
        <div className="h-6 flex-nowrap bg-white rounded-full px-50">
          💼 Active Loans
        </div>
        <div className="h-6 bg-pink-400 rounded-full px-50">
          Repayment Schedule
        </div>
      </div>
    </section>
  );
}

export default Header;
