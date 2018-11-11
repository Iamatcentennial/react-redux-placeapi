import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PlaceDetails extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.place.id}</td>
        <td>
          <Link to={{
            pathname:"/placeDetails",
            placeData:{place:this.props.place}
          }}>
          {this.props.place.name}
          </Link>
        </td>
        <td>{this.props.place.website_url}</td>
        <td>{this.props.place.address}</td>  
      </tr>
    )
  }
}
