import { useRouter } from "next/router";
//custom pack
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

//custom func
import { AuthGuard } from "../components/elements/authGuard";
//custom
import Stats from "../components/stats/totalStats";
import LineG from "../components/graphSec/lineG";
import Categories from "../components/categories";
import Recent from "../components/events/recent";

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

export default function Profile() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <AuthGuard>
      <motion.div
        className="dash__page"
        variants={contVar}
        initial="hide"
        animate="show"
      >
        <motion.h5 variants={riseVar}>Hello {session?.user.name}</motion.h5>
        <Recent/>
        <Stats />
        <Categories />
        <section className="dash__linegraph">
          <LineG />
        </section>
      </motion.div>
    </AuthGuard>
  );
}