//custom
import { useData } from "../../context/dataContext";

export default function EventsStats() {
  const { users, requests, onSetSelRequest } = useData();
  return (
    <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="stat">
        <h6>Total Users</h6>
        <h5>1257</h5>
      </div>
      <div className="stat">
        <h6>Total Waste</h6>
        <h5>2000 kg</h5>
      </div>
      <div className="stat">
        <h6>Incentives</h6>
        <h5>Ksh 100,000</h5>
      </div>
      <div className="stat">
        <h6>Event Sales</h6>
        <h5>Ksh 345,000</h5>
      </div>
    </div>
  );
}
