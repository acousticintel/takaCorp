import React from "react";
import { AuthGuard } from "../../components/elements/authGuard";
import GraphSec from "../../components/graphSec";
import EventG from "../../components/graphSec/eventG";
import EventsStats from "../../components/stats/eventStats";

export default function EventPage() {
  return (
    <AuthGuard>
      <main className="events__page">
        <div className="event__details">
          <>
            <div className="detail">
              {" "}
              <span>Date: </span> <h6>Saturday, 21st May 2022</h6>
            </div>
            <div className="detail">
              {" "}
              <span>Venue: </span> <h6>Carnivore Grounds</h6>
            </div>
          </>
          <>
            <div className="detail">
              {" "}
              <span>Host: </span> <h6>Pernod Ricard Kenya</h6>
            </div>
            <div className="detail">
              {" "}
              <span>Division: </span> <h6>Nairobi</h6>
            </div>
          </>
        </div>
        <EventsStats />
        <section>
          <EventG />
        </section>
      </main>
    </AuthGuard>
  );
}
