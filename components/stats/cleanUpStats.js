import React from 'react'

export default function CleanUpStats({total}) {
  return (
    <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="stat">
      <h6>sorters</h6>
      <h5>40</h5>
    </div>
    <div className="stat">
      <h6>Total Waste</h6>
      <h5>{total} kg</h5>
    </div>
    <div className="stat">
      <h6>kg/sorter</h6>
      <h5>73.49 kg</h5>
    </div>
    <div className="stat">
      <h6>kg/hr</h6>
      <h5>29.5 kg</h5>
    </div>
  </div>
  )
}
