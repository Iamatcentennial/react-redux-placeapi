import React, { Component } from 'react';
import SinglePlace from './SinglePlace';

class Places extends Component {
    constructor(){
        super();
        this.state={
          places:[]
        }
      }
      componentDidMount(){
        fetch('https://api.myjson.com/bins/87ohp')
        .then(res=>res.json())
        .then(data=>this.setState({places:data.places}))
        .catch(err=>console.log(err));
      }
  render() {
    return (
      <div>
        <table className="table table-responsive text-justify">
            <thead>
                <tr>
                    <th scope="col">Buisness Id</th>
                    <th scope="col">Buisness Name</th>
                    <th scope="col">Website</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                {this.state.places.map(place=>{
                    return (<SinglePlace key={place.id} place={place} />)
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
export default Places;