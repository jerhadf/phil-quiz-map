import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const applyFilter = question =>
  question.title.toLowerCase();

const Title = styled.div`
  display: flexbox;
  font-size: 1.5em;
  justify-content: center;
  text-align: center;
  color: blue;
  background: black;
  margin-bottom: 5em;
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  IncrementIndex = () => {
    if (this.state.index === 3) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  }
  render() {
    return (
      <div>
        <Title>
          <div style={{ fontSize: "30px", marginTop: "30px", marginBottom: "30px"}}>
            Correlated Philosophical Positions
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


export default connect(mapStateToProps)(App);
