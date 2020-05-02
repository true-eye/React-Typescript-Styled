import React, { useEffect } from 'react';
import _ from 'lodash';
import TicketList from '../TicketList/TicketList';
import TicketDetails from '../TicketDetails/TicketDetails';
import * as Styled from './Tickets.styled';
import { http } from '../../http';

function Tickets() {
  const [tickets, setTickets] = React.useState([]);
  const [selectedTicketId, setSelectedTicketId] = React.useState();


  useEffect(() => {
    async function fetchData() {
      const response = await http.get('/api/tickets') as any;
      setTickets(response.data);

    }
    fetchData();
  }, []);

  if(tickets.length === 0) {
    return null;
  }

  const selectedTicket = _.find(tickets, (ticket: any) => ticket.ticketId === selectedTicketId);

  return (
    <Styled.TicketsContainer>
      <TicketList data={tickets} onSelection={setSelectedTicketId}/>
      <TicketDetails ticket={selectedTicket} />
    </Styled.TicketsContainer>
  );
}

export default Tickets;
