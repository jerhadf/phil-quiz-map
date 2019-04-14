import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

var WebFont = require('webfontloader');
WebFont.load({
  google: {
    families: ['Droid Sans', 'Droid Serif', 'Lora', 'Monoton']
  }
});

const applyFilter = question =>
  question.title.toLowerCase();

const Title = styled.div`
  display: flex;
  font-size: 1.5em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: black;
`;

const QuestionTitle = styled.div`
  display: flex;
  font-size: 3em;
  justify-content: center;
  text-align: center;
  bottom: 0px;
`;

const Frame = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  bottom: 0px;
`;

const FullScreen = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
`;

const QOption = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 5em;
  margin-bottom: 5em;
`;

class Quiz extends Component {
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
        <Title>
          <div style={{ color: this.state.colors[this.state.colorIndex],
            fontFamily: 'Monoton', fontSize: "30px", marginTop: "30px"}}>
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
        <QuestionTitle>
          <div>Question 1</div>
        </QuestionTitle>
        <QOption>
          {this.props.questions[this.state.index].title}
        </QOption>
        <QOption>
          <button onClick={this.IncrementIndex}>Yes</button>
        </QOption>
        <Frame>
          <iframe src="http://localhost:8081/index.html" height="200px" width="40%"></iframe>
        </Frame>
        <FullScreen>
          <a href="http://localhost:8081/index.html">View Full Screen</a>
        </FullScreen>
      </div>
    );
  }
}

// connecting view layer to state layer with react-redux

const mapStateToProps = state => ({
  questions: state.questionsState.questions,
});


export default connect(mapStateToProps)(Quiz);
