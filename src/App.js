import React, { Component } from "react";
import Nav from "./components/Nav";
import Title from "./components/Title";
import characters from "./Character.json";
import Character from "./components/Character";
import Wrapper from "./components/Wrapper";

import "./App.css";

class App extends Component {
  // 
  state = {
    characters: characters,
    clicked: [],
    score: 0,
    hiScore: 0,
    message: "Click an image to begin!"
  };

  handleShuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handleClick = (id) => {
    // alert(id);
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState(
        {
          characters: characters,
          clicked: this.state.clicked.concat(id),
          score: this.state.score + 1,
          hiScore: (this.state.hiScore > this.state.score) ? this.state.hiScore : this.state.hiScore + 1,
          message: "Correct!"
        }
      );
    } else {
      this.setState(
        {
          characters: characters,
          clicked: [],
          score: 0,
          topScore: (this.state.score > this.state.hiScore) ? this.state.score : this.state.hiScore,
          message: "Wrong!"
        }
      );
    }
    this.handleShuffleArray(characters);
  }

  // 
  render() {
    return (
      <Wrapper>
        <Nav
          brand="Clicky Game"
          message={this.state.message}
          score={this.state.score}
          hiScore={this.state.hiScore}
        />
        <Title subtitle="Click on an image to earn points, but don't click on any more than once!">Clicky Game</Title>
        {this.state.characters.map(characters => (
          <Character
            handleClick={this.handleClick}
            id={characters.id}
            key={characters.id}
            message={this.state.message}
            image={characters.image}
            score={this.state.score}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;