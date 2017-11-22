import React from 'react';
import WeatherBox from './WeatherBox.js';

class WeatherListBox extends React.Component {
    constructor(props) {
        super(props);
    }

    renderCities() {
        //return this.props.cities.map((city, index) => <li key={index}>{JSON.stringify(city)} </li>);
        return this.props.cities.map((city, index) =>
            <WeatherBox key={index} index={index} city={city} deleteCity={this.props.deleteCity} />);
    }

    render() {
        return (
            <div>
                <ul className="row">
                    {this.renderCities()}
                </ul>
            </div>
        );
    }
}




export default WeatherListBox;