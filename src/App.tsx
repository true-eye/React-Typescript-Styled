import React from 'react';
import Tickets from './components/Tickets/Tickets';
import * as Styled from './App.styled';

function App() {
  return (
    <Styled.AppContainer>
      <Styled.Header className="App-header">
        <Styled.H1>Tickets</Styled.H1>
      </Styled.Header>
      <Tickets />
    </Styled.AppContainer>
  );
}

export default App;
