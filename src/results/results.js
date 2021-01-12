import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component{
  render(){
    console.log('props', this.props.pokemon)
    return(
      <div id="results">
        <h2>Mom's refridgerator</h2>
        <ReactJson src={this.props.pokemon} />
      </div>
    )
  }
}

export default Results;