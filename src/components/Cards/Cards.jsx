import React from "react";
// import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import CountUp from "react-countup";

import styles from "./Cards.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className="container-card">
      <div className="card confirmed">
        <h1>Confirmed case</h1>
        <h3>
          <CountUp
            start={0}
            end={confirmed.value}
            duration={2.5}
            separator=","
          ></CountUp>
        </h3>
        <h2>{new Date(lastUpdate).toDateString()}</h2>
      </div>

      <div className="card">
        <h1>Recovered</h1>
        <h3>
          <CountUp
            start={0}
            end={recovered.value}
            duration={2.5}
            separator=","
          ></CountUp>
        </h3>
        <h2>{new Date(lastUpdate).toDateString()}</h2>
      </div>

      <div className="card">
        <h1>Deaths</h1>
        <h3>
          <CountUp
            start={0}
            end={deaths.value}
            duration={2.5}
            separator=","
          ></CountUp>
        </h3>
        <h2>{new Date(lastUpdate).toDateString()}</h2>
      </div>
    </div>
  );
};

export default Cards;
