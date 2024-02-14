import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      
      personne: {
        fullName: "Pro",
        bio: "Gandal-Easy builder",
        imgSrc: "https://c.files.bbci.co.uk/17A2C/production/_105621869_sonkoafpgetty.jpg",
        profession: "Développeur",
      },
      show: false,
      temps: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        temps: prevState.temps + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  basculer = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.personne;
    const { show, temps } = this.state;

    return (
      <div>
        <button onClick={this.basculer}> Basculer </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>{profession}</p>
          </div>
        )}
        <p>Temps : {temps} s</p>
      </div>
    );
  }
}

export default App;



