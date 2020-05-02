import React, { FunctionComponent } from "react";
import moment from 'moment';

import * as Styled from "./ListItem.styled";
import Capsule from '../Capsule/Capsule';
import Avatar from '../Avatar/Avatar';

type Props = {
    id: number
    avatar: string,
    reportedTime: string,
    status: string,
    asset: string,
    isSelected: boolean;
    onSelection: Function;

}
const ListItem = (props: Props) => {

    return (
        <Styled.Tr isSelected={props.isSelected} onClick={() => props.onSelection(props.id)}>
            <Styled.Td style={{ minWidth: '50px'}}>
                <Avatar src={props.avatar} height="30px" />
            </Styled.Td>
            <Styled.Td style={{ minWidth: '100px'}}>
                {moment(props.reportedTime).format('DD/MM/YY hh:mm')}
            </Styled.Td>
            <Styled.Td style={{ color: props.isSelected ? 'white' : 'inherit', fontWeight: props.isSelected ? 'bolder' : 'inherit', width: '100%' }}>
                {props.asset}
            </Styled.Td>
            <Styled.Td style={{ minWidth: '50px' }}>
                <Capsule status={props.status} />
            </Styled.Td>
            {props.isSelected && <Styled.SelectedLeft />}
            {props.isSelected && <Styled.SelectedRight />}
        </Styled.Tr>
    )

};

export default ListItem;
