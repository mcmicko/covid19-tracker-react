import React, { Component } from "react";

import styles from "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

class App extends Component {
  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
