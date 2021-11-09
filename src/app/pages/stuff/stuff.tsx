import React from 'react';
import { useParams } from 'react-router-dom';

export default function Stuff(): JSX.Element {
  const { myStuff } = useParams();
  return <p>Stuff: {myStuff}</p>;
}
