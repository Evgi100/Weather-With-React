import React from 'react';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cities: [] };
    this.addCity = this.addCity.bind(this);
    this.deleteCity = this.deleteCity.bind(this);
  }

  addCity(city) {
    this.setState({ cities: this.state.cities.concat(city) });

    console.log(this.state)
    //console.log(this.state.cities)
    //console.log(city);
  }

  deleteCity(index) {
    this.setState((prevState) => ({
      cities: prevState.cities.filter((item, i) => i !== index)
    }));
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Weather app</h2>         
          <SearchForm addCity={this.addCity} />
        </div>
        <WeatherListBox deleteCity={this.deleteCity}  cities={this.state.cities} />
      </div>
    );
  }
}



export default App;