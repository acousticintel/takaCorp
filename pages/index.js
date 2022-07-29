import Image from "next/image";
import { useRouter } from "next/router";
//custom pack
import { motion } from "framer-motion";
import { getSession, useSession } from "next-auth/react";
//custom
import Stats from "../components/stats/totalStats";
import LineG from "../components/graphSec/lineG";
import Categories from "../components/categories";
import Recent from "../components/events/recent";
import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  limit,
  query,
  collection,
  where,
} from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { db } from "../firebase";

const contVar = {
  hide: {},
  show: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const riseVar = {
  hide: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
};

export default function Profile({ companyDataInit }) {
  const router = useRouter();
  const { data: session } = useSession();

  const [companyData, setCompanyData] = useState(
    JSON.parse(companyDataInit) || {}
  );

  const [profile, setProfile] = useState("demo");
  const [eventsData, setEventsData] = useState({});
  const [total, setTotal] = useState(0);

  function sumObjectsByKey(...objs) {
    return objs.reduce((a, b) => {
      for (let k in b) {
        if (b.hasOwnProperty(k)) a[k] = (a[k] || 0) + b[k];
      }
      return a;
    }, {});
  }

  const getCompanyData = async (company) => {
    const q = query(
      collection(db, "wasteProfiles"),
      where("name", "==", company ? company : "demo"),
      limit(1)
    );
    return onSnapshot(q, (querySnapshot) => {
      let c = {};
      querySnapshot.forEach((doc) => {
        c = { ...doc.data(), id: doc.id };
      });

      setCompanyData(c);
    });
  };

  const getEventData = async (companyData) => {
    if (companyData?.id) {
      //firebase listener for user data
      const q = query(
        collection(db, "wasteProfiles", `${companyData.id}`, "events"),
        where("name", "!=", null)
      );

      return onSnapshot(q, (querySnapshot) => {
        const e = [];
        querySnapshot.forEach((doc) => {
          e.push({ ...doc.data(), id: doc.id });
        });

        setEventsData(e);
      });
    }
  };

  useEffect(() => {
    //console.log("company", companyData);
  }, [companyData]);

  useEffect(() => {
    getCompanyData(profile);
  }, [profile]);

  useEffect(() => {
    if (session?.user?.id) {
      let u = {};
      const docRef = doc(db, "users", session?.user?.id);
      getDoc(docRef).then((doc) => {
        u = { ...doc.data(), id: doc.id };
        setUserData(u);
      });
    }
  }, [session]);

  useEffect(() => {
    //console.log("companyData", companyData);
    getEventData(companyData);
  }, [companyData]);

  useEffect(() => {
    if (eventsData?.length > 0) {
      let t = sumObjectsByKey(...eventsData);
      setTotal(t);
    } else {
      setTotal({});
    }
  }, [eventsData]);

  const companyName = (company) => {
    if (company === "pernod") {
      return "Pernod Ricard";
    }
    return "Taka";
  };

  const companyImage = (company) => {
    if (company === "pernod") {
      return "/assets/pernod.png";
    }
    return "/assets/logo.png";
  };

  return (
    <motion.div
      className="dash__page"
      variants={contVar}
      initial="hide"
      animate="show"
    >
      <h6 className="text-5xl font-semibold">Our Partners</h6>
      <p className="text-lg text-gray-500 p-3">
        Selecting one of our partners Logos to view their profile
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <div
          onClick={() => setProfile("demo")}
          className={`${
            profile != "demo" ? "grayscale" : ""
          }  transition-all duration-1000 ease-in-out`}
        >
          <div className="relative h-40 w-full max-w-sm mx-auto">
            <Image src={"/assets/logo.png"} layout="fill" objectFit="contain" />
          </div>
          <h5 className="text-center text-emerald-700 text-xl font-bold">
            Taka Earth
          </h5>
        </div>
        <div
          onClick={() => setProfile("pernod")}
          className={`${
            profile != "pernod" ? "grayscale" : ""
          }  transition-all duration-1000 ease-in-out`}
        >
          <div className="relative h-40 w-full max-w-sm mx-auto">
            <Image src="/assets/pernod.png" layout="fill" objectFit="contain" />
          </div>
          <h5 className="text-center text-blue-900 text-xl font-bold">
            Pernod Ricard
          </h5>
        </div>
      </div>
      <div className="flex items-center justify-center my-5 py-5 border-y">
        <h6 className="text-xl text-gray-400 font-semibold">
          Selected Profile : <br />
          <span className="text-teal-800 text-2xl">{companyName(profile)}</span>
        </h6>
        <div className="relative w-24 h-24 rounded-full ml-6">
          <Image
            src={companyImage(profile)}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <Recent events={eventsData} company={companyData} />
      <Stats total={total?.total} non={total?.non} />
      <Categories />
      <section className="dash__linegraph">
        <LineG events={eventsData} />
      </section>
    </motion.div>
  );
}
