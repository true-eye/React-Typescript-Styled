import React, { FunctionComponent } from "react";
import _ from "lodash";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ListItem from "../ListItem/ListItem";
import * as Styled from "./TicketList.styled";

type Props = {
  data: Array<any>;
  onSelection: Function;
};
const TicketList = (props: Props) => {
  const [selectedId, setSelectedId] = React.useState();
  const [keyword, setKeyword] = React.useState();
  // const [customerList, setCustomerList] = React.useState(props.data);

  function onSelection(id: number) {
    setSelectedId(id);
    props.onSelection(id);
  }

  function onSearchChange(event: any) {
    const keyword = event.target.value;
    setKeyword(keyword);
  }

  const filterdData = _(props.data)
    .filter((item: any) => {
      const fullName = `${item.owner.firstName} ${item.owner.lastName}`;
      if (_.trim(keyword).length > 0) {
        return fullName.toLowerCase().indexOf(keyword.toLowerCase()) > -1;

      }
      return true;
    })
    .value();

  return (
    <Styled.Container>
      <Styled.SearchContainer>
        <Styled.InputContainer>
          <FontAwesomeIcon icon={faSearch} />
          <Styled.SearchInput type="search" value={keyword} onChange={onSearchChange}/>
        </Styled.InputContainer>
        <Styled.List>
          <table style={{ borderCollapse: 'collapse', width: '100%', borderSpacing: '0px', position: 'relative' }}>
            <Styled.Thead>
              <tr>
                <Styled.Th> OWNER</Styled.Th>
                <Styled.Th> REPORTED</Styled.Th>
                <Styled.Th> ASSET</Styled.Th>
                <Styled.Th> STATUS</Styled.Th>
              </tr>
            </Styled.Thead>
            <tbody>
              {_.map(filterdData, (item: any) => (
                <ListItem
                  key={item.ticketId}
                  isSelected={selectedId === item.ticketId}
                  id={item.ticketId}
                  avatar={item.owner.avatar}
                  reportedTime={item.reportedTime}
                  asset={item.asset.name}
                  status={item.status}
                  onSelection={onSelection}
                />
              ))}
            </tbody>
          </table>
        </Styled.List>
      </Styled.SearchContainer>
    </Styled.Container>
  );
};

export default TicketList;
