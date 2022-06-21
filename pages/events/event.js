import {
  collection,
  doc,
  query,
  where,
  limit,
  onSnapshot,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { AuthGuard } from "../../components/elements/authGuard";
import EventG from "../../components/graphSec/eventG";
import EventsStats from "../../components/stats/eventStats";
import { db } from "../../firebase";
import CleanUpStats from "../../components/stats/cleanUpStats";
import Head from "next/head";
import Image from "next/image";

export default function EventPage({ eventInit }) {
  const router = useRouter();
  const { name, company } = router.query;
  const [eventData, setEventData] = useState(
    eventInit ? JSON.parse(eventInit) : {}
  );

  useEffect(() => {
    //console.log(eventData);
  }, [eventData]);

  useEffect(() => {
    if (name && company) {
      const q = query(
        collection(db, "wasteProfiles", company, "events"),
        where("name", "==", name || ""),
        limit(1)
      );

      return onSnapshot(q, (querySnapshot) => {
        let tmpEvent = {};
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          tmpEvent = {
            ...doc.data(),
            id: doc.id,
            timestamp: doc.data().timestamp.toDate(),
          };
        });

        setEventData(tmpEvent);
      });
    }
  }, [name, company]);

  return (
    <main className="events__page">
      <Head>
        <title>{eventData.name} Waste Profile</title>
      </Head>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div class="avatar">
        <div class="w-24 mask mask-squircle">
            {eventData?.image && <Image src={eventData.image} layout="fill" />}
          </div>
        </div>
        <h1 className="mt-6 sm:ml-6 sm:mt-0 uppercase text-4xl font-bold text-teal-700">
          {eventData.name} <br />
          Waste Profile
        </h1>
      </div>
      <div className="event__details">
        <>
          <div className="detail">
            {" "}
            <span>Date: </span>
            <h6>
              {eventData.timestamp
                ? format(eventData.timestamp, "EEE do MMM yyyy")
                : ""}
            </h6>
          </div>
          <div className="detail">
            {" "}
            <span>Venue: </span> <h6>{eventData.location}</h6>
          </div>
        </>
        <>
          <div className="detail">
            {" "}
            <span>Host: </span> <h6>Pernod Ricard Kenya</h6>
          </div>
          <div className="detail">
            {" "}
            <span> NEMA approval number: </span> <h6>{eventData?.nema ? eventData.nema : "NEMA/--/-/VOL.-----" }</h6>
          </div>
        </>
      </div>
      {eventData?.protected ? (
        <AuthGuard>
          {eventData?.type === "cleanup" ? (
            <CleanUpStats total={eventData?.total ? eventData.total : 0} />
          ) : (
            <EventsStats total={eventData?.total ? eventData.total : 0} />
          )}
          <section>
            <EventG total={eventData} />
          </section>
        </AuthGuard>
      ) : (
        <>
          {eventData?.type === "cleanup" ? (
            <CleanUpStats total={eventData?.total ? eventData.total : 0} />
          ) : (
            <EventsStats total={eventData?.total ? eventData.total : 0} />
          )}
          <section>
            <EventG total={eventData} />
          </section>
        </>
      )}
    </main>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const { name, company } = context.query;

    const q = query(
      collection(db, "wasteProfiles", company, "events"),
      where("name", "==", name || ""),
      limit(1)
    );

    const querySnapshot1 = await getDocs(q);
    let tmpEvent = {};
    querySnapshot1.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      tmpEvent = {
        ...doc.data(),
        id: doc.id,
      };
    });

    delete tmpEvent.timestamp;

    return {
      props: {
        eventInit: JSON.stringify(tmpEvent),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
