//custom
import { useData } from "../../context/dataContext";

export default function TotalStats() {
  const { users, requests, onSetSelRequest } = useData();
  return (
    <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="stat">
        <h6>Total Waste</h6>
        <h5>600 kg</h5>
      </div>
      <div className="stat">
        <h6>Recyclable Waste</h6>
        <h5>561.17 kg</h5>
      </div>
      <div className="stat">
        <h6>Non Recyclable Waste</h6>
        <h5>38.83 kg</h5>
      </div>
      <div className="stat">
        <h6>Landfill diversion rate</h6>
        <h5>93.54%</h5>
      </div>
    </div>
  );
}
