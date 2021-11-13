import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../Tag/Tag';
import styled from 'styled-components';

type CardDetailProps = {
  name: string;
  description: string;
  categories?: string[];
};

export default function CardDetail({
  name,
  description,
  categories,
}: CardDetailProps): JSX.Element {
  return (
    <StyledCard>
      <Link to={'/'}>Back</Link>
      <h2>{name}</h2>
      <p>{description}</p>
      <ul>
        {categories?.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </ul>
    </StyledCard>
  );
}

const StyledCard = styled.div`
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
