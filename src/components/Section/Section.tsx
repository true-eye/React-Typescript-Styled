import React from 'react';
import moment from 'moment';
import * as Styled from './Section.styled';
type Props = {
    title: string
    children: JSX.Element,
}

const Section = (props: Props) => {

    return (
        <Styled.Section>
            <Styled.Header>
                {props.title}
            </Styled.Header>
            <Styled.Content>
                {props.children}
            </Styled.Content>
        </Styled.Section>
    );

};

export default Section;