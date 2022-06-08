import Image from "next/image";
import Link from "next/link";
//custom
import Title from "../elements/title";

export default function Recent() {
  return (
    <section className="recent__events clear">
      <Title title="Recent Events" />
      <div className="list">
        <Link href="events/event">
          <div className="event">
            <div className="event__img">
              <Image
                src="/assets/connect.jpg"
                layout="fill"
                className="object-cover"
              />
            </div>
            <h6>Jameson Connect</h6>
            <span>Friday 3rd May</span>
          </div>
        </Link>
      </div>
      <div className="flex justify-end">
        <button className="btn btn-ghost">View All</button>
      </div>
    </section>
  );
}
