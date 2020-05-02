
import React, { FunctionComponent } from "react";
import moment from 'moment';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ListItem from '../ListItem/ListItem';
import * as Styled from "./TicketDetails.styled";
import Avatar from "../Avatar/Avatar";
import Section from "../Section/Section";
import Capsule from '../Capsule/Capsule';

type Props = {
  ticket: any,

}

const TicketDetails = (props: Props) => {

  if (!props.ticket) {
    return (
      <Styled.NoResults>
        <FontAwesomeIcon icon={faTimes} />
        No Tickets Selected
      </Styled.NoResults>
    )
  }
  const { ticket } = props;
  const specialities = _.join(ticket.owner.specialities, ', ');

  function renderOwner() {
    return (
      <Styled.OwnerContainer>
        <Avatar src={ticket.owner.avatar} height="40px" />
        <Styled.OwnerDetails>
          <Styled.NameSpan>{`${ticket.owner.firstName} ${ticket.owner.lastName}`}</Styled.NameSpan>
          <Styled.RoleSpan> {specialities}</Styled.RoleSpan>
        </Styled.OwnerDetails>
      </Styled.OwnerContainer>
    );
  }

  function renderDetails() {
    return (
      <React.Fragment>
        <Styled.Row>
          <Styled.DarkSpan>Reported</Styled.DarkSpan>
          <Styled.LightSpan> {moment(ticket.reportedTime).format('DD/MM/YY hh:mm')}</Styled.LightSpan>
        </Styled.Row>

        <Styled.Row>
          <Styled.DarkSpan>Status</Styled.DarkSpan>
          <div>
            <Capsule status={ticket.status} />
          </div>
        </Styled.Row>

        <Styled.Row>
          <Styled.DarkSpan>Description</Styled.DarkSpan>
          <Styled.LightSpan> {ticket.description}</Styled.LightSpan>
        </Styled.Row>
      </React.Fragment>
    )
  }


  function renderAsset() {
    return (
      <React.Fragment>
        <Styled.Row>
          <Styled.DarkSpan>Name</Styled.DarkSpan>
          <Styled.LightSpan> {ticket.asset.name}</Styled.LightSpan>
        </Styled.Row>

        <Styled.Row>
          <Styled.DarkSpan>GeoCode</Styled.DarkSpan>
          <Styled.LightSpan> {ticket.asset.geoCode}</Styled.LightSpan>
        </Styled.Row>

        <Styled.Row>
          <Styled.DarkSpan>Location</Styled.DarkSpan>
          <Styled.LocationContainer>
            <Capsule status={parseFloat(ticket.asset.kmFrom).toFixed(3)} />
            <Capsule status={parseFloat(ticket.asset.kmTo).toFixed(3)} />
          </Styled.LocationContainer>
        </Styled.Row>
      </React.Fragment>
    )
  }

  return (
    <Styled.Container>
      <Styled.Heading>
        <Styled.TicketNo>
          <Styled.DarkSpan>TICKET NO. </Styled.DarkSpan>
          <Styled.LightSpan>{ticket.number}</Styled.LightSpan>
        </Styled.TicketNo>
        <Styled.LastUpdatedTime>
          <Styled.DarkSpan>LAST UPDATED TIME </Styled.DarkSpan>
          <Styled.LightSpan>{moment(ticket.LastUpdatedTime).format('DD/MM/YY hh:mm')}</Styled.LightSpan>
        </Styled.LastUpdatedTime>

      </Styled.Heading>

      <Section title="Owner">
        {renderOwner()}
      </Section>

      <Section title="Details">
        {renderDetails()}
      </Section>
      <Section title="Asset">
        {renderAsset()}
      </Section>
    </Styled.Container>
  );
};

export default TicketDetails;