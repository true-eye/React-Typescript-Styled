
import React, { FunctionComponent } from "react";
import * as Styled from "./Capsule.styled";

type Props = {
    status: string
}
const Capsule = React.memo((props: Props) => {
    let status;
    let color;

    switch (props.status) {
        case 'assigned':
            status = 'ASD';
            color = 'rgb(247, 176, 50)';
            break;
        case 'completed':
            status = 'COM';
            color = 'rgb(0, 154, 62)';
            break;
        case 'unassigned':
            status = 'UNA'
            color = 'rgb(94, 93, 93)';
            break;
        default:
            status = props.status;
            color = '#a6a6a3';
    }
    return (
        <Styled.Capsule color={color}>
            {status}
        </Styled.Capsule>
    )
});

export default Capsule;