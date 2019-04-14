import React, { Component } from 'react';
import styled from 'styled-components';

const QuestionTitle = styled.div`
  display: flex;
  font-size: 3em;
  font-family: 'Ultra';
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

const QOption = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 5em;
  margin-bottom: 5em;
`;

const FullScreen = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 3000px;
`;

const TwoD = () => (
  <div>
    <QuestionTitle>
      <div>Map of Philisophical Ideas</div>
    </QuestionTitle>
    <img style={{ marginLeft: '10%' }} src={require('./2dMap.jpeg')}/>
  </div>
)

export default TwoD
