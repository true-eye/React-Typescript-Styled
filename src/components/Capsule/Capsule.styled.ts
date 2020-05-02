import styled from 'styled-components';

export const Capsule = styled.div`
    backgroundColor: transparent;
    border: 1px #292929 solid;
    border-radius: 3px;
    color: ${(props: any) => props.color};
    font-size: 12px;
    font-weight: bold;
    padding: 3px 3px;
    min-width: 3.5em;
    max-width: 3.5em;
    text-align: center;
    margin-left: 5px;

    &:first-child {
        margin-left: 0px;
    }
    // margin-right: 5px;
    // margin-left: auto;
`;
