import ActiveLoan from "../../../DashboardComponents/ActiveLoan";
import BoardCards from "../../../DashboardComponents/BoardCards";
import Header from "../../../DashboardComponents/Header";

function DashboardPage() {
  return (
    <div>
      <BoardCards />
      <Header />
      <ActiveLoan />
    </div>
  );
}

export default DashboardPage;
