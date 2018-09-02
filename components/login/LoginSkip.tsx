import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface ILinkProps {
    linkText: string;
}

const SkipContainer = styled.div`
    background-color: white;
    width: 25em;
    margin: 1em auto;
    padding: 2em;
    box-shadow: 0 0.06em 0.5em #888888;
    border-radius: 0.2em;
    text-align: center;
`;

const StyledLink = styled.a`
    color: lightblue;
`;

const LinkWrapper: React.SFC<ILinkProps> = ({
    linkText
}) => {
    return (
        <Link href="/game" passHref>
            <StyledLink>
                {linkText}
            </StyledLink>
        </Link>
    )
}

export const LoginSkip: React.SFC = () => {
    return (
        <SkipContainer>
            <span>
                Or jump into a <LinkWrapper linkText='quick game'/> 
            </span>
        </SkipContainer>
    );
};