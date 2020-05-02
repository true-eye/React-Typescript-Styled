import styled from "styled-components";

export const Row = styled.div`
  display: flex;
`

export const Col = styled.div`
  display: flex;
  font-size: 10px;
`

export const SearchInput = styled.input`
  background-color: #252524;
  border: 1px #353535 solid;
  color: #848481;
  font-size: 13px;
  line-height: 13px;
  padding: 5px;
  flex: 1;
  display: flex;
  padding-left: 22px;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Thead = styled.thead`
  font-size: 10px;

  tr {
    height: 40px;
  }
`;

export const Th = styled.th`
  font-size: 10px;
  text-align: left;
  font-weight: lighter;
`;
export const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  background-color: #252524;
`;

export const List = styled.div`
  background-color: #323232;
  padding-top: 10px;
  margin-top: 10px;
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  overflow-y: auto;

  padding-top: 0px;
  padding-left: 17px;
  padding-right: 17px;
`;

export const SearchContainer  = styled.div`
    display: flex;
    flex-direction: column;  
    flex: 1;
    align-items: stretch;
    justify-content: stretch;  
    overflow: hidden;
`;

export const InputContainer = styled.div`
    display: flex;
    position: relative;

    svg {
      position: absolute;
      font-size: 12px;
      top: 50%;
      transform: translateY(-50%);
      left: 8px;
    }
`;