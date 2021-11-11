import React from 'react';
import styled from 'styled-components';
import Tag from '../Tag/Tag';

type CardProps = {
  name: string;
  description: string;
  categories?: string[];
};

type SingleStringChildProps = {
  children: string;
};
export default function Card({
  name,
  description,
  categories,
}: CardProps): JSX.Element {
  return (
    <StyledCard>
      <StyledTitle>{name}</StyledTitle>
      <p>{description}</p>
      {categories && categories.map((category) => <Tag>{category}</Tag>)}
    </StyledCard>
  );
}

const StyledTitle = styled.h5<SingleStringChildProps>`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0;
`;

const StyledCard = styled.div<Partial<CardProps>>`
  margin: 20px;
  background: rgb(2, 32, 103);
  background: linear-gradient(
    90deg,
    rgba(2, 32, 103, 0.8589810924369747) 0%,
    rgba(121, 9, 106, 1) 35%,
    rgba(0, 157, 255, 1) 100%
  );
  color: #ffffff;
  padding: 15px;
  width: 240px;
  border-radius: 5px;
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(39, 43, 145, 0.12);
  transition: transform;
`;
