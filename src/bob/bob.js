import React from 'react';
import './bob.scss';

class Bob extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.askMomForMoney();
  }

  getPokemon = async (e) => {
    e.preventDefault();
    const poke = await fetch(this.props.url, {
      method:'GET', mode: 'cors'
    }).then(response=>{
      // if we didn't get a 200 error, just return nothing
      // the consumer will need to handle this case
      if(response.status!==200) return
      // otherwise, we can json parse the body:
      return response.json();
    });

    // send the json results back to mom
    this.props.giveMomPoke(poke.results);
  }

  render(){
    // console.log('bob', this.state, this.props)
    return(
      <div id="bob">
        <h1>Hi! My name is: {this.props.name} and I have this much money: <span data-testid="bobs-money">{this.props.money}</span>, but I can ask mom for more!</h1>

        <form onSubmit={this.handleSubmit}>
          <button data-testid="ask-for-money">Ask for money</button>
        </form>

        <form onSubmit={this.getPokemon}>
          <button>Go Pokemon Hunting</button>
        </form>
      </div>
    )
  }
}

export default Bob;