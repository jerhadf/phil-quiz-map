import React from 'react';
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

const Home = () => (
  <div>
    <QuestionTitle>
      <div>Welcome</div>
    </QuestionTitle>
    <QOption>
    </QOption>
    <QOption>
    </QOption>
    <Frame>
      <iframe src="http://3dphilosophymap.surge.sh/" height="200px" width="40%"></iframe>
    </Frame>
    <FullScreen>
      <a href="http://3dphilosophymap.surge.sh/">View Full Screen</a>
    </FullScreen>
  </div>
)


export default Home
