import React from "react";
import { AuthGuard } from "../../components/elements/authGuard";
import BarG from "../../components/graphSec/barG";

export default function GlassBreakdown() {
  const glassData = [
    {
      name: "Cullet",
      data: [468, 3],
    },
  ];
  const glassWData = {
    series: glassData,
    options: {
      colors: ["#22c55e"],
      chart: {
        height: "100%",
        type: "bar",
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      title: {
        text: "Glass Sorting Analysis (Weight)",
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        categories: ["May", "Jun"],
        labels: {
          formatter: function (val) {
            return val + "Kg";
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "Kg";
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  };
  return (
    <main className="breakdown__page">
      <h1>Glass Recycling</h1>
      <p>
        Glass that is crushed or imploded and ready to be remelted is called
        cullet. Glass doent have propotions since its all recyled similary.
      </p>
      <section className="single">
        <BarG data={glassWData} />
      </section>
    </main>
  );
}
