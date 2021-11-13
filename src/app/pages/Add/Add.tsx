import React from 'react';
import styled from 'styled-components';

export default function Add(): JSX.Element {
  return (
    <StyledForm>
      <StyledLabel>Name:</StyledLabel>
      <StyledInput type="text" />
      <StyledLabel>Description:</StyledLabel>
      <StyledInput type="text" />
      <StyledSubmit type="submit" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  grid-row-gap: 5px;
  margin: 20px;
  background: linear-gradient(
    90deg,
    rgba(2, 32, 103, 0.8589810924369747) 0%,
    rgba(121, 9, 106, 1) 35%,
    rgba(0, 157, 255, 1) 100%
  );
  padding: 15px;
  width: 240px;
  border-radius: 5px;
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(39, 43, 145, 0.12);
`;

const StyledLabel = styled.label`
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-stretch: expanded;
  font-size: 1.1em;
`;

const StyledInput = styled.input`
  height: 2em;
  width: 80%;
  border-radius: 2px;
`;

const StyledSubmit = styled.input`
  background: #ee36d5 35%;
  padding: 5px;
  border-radius: 2px;
  text-transform: uppercase;
  color: white;
  margin: 2px;
  width: 40%;
`;
