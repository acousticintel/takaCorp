import React from 'react'

export default function CleanUpStats({total, non}) {
  const getPercentage = (a, b) => {
    return Number(Math.round((a / b) * 100 + "e2") + "e-2")
      ? Number(Math.round((a / b) * 100 + "e2") + "e-2")
      : 0;
  };
  return (
    <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="stat">
      <h6>Participants</h6>
      <h5>40</h5>
    </div>
    <div className="stat">
      <h6>Kgs sorted/ Participant</h6>
      <h5>73.49 kg</h5>
    </div>
    <div className="stat">
      <h6>Kgs sorted/ hour/ Participant</h6>
      <h5>29.5 kg</h5>
    </div>
    <div className="stat">
      <h6>Total Waste</h6>
      <h5>{total} kg</h5>
    </div>
    <div className="stat">
      <h6>Non Recyclable Waste</h6>
      <h5>{non} kg</h5>
    </div>
    <div className="stat">
      <h6>Landfill Diversion Rate</h6>
      <h5>{getPercentage((total ? total : 0) - (non ? non : 0), total)}%</h5>
    </div>
  </div>
  )
}
