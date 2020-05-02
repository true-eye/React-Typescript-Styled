
import React from "react";
import * as Styled from "./Avatar.styled";

type Props = {
    src: string,
    height: string,
}
const Avatar = React.memo((props: Props) => {
    return (
        <div style={{ height: props.height }}>
            <Styled.Avatar src={props.src} style={{ height: props.height, width: props.height }} />
        </div>
    );
});

export default Avatar;