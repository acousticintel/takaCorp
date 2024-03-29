import React from "react";
import { AuthGuard } from "../../components/elements/authGuard";
import BarG from "../../components/graphSec/barG";

export default function PlasticBreakdown() {
  const plasticData = [
    {
      name: "PET",
      data: [44, 1142],
    },
    {
      name: "LDPE",
      data: [2, 50],
    },
    {
      name: "HDPE",
      data: [3, 77],
    },
    {
      name: "PP",
      data: [6, 146],
    },
    {
      name: "PS",
      data: [2, 53],
    },
  ];
  const plasticWData = {
    series: plasticData,
    options: {
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
        text: "Plastic Sorting Analysis (Weight)",
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
  const plasticPData = {
    series: plasticData,
    options: {
      chart: {
        height: "100%",
        type: "bar",
        stacked: true,
        stackType: "100%",
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
        text: "Plastic Sorting Analysis (Proportion)",
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
        categories: ["Jan", "Feb", "Mar", "Apr"],
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "kg";
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
      <h1>Plastic Recycling</h1>
      <p>
        Presently, almost all recycling is performed by remelting and reforming
        used plastic into new items; so-called mechanical recycling. This can
        cause polymer degradation at a chemical level, and also requires that
        waste be sorted by both colour and polymer type before being
        reprocessed, which is complicated and expensive. Failures in this can
        lead to material with inconsistent properties, rendering it unappealing
        to industry.
      </p>
      <section>
        <BarG data={plasticWData} />
        <BarG data={plasticPData} />
      </section>
    </main>
  );
}
