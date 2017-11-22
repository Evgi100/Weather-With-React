
import React from 'react';
import  CommentListBox from './CommentsListBox';


class WeatherBox extends React.Component {
    constructor(props) {
        super(props)
        this.deleteCity = this.deleteCity.bind(this);
      }
    

    deleteCity() {
        this.props.deleteCity(this.props.index)
    }
    render() {
        var city = this.props.city
        var temp = city.main.temp
        var tempCelsius = Math.floor(temp - 273) + '|°C  ';
        var url = `http://openweathermap.org/img/w/${city.weather[0].icon}.png`
        return (
            <div className="col-md-3" >
                <img src={url} />
                <span className="glyphicon glyphicon-trash cityTrash" onClick={this.deleteCity} ></span>
                <h3> {city.name} </h3>
                <h5>{city.weather[0].main}- {tempCelsius} </h5>
                <CommentListBox />
            </div>
        );
    }
}

export default WeatherBox;



