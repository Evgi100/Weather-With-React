import React from 'react';
import axios from 'axios';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { city: "" };
        this.changeCity = this.changeCity.bind(this);
        this.cityToCities = this.cityToCities.bind(this);
        //console.log(this.state)
    }
    changeCity(e) {
        this.setState({ [e.target.id]: e.target.value }); //var city = documet.getElementById("city").value
        // console.log(this.state)
        //console.log(e.target.id)
        // console.log(e.target.value)
    }
    cityToCities(event) {
        event.preventDefault();//<== will prevent the original code from taking place (Submit/CLick etc)        
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=d703871f861842b79c60988ccf3b17ec`

        axios.get(url)
            .then(response => {
                this.props.addCity(response.data); // sending the city to the App component
                this.setState({ city: "" }); // setting the values of the state to "", after sending them 
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        return (
            <form>
                <div>
                    <input className="mainInput" type="text" placeholder="Enter city" id="city" onChange={this.changeCity} />
                        <button className="btn btn-default btn-lg goBtn" type="submit" onClick={this.cityToCities}>Go!</button>
                </div>
            </form>
        )
    }
}


export default SearchForm;