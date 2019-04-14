import React, { Component } from 'react'
import styled from 'styled-components';

var WebFont = require('webfontloader');
WebFont.load({
  google: {
    families: ['Alegreya SC', 'Ultra', 'Monoton']
  }
});

const Title = styled.div`
  display: flex;
  font-size: 1.5em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: black;
  z-index: 3;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      colorIndex: 0,
      colors: ['blue','yellow','red','pink','magenta',
    'orange','purple','green','maroon','turquoise','tan',
    'seashell','sandybrown','skyblue','slategrey','rebeccapurple',
    'peru','powderblue','mediumspringgreen'],
      periods: [],
    };
  }
  IncrementIndex = () => {
    if (this.state.index === 3) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: this.state.index + 1 });
    }
    let arr = []
    for (let i = 0; i < this.state.colors.length; i++) {
      arr.push(<span key={i}
        onClick={() =>this.NewTitleColor(i)}
        style={{color:this.state.colors[i]}}>.</span>);
    }
    this.setState({ periods: arr })
  }

  NewTitleColor = (i) => {
    this.setState({ colorIndex: i })
  }

  render() {
    return (
      <div>
        <div style={{ zIndex: -2, display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', position: 'fixed',
        background: this.state.colors[this.state.colorIndex], height: '100%', width: '10%'}}>
        </div>
        <Title>
          <div style={{ color: this.state.colors[this.state.colorIndex],
            fontFamily: 'Alegreya SC', fontSize: "50px", marginTop: "30px"}}
            onClick={this.IncrementIndex}>
            Correlated Philosophical Positions
          </div>
          <div style={{
            flex:1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flexDirection: 'row',
            fontFamily: 'Monoton', fontSize: "30px"}}>
            .{this.state.periods}.
          </div>
        </Title>
      </div>
    );
  }
}

export default Header
