import React, { Component } from "react";
import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import cover1 from "./styling/HomePage.svg";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <img className="cover1" src={cover1} alt="cover1" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
