import styled from "styled-components";

export const Container = styled.div`
  margin-left: 5px;
  background-color: #323232;
  display: flex;
  flex-direction: column;
  flex: 5;
  border-radius: 2px;
  font-size: 10px;
  padding: 10px;
`;

export const NoResults = styled.div`
  margin-left: 10px;
  border-radius: 2px;
  background-color: #323232;
  display: flex;
  flex: 5;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  flex-direction: column;

  svg {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Details = styled.div``;
export const Asset = styled.div``;

export const TicketNo = styled.div``;
export const LastUpdatedTime = styled.div``;

export const DarkSpan = styled.span`
  color: #636262;
  padding-top:5px;
  padding-bottom: 5px;
`;

export const LightSpan = styled.span`
  padding-top: 5px;
  color: rgb(163, 163, 160);
`;

export const NameSpan = styled.span`
color: rgb(163, 163, 160);
  font-weight: bold;
`;

export const RoleSpan = styled.span`
color: rgb(163, 163, 160);
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  padding-top: 5px;
`

export const OwnerDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const OwnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;


export const Row = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    &:first-child {
      margin-top: 0px;
    }
`;

export const LocationContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
