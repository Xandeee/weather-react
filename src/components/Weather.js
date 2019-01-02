import React from 'react';

class Weather extends React.Component {
    render(){
        return(
            <div>
                { this.props.city && this.props.country && <p>Location: {this.props.city},  {this.props.country}</p>}
                { this.props.temp && <p>Current Temperature: {this.props.temp}</p>}
                { this.props.temp_max && <p>Max Temp for today: {this.props.temp_max} </p>}
                { this.props.temp_min && <p>Min Temp for today: {this.props.temp_min} </p>}
                { this.props.description && <p>Conditions: {this.props.description}, and {this.props.humidity} degrees of pression</p>}
                { this.props.error && <p>Error: {this.props.error}</p>}
            </div>
        )
    }
}

export default Weather;