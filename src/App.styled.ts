import styled from  'styled-components';

export const H1 = styled.h1`
  border: none;
  border-bottom: 3px #6c39da solid;
  font-size: 20px;
  padding: 10px;
  flex: 1;
  margin: 0;
`;

export const AppContainer = styled.div`
  background-color: #252524;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: #a6a6a3;
  flex: 1;
  max-height: 100vh;
`;


export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0px;
  background-color: #252524;
`;
