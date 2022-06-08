import Image from "next/image";
import ProgressBar from "../elements/progressBar";

export default function EventG() {
  return (
    <div className="dash__graphs event">
      <div className="dash__graph">
        <h1>Collected Waste Types</h1>
        <section>
          <div className="icon">
            <Image
              src={`/assets/glass-w.png`}
              className="object-contain"
              layout="fill"
              alt=""
            />
          </div>
          <div className="w-full">
            <div className="flex items-end justify-between">
              <h5>Glass</h5>
              <h6>77.98% - 467.87kg</h6>
            </div>
            <ProgressBar color="teal" value={78} />
          </div>
        </section>
        <section>
          <div className="icon">
            <Image
              src={`/assets/plastic-w.png`}
              className="object-contain"
              layout="fill"
              alt=""
            />
          </div>
          <div className="w-full">
            <div tabIndex="0" className="collapse">
              <div className="collapse-title p-0 pr-2">
                <div className="w-full">
                  <div className="flex items-end justify-between">
                    <h5 className="font-medium">Plastic</h5>
                    <h6 className="font-medium">9.63% - 57.75kg</h6>
                  </div>
                  <ProgressBar color="orange" value={5} />
                </div>
              </div>
              <div className="collapse-content p-0 pl-4">
                <div>
                  <div className="flex items-end justify-between">
                    <h5>PET</h5>
                    <h6>7.49% - 44.92kg</h6>
                  </div>
                  <ProgressBar color="orange" value={8} />
                </div>
                <div>
                  <div className="flex items-end justify-between">
                    <h5>LPDE</h5>
                    <h6>0.33% - 1.97kg</h6>
                  </div>
                  <ProgressBar color="orange" value={1} />
                </div>
                <div>
                  <div className="flex items-end justify-between">
                    <h5>HDPE</h5>
                    <h6>0.51% - 3.04kg</h6>
                  </div>
                  <ProgressBar color="orange" value={1} />
                </div>
                <div>
                  <div className="flex items-end justify-between">
                    <h5>PP</h5>
                    <h6>0.95% - 5.71kg</h6>
                  </div>
                  <ProgressBar color="orange" value={1} />
                </div>
                <div>
                  <div className="flex items-end justify-between">
                    <h5>PS</h5>
                    <h6>0.35% - 2.11kg</h6>
                  </div>
                  <ProgressBar color="orange" value={1} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="icon">
            <Image
              src={`/assets/metal-w.png`}
              className="object-contain"
              layout="fill"
              alt=""
            />
          </div>
          <div className="w-full">
            <div tabIndex="0" className="collapse">
              <div className="collapse-title p-0 pr-2">
                <div className="w-full">
                  <div className="flex items-end justify-between">
                    <h5 className="font-medium">Metal</h5>
                    <h6 className="font-medium">1.99% - 11.93kg</h6>
                  </div>
                  <ProgressBar color="yellow" value={2} />
                </div>
              </div>
              <div className="collapse-content p-0 pl-4">
                <div>
                  <div className="flex items-end justify-between">
                    <h5>Aluminium Foil</h5>
                    <h6>0.27% - 1.64kg</h6>
                  </div>
                  <ProgressBar color="yellow" value={1} />
                </div>
                <div>
                  <div className="flex items-end justify-between">
                    <h5>Metal Cans</h5>
                    <h6>1.72% - 10.29kg</h6>
                  </div>
                  <ProgressBar color="yellow" value={2} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="icon">
            <Image
              src={`/assets/paper-w.png`}
              className="object-contain"
              layout="fill"
              alt=""
            />
          </div>
          <div className="w-full">
            <div tabIndex="0" className="collapse">
              <div className="collapse-title p-0 pr-2">
                <div className="w-full">
                  <div className="flex items-end justify-between">
                    <h5 className="font-medium">Paper</h5>
                    <h6 className="font-medium">2.15% - 12.86kg</h6>
                  </div>
                  <ProgressBar color="blue" value={2} />
                </div>
              </div>
              <div className="collapse-content p-0 pl-4">
                <div>
                  <div className="flex items-end justify-between">
                    <h5>Tetra Pack</h5>
                    <h6>0.82% - 4.91kg</h6>
                  </div>
                  <ProgressBar color="blue" value={1} />
                </div>
                <div>
                  <div className="flex items-end justify-between">
                    <h5>Carton</h5>
                    <h6>1.33% - 7.95kg</h6>
                  </div>
                  <ProgressBar color="blue" value={2} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="icon">
            <Image
              src={`/assets/org-w.png`}
              className="object-contain"
              layout="fill"
              alt=""
            />
          </div>
          <div className="w-full">
            <div className="flex items-end justify-between">
              <h5>Organic</h5>
              <h6>1.79% - 10.76kg</h6>
            </div>
            <ProgressBar color="slate" value={1} />
          </div>
        </section>
        <section>
          <div className="icon">
            <Image
              src={`/assets/non-w.png`}
              className="object-contain"
              layout="fill"
              alt=""
            />
          </div>
          <div className="w-full">
            <div className="flex items-end justify-between">
              <h5>Non-Recyclables </h5>
              <h6>6.47% - 38.83kg</h6>
            </div>
            <ProgressBar color="red" value={7} />
          </div>
        </section>
      </div>
    </div>
  );
}
