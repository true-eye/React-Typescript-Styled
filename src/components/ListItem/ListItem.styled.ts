import styled from "styled-components";

export const Tr: any = styled.tr`
  background: none;
  border: none;
  color: #a6a6a3;
  font-size: 12px;
  background-color: ${(props: any) =>
    props.isSelected ? "#414141" : "transparent"};
  margin: 0;
  // border-left: 4px ${(props: any) => props.isSelected ? "#6c39da" : "transparent"}
  //   solid;
  height: 41px;
  border-top: 1px solid #222;
`;

export const SelectedLeft: any = styled.div`
  position: absolute;
  width: 13px;
  height: 40px;
  left: -17px;
  background-color: #414141;
  border-left: 4px #6c39da solid;
`

export const SelectedRight: any = styled.div`
  position: absolute;
  width: 18px;
  height: 40px;
  right: -17px;
  background-color: #414141;
`

export const Td: any = styled.td`
    padding: 0px;
`;


